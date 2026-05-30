import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">About Yash Enterprises</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Building Dreams into Reality Since 2009
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-corporate-dark">
              We Build Everything As Per Your
              <span className="text-gold block">Dream</span>
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
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
                  In just 9 years of inception YASH ENGINEERING AND TECHNOLOGY PVT.LTD is on the pathway of becoming one of the trustworthy, innovative construction and interior company. No doubt, if construction and interior company continues to flourish and explore newer skylines we see even a brighter future and to scaling new height.
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

          {/* Chairman Message */}
          <div className="bg-muted/30 p-12 rounded-lg">
            <h3 className="text-3xl font-bold text-corporate-dark mb-8 text-center">Chairman Message</h3>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-corporate-gray mb-6">
                Dear Valued visitors,
              </p>
              <p className="text-lg text-corporate-gray mb-6">
                As the chairman of Yash Engineers & Interiors, I am delighted to welcome you to our website.
              </p>
              <p className="text-lg text-corporate-gray mb-6">
                At Yash Engineers Interiors, we are dedicated to providing exceptional engineering and interior solution to our esteemed clients. With a team of highly skilled professionals and a commitment to excellence, we have established our serves as trusted name in the industry.
              </p>
              <p className="text-lg text-corporate-gray mb-6">
                As a Chairman, I take immense pride in our organization's accomplishments and the unwavering dedication of our team. We continuously strive to exceed our client's expectations and deliver outstanding results.
              </p>
              <p className="text-lg text-corporate-gray mb-8">
                I invite you to explore our website and learn more about our services, projects, and values. Thank you for your interest in Yash Engineers Interior needs.
              </p>
              <div className="text-right">
                <p className="text-lg font-semibold text-corporate-dark">Warmest regards</p>
                <p className="text-xl font-bold text-gold mt-2">Swapnil Chavan</p>
                <p className="text-lg text-corporate-gray">Chairman</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;