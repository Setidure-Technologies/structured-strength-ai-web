import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Shield, Road, Users, Award, Star } from "lucide-react";

const Clients = () => {
  const clientCategories = [
    {
      category: "Government & Defense",
      icon: Shield,
      clients: [
        {
          name: "Border Roads Organisation (BRO)",
          description: "Strategic border infrastructure and connectivity projects",
          projects: "Multiple tunnel and highway projects in J&K",
          relationship: "Long-term strategic partner"
        },
        {
          name: "Defence Research & Development Organisation (DRDO)",
          description: "Critical defense R&D infrastructure and facilities",
          projects: "Underground facilities, technical buildings across India",
          relationship: "Trusted security-cleared contractor"
        },
        {
          name: "Ministry of Defence (MoD)",
          description: "Strategic defense installations and infrastructure",
          projects: "Fortified installations, underground bunkers",
          relationship: "Registered defense contractor"
        },
        {
          name: "Military Engineer Services (MES)",
          description: "Military infrastructure and facility construction",
          projects: "Residential colonies, office buildings",
          relationship: "Approved vendor"
        }
      ],
      color: "from-red-50 to-red-100"
    },
    {
      category: "Infrastructure Development",
      icon: Road,
      clients: [
        {
          name: "National Highways Authority of India (NHAI)",
          description: "National highway development and modernization",
          projects: "6-lane greenfield highway projects",
          relationship: "EPC contractor"
        },
        {
          name: "IRCON International",
          description: "Railway infrastructure and connectivity",
          projects: "Sivok-Rangpo railway tunnels for Sikkim connectivity",
          relationship: "Major rail infrastructure partner"
        },
        {
          name: "NTPC Limited",
          description: "Power sector infrastructure development",
          projects: "Eco-park development, facility construction",
          relationship: "Infrastructure services provider"
        },
        {
          name: "State PWDs",
          description: "State-level infrastructure development",
          projects: "Highway upgrades, road improvements",
          relationship: "Regional development partner"
        }
      ],
      color: "from-blue-50 to-blue-100"
    },
    {
      category: "Private Sector",
      icon: Building2,
      clients: [
        {
          name: "Larsen & Toubro (L&T)",
          description: "Major EPC and infrastructure conglomerate",
          projects: "Subcontract partner for defense projects",
          relationship: "Strategic subcontracting partner"
        },
        {
          name: "Private Developers",
          description: "Real estate and commercial development",
          projects: "Residential complexes, office buildings",
          relationship: "Construction services provider"
        }
      ],
      color: "from-green-50 to-green-100"
    }
  ];

  const testimonials = [
    {
      client: "Border Roads Organisation",
      project: "Sungal Tunnel Project",
      feedback: "CSCCPL demonstrated exceptional capability in executing the challenging 2.79 km tunnel project under extreme conditions. Their commitment to quality and timely delivery was commendable.",
      rating: 5
    },
    {
      client: "IRCON International",
      project: "Sivok-Rangpo Railway Tunnels",
      feedback: "The company's expertise in railway tunnel construction and their ability to handle complex geological conditions made them an ideal partner for this critical connectivity project.",
      rating: 5
    },
    {
      client: "DRDO",
      project: "Technical Facilities",
      feedback: "CSCCPL's understanding of defense requirements and their ability to maintain security protocols while delivering quality infrastructure is highly appreciated.",
      rating: 5
    }
  ];

  const clientStats = [
    { icon: Users, number: "50+", label: "Government Clients", description: "Central and state government agencies" },
    { icon: Building2, number: "15+", label: "Private Clients", description: "Corporate and private developers" },
    { icon: Award, number: "95%+", label: "Client Retention", description: "Long-term partnerships and repeat projects" },
    { icon: Star, number: "100%", label: "Project Success", description: "On-time delivery track record" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-navy to-navy/90 text-white">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">Our Valued Clients</h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Building lasting partnerships with government agencies, defense organizations, and private sector leaders across India's infrastructure landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Client Stats */}
      <section className="section-padding bg-concrete/30">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-6">
            {clientStats.map((stat, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="p-0">
                  <stat.icon className="w-12 h-12 text-orange mx-auto mb-4" />
                  <div className="text-3xl font-bold text-navy mb-2">{stat.number}</div>
                  <div className="font-medium text-navy mb-2">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Categories */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-montserrat font-bold text-navy mb-4">Client Portfolio</h2>
            <p className="text-xl text-muted-foreground">
              Trusted by leading organizations across government, defense, and private sectors
            </p>
          </div>

          <div className="space-y-12">
            {clientCategories.map((category, index) => (
              <div key={index}>
                <div className="flex items-center mb-8">
                  <category.icon className="w-8 h-8 text-orange mr-3" />
                  <h3 className="text-2xl font-montserrat font-bold text-navy">{category.category}</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {category.clients.map((client, clientIndex) => (
                    <Card key={clientIndex} className={`p-6 bg-gradient-to-br ${category.color} hover:shadow-lg smooth-transition`}>
                      <CardContent className="p-0">
                        <div className="flex items-start justify-between mb-4">
                          <h4 className="text-xl font-montserrat font-bold text-navy">{client.name}</h4>
                          <Badge variant="outline">{client.relationship}</Badge>
                        </div>
                        <p className="text-navy/80 mb-3">{client.description}</p>
                        <div className="space-y-2 text-sm">
                          <div>
                            <strong className="text-navy">Key Projects:</strong>
                            <span className="text-navy/70"> {client.projects}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-concrete/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-montserrat font-bold text-navy mb-4">Client Testimonials</h2>
            <p className="text-xl text-muted-foreground">
              What our clients say about our work and partnership
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-orange fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground italic mb-4 leading-relaxed">
                    "{testimonial.feedback}"
                  </blockquote>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-navy">{testimonial.client}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.project}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Approach */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-montserrat font-bold text-navy mb-6">Our Partnership Approach</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <Shield className="w-12 h-12 text-orange mx-auto mb-4" />
                <h3 className="text-xl font-montserrat font-bold text-navy mb-3">Trust & Reliability</h3>
                <p className="text-muted-foreground">Building long-term relationships through consistent delivery and transparent communication</p>
              </div>
              <div>
                <Award className="w-12 h-12 text-orange mx-auto mb-4" />
                <h3 className="text-xl font-montserrat font-bold text-navy mb-3">Quality Excellence</h3>
                <p className="text-muted-foreground">Exceeding client expectations with ISO-certified processes and rigorous quality control</p>
              </div>
              <div>
                <Users className="w-12 h-12 text-orange mx-auto mb-4" />
                <h3 className="text-xl font-montserrat font-bold text-navy mb-3">Collaborative Solutions</h3>
                <p className="text-muted-foreground">Working closely with clients to understand requirements and deliver tailored solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Clients;