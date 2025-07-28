import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Users, GraduationCap, Award, ArrowRight, Building2, Mail } from "lucide-react";

const Careers = () => {
  const openings = [
    {
      id: 1,
      title: "Project Manager - Highways",
      location: "Bihar",
      type: "Full-time",
      experience: "10+ years",
      description: "Lead highway EPC projects, manage site operations, coordinate with clients and ensure timely project delivery.",
      requirements: [
        "B.E./B.Tech in Civil Engineering",
        "10+ years experience in highway construction",
        "Experience with NHAI/state highway projects",
        "Strong leadership and communication skills"
      ]
    },
    {
      id: 2,
      title: "Site Engineer - Tunneling",
      location: "Madhya Pradesh", 
      type: "Full-time",
      experience: "3-7 years",
      description: "Support tunnel construction activities, quality control, safety implementation, and progress monitoring.",
      requirements: [
        "Diploma/B.E. in Civil Engineering",
        "3-7 years experience in tunneling or underground construction",
        "Knowledge of NATM, drill & blast techniques",
        "Willingness to work in challenging terrains"
      ]
    },
    {
      id: 3,
      title: "Electrical Engineer - MEP",
      location: "Delhi NCR",
      type: "Full-time", 
      experience: "5-10 years",
      description: "Design and supervise electrical installations, HVAC systems, and MEP coordination for building projects.",
      requirements: [
        "B.E./B.Tech in Electrical Engineering",
        "5-10 years experience in building MEP systems",
        "Knowledge of AutoCAD, electrical design software",
        "Experience with government/defense projects preferred"
      ]
    },
    {
      id: 4,
      title: "Quality Control Engineer",
      location: "Assam",
      type: "Full-time",
      experience: "3-5 years", 
      description: "Ensure quality standards compliance, conduct material testing, maintain quality documentation.",
      requirements: [
        "B.E./B.Tech in Civil Engineering",
        "3-5 years QA/QC experience in construction",
        "Knowledge of IS codes, testing procedures",
        "ISO 9001 quality system knowledge"
      ]
    },
    {
      id: 5,
      title: "Graduate Engineer Trainee",
      location: "Various",
      type: "Full-time",
      experience: "0-1 years",
      description: "Entry-level position for fresh graduates to gain experience across different project sites and construction domains.",
      requirements: [
        "B.E./B.Tech in Civil/Mechanical/Electrical",
        "Fresh graduate or up to 1 year experience", 
        "Good academic record",
        "Willingness to work at project sites across India"
      ]
    }
  ];

  const benefits = [
    {
      icon: GraduationCap,
      title: "Professional Development",
      description: "Continuous learning opportunities, training programs, and skill development initiatives"
    },
    {
      icon: Building2,
      title: "Challenging Projects",
      description: "Work on iconic infrastructure projects including tunnels, highways, and defense facilities"
    },
    {
      icon: Users,
      title: "Team Environment",
      description: "Collaborative culture with experienced professionals and mentorship opportunities"
    },
    {
      icon: Award,
      title: "Career Growth",
      description: "Clear career progression paths and recognition for performance and achievements"
    }
  ];

  const workLife = [
    {
      title: "Project Diversity",
      description: "From Himalayan tunnels to strategic defense facilities, experience diverse and challenging projects",
      highlight: "30+ Years of Iconic Projects"
    },
    {
      title: "Technology Focus", 
      description: "Work with advanced construction equipment, modern techniques, and digital project management",
      highlight: "Latest Equipment & Technology"
    },
    {
      title: "Safety First",
      description: "Comprehensive safety training, protocols, and equipment for all site personnel",
      highlight: "Zero Accident Policy"
    },
    {
      title: "Work-Life Balance",
      description: "Accommodation at project sites, rotation policies, and family support programs",
      highlight: "Employee-Centric Policies"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-navy to-navy/90 text-white">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">Join Our Team</h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Build your career with India's leading infrastructure construction company. Work on challenging projects that shape the nation's future.
            </p>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-montserrat font-bold text-navy mb-6">Life at CSCCPL</h2>
              <div className="space-y-4 text-lg">
                <p>
                  At CSCCPL, we believe in teamwork, safety, and professional growth. Our engineers tackle exciting projects from tunnels in the mountains to high-tech defense facilities across India.
                </p>
                <p>
                  We offer a collaborative environment with training programs for young engineers and opportunities for career advancement. Join a team of over 1,200 professionals committed to excellence in infrastructure development.
                </p>
                <p>
                  Whether you're a fresh graduate or an experienced professional, CSCCPL provides the platform to work on landmark projects while building a rewarding career in construction and engineering.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-orange mb-2">240+</div>
                  <div className="text-navy font-medium">Engineers & Architects</div>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-orange mb-2">950+</div>
                  <div className="text-navy font-medium">Technical Staff</div>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-orange mb-2">15+</div>
                  <div className="text-navy font-medium">States Presence</div>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-orange mb-2">30+</div>
                  <div className="text-navy font-medium">Years Legacy</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="section-padding bg-concrete/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-montserrat font-bold text-navy mb-4">Current Openings</h2>
            <p className="text-xl text-muted-foreground">
              Explore exciting career opportunities across our project locations
            </p>
          </div>

          <div className="space-y-6">
            {openings.map((job) => (
              <Card key={job.id} className="hover:shadow-lg smooth-transition">
                <CardContent className="p-6">
                  <div className="grid lg:grid-cols-4 gap-6">
                    <div className="lg:col-span-2">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-montserrat font-bold text-navy">{job.title}</h3>
                        <Badge variant="outline">{job.type}</Badge>
                      </div>
                      <div className="flex items-center text-muted-foreground text-sm mb-3 space-x-4">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1 text-orange" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1 text-orange" />
                          {job.experience}
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{job.description}</p>
                    </div>
                    
                    <div className="lg:col-span-1">
                      <h4 className="font-semibold text-navy mb-2">Requirements:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {job.requirements.map((req, index) => (
                          <li key={index} className="flex items-start">
                            <ArrowRight className="w-3 h-3 text-orange mr-2 mt-1 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="lg:col-span-1 flex items-center">
                      <Button className="w-full bg-orange hover:bg-orange/90">
                        Apply Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-montserrat font-bold text-navy mb-4">Why Work With Us</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive benefits and growth opportunities for our team members
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg smooth-transition">
                <CardContent className="p-0">
                  <benefit.icon className="w-12 h-12 text-orange mx-auto mb-4" />
                  <h3 className="text-lg font-montserrat font-bold text-navy mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Work Culture */}
      <section className="section-padding bg-concrete/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-montserrat font-bold text-navy mb-4">Our Work Culture</h2>
            <p className="text-xl text-muted-foreground">
              Experience what makes CSCCPL a great place to build your career
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {workLife.map((item, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-montserrat font-bold text-navy">{item.title}</h3>
                    <Badge variant="secondary" className="text-orange bg-orange/10">
                      {item.highlight}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="section-padding bg-navy text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-montserrat font-bold mb-6">Ready to Join Us?</h2>
            <p className="text-xl text-white/90 mb-8">
              We are always looking for talented engineers, project managers, and professionals to join our growing team
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-6 text-center">
                  <Mail className="w-12 h-12 text-orange mx-auto mb-4" />
                  <h3 className="text-lg font-montserrat font-bold mb-2">Email Application</h3>
                  <p className="text-white/90 text-sm mb-4">Send your CV and cover letter to our HR team</p>
                  <p className="text-orange font-medium">hr@csccpl.com</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-6 text-center">
                  <Users className="w-12 h-12 text-orange mx-auto mb-4" />
                  <h3 className="text-lg font-montserrat font-bold mb-2">Campus Recruitment</h3>
                  <p className="text-white/90 text-sm mb-4">We actively recruit from top engineering colleges</p>
                  <Button variant="secondary" size="sm">Learn More</Button>
                </CardContent>
              </Card>
            </div>
            
            <p className="text-white/80">
              We will respond to your inquiry within 2 business days and keep your information confidential.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;