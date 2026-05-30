import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-corporate-dark">
            We Build Everything As Per Your
            <span className="text-gold block">Dream</span>
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-corporate-dark mb-6">
              Best Interior Designer and Construction company in India
            </h3>
            <div className="space-y-6 text-corporate-gray">
              <p className="text-lg leading-relaxed">
                We deal in Commercial, residential, hospital, institutional, farmhouse etc. 
                we've delivered flawless constructions and Interior space with international standards. 
                Yash started in 2009 but registered in 2015.
              </p>
              <p className="text-lg leading-relaxed">
                Our commitment to excellence and attention to detail has made us a trusted name 
                in the construction and interior design industry across India.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <Card className="shadow-elegant hover:shadow-gold transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-gold mb-2">500+</div>
                <div className="text-corporate-gray">Projects Completed</div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant hover:shadow-gold transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-gold mb-2">15+</div>
                <div className="text-corporate-gray">Years Experience</div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant hover:shadow-gold transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-gold mb-2">100+</div>
                <div className="text-corporate-gray">Happy Clients</div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant hover:shadow-gold transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-gold mb-2">50+</div>
                <div className="text-corporate-gray">Expert Team</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;