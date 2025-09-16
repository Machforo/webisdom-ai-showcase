import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, CheckCircle, Clock, Sparkles } from "lucide-react";

const ProductShowcase = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Products</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Live AI products delivering measurable results and transforming business operations across industries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* AI Chieftain - Live Product */}
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
                <h3 className="text-2xl font-bold mb-3">AI Chieftain</h3>
                <p className="text-muted-foreground mb-6">
                  Revolutionary hospitality management platform with intelligent automation, guest experience optimization, and operational efficiency.
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
                  Explore AI Chieftain
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* AI Hotel Management System - Live Product */}
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
                <h3 className="text-2xl font-bold mb-3">AI Hotel Management System</h3>
                <p className="text-muted-foreground mb-6">
                  Comprehensive hotel management solution with AI-powered features for seamless operations and enhanced guest satisfaction.
                </p>
              </div>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-accent" />
                  <span>Smart Booking Management</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-accent" />
                  <span>AI-Powered Analytics</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-accent" />
                  <span>Automated Operations</span>
                </div>
              </div>

              <Button 
                className="w-full group-hover:scale-105 transition-transform duration-300" 
                asChild
              >
                <a 
                  href="https://app.webisdomtech.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Explore Hotel Management System
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;