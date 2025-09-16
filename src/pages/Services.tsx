import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Clock, Search, BarChart3, MapPin, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const auditProcess = [
    {
      icon: Search,
      title: "Business Discovery",
      description: "Deep dive into your current operations, workflows, and data infrastructure to understand your unique challenges and opportunities.",
      duration: "1-2 weeks"
    },
    {
      icon: BarChart3,
      title: "AI Opportunity Assessment", 
      description: "Comprehensive analysis of where AI can create the most impact, including feasibility studies and ROI projections.",
      duration: "2-3 weeks"
    },
    {
      icon: MapPin,
      title: "Strategic Roadmap Delivery",
      description: "Detailed implementation plan with timelines, resource requirements, and step-by-step guidance for AI adoption.",
      duration: "1 week"
    }
  ];

  const auditBenefits = [
    "Identify hidden AI opportunities in your business",
    "Get expert analysis of implementation feasibility",
    "Receive detailed ROI projections and cost-benefit analysis",
    "Access strategic roadmap with clear implementation steps",
    "Understand technical requirements and resource needs",
    "Minimize risks with proven AI adoption strategies"
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
                Our <span className="text-gradient">AI Services</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Comprehensive AI solutions tailored for Hospitality, Fintech, and Healthcare industries, plus expert AI auditing services.
              </p>
            </div>
          </div>
        </section>

        {/* AI Audit Service */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Card className="card-gradient hover:shadow-strong transition-all duration-500">
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl">AI Audit as a Service</CardTitle>
                  <p className="text-muted-foreground mt-4">
                    Comprehensive AI readiness assessment that identifies opportunities, analyzes potential, and delivers actionable insights for successful AI adoption.
                  </p>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-lg">What You Get:</h4>
                      <ul className="space-y-3">
                        {auditBenefits.map((benefit, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="font-semibold text-lg">Process Timeline:</h4>
                      <div className="space-y-4">
                        {auditProcess.map((step, index) => (
                          <div key={step.title} className="flex items-start space-x-3">
                            <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                              {index + 1}
                            </div>
                            <div>
                              <h5 className="font-medium">{step.title}</h5>
                              <p className="text-sm text-accent">{step.duration}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="text-center pt-6">
                    <Button size="lg" asChild>
                      <Link to="/contact">
                        Request AI Audit
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* AI Audit Process */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Our AI Audit <span className="text-gradient">Process</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A comprehensive 4-6 week engagement designed to unlock your organization's AI potential.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {auditProcess.map((step, index) => {
                const Icon = step.icon;
                return (
                  <Card key={step.title} className="card-gradient hover:shadow-medium transition-all duration-300 text-center">
                    <CardContent className="p-8">
                      <div className="relative mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto">
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-sm text-accent font-medium mb-4">{step.duration}</p>
                      <p className="text-muted-foreground">{step.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="text-center mt-12">
              <Button size="lg" asChild>
                <Link to="/contact">
                  Start Your AI Audit
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;