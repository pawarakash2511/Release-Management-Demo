import { Building, Phone, Mail, MapPin } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" }
  ];

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    if (location.pathname === '/') {
      // If on home page, scroll to section
      const sectionId = href.replace('#', '');
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on other pages, navigate to home page with hash
      window.location.href = href;
    }
  };

  const services = [
    "Construction",
    "Interior Design", 
    "Real Estate",
    "Maintenance Services"
  ];

  return (
    <footer className="bg-corporate-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="Yash Enterprises" className="h-12 w-12" />
              <div>
                <h3 className="text-xl font-bold text-gold">Yash</h3>
                <p className="text-xs text-gold-light tracking-wider">ENTERPRISES</p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed">
              Building dreams into reality with professional construction and interior design services 
              across India since 2009.
            </p>
            <div className="flex items-center space-x-2">
              <Building className="h-5 w-5 text-gold" />
              <span className="text-sm text-white/80">Licensed & Insured</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href}
                    className="text-white/80 hover:text-gold transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-gold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-white/80">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-gold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gold mt-1 flex-shrink-0" />
                <div className="text-white/80 text-sm">
                  <div>Yash Enterprises Building</div>
                  <div>Kamothe, Mumbai</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gold flex-shrink-0" />
                <div className="text-white/80 text-sm">
                  <div>+91 8108106097</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gold flex-shrink-0" />
                <div className="text-white/80 text-sm">
                  info@yashenterprises.com
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/60 text-sm">
              © {currentYear} Yash Enterprises. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/60 hover:text-gold transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-gold transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;