import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, Award, Building2, Shield, Eye, Calendar, ArrowRight } from "lucide-react";

const Downloads = () => {
  const downloadCategories = [
    {
      title: "Company Information",
      icon: Building2,
      items: [
        {
          name: "Company Brochure",
          description: "Comprehensive overview of CSCCPL's services, projects, and capabilities",
          type: "PDF",
          size: "8.5 MB",
          updated: "December 2024",
          downloadCount: "1,250+",
          category: "brochure"
        },
        {
          name: "Detailed Company Profile",
          description: "In-depth company credentials and detailed project portfolio",
          type: "PDF", 
          size: "12.3 MB",
          updated: "November 2024",
          downloadCount: "890+",
          category: "profile"
        },
        {
          name: "Corporate Fact Sheet",
          description: "Key statistics, financial highlights, and quick company overview",
          type: "PDF",
          size: "2.1 MB", 
          updated: "December 2024",
          downloadCount: "560+",
          category: "factsheet"
        }
      ]
    },
    {
      title: "Certifications & Compliance",
      icon: Award,
      items: [
        {
          name: "ISO 9001:2015 Certificate",
          description: "Quality Management System certification for construction projects",
          type: "PDF",
          size: "1.8 MB",
          updated: "Valid till 2026",
          downloadCount: "720+",
          category: "certification"
        },
        {
          name: "CRISIL Rating Certificate",
          description: "CRISIL A (Stable) rating certificate for bank facilities",
          type: "PDF",
          size: "1.2 MB",
          updated: "September 2024",
          downloadCount: "440+",
          category: "rating"
        },
        {
          name: "ICRA Rating Certificate", 
          description: "ICRA A (Stable) rating for long-term facilities",
          type: "PDF",
          size: "1.5 MB",
          updated: "October 2024",
          downloadCount: "380+",
          category: "rating"
        },
        {
          name: "GST Registration Certificate",
          description: "Goods and Services Tax registration documentation",
          type: "PDF",
          size: "800 KB",
          updated: "Current",
          downloadCount: "290+",
          category: "registration"
        }
      ]
    },
    {
      title: "Project Credentials",
      icon: Shield,
      items: [
        {
          name: "Tunneling Project Portfolio",
          description: "Detailed case studies of major tunnel projects including Sungal and Sivok-Rangpo",
          type: "PDF",
          size: "15.2 MB",
          updated: "November 2024",
          downloadCount: "650+", 
          category: "portfolio"
        },
        {
          name: "Defense Projects Credentials",
          description: "Summary of strategic and defense infrastructure projects (public information only)",
          type: "PDF",
          size: "6.8 MB",
          updated: "October 2024",
          downloadCount: "320+",
          category: "defense"
        },
        {
          name: "Highway Projects Summary",
          description: "Overview of highway and road construction projects across India",
          type: "PDF",
          size: "9.4 MB",
          updated: "December 2024",
          downloadCount: "480+",
          category: "highway"
        }
      ]
    },
    {
      title: "Financial Information",
      icon: FileText,
      items: [
        {
          name: "Financial Highlights FY24",
          description: "Key financial metrics and performance indicators for fiscal year 2023-24",
          type: "PDF",
          size: "3.2 MB",
          updated: "April 2024",
          downloadCount: "420+",
          category: "financial"
        },
        {
          name: "Credit Rating Report",
          description: "Comprehensive credit assessment and rating rationale",
          type: "PDF",
          size: "4.1 MB",
          updated: "September 2024",
          downloadCount: "280+",
          category: "credit"
        }
      ]
    },
    {
      title: "Policies & Procedures",
      icon: Eye,
      items: [
        {
          name: "Quality Policy Statement",
          description: "CSCCPL's commitment to quality management and continuous improvement",
          type: "PDF",
          size: "1.1 MB",
          updated: "January 2024",
          downloadCount: "190+",
          category: "policy"
        },
        {
          name: "Health & Safety Policy",
          description: "Comprehensive safety guidelines and protocols for all project sites",
          type: "PDF",
          size: "2.8 MB",
          updated: "March 2024",
          downloadCount: "340+",
          category: "safety"
        },
        {
          name: "Environmental Policy",
          description: "Environmental management and sustainability practices",
          type: "PDF",
          size: "1.9 MB",
          updated: "February 2024",
          downloadCount: "150+",
          category: "environment"
        }
      ]
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      brochure: "bg-blue-100 text-blue-800",
      profile: "bg-green-100 text-green-800", 
      factsheet: "bg-orange-100 text-orange-800",
      certification: "bg-purple-100 text-purple-800",
      rating: "bg-indigo-100 text-indigo-800",
      registration: "bg-pink-100 text-pink-800",
      portfolio: "bg-cyan-100 text-cyan-800",
      defense: "bg-red-100 text-red-800",
      highway: "bg-yellow-100 text-yellow-800",
      financial: "bg-emerald-100 text-emerald-800",
      credit: "bg-violet-100 text-violet-800",
      policy: "bg-slate-100 text-slate-800",
      safety: "bg-amber-100 text-amber-800",
      environment: "bg-teal-100 text-teal-800"
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-navy to-navy/90 text-white">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">Downloads Center</h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Access our comprehensive library of company documents, certifications, project portfolios, and compliance materials.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="section-padding bg-concrete/30">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <FileText className="w-12 h-12 text-orange mx-auto mb-4" />
                <div className="text-3xl font-bold text-navy mb-2">25+</div>
                <div className="text-navy font-medium">Documents Available</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <Download className="w-12 h-12 text-orange mx-auto mb-4" />
                <div className="text-3xl font-bold text-navy mb-2">5,000+</div>
                <div className="text-navy font-medium">Total Downloads</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <Award className="w-12 h-12 text-orange mx-auto mb-4" />
                <div className="text-3xl font-bold text-navy mb-2">8+</div>
                <div className="text-navy font-medium">Certifications</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <Calendar className="w-12 h-12 text-orange mx-auto mb-4" />
                <div className="text-3xl font-bold text-navy mb-2">2024</div>
                <div className="text-navy font-medium">Latest Updates</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Downloads Categories */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-montserrat font-bold text-navy mb-4">Document Categories</h2>
            <p className="text-xl text-muted-foreground">
              Browse and download documents by category to find exactly what you need
            </p>
          </div>

          <div className="space-y-12">
            {downloadCategories.map((category, index) => (
              <div key={index}>
                <div className="flex items-center mb-8">
                  <category.icon className="w-8 h-8 text-orange mr-3" />
                  <h3 className="text-2xl font-montserrat font-bold text-navy">{category.title}</h3>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <Card key={itemIndex} className="hover:shadow-lg smooth-transition">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <div className="flex items-center mb-2">
                              <h4 className="text-lg font-montserrat font-bold text-navy mr-3">{item.name}</h4>
                              <Badge className={getCategoryColor(item.category)}>
                                {item.type}
                              </Badge>
                            </div>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                              {item.description}
                            </p>
                          </div>
                          <FileText className="w-8 h-8 text-orange ml-4" />
                        </div>
                        
                        <div className="grid grid-cols-3 gap-4 text-sm text-muted-foreground mb-4">
                          <div>
                            <span className="font-medium">Size:</span>
                            <div>{item.size}</div>
                          </div>
                          <div>
                            <span className="font-medium">Updated:</span>
                            <div>{item.updated}</div>
                          </div>
                          <div>
                            <span className="font-medium">Downloads:</span>
                            <div>{item.downloadCount}</div>
                          </div>
                        </div>
                        
                        <Button className="w-full bg-orange hover:bg-orange/90">
                          <Download className="w-4 h-4 mr-2" />
                          Download {item.type}
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terms & Access */}
      <section className="section-padding bg-concrete/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-montserrat font-bold text-navy text-center mb-8">Terms of Use</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="text-xl font-montserrat font-bold text-navy mb-4">Public Documents</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <ArrowRight className="w-4 h-4 text-orange mr-2 mt-1" />
                      Company brochures and profiles are freely available
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-4 h-4 text-orange mr-2 mt-1" />
                      Certifications can be verified with issuing authorities
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-4 h-4 text-orange mr-2 mt-1" />
                      No registration required for most documents
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="text-xl font-montserrat font-bold text-navy mb-4">Usage Guidelines</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <ArrowRight className="w-4 h-4 text-orange mr-2 mt-1" />
                      Documents are for information purposes only
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-4 h-4 text-orange mr-2 mt-1" />
                      Commercial use requires written permission
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-4 h-4 text-orange mr-2 mt-1" />
                      All information subject to periodic updates
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for More */}
      <section className="section-padding bg-navy text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-montserrat font-bold mb-4">Need Additional Information?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Can't find the document you're looking for? Contact our team for additional materials or custom documentation.
          </p>
          <Button size="lg" variant="secondary" className="bg-orange hover:bg-orange/90 text-white">
            Contact Documentation Team
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Downloads;