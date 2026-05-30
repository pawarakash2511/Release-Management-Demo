import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate form
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 8108106097"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@yashenterprises.com", "contact@yashenterprises.com"]
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["Yash Enterprises Building", "Kamothe, Mumbai"]
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Sat: 9:00 AM - 6:00 PM", "Sunday: Closed"]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-corporate-dark">Contact Us</h2>
          <p className="text-xl text-corporate-gray max-w-2xl mx-auto">
            Get in touch with us to discuss your project requirements
          </p>
          <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-corporate-dark mb-6">Get In Touch</h3>
              <p className="text-corporate-gray text-lg leading-relaxed mb-8">
                Ready to start your dream project? Contact our expert team today for 
                professional consultation and personalized solutions.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card key={index} className="shadow-elegant hover:shadow-gold transition-all duration-300">
                    <CardHeader className="pb-4">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-gradient-gold rounded-lg">
                          <IconComponent className="h-5 w-5 text-white" />
                        </div>
                        <CardTitle className="text-lg text-corporate-dark">
                          {info.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-corporate-gray text-sm">
                          {detail}
                        </p>
                      ))}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl text-corporate-dark">Send Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-corporate-dark block mb-2">
                      First Name *
                    </label>
                    <Input 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Enter your first name" 
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-corporate-dark block mb-2">
                      Last Name *
                    </label>
                    <Input 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Enter your last name" 
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-corporate-dark block mb-2">
                    Email *
                  </label>
                  <Input 
                    name="email"
                    type="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email" 
                    required
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-corporate-dark block mb-2">
                    Phone
                  </label>
                  <Input 
                    name="phone"
                    type="tel" 
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number" 
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-corporate-dark block mb-2">
                    Message *
                  </label>
                  <Textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project requirements..."
                    className="min-h-[120px]"
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-gold hover:shadow-gold transition-all duration-300 text-white font-semibold py-3"
                  size="lg"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;