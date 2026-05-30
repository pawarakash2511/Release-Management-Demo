import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Home, MapPin, Wrench } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Building,
      title: "Construction",
      description: "Professional construction services for commercial, residential, and institutional projects with international standards."
    },
    {
      icon: Home,
      title: "Interior Design",
      description: "Complete interior design solutions that transform spaces into beautiful, functional environments tailored to your needs."
    },
    {
      icon: MapPin,
      title: "Real Estate",
      description: "Comprehensive real estate services helping you find the perfect property or investment opportunity."
    },
    {
      icon: Wrench,
      title: "Maintenance Services",
      description: "Professional maintenance services for homes, offices, and commercial spaces to keep your properties in perfect condition."
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-corporate-dark">Our Services</h2>
          <p className="text-xl text-corporate-gray max-w-2xl mx-auto">
            Comprehensive solutions across multiple industries to meet all your business needs
          </p>
          <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-gold transition-all duration-300 border-0 shadow-elegant"
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-4 bg-gradient-gold rounded-full w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-corporate-dark">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-corporate-gray text-center leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;