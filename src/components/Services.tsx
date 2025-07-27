import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Navigation, Layers, Drill, Shield, Building, Wrench } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Navigation,
      title: "Highway Construction",
      description: "Advanced road construction with modern techniques and sustainable materials for long-lasting infrastructure.",
      image: "bg-gradient-to-br from-orange/20 to-orange/5"
    },
    {
      icon: Layers,
      title: "Bridge Engineering", 
      description: "Innovative bridge designs combining structural integrity with aesthetic appeal for critical transportation links.",
      image: "bg-gradient-to-br from-navy/20 to-navy/5"
    },
    {
      icon: Drill,
      title: "Tunnel Projects",
      description: "Underground infrastructure development including metro tunnels and strategic passage systems.",
      image: "bg-gradient-to-br from-concrete/40 to-concrete/10"
    },
    {
      icon: Shield,
      title: "Defense Infrastructure",
      description: "Specialized construction for defense installations with highest security and quality standards.",
      image: "bg-gradient-to-br from-orange/20 to-orange/5"
    },
    {
      icon: Building,
      title: "Commercial Construction",
      description: "Large-scale commercial and industrial building projects with focus on efficiency and sustainability.",
      image: "bg-gradient-to-br from-navy/20 to-navy/5"
    },
    {
      icon: Wrench,
      title: "Maintenance & Repair",
      description: "Comprehensive maintenance services ensuring longevity and optimal performance of infrastructure.",
      image: "bg-gradient-to-br from-concrete/40 to-concrete/10"
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-navy mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive construction solutions spanning infrastructure development, 
            strategic projects, and specialized engineering services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg smooth-transition border-concrete/20">
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 rounded-xl ${service.image} flex items-center justify-center mb-4 group-hover:scale-110 smooth-transition`}>
                  <service.icon className="w-8 h-8 text-navy" />
                </div>
                <CardTitle className="font-montserrat text-xl text-navy">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Button variant="outline" className="group-hover:border-orange group-hover:text-orange">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="construction" size="lg">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;