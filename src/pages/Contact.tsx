import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Building2, Users, MessageSquare, ArrowRight } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Head Office Address",
      details: [
        "Plot No. 2, Local Shopping Complex",
        "Sector C-9, Vasant Kunj",
        "New Delhi – 110070, India"
      ]
    },
    {
      icon: Phone,
      title: "Phone & Fax",
      details: [
        "Phone: +91-11-47169900",
        "Fax: +91-11-46588588"
      ]
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: [
        "General: cscons@csccpl.com",
        "Business: cscons@gmail.com",
        "HR: hr@csccpl.com"
      ]
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 2:00 PM",
        "Sunday: Closed"
      ]
    }
  ];

  const projectOffices = [
    {
      state: "Jammu & Kashmir",
      projects: "Tunnel and highway projects",
      contact: "Project Director (Jammu)"
    },
    {
      state: "Bihar",
      projects: "6-lane highway construction",
      contact: "Site Office (Ramnagar)"
    },
    {
      state: "Madhya Pradesh",
      projects: "Technical facilities and highway projects",
      contact: "Regional Office (Bhopal)"
    },
    {
      state: "Assam",
      projects: "Strategic infrastructure projects",
      contact: "Site Office (Guwahati)"
    },
    {
      state: "Karnataka",
      projects: "Defense facilities",
      contact: "Site Office (Bangalore)"
    },
    {
      state: "Delhi NCR",
      projects: "Technical directorate building",
      contact: "Site Office (Delhi)"
    }
  ];

  const inquiryTypes = [
    {
      icon: Building2,
      title: "Project Inquiry",
      description: "Information about ongoing or upcoming projects"
    },
    {
      icon: Users,
      title: "Business Partnership",
      description: "Collaboration and partnership opportunities"
    },
    {
      icon: MessageSquare,
      title: "General Information",
      description: "Company information and capabilities"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-navy to-navy/90 text-white">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Get in touch with our team for project inquiries, partnerships, or any questions about our infrastructure construction services.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-montserrat font-bold text-navy mb-6">Send Us a Message</h2>
              <Card className="p-8">
                <CardContent className="p-0">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input id="firstName" className="mt-2" placeholder="Enter your first name" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input id="lastName" className="mt-2" placeholder="Enter your last name" />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input id="email" type="email" className="mt-2" placeholder="your.email@company.com" />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" className="mt-2" placeholder="+91 98765 43210" />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="company">Company/Organization</Label>
                      <Input id="company" className="mt-2" placeholder="Your company name" />
                    </div>
                    
                    <div>
                      <Label htmlFor="inquiryType">Inquiry Type</Label>
                      <select className="w-full mt-2 p-2 border border-input rounded-md">
                        <option value="">Select inquiry type</option>
                        <option value="project">Project Inquiry</option>
                        <option value="partnership">Business Partnership</option>
                        <option value="career">Career Opportunities</option>
                        <option value="general">General Information</option>
                        <option value="tender">Tender Information</option>
                      </select>
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea 
                        id="message" 
                        className="mt-2 min-h-[120px]" 
                        placeholder="Please provide details about your inquiry..."
                      />
                    </div>
                    
                    <Button className="w-full bg-orange hover:bg-orange/90 text-white">
                      Send Message
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </form>
                  
                  <div className="mt-6 text-sm text-muted-foreground">
                    <p>* Required fields</p>
                    <p className="mt-2">We will respond to your inquiry within 2 business days.</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-montserrat font-bold text-navy mb-6">Get In Touch</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="p-6">
                    <CardContent className="p-0">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-12 h-12 bg-orange/10 rounded-lg flex items-center justify-center mr-4">
                          <info.icon className="w-6 h-6 text-orange" />
                        </div>
                        <div>
                          <h3 className="text-lg font-montserrat font-bold text-navy mb-2">{info.title}</h3>
                          <div className="space-y-1">
                            {info.details.map((detail, detailIndex) => (
                              <p key={detailIndex} className="text-muted-foreground">{detail}</p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-concrete/30">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-montserrat font-bold text-navy mb-4">Find Our Head Office</h2>
            <p className="text-xl text-muted-foreground">
              Located in Vasant Kunj, New Delhi for easy access and connectivity
            </p>
          </div>
          
          <Card className="overflow-hidden">
            <div className="aspect-video bg-muted flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-orange mx-auto mb-4" />
                <h3 className="text-lg font-montserrat font-bold text-navy mb-2">Interactive Map</h3>
                <p className="text-muted-foreground">
                  Plot No. 2, Local Shopping Complex, Sector C-9, Vasant Kunj, New Delhi – 110070
                </p>
                <Button className="mt-4" variant="outline">
                  Open in Google Maps
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Project Offices */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-montserrat font-bold text-navy mb-4">Project Offices</h2>
            <p className="text-xl text-muted-foreground">
              We maintain project offices at all major construction sites across India
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectOffices.map((office, index) => (
              <Card key={index} className="p-6 hover:shadow-lg smooth-transition">
                <CardContent className="p-0">
                  <div className="flex items-center mb-3">
                    <MapPin className="w-5 h-5 text-orange mr-2" />
                    <h3 className="text-lg font-montserrat font-bold text-navy">{office.state}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-2">{office.projects}</p>
                  <p className="text-sm font-medium text-navy">{office.contact}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-muted-foreground">
              For specific project site contact details, please reach out to our head office at +91-11-47169900
            </p>
          </div>
        </div>
      </section>

      {/* Inquiry Types */}
      <section className="section-padding bg-concrete/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-montserrat font-bold text-navy mb-4">How Can We Help You?</h2>
            <p className="text-xl text-muted-foreground">
              Choose the type of inquiry that best matches your needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {inquiryTypes.map((type, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-lg smooth-transition">
                <CardContent className="p-0">
                  <type.icon className="w-16 h-16 text-orange mx-auto mb-6" />
                  <h3 className="text-xl font-montserrat font-bold text-navy mb-3">{type.title}</h3>
                  <p className="text-muted-foreground mb-4">{type.description}</p>
                  <Button variant="outline">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-navy text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-montserrat font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how CSCCPL can help bring your infrastructure project to life with our expertise and experience.
          </p>
          <Button size="lg" variant="secondary" className="bg-orange hover:bg-orange/90 text-white">
            Schedule a Consultation
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;