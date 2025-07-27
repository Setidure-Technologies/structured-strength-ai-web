import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="CS Construction - Modern Infrastructure Development" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient opacity-85"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 construction-grid opacity-30"></div>

      {/* Content */}
      <div className="relative z-10 container-custom">
        <div className="max-w-4xl">
          <div className="text-white space-y-6">
            <h1 className="font-montserrat font-bold text-5xl md:text-7xl leading-tight">
              Building Tomorrow's
              <span className="block text-orange">Infrastructure</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl leading-relaxed">
              CS Construction Company Pvt. Ltd. delivers excellence in infrastructure development, 
              strategic projects, and specialized construction solutions across India.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="construction" size="lg" className="text-lg">
                Explore Our Projects
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="industrial" size="lg" className="text-lg">
                Get Consultation
              </Button>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
              {[
                "25+ Years Experience",
                "500+ Projects Completed",
                "ISO Certified Quality"
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-orange flex-shrink-0" />
                  <span className="text-white/90 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
    </section>
  );
};

export default Hero;