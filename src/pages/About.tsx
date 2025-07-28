import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Users, Award, Target, Eye, Heart } from "lucide-react";

const About = () => {
  const milestones = [
    { year: "1991", event: "Founded by Late Mr. Ashok Kumar Bhuchar as partnership firm" },
    { year: "2005", event: "Incorporated as CS Construction Company Pvt. Ltd." },
    { year: "2010", event: "First major tunnel project with BRO" },
    { year: "2015", event: "ISO 9001:2015 Certification achieved" },
    { year: "2020", event: "₹275 Cr annual turnover milestone" },
    { year: "2024", event: "₹800+ Cr annual turnover, CRISIL A Rating" }
  ];

  const values = [
    { icon: Award, title: "Quality Workmanship", description: "Delivering excellence in every project" },
    { icon: Target, title: "Innovation", description: "Embracing modern technology and methods" },
    { icon: Building2, title: "Timely Delivery", description: "Meeting deadlines with precision" },
    { icon: Users, title: "Customer Satisfaction", description: "Exceeding client expectations consistently" },
    { icon: Heart, title: "Integrity", description: "Upholding highest ethical standards" },
    { icon: Eye, title: "Safety", description: "Prioritizing safety in all operations" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-navy to-navy/90 text-white">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">About CS Construction Company</h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Three decades of engineering excellence, building India's critical infrastructure with unwavering commitment to quality and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-montserrat font-bold text-navy mb-6">Our Legacy</h2>
              <div className="space-y-4 text-lg">
                <p>
                  CS Construction Company Pvt. Ltd. (CSCCPL) is one of India's leading mid-size construction and infrastructure firms, originally established in 1991 by the late Mr. Ashok Kumar Bhuchar. It began as a partnership firm and later incorporated as a private limited company in 2005.
                </p>
                <p>
                  Over three decades, the company has evolved from executing small residential building projects to large-scale infrastructure works. We are now managed by the founder's sons – Mr. Rohit Kumar Bhuchar (Chairman), Mr. Rahul Bhuchar (Managing Director), and Mr. Rishi Bhuchar (Director, Projects) – continuing the founder's legacy of excellence.
                </p>
                <p>
                  Today, CSCCPL stands as a trusted name in tunneling, highway construction, and strategic defense infrastructure, with an annual turnover exceeding ₹800 crores and a team of over 1,200 professionals.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-orange mb-2">30+</div>
                  <div className="text-navy font-medium">Years Experience</div>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-orange mb-2">₹800+</div>
                  <div className="text-navy font-medium">Cr Annual Turnover</div>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-orange mb-2">240+</div>
                  <div className="text-navy font-medium">Engineers</div>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-orange mb-2">950+</div>
                  <div className="text-navy font-medium">Technical Staff</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-concrete/30">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <Target className="w-8 h-8 text-orange mr-3" />
                  <h3 className="text-2xl font-montserrat font-bold text-navy">Our Mission</h3>
                </div>
                <p className="text-lg leading-relaxed">
                  To deliver world-class infrastructure that strengthens the nation's connectivity and security, through engineering excellence and unwavering commitment to quality.
                </p>
              </CardContent>
            </Card>
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <Eye className="w-8 h-8 text-orange mr-3" />
                  <h3 className="text-2xl font-montserrat font-bold text-navy">Our Vision</h3>
                </div>
                <p className="text-lg leading-relaxed">
                  To be a trusted leader in tunneling and strategic construction, contributing to India's development and self-reliance through innovative infrastructure solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-montserrat font-bold text-navy mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These fundamental principles guide every decision we make and every project we undertake
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 hover:shadow-lg smooth-transition">
                <CardContent className="p-0 text-center">
                  <value.icon className="w-12 h-12 text-orange mx-auto mb-4" />
                  <h3 className="text-xl font-montserrat font-bold text-navy mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-concrete/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-montserrat font-bold text-navy mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground">Key milestones in our three-decade journey</p>
          </div>
          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-center mb-8 last:mb-0">
                <div className="flex-shrink-0 w-20 h-20 bg-orange rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {milestone.year}
                </div>
                <div className="ml-6 flex-1">
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <p className="text-lg">{milestone.event}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-montserrat font-bold text-navy mb-4">Certifications & Recognition</h2>
            <p className="text-xl text-muted-foreground">Quality and compliance at the heart of our operations</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <Award className="w-16 h-16 text-orange mx-auto mb-4" />
                <h3 className="text-xl font-montserrat font-bold text-navy mb-2">ISO 9001:2015</h3>
                <p className="text-muted-foreground">Quality Management System</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <Badge className="w-16 h-16 text-orange mx-auto mb-4" />
                <h3 className="text-xl font-montserrat font-bold text-navy mb-2">CRISIL A (Stable)</h3>
                <p className="text-muted-foreground">Credit Rating</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <Building2 className="w-16 h-16 text-orange mx-auto mb-4" />
                <h3 className="text-xl font-montserrat font-bold text-navy mb-2">ICRA A (Stable)</h3>
                <p className="text-muted-foreground">Investment Grade Rating</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;