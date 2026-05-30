import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Home, MapPin, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Building,
      title: "Yash Constructions",
      description: "Yash Constructions is one of the most reputed and well recognized Construction Company in India. Over the years, we have been employing our best methods.",
      features: ["Commercial Buildings", "Residential Projects", "Hospital Construction", "Institutional Buildings", "Farmhouse Construction"]
    },
    {
      icon: Home,
      title: "Yash Interiors",
      description: "Our creativity and attention to detail bring your ideas to life and make your home YOURS. We ensure your goals and priorities are reflected in both the architecture and design.",
      features: ["Interior Design", "Space Planning", "Furniture Design", "Lighting Design", "Color Consultation"]
    },
    {
      icon: MapPin,
      title: "Yash Real Estate",
      description: "Comprehensive real estate services helping you find the perfect property or investment opportunity with expert guidance and market insights.",
      features: ["Property Sales", "Investment Consulting", "Property Management", "Market Analysis", "Legal Assistance"]
    },
    {
      icon: Wrench,
      title: "Maintenance Services",
      description: "Professional maintenance services for homes, offices, and commercial spaces to keep your properties in perfect condition year-round.",
      features: ["Home Maintenance", "Office Maintenance", "Commercial Upkeep", "Repair Services", "Regular Inspections"]
    }
  ];

  const whyChooseUs = [
    {
      title: "Complete Building Solutions",
      description: "We understand every nuance of building construction while keeping up with changing times."
    },
    {
      title: "Competitive Pricing",
      description: "Our price is always differ from the others and affordable along with our work"
    },
    {
      title: "We Got The Tools",
      description: "We provide the solutions for all flooring, cladding and wall solutions"
    },
    {
      title: "Great Support",
      description: "24/7 customer support and after-service maintenance for all our projects"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Comprehensive solutions across multiple industries to meet all your business needs
          </p>
        </div>
      </section>

      {/* Specialization Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-corporate-dark">Specialization</h2>
            <p className="text-xl text-corporate-gray max-w-2xl mx-auto">
              Creating a memorable brand experience for our clients while enhancing the quality of life for all we serve.
            </p>
            <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card 
                  key={index} 
                  className="group hover:shadow-gold transition-all duration-300 border-0 shadow-elegant"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-4 bg-gradient-gold rounded-full w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-corporate-dark">
                        {service.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-corporate-gray leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-corporate-gray">
                          <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="mt-6 bg-gradient-gold hover:shadow-gold transition-all duration-300">
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-corporate-dark">Why you will Choose Yash?</h2>
            <p className="text-xl text-corporate-gray max-w-4xl mx-auto">
              Yash Construction Company is a reputable and well-established construction company with over 15 years of experience in the construction industry. We have a proven track record of delivering high-quality construction projects within budget and on time.
            </p>
            <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="text-center shadow-elegant hover:shadow-gold transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-corporate-dark mb-4">{item.title}</h3>
                  <p className="text-corporate-gray">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;