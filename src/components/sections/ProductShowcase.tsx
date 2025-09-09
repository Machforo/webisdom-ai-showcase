import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, CheckCircle, Clock, Sparkles } from "lucide-react";

const ProductShowcase = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="text-gradient">AI Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cutting-edge AI products designed for specific industries, delivering measurable results and transforming business operations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Hotel AI Chieftain - Live Product */}
          <Card className="relative overflow-hidden card-gradient hover:shadow-strong transition-all duration-500 group">
            <div className="absolute top-4 right-4">
              <div className="flex items-center space-x-1 bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium">
                <CheckCircle className="h-3 w-3" />
                <span>Live</span>
              </div>
            </div>
            <CardContent className="p-8">
              <div className="mb-6">
                <Sparkles className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-3">Hotel AI Chieftain</h3>
                <p className="text-muted-foreground mb-6">
                  Revolutionizing hospitality management with intelligent automation, guest experience optimization, and operational efficiency.
                </p>
              </div>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-accent" />
                  <span>Guest Experience Management</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-accent" />
                  <span>Revenue Optimization</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-accent" />
                  <span>Operational Intelligence</span>
                </div>
              </div>

              <Button 
                className="w-full group-hover:scale-105 transition-transform duration-300" 
                asChild
              >
                <a 
                  href="https://ai-chieftain.webisdomtech.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Explore Hotel AI Chieftain
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Fintech Solutions - Coming Soon */}
          <Card className="relative overflow-hidden card-gradient hover:shadow-strong transition-all duration-500 group opacity-75">
            <div className="absolute top-4 right-4">
              <div className="flex items-center space-x-1 bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm font-medium">
                <Clock className="h-3 w-3" />
                <span>Coming Soon</span>
              </div>
            </div>
            <CardContent className="p-8">
              <div className="mb-6">
                <Sparkles className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-3">Fintech AI Solutions</h3>
                <p className="text-muted-foreground mb-6">
                  Next-generation financial intelligence for risk management, fraud detection, and customer insights.
                </p>
              </div>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>Risk Assessment AI</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>Fraud Detection Systems</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>Customer Analytics</span>
                </div>
              </div>

              <Button variant="outline" className="w-full" disabled>
                Join Waitlist
              </Button>
            </CardContent>
          </Card>

          {/* Healthcare Solutions - Coming Soon */}
          <Card className="relative overflow-hidden card-gradient hover:shadow-strong transition-all duration-500 group opacity-75">
            <div className="absolute top-4 right-4">
              <div className="flex items-center space-x-1 bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm font-medium">
                <Clock className="h-3 w-3" />
                <span>Coming Soon</span>
              </div>
            </div>
            <CardContent className="p-8">
              <div className="mb-6">
                <Sparkles className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-3">Healthcare AI Platform</h3>
                <p className="text-muted-foreground mb-6">
                  Intelligent healthcare solutions for patient care optimization and medical decision support.
                </p>
              </div>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>Patient Care Intelligence</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>Medical Decision Support</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>Predictive Analytics</span>
                </div>
              </div>

              <Button variant="outline" className="w-full" disabled>
                Join Waitlist
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;