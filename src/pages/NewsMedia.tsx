import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, Award, Newspaper, Tv, ArrowRight } from "lucide-react";

const NewsMedia = () => {
  const newsItems = [
    {
      id: 1,
      type: "press-release",
      title: "CSCCPL Secures ₹337 Cr Strategic Infrastructure Project in Assam",
      date: "2024-12-15",
      author: "CSCCPL Media Team",
      summary: "CS Construction Company Pvt. Ltd. has been awarded a major strategic civil works project by DRDO in Assam, valued at ₹337.13 crores, reinforcing the company's position in defense infrastructure.",
      content: "The project involves specialized civil works at a strategic location in Assam, including allied services. This award demonstrates CSCCPL's continued trust with defense organizations and expansion in the Northeast region. The project is expected to commence in early 2024 and complete by 2027.",
      category: "Project Award"
    },
    {
      id: 2,
      type: "news",
      title: "Successful Completion of Sivok-Rangpo Railway Tunnels",
      date: "2024-11-20",
      author: "Infrastructure Today",
      summary: "CSCCPL has successfully completed the challenging Sivok-Rangpo railway tunnel project for IRCON International, a critical link for Sikkim's connectivity.",
      content: "The project involved construction of two large railway tunnels (T-12 & T-13) totaling approximately 5 km on the new BG rail line to Sikkim. Despite complex geological conditions in the Himalayan foothills, CSCCPL delivered the project on schedule, showcasing their tunneling expertise.",
      category: "Project Completion"
    },
    {
      id: 3,
      type: "press-release", 
      title: "CSCCPL Achieves ₹800+ Cr Annual Turnover Milestone",
      date: "2024-10-10",
      author: "CSCCPL Finance Team",
      summary: "CS Construction Company reports record annual turnover of ₹801.36 crores for FY 2023-24, marking a 68% increase from the previous year.",
      content: "The company's strong financial performance reflects successful execution of major projects including tunnel works, highway construction, and defense infrastructure. With a robust order book of over ₹2,000 crores, CSCCPL is well-positioned for continued growth in the infrastructure sector.",
      category: "Financial News"
    },
    {
      id: 4,
      type: "award",
      title: "CRISIL Reaffirms A (Stable) Rating for CSCCPL",
      date: "2024-09-05",
      author: "CRISIL Rating Agency",
      summary: "CRISIL has reaffirmed its A (Stable) rating for CS Construction Company's bank facilities, reflecting strong credit quality and business risk profile.",
      content: "The rating reflects CSCCPL's established market position in infrastructure construction, particularly in tunneling and strategic projects, along with strong financial risk profile supported by healthy operating margins and comfortable capital structure.",
      category: "Recognition"
    },
    {
      id: 5,
      type: "news",
      title: "CSCCPL Breaks Ground on Bihar Highway Project",
      date: "2024-08-15",
      author: "Highway News",
      summary: "Construction begins on the ₹416 crore 6-lane greenfield highway project in Bihar, marking CSCCPL's significant presence in eastern India.",
      content: "The 12.6 km stretch of NH-119D from Ramnagar to Kacchi Dargah is part of the larger Amas-Darbhanga expressway. The project will improve connectivity and economic development in the region, with completion expected by 2025.",
      category: "Project Launch"
    },
    {
      id: 6,
      type: "media",
      title: "Leadership Interview: Future of Infrastructure in India",
      date: "2024-07-20",
      author: "Engineering Today Magazine",
      summary: "CSCCPL's Managing Director discusses the company's vision for India's infrastructure development and the role of technology in construction.",
      content: "In an exclusive interview, Mr. Rahul Bhuchar shared insights on emerging trends in tunneling technology, the importance of strategic infrastructure for national security, and CSCCPL's plans for digital transformation in project management.",
      category: "Media Coverage"
    }
  ];

  const mediaTypes = [
    { key: "all", label: "All News", icon: Newspaper },
    { key: "press-release", label: "Press Releases", icon: User },
    { key: "news", label: "Industry News", icon: Newspaper },
    { key: "award", label: "Awards & Recognition", icon: Award },
    { key: "media", label: "Media Coverage", icon: Tv }
  ];

  const categoryColors = {
    "Project Award": "bg-blue-100 text-blue-800",
    "Project Completion": "bg-green-100 text-green-800", 
    "Financial News": "bg-orange-100 text-orange-800",
    "Recognition": "bg-purple-100 text-purple-800",
    "Project Launch": "bg-indigo-100 text-indigo-800",
    "Media Coverage": "bg-pink-100 text-pink-800"
  };

  const typeIcons = {
    "press-release": User,
    "news": Newspaper,
    "award": Award,
    "media": Tv
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-navy to-navy/90 text-white">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">News & Media</h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Stay updated with the latest news, press releases, and media coverage about CSCCPL's projects, achievements, and industry insights.
            </p>
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="section-padding bg-concrete/30">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-montserrat font-bold text-navy mb-4">Latest Updates</h2>
          </div>
          
          {/* Featured Article */}
          <Card className="mb-8 overflow-hidden">
            <div className="grid lg:grid-cols-3 gap-0">
              <div className="lg:col-span-1 bg-gradient-to-br from-orange to-orange/80 p-8 text-white">
                <Badge className="bg-white/20 text-white mb-4">Featured</Badge>
                <h3 className="text-2xl font-montserrat font-bold mb-4">{newsItems[0].title}</h3>
                <div className="flex items-center text-white/90 text-sm mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(newsItems[0].date).toLocaleDateString('en-IN', { 
                    day: 'numeric', 
                    month: 'long', 
                    year: 'numeric' 
                  })}
                </div>
                <p className="text-white/90 leading-relaxed">{newsItems[0].summary}</p>
              </div>
              <div className="lg:col-span-2 p-8">
                <Badge className={categoryColors[newsItems[0].category]}>
                  {newsItems[0].category}
                </Badge>
                <div className="mt-4">
                  <p className="text-muted-foreground leading-relaxed mb-6">{newsItems[0].content}</p>
                  <Button variant="outline">
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* News Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8">
            {newsItems.slice(1).map((item) => {
              const IconComponent = typeIcons[item.type];
              return (
                <Card key={item.id} className="hover:shadow-lg smooth-transition">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <Badge className={categoryColors[item.category]}>
                        {item.category}
                      </Badge>
                      <IconComponent className="w-5 h-5 text-orange" />
                    </div>
                    
                    <h3 className="text-xl font-montserrat font-bold text-navy mb-3 line-clamp-2">
                      {item.title}
                    </h3>
                    
                    <div className="flex items-center text-muted-foreground text-sm mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(item.date).toLocaleDateString('en-IN', { 
                        day: 'numeric', 
                        month: 'long', 
                        year: 'numeric' 
                      })}
                      <span className="mx-2">•</span>
                      <User className="w-4 h-4 mr-1" />
                      {item.author}
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                      {item.summary}
                    </p>
                    
                    <Button variant="ghost" size="sm" className="text-orange hover:text-orange/80">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Media Kit */}
      <section className="section-padding bg-navy text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-montserrat font-bold mb-6">Media Resources</h2>
            <p className="text-xl text-white/90 mb-8">
              Access our press kit, company information, and media resources for journalists and industry analysts
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-6 text-center">
                  <Newspaper className="w-12 h-12 text-orange mx-auto mb-4" />
                  <h3 className="text-lg font-montserrat font-bold mb-2">Press Kit</h3>
                  <p className="text-white/90 text-sm mb-4">Company logos, executive photos, and brand guidelines</p>
                  <Button variant="secondary" size="sm">Download</Button>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-6 text-center">
                  <User className="w-12 h-12 text-orange mx-auto mb-4" />
                  <h3 className="text-lg font-montserrat font-bold mb-2">Media Contact</h3>
                  <p className="text-white/90 text-sm mb-4">Get in touch with our media relations team</p>
                  <Button variant="secondary" size="sm">Contact Us</Button>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-6 text-center">
                  <Award className="w-12 h-12 text-orange mx-auto mb-4" />
                  <h3 className="text-lg font-montserrat font-bold mb-2">Fact Sheet</h3>
                  <p className="text-white/90 text-sm mb-4">Key company statistics and project information</p>
                  <Button variant="secondary" size="sm">Download</Button>
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

export default NewsMedia;