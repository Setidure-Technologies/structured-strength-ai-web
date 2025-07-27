import { Building2, Phone, Mail, MapPin, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-navy text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-orange rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-montserrat font-bold text-xl">CS Construction</h3>
                <p className="text-sm text-white/70">Pvt. Ltd.</p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed">
              Leading the future of infrastructure development with innovative 
              construction solutions and uncompromising quality standards.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-white hover:text-orange">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-orange">
                <Twitter className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-montserrat font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["About Us", "Our Services", "Projects", "Careers", "Contact"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/80 hover:text-orange smooth-transition">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-montserrat font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {["Highway Construction", "Bridge Engineering", "Tunnel Projects", "Defense Infrastructure", "Commercial Buildings"].map((service) => (
                <li key={service}>
                  <a href="#" className="text-white/80 hover:text-orange smooth-transition">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-montserrat font-semibold text-lg mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange mt-1 flex-shrink-0" />
                <p className="text-white/80">
                  123 Infrastructure Plaza,<br />
                  New Delhi, India - 110001
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange" />
                <p className="text-white/80">+91 11 2345 6789</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange" />
                <p className="text-white/80">info@csconstruction.in</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/60">
            © 2024 CS Construction Company Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;