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

        {/* Services Grid */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Hotel AI Chieftain */}
              <Card className="card-gradient hover:shadow-strong transition-all duration-500">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl">Hotel AI Chieftain</CardTitle>
                    <div className="flex items-center space-x-1 bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium">
                      <CheckCircle className="h-3 w-3" />
                      <span>Live</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">
                    Revolutionary hospitality management platform that transforms hotel operations with intelligent automation and guest experience optimization.
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold">Key Features:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        <span className="text-sm">Intelligent Guest Experience Management</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        <span className="text-sm">Dynamic Revenue Optimization</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        <span className="text-sm">Operational Intelligence & Analytics</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        <span className="text-sm">Automated Workflow Management</span>
                      </li>
                    </ul>
                  </div>

                  <Button className="w-full" asChild>
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

              {/* AI Audit as a Service */}
              <Card className="card-gradient hover:shadow-strong transition-all duration-500">
                <CardHeader>
                  <CardTitle className="text-2xl">AI Audit as a Service</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">
                    Comprehensive AI readiness assessment that identifies opportunities, analyzes potential, and delivers actionable insights for successful AI adoption.
                  </p>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold">What You Get:</h4>
                    <ul className="space-y-2">
                      {auditBenefits.map((benefit, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full" asChild>
                    <Link to="/contact">
                      Request AI Audit
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Fintech Solutions */}
              <Card className="card-gradient hover:shadow-strong transition-all duration-500 opacity-75">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl">Fintech AI Solutions</CardTitle>
                    <div className="flex items-center space-x-1 bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm font-medium">
                      <Clock className="h-3 w-3" />
                      <span>Coming Soon</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">
                    Next-generation financial intelligence platform for risk management, fraud detection, and customer insights.
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold">Planned Features:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span className="text-sm">Advanced Risk Assessment AI</span>
                      </li>
                      <li className="flex items-center space-x-2 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span className="text-sm">Real-time Fraud Detection</span>
                      </li>
                      <li className="flex items-center space-x-2 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span className="text-sm">Predictive Customer Analytics</span>
                      </li>
                    </ul>
                  </div>

                  <Button variant="outline" className="w-full" disabled>
                    Join Waitlist
                  </Button>
                </CardContent>
              </Card>

              {/* Healthcare Solutions */}
              <Card className="card-gradient hover:shadow-strong transition-all duration-500 opacity-75">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl">Healthcare AI Platform</CardTitle>
                    <div className="flex items-center space-x-1 bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm font-medium">
                      <Clock className="h-3 w-3" />
                      <span>Coming Soon</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">
                    Intelligent healthcare solutions for patient care optimization and medical decision support systems.
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold">Planned Features:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span className="text-sm">Patient Care Intelligence</span>
                      </li>
                      <li className="flex items-center space-x-2 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span className="text-sm">Medical Decision Support AI</span>
                      </li>
                      <li className="flex items-center space-x-2 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span className="text-sm">Predictive Health Analytics</span>
                      </li>
                    </ul>
                  </div>

                  <Button variant="outline" className="w-full" disabled>
                    Join Waitlist
                  </Button>
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