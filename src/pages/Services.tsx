import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mountain, Road, Building2, Shield, Zap, Wrench, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Mountain,
      title: "Tunnels & Underground Construction",
      description: "Specializing in design and construction of road tunnels, rail tunnels, and underground caverns using advanced techniques like drill & blast and NATM.",
      features: [
        "Highway and railway tunnels",
        "Underground storage facilities",
        "Advanced drill jumbos and shotcrete robots",
        "NATM and drill & blast techniques",
        "Challenging hill and border-road tunnels"
      ],
      example: "Sungal Tunnel, J&K (2.79 km, ₹508.5 Cr)",
      className: "bg-gradient-to-br from-blue-50 to-blue-100"
    },
    {
      icon: Road,
      title: "Roads & Highways",
      description: "EPC contractor for highway development including greenfield and brownfield projects, road widening, and bridge construction.",
      features: [
        "Greenfield and brownfield highway projects",
        "Road widening and strengthening",
        "Bridge construction and structures",
        "Earthworks and pavement",
        "State and national highway upgrades"
      ],
      example: "6-Lane Greenfield Highway, Bihar (12.6 km, ₹416.4 Cr)",
      className: "bg-gradient-to-br from-green-50 to-green-100"
    },
    {
      icon: Building2,
      title: "Civil & Structural Projects",
      description: "Execution of large-scale residential and institutional complexes, multistorey office buildings, and specialized facilities.",
      features: [
        "Multistorey office buildings",
        "Residential and institutional complexes",
        "Underground structures",
        "Aircraft shelters and hangars",
        "Industrial facilities"
      ],
      example: "Integrated Tech. Development Building, Delhi (DRDO) - ₹213 Cr",
      className: "bg-gradient-to-br from-purple-50 to-purple-100"
    },
    {
      icon: Shield,
      title: "Defense & Strategic Projects",
      description: "Niche expertise in constructing critical structures for Ministry of Defence including fortified installations and EMP resistant shelters.",
      features: [
        "Underground defense bunkers",
        "Fortified military installations",
        "EMP resistant shelters",
        "Strategic storage facilities",
        "Security clearance compliant"
      ],
      example: "Underground Defense Facilities (MoD via L&T) - ₹476 Cr",
      className: "bg-gradient-to-br from-red-50 to-red-100"
    },
    {
      icon: Zap,
      title: "MEP Services",
      description: "Turnkey mechanical-electrical-plumbing works integrated into projects, enabling end-to-end infrastructure solutions.",
      features: [
        "HVAC systems installation",
        "Electrical substations",
        "Fire-fighting systems",
        "Optical fiber cabling",
        "Lifts and crane installations"
      ],
      example: "Complete MEP solutions across all project types",
      className: "bg-gradient-to-br from-yellow-50 to-yellow-100"
    },
    {
      icon: Wrench,
      title: "Design & Engineering",
      description: "In-house design capabilities and engineering coordination for comprehensive project delivery from concept to completion.",
      features: [
        "Civil and structural design",
        "Project engineering coordination",
        "Technical specifications",
        "Quality assurance and control",
        "Site supervision and management"
      ],
      example: "End-to-end engineering solutions for complex projects",
      className: "bg-gradient-to-br from-orange-50 to-orange-100"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-navy to-navy/90 text-white">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">Our Services & Expertise</h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Comprehensive EPC solutions spanning tunneling, highways, defense infrastructure, and specialized construction projects across India.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-montserrat font-bold text-navy mb-4">Engineering Excellence Across Sectors</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From challenging Himalayan tunnels to strategic defense installations, we deliver comprehensive infrastructure solutions with unmatched expertise
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className={`p-8 hover:shadow-xl smooth-transition ${service.className}`}>
                <CardContent className="p-0">
                  <div className="flex items-start mb-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-white rounded-xl flex items-center justify-center mr-6 shadow-md">
                      <service.icon className="w-8 h-8 text-orange" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-montserrat font-bold text-navy mb-3">{service.title}</h3>
                      <p className="text-navy/80 leading-relaxed mb-4">{service.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-navy mb-2">Key Capabilities:</h4>
                      <ul className="grid grid-cols-1 gap-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center text-sm text-navy/70">
                            <ArrowRight className="w-4 h-4 text-orange mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-white/80 p-4 rounded-lg">
                      <h4 className="font-semibold text-navy mb-1">Featured Project:</h4>
                      <p className="text-sm text-navy/70">{service.example}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Highlight */}
      <section className="section-padding bg-concrete/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-montserrat font-bold text-navy mb-6">Why Choose CSCCPL</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-montserrat font-bold text-navy mb-2">End-to-End Solutions</h3>
                <p className="text-muted-foreground">Complete EPC capabilities from design to commissioning</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-montserrat font-bold text-navy mb-2">Strategic Expertise</h3>
                <p className="text-muted-foreground">Specialized in defense and critical infrastructure projects</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <Tunnel className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-montserrat font-bold text-navy mb-2">Advanced Technology</h3>
                <p className="text-muted-foreground">Modern equipment and proven construction techniques</p>
              </div>
            </div>
            
            <div className="mt-12">
              <Button size="lg" className="bg-orange hover:bg-orange/90 text-white">
                Request Project Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;