import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { MapPin, Calendar, IndianRupee, Building2, Mountain, Road, Shield, Filter } from "lucide-react";
import bridgeImage from "@/assets/bridge-project.jpg";
import roadImage from "@/assets/road-project.jpg";
import tunnelImage from "@/assets/tunnel-project.jpg";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      name: "Sungal Tunnel",
      location: "Jammu & Kashmir",
      client: "BRO (Border Roads Organisation)",
      value: "₹508.45 Cr",
      type: "tunnel",
      status: "completed",
      description: "Design and construction of 2.79 km highway tunnel on Akhnoor–Poonch road",
      image: tunnelImage,
      details: {
        length: "2.79 km",
        duration: "2018-2021",
        challenges: "Harsh terrain conditions, extreme weather"
      }
    },
    {
      id: 2,
      name: "Naushera Tunnel & Highway",
      location: "Jammu & Kashmir", 
      client: "BRO (Border Roads Organisation)",
      value: "₹474.09 Cr",
      type: "tunnel",
      status: "completed",
      description: "EPC of Naushera tunnel (700m) and road works on NH-144A",
      image: tunnelImage,
      details: {
        length: "700m + Road Works",
        duration: "2017-2020",
        challenges: "Border area construction, security protocols"
      }
    },
    {
      id: 3,
      name: "Sivok–Rangpo Railway Tunnels",
      location: "West Bengal/Sikkim",
      client: "IRCON International",
      value: "₹513.39 Cr",
      type: "tunnel",
      status: "completed",
      description: "Construction of two large railway tunnels (T-12 & T-13) totaling ~5 km",
      image: tunnelImage,
      details: {
        length: "~5 km (2 tunnels)",
        duration: "2019-2022",
        challenges: "Complex geology, rail infrastructure requirements"
      }
    },
    {
      id: 4,
      name: "6-Lane Greenfield Highway Bihar",
      location: "Bihar",
      client: "NHAI",
      value: "₹416.37 Cr",
      type: "highway",
      status: "ongoing",
      description: "Construction of 12.6 km stretch of NH-119D (Ramnagar to Kacchi Dargah)",
      image: roadImage,
      details: {
        length: "12.6 km",
        duration: "2022-2025",
        challenges: "Greenfield alignment, multiple structures"
      }
    },
    {
      id: 5,
      name: "Akhnoor–Poonch Road Upgradation",
      location: "J&K (Rajouri)",
      client: "BRO",
      value: "₹281.71 Cr",
      type: "highway",
      status: "ongoing",
      description: "Widening and strengthening of ~37 km mountain road (NH-144A)",
      image: roadImage,
      details: {
        length: "37 km",
        duration: "2023-2026",
        challenges: "Mountain terrain, strategic location"
      }
    },
    {
      id: 6,
      name: "Underground Defense Facilities",
      location: "Various (Pan-India)",
      client: "MoD (via L&T)",
      value: "₹476.00 Cr",
      type: "defense",
      status: "completed",
      description: "Strategic underground RCC structures for Defence Research & Development Org.",
      image: bridgeImage,
      details: {
        scope: "Multiple Locations",
        duration: "2020-2023",
        challenges: "Security protocols, specialized requirements"
      }
    },
    {
      id: 7,
      name: "DRDO Technical Facility (Tunnel)",
      location: "Madhya Pradesh",
      client: "DRDO, MoD",
      value: "₹374.89 Cr",
      type: "defense",
      status: "ongoing",
      description: "Development of underground technical facilities including tunnel works",
      image: tunnelImage,
      details: {
        scope: "Underground Technical Facilities",
        duration: "2023-2026",
        challenges: "Complex tunneling, defense specifications"
      }
    },
    {
      id: 8,
      name: "Strategic Infrastructure Assam",
      location: "Assam",
      client: "DRDO, MoD",
      value: "₹337.13 Cr",
      type: "defense",
      status: "ongoing",
      description: "Specialized civil works at strategic location including allied services",
      image: bridgeImage,
      details: {
        scope: "Strategic Civil Works",
        duration: "2024-2027",
        challenges: "Remote location, specialized requirements"
      }
    },
    {
      id: 9,
      name: "Technical Directorate Building",
      location: "Delhi NCR",
      client: "DRDO, MoD",
      value: "₹213.00 Cr",
      type: "building",
      status: "ongoing",
      description: "Construction of high-security Technical Directorate Building",
      image: bridgeImage,
      details: {
        scope: "Specialized Office Building",
        duration: "2023-2025",
        challenges: "High-security requirements, NCR location"
      }
    }
  ];

  const filters = [
    { key: "all", label: "All Projects", icon: Building2 },
    { key: "tunnel", label: "Tunnels", icon: Mountain },
    { key: "highway", label: "Highways", icon: Road },
    { key: "defense", label: "Defense", icon: Shield },
    { key: "building", label: "Buildings", icon: Building2 }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.type === activeFilter);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-navy to-navy/90 text-white">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">Our Projects</h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Showcasing our expertise across tunneling, highways, defense infrastructure, and strategic construction projects throughout India.
            </p>
          </div>
        </div>
      </section>

      {/* Project Stats */}
      <section className="section-padding bg-concrete/30">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-orange mb-2">50+</div>
                <div className="text-navy font-medium">Projects Completed</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-orange mb-2">₹2000+</div>
                <div className="text-navy font-medium">Cr Order Book</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-orange mb-2">15+</div>
                <div className="text-navy font-medium">States Covered</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-orange mb-2">25+</div>
                <div className="text-navy font-medium">Km Tunnels Built</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Project Filters */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-montserrat font-bold text-navy mb-4">Featured Projects Portfolio</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Explore our diverse range of infrastructure projects across different categories
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              {filters.map((filter) => (
                <Button
                  key={filter.key}
                  variant={activeFilter === filter.key ? "default" : "outline"}
                  onClick={() => setActiveFilter(filter.key)}
                  className="flex items-center gap-2"
                >
                  <filter.icon className="w-4 h-4" />
                  {filter.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-xl smooth-transition">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-full object-cover hover:scale-105 smooth-transition"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <Badge variant={project.status === 'completed' ? 'default' : 'secondary'}>
                      {project.status === 'completed' ? 'Completed' : 'Ongoing'}
                    </Badge>
                    <Badge variant="outline" className="capitalize">
                      {project.type}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-montserrat font-bold text-navy mb-3">{project.name}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2 text-orange" />
                      {project.location}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Building2 className="w-4 h-4 mr-2 text-orange" />
                      {project.client}
                    </div>
                    <div className="flex items-center text-sm font-semibold text-navy">
                      <IndianRupee className="w-4 h-4 mr-2 text-orange" />
                      {project.value}
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="text-sm text-muted-foreground space-y-1">
                      {project.details.length && (
                        <div><strong>Length:</strong> {project.details.length}</div>
                      )}
                      {project.details.scope && (
                        <div><strong>Scope:</strong> {project.details.scope}</div>
                      )}
                      <div><strong>Duration:</strong> {project.details.duration}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-navy text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-montserrat font-bold mb-4">Ready to Start Your Next Project?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let our experienced team help you deliver your infrastructure project on time and within budget
          </p>
          <Button size="lg" variant="secondary" className="bg-orange hover:bg-orange/90 text-white">
            Request Project Consultation
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;