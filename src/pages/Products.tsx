import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Zap, Shield, BarChart3, Users, Calendar, MessageSquare, Brain, Hotel, Utensils } from "lucide-react";

const Products = () => {
  const products = [
    {
      id: "ai-chieftain",
      title: "AI Chieftain",
      subtitle: "Hotel Management Revolution",
      description: "Complete AI-powered hotel management system that transforms guest experience and operational efficiency.",
      url: "https://ai-chieftain.webisdomtech.com",
      category: "Hospitality AI",
      status: "Live Platform",
      image: "/lovable-uploads/2ca69ba8-ceb5-425d-92d5-52e9066faf81.png",
      features: [
        "Smart Room Management",
        "Guest Experience AI",
        "Revenue Optimization",
        "Predictive Analytics",
        "Automated Check-in/out",
        "Real-time Reporting"
      ],
      technologies: ["Machine Learning", "Natural Language Processing", "IoT Integration", "Cloud Computing"],
      benefits: [
        "30% increase in operational efficiency",
        "25% improvement in guest satisfaction",
        "40% reduction in manual tasks",
        "Real-time insights and analytics"
      ]
    },
    {
      id: "hotel-management",
      title: "AI Hotel Management System",
      subtitle: "Enterprise Hotel Operations",
      description: "Advanced enterprise-grade hotel management platform with comprehensive AI-driven features for large hotel chains.",
      url: "https://app.webisdomtech.com",
      category: "Enterprise Solution",
      status: "Production Ready",
      image: "/lovable-uploads/506b0336-44ee-4e68-8cea-73e6a5f369ca.png",
      features: [
        "Multi-property Management",
        "Advanced Analytics Dashboard",
        "AI-powered Pricing Strategy",
        "Guest Behavior Analysis",
        "Inventory Management",
        "Staff Optimization"
      ],
      technologies: ["Advanced AI", "Big Data Analytics", "Cloud Infrastructure", "Mobile Integration"],
      benefits: [
        "50% faster decision making",
        "35% increase in revenue per room",
        "60% reduction in operational costs",
        "24/7 automated operations"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                AI-Powered <span className="text-gradient">Products</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Discover our cutting-edge AI solutions designed to transform your business operations and drive unprecedented growth.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="secondary" className="px-4 py-2">
                  <Brain className="w-4 h-4 mr-2" />
                  AI-Powered
                </Badge>
                <Badge variant="secondary" className="px-4 py-2">
                  <Shield className="w-4 h-4 mr-2" />
                  Enterprise Ready
                </Badge>
                <Badge variant="secondary" className="px-4 py-2">
                  <Zap className="w-4 h-4 mr-2" />
                  Real-time Analytics
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {products.map((product, index) => (
                <div key={product.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Product Image */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <Card className="overflow-hidden">
                      <div className="aspect-video relative bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                        {product.id === "ai-chieftain" ? (
                          <Hotel className="w-24 h-24 text-primary/60" />
                        ) : (
                          <BarChart3 className="w-24 h-24 text-primary/60" />
                        )}
                        <div className="absolute top-4 right-4">
                          <Badge variant="default">{product.status}</Badge>
                        </div>
                      </div>
                    </Card>
                  </div>

                  {/* Product Details */}
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <div>
                      <Badge variant="outline" className="mb-4">{product.category}</Badge>
                      <h2 className="text-3xl font-bold mb-3">{product.title}</h2>
                      <h3 className="text-xl text-primary mb-4">{product.subtitle}</h3>
                      <p className="text-muted-foreground text-lg">{product.description}</p>
                    </div>

                    {/* Key Features */}
                    <div>
                      <h4 className="font-semibold mb-3">Key Features</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {product.features.map((feature, i) => (
                          <div key={i} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h4 className="font-semibold mb-3">Proven Results</h4>
                      <div className="space-y-2">
                        {product.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-center space-x-2">
                            <BarChart3 className="w-4 h-4 text-accent" />
                            <span className="text-sm font-medium">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.technologies.map((tech, i) => (
                          <Badge key={i} variant="secondary">{tech}</Badge>
                        ))}
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <Button asChild>
                        <a href={product.url} target="_blank" rel="noopener noreferrer">
                          Explore Platform
                          <ExternalLink className="ml-2 w-4 h-4" />
                        </a>
                      </Button>
                      <Button variant="outline" asChild>
                        <a href="/contact">Request Demo</a>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Our Products */}
        <section className="py-24 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-6">Why Choose Our AI Products?</h2>
              <p className="text-muted-foreground text-lg">
                Our products are built with cutting-edge AI technology and deep industry expertise to deliver measurable results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Brain className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Advanced AI Technology</h3>
                <p className="text-muted-foreground">
                  Built with state-of-the-art machine learning algorithms and neural networks for superior performance.
                </p>
              </Card>

              <Card className="text-center p-8">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-4">Industry Expertise</h3>
                <p className="text-muted-foreground">
                  Developed by industry experts with deep understanding of business processes and challenges.
                </p>
              </Card>

              <Card className="text-center p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Enterprise Security</h3>
                <p className="text-muted-foreground">
                  Bank-grade security with compliance to international standards and data protection regulations.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-primary to-accent text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join hundreds of companies already using our AI solutions to drive growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="/contact">Schedule a Demo</a>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary" asChild>
                <a href="/contact">Contact Sales</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;