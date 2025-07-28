import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Building2 } from "lucide-react";

const Leadership = () => {
  const leaders = [
    {
      name: "Mr. Rohit Kumar Bhuchar",
      position: "Chairman",
      experience: "25+ Years",
      description: "Leading the strategic vision and growth of CSCCPL with extensive experience in infrastructure development and business leadership."
    },
    {
      name: "Mr. Rahul Bhuchar",
      position: "Managing Director",
      experience: "30+ Years",
      description: "Spearheading operations and project execution with deep expertise in tunneling and strategic infrastructure projects."
    },
    {
      name: "Mr. Rishi Bhuchar",
      position: "Director, Projects",
      experience: "20+ Years",
      description: "Overseeing project management and technical excellence across all major infrastructure initiatives."
    },
    {
      name: "Mrs. Vibha Bhuchar",
      position: "Director",
      experience: "15+ Years",
      description: "Contributing to corporate governance and strategic decision-making with focus on organizational development."
    },
    {
      name: "Mr. K.P.S. Rana",
      position: "Independent Director",
      experience: "35+ Years",
      description: "Providing independent oversight and strategic guidance with vast experience in construction and engineering sectors."
    }
  ];

  const teamStats = [
    {
      icon: Users,
      number: "240+",
      label: "Qualified Engineers & Architects",
      description: "Highly skilled professionals driving innovation"
    },
    {
      icon: Building2,
      number: "950+",
      label: "Technical Staff & Workers",
      description: "Experienced workforce ensuring quality execution"
    },
    {
      icon: Award,
      number: "13+",
      label: "Senior Executives",
      description: "Leadership team with 20-45 years experience each"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-navy to-navy/90 text-white">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">Leadership Team</h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Experienced leadership driving CSCCPL's vision of excellence in infrastructure development and strategic construction projects.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Profiles */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-montserrat font-bold text-navy mb-4">Board of Directors</h2>
            <p className="text-xl text-muted-foreground">
              Our leadership team brings decades of expertise in construction, engineering, and business management
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leaders.map((leader, index) => (
              <Card key={index} className="p-6 hover:shadow-lg smooth-transition h-full">
                <CardContent className="p-0">
                  <div className="text-center mb-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-orange to-orange/80 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-xl font-montserrat font-bold text-navy mb-1">{leader.name}</h3>
                    <p className="text-orange font-medium mb-2">{leader.position}</p>
                    <p className="text-sm text-muted-foreground font-medium">{leader.experience}</p>
                  </div>
                  <p className="text-muted-foreground text-center leading-relaxed">{leader.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Strength */}
      <section className="section-padding bg-concrete/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-montserrat font-bold text-navy mb-4">Our Team Strength</h2>
            <p className="text-xl text-muted-foreground">
              CSCCPL attributes its success to a strong team of professionals across all levels
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {teamStats.map((stat, index) => (
              <Card key={index} className="text-center p-8">
                <CardContent className="p-0">
                  <stat.icon className="w-16 h-16 text-orange mx-auto mb-4" />
                  <div className="text-4xl font-bold text-navy mb-2">{stat.number}</div>
                  <h3 className="text-xl font-montserrat font-bold text-navy mb-3">{stat.label}</h3>
                  <p className="text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Organizational Structure */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-montserrat font-bold text-navy mb-6">Organizational Excellence</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="text-xl font-montserrat font-bold text-navy mb-4">Executive Management</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    A core leadership group of senior executives with 20–45 years of experience each, including domain experts in tunneling and building construction, ensuring strategic direction and operational excellence.
                  </p>
                </CardContent>
              </Card>
              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="text-xl font-montserrat font-bold text-navy mb-4">Engineering & Projects</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    68+ engineers specializing in civil, electrical, and mechanical fields, with 10–35 years experience on tunnels, roads, and bridges. Project managers and site directors assigned to each major project site.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Leadership;