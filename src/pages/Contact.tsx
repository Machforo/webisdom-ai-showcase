import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "demo",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setIsSubmitting(true);
      
      try {
        // Insert contact form data into Supabase table
        const { error: insertError } = await supabase
          .from('contact_submissions')
          .insert([
            {
              name: formData.name,
              email: formData.email,
              company: formData.company,
              service: formData.service,
              message: formData.message,
              created_at: new Date().toISOString()
            }
          ]);

        if (insertError) {
          throw insertError;
        }

        // Call edge function to send email
        const { error: emailError } = await supabase.functions.invoke('send-contact-email', {
          body: {
            to: 'atharv.kumar@webisdom.com',
            subject: `New Contact Form Submission - ${formData.service}`,
            formData: formData
          }
        });

        if (emailError) {
          console.error('Email sending error:', emailError);
          // Don't throw here as the form data is still saved
        }

        setIsSubmitted(true);
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you within 24 hours.",
        });
      } catch (error) {
        console.error('Error submitting form:', error);
        toast({
          title: "Error sending message",
          description: "Please try again or contact us directly.",
          variant: "destructive"
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Get in <span className="text-gradient">Touch</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Ready to transform your business with AI? Let's discuss how we can help you achieve your goals.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="card-gradient">
                <CardHeader>
                  <CardTitle className="text-2xl">
                    {isSubmitted ? "Thank You!" : "Send us a Message"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-4">Message Sent Successfully!</h3>
                      <p className="text-muted-foreground mb-6">
                        Thank you for reaching out. Our team will review your {formData.service === "demo" ? "demo request" : "audit request"} and get back to you within 24 hours.
                      </p>
                      <Button 
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({
                            name: "",
                            email: "",
                            company: "",
                            service: "demo",
                            message: ""
                          });
                        }}
                        variant="outline"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium mb-2">
                            Full Name *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-2">
                            Email Address *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            placeholder="your.email@company.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="company" className="block text-sm font-medium mb-2">
                          Company Name
                        </label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Your company name"
                        />
                      </div>

                      <div>
                        <label htmlFor="service" className="block text-sm font-medium mb-2">
                          What are you interested in? *
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        >
                          <option value="demo">Book a Demo</option>
                          <option value="audit">Request AI Audit</option>
                          <option value="hotel-ai">Hotel AI Chieftain</option>
                          <option value="consultation">General Consultation</option>
                          <option value="partnership">Partnership Opportunities</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          placeholder="Tell us about your business needs and how we can help..."
                          rows={6}
                        />
                      </div>

                      <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? "Sending..." : "Send Message"}
                        <Send className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <Card className="card-gradient">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Mail className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Email</h4>
                          <p className="text-muted-foreground">contact@webisdomtech.com</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <MapPin className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Location</h4>
                          <p className="text-muted-foreground">India</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Phone className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Response Time</h4>
                          <p className="text-muted-foreground">Within 24 hours</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-gradient">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                    <div className="space-y-4">
                      <a 
                        href="https://ai-chieftain.webisdomtech.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-primary hover:text-primary-dark transition-colors"
                      >
                        <span>Hotel AI Chieftain Platform</span>
                        <Send className="h-4 w-4" />
                      </a>
                      <div className="text-sm text-muted-foreground">
                        Explore our live hospitality AI solution
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-gradient bg-gradient-to-br from-primary/10 to-accent/10">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
                    <p className="text-muted-foreground mb-6">
                      Join leading companies that are already transforming their operations with our AI solutions.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button className="flex-1" asChild>
                        <a href="mailto:contact@webisdomtech.com">
                          Email Us Directly
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;