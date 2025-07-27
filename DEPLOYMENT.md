# CS Construction Website - Docker Deployment

This repository contains the CS Construction Company website built with React, TypeScript, Vite, and Tailwind CSS, configured for Docker deployment on port 5024.

## 🚀 Quick Start

### Prerequisites
- Docker (v20.10 or higher)
- Docker Compose (v2.0 or higher)

### One-Command Deployment
```bash
./deploy.sh
```

This script will:
1. Build the Docker image
2. Start the container
3. Make the website available at http://localhost:5024

### Manual Deployment

#### 1. Build and Run with Docker Compose
```bash
# Build and start the container
docker-compose up -d --build

# View logs
docker-compose logs -f

# Stop the container
docker-compose down
```

#### 2. Build and Run with Docker Only
```bash
# Build the image
docker build -t cs-construction-web .

# Run the container
docker run -d --name cs-construction-website -p 5024:5024 cs-construction-web

# Stop and remove the container
docker stop cs-construction-website
docker rm cs-construction-website
```

## 📁 Project Structure

```
├── Dockerfile              # Multi-stage Docker build configuration
├── docker-compose.yml      # Docker Compose configuration
├── .dockerignore           # Files to ignore during Docker build
├── deploy.sh               # Automated deployment script
├── src/                    # React source code
├── public/                 # Static assets
└── dist/                   # Built application (generated)
```

## 🏗️ Docker Configuration

### Dockerfile Features
- **Multi-stage build**: Separate build and runtime stages for optimized image size
- **Bun package manager**: Fast package installation and build process
- **Nginx server**: Lightweight, high-performance web server
- **Security headers**: XSS protection, content type nosniff, frame options
- **Gzip compression**: Reduced bandwidth usage
- **Static asset caching**: 1-year cache for optimal performance
- **SPA routing support**: Proper handling of client-side routing

### Docker Compose Features
- **Port mapping**: Maps container port 5024 to host port 5024
- **Restart policy**: Automatically restarts on failure
- **Custom network**: Isolated network for the application
- **Environment variables**: Production-ready configuration
- **Traefik labels**: Ready for reverse proxy setup

## 🌐 Accessing the Website

Once deployed, the website will be available at:
- **Local**: http://localhost:5024
- **Network**: http://YOUR_SERVER_IP:5024

## 🛠️ Development

### Local Development (without Docker)
```bash
# Install dependencies
bun install

# Start development server
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview
```

### Environment Variables
The application supports the following environment variables:
- `NODE_ENV`: Set to 'production' for production builds
- `VITE_*`: Any Vite-specific environment variables

## 📊 Monitoring

### View Logs
```bash
# View all logs
docker-compose logs

# Follow logs in real-time
docker-compose logs -f

# View logs for specific service
docker-compose logs cs-construction-web
```

### Container Status
```bash
# Check running containers
docker-compose ps

# Check container resource usage
docker stats cs-construction-website
```

## 🔧 Troubleshooting

### Common Issues

1. **Port 5024 already in use**
   ```bash
   # Check what's using the port
   sudo lsof -i :5024
   
   # Kill the process or change the port in docker-compose.yml
   ```

2. **Build fails**
   ```bash
   # Clean build (removes cache)
   docker-compose build --no-cache
   
   # Check available disk space
   df -h
   ```

3. **Container won't start**
   ```bash
   # Check container logs
   docker-compose logs cs-construction-web
   
   # Inspect container
   docker inspect cs-construction-website
   ```

### Performance Optimization

1. **Enable Docker BuildKit** (faster builds):
   ```bash
   export DOCKER_BUILDKIT=1
   ```

2. **Use Docker layer caching**:
   ```bash
   docker-compose build --build-arg BUILDKIT_INLINE_CACHE=1
   ```

## 🚀 Production Deployment

For production deployment:

1. **Use a reverse proxy** (nginx, Traefik, or Cloudflare)
2. **Enable HTTPS** with SSL certificates
3. **Set up monitoring** (Prometheus, Grafana)
4. **Configure logging** (ELK stack or similar)
5. **Set up backups** for any persistent data

### Example nginx reverse proxy configuration:
```nginx
server {
    listen 80;
    server_name yourdomain.com;
    
    location / {
        proxy_pass http://localhost:5024;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

## 📝 License

This project is proprietary to CS Construction Company Pvt. Ltd.

## 🤝 Support

For technical support or questions about deployment, contact the development team.
