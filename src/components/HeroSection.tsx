import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  const handleContactClick = () => {
    if (location.pathname === '/') {
      // If on home page, scroll to contact section
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on other pages, navigate to contact page
      navigate('/contact');
    }
  };

  const slides = [
    {
      title: "Welcome to Yash",
      subtitle: "Construction & Interior",
      services: [
        "1. Constructions",
        "2. Interiors", 
        "3. Yash Real Estate",
        "4. Maintenance Services"
      ]
    }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-4">
                {slides[currentSlide].title}
              </h1>
              <h2 className="text-2xl lg:text-3xl text-gold mb-8">
                {slides[currentSlide].subtitle}
              </h2>
            </div>

            <div className="space-y-4">
              {slides[currentSlide].services.map((service, index) => (
                <div key={index} className="text-lg font-medium">
                  {service}
                </div>
              ))}
            </div>
          </div>

          <div className="text-center space-y-8">
            <div className="bg-corporate-dark/50 backdrop-blur-sm p-8 rounded-lg">
              <h3 className="text-3xl font-bold text-white mb-4">We Are Your Dream</h3>
              <h4 className="text-4xl font-bold text-gold mb-6">Builders</h4>
              <p className="text-white/90 text-lg mb-8">
                You can dream beautiful house, we can build it into reality.
                But it requires people to make the dream a reality.
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-gold hover:shadow-gold transition-all duration-300 text-white font-semibold px-8 py-3"
                onClick={handleContactClick}
              >
                CONTACT NOW
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20">
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:text-gold bg-black/20 hover:bg-black/40"
          onClick={() => setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 0)}
        >
          <ChevronLeft className="h-8 w-8" />
        </Button>
      </div>
      
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20">
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:text-gold bg-black/20 hover:bg-black/40"
          onClick={() => setCurrentSlide(currentSlide < slides.length - 1 ? currentSlide + 1 : slides.length - 1)}
        >
          <ChevronRight className="h-8 w-8" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;