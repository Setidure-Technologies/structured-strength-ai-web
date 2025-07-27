import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, MapPin, Calendar } from "lucide-react";
import bridgeImage from "@/assets/bridge-project.jpg";
import roadImage from "@/assets/road-project.jpg";
import tunnelImage from "@/assets/tunnel-project.jpg";

const ProjectShowcase = () => {
  const projects = [
    {
      title: "Mumbai-Pune Expressway Bridge",
      location: "Maharashtra, India",
      year: "2023",
      category: "Bridge Engineering",
      image: bridgeImage,
      description: "A 2.3km cable-stayed bridge featuring innovative design and advanced construction techniques."
    },
    {
      title: "NH-44 Highway Expansion",
      location: "Delhi-Agra Corridor", 
      year: "2023",
      category: "Highway Construction",
      image: roadImage,
      description: "8-lane highway expansion project improving connectivity between major cities."
    },
    {
      title: "Metro Underground Tunnel",
      location: "Bangalore, Karnataka",
      year: "2022", 
      category: "Tunnel Construction",
      image: tunnelImage,
      description: "5.2km underground metro tunnel with advanced safety and ventilation systems."
    }
  ];

  return (
    <section className="section-padding bg-concrete/10">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-navy mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing our commitment to excellence through landmark infrastructure 
            projects that shape India's future.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-xl smooth-transition border-concrete/20">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-105 smooth-transition"
                />
                <div className="absolute inset-0 bg-navy/40 group-hover:bg-navy/20 smooth-transition"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-orange text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-montserrat font-semibold text-xl text-navy mb-3">
                  {project.title}
                </h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{project.location}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">Completed {project.year}</span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <Button variant="outline" className="w-full group-hover:border-orange group-hover:text-orange">
                  View Project Details
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="construction" size="lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;