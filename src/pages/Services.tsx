import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, BarChart3, MapPin, CheckCircle, Brain, Eye, TrendingUp, Shield, Cpu, Zap, Target, Sparkles } from "lucide-react";
import { AuditRequestDialog } from "@/components/forms/AuditRequestDialog";
import { DemoRequestDialog } from "@/components/forms/DemoRequestDialog";

const Services = () => {
  const [isAuditDialogOpen, setIsAuditDialogOpen] = useState(false);
  const [isDemoDialogOpen, setIsDemoDialogOpen] = useState(false);

  const auditProcess = [
    {
      icon: Search,
      title: "Performance Benchmarking",
      description: "Comprehensive evaluation of your AI systems against industry standards, identifying optimization opportunities and performance gaps.",
      duration: "1-2 weeks"
    },
    {
      icon: Shield,
      title: "Bias Detection & Ethical Compliance", 
      description: "Advanced analysis to detect algorithmic bias, ensure fairness, and maintain ethical AI standards across all systems.",
      duration: "2-3 weeks"
    },
    {
      icon: MapPin,
      title: "Improvement Roadmap",
      description: "Strategic plan with actionable insights, technical recommendations, and clear implementation pathways for AI optimization.",
      duration: "1 week"
    }
  ];

  const auditBenefits = [
    "Performance benchmarking against industry leaders",
    "Advanced bias detection and fairness analysis",
    "Ethical AI compliance validation and certification",
    "Detailed improvement roadmaps with clear milestones",
    "ROI projections and cost-benefit optimization",
    "Risk mitigation strategies for AI deployment"
  ];

  const aiLabServices = [
    {
      icon: Brain,
      title: "Custom AI Models",
      description: "Tailored machine learning models designed specifically for your business needs, from concept to deployment."
    },
    {
      icon: Cpu,
      title: "NLP Systems",
      description: "Advanced natural language processing solutions for intelligent automation, sentiment analysis, and conversational AI."
    },
    {
      icon: Eye,
      title: "Computer Vision Tools",
      description: "Cutting-edge image and video analysis systems for automated quality control, object detection, and visual intelligence."
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Data-driven forecasting models that transform historical data into actionable future insights and strategic advantages."
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
                Enterprise <span className="text-gradient">AI Solutions</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                From intelligent auditing to custom AI development—empowering businesses with cutting-edge artificial intelligence.
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
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Shield className="h-8 w-8 text-primary" />
                    <CardTitle className="text-3xl">AI Audit as a Service</CardTitle>
                  </div>
                  <p className="text-muted-foreground mt-4 text-lg">
                    Evaluate and optimize your AI systems through advanced performance benchmarking, bias detection, ethical compliance validation, and strategic improvement roadmaps.
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
                    <Button size="lg" onClick={() => setIsAuditDialogOpen(true)}>
                      Request AI Audit
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
                Enterprise-Grade <span className="text-gradient">AI Auditing</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A systematic 4-6 week evaluation process delivering actionable insights for AI excellence.
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
              <Button size="lg" onClick={() => setIsAuditDialogOpen(true)}>
                Start Your AI Audit
              </Button>
            </div>
          </div>
        </section>

        {/* AI Lab Solutions */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Sparkles className="h-10 w-10 text-primary" />
                <h2 className="text-3xl sm:text-4xl font-bold">
                  AI Lab <span className="text-gradient">Solutions</span>
                </h2>
                <Sparkles className="h-10 w-10 text-primary" />
              </div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
                Where innovation meets intelligence. Our AI Lab designs and develops custom AI models, NLP systems, computer vision tools, and predictive analytics solutions that scale with your ambitions.
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We collaborate closely with your team to transform complex challenges into intelligent, scalable solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {aiLabServices.map((service) => {
                const Icon = service.icon;
                return (
                  <Card key={service.title} className="card-gradient hover:shadow-strong transition-all duration-500 group">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <Card className="card-gradient hover:shadow-strong transition-all duration-500 border-primary/20">
              <CardContent className="p-12 text-center">
                <Target className="h-16 w-16 text-primary mx-auto mb-6" />
                <h3 className="text-3xl font-bold mb-4">
                  Transform Your Business with <span className="text-gradient">Intelligent AI Solutions</span>
                </h3>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Ready to unlock the full potential of artificial intelligence? Let's build the future together.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" onClick={() => setIsDemoDialogOpen(true)}>
                    Schedule a Demo
                  </Button>
                  <Button size="lg" variant="outline" onClick={() => setIsAuditDialogOpen(true)}>
                    Request AI Audit
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />

      <AuditRequestDialog open={isAuditDialogOpen} onOpenChange={setIsAuditDialogOpen} />
      <DemoRequestDialog open={isDemoDialogOpen} onOpenChange={setIsDemoDialogOpen} />
    </div>
  );
};

export default Services;