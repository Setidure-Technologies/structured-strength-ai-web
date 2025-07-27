#!/bin/bash

# CS Construction Website Deployment Script
# This script builds and deploys the website using Docker

set -e

echo "🚀 Starting CS Construction Website deployment..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    print_error "Docker is not installed. Please install Docker first."
    exit 1
fi

# Check if Docker Compose is installed
if ! command -v docker-compose &> /dev/null && ! docker compose version &> /dev/null; then
    print_error "Docker Compose is not installed. Please install Docker Compose first."
    exit 1
fi

# Use docker compose if docker-compose is not available
DOCKER_COMPOSE="docker-compose"
if ! command -v docker-compose &> /dev/null; then
    DOCKER_COMPOSE="docker compose"
fi

# Stop and remove existing containers
print_status "Stopping existing containers..."
$DOCKER_COMPOSE down --remove-orphans 2>/dev/null || true

# Build the Docker image
print_status "Building Docker image..."
$DOCKER_COMPOSE build --no-cache

# Start the containers
print_status "Starting containers..."
$DOCKER_COMPOSE up -d

# Wait for the service to be ready
print_status "Waiting for service to be ready..."
sleep 10

# Check if the container is running
if $DOCKER_COMPOSE ps | grep -q "cs-construction-website.*Up"; then
    print_status "✅ Deployment successful!"
    print_status "🌐 Website is now available at: http://localhost:5024"
    print_status "📊 To view logs: $DOCKER_COMPOSE logs -f"
    print_status "🛑 To stop: $DOCKER_COMPOSE down"
else
    print_error "❌ Deployment failed!"
    print_error "Check logs with: $DOCKER_COMPOSE logs"
    exit 1
fi

# Show container status
print_status "Container status:"
$DOCKER_COMPOSE ps

echo -e "\n${GREEN}🎉 CS Construction Website deployed successfully!${NC}"
echo -e "${YELLOW}📝 Access your website at: http://localhost:5024${NC}"
