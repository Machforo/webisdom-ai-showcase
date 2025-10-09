import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Hotel, Heart, Building2, TrendingUp, Users, Shield, Zap, BarChart3, Clock, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Industries = () => {
  const industries = [
    {
      id: "hospitality",
      title: "Hospitality",
      icon: Hotel,
      gradient: "from-blue-500 to-purple-600",
      description: "Revolutionary AI solutions for hotels, resorts, and hospitality businesses to enhance guest experience and operational efficiency.",
      challenges: [
        "Manual check-in/check-out processes",
        "Inefficient room management",
        "Poor guest experience tracking",
        "Revenue optimization difficulties",
        "Staff scheduling complexities"
      ],
      solutions: [
        "AI-powered guest experience management",
        "Automated room allocation and pricing",
        "Predictive maintenance systems",
        "Smart concierge services",
        "Revenue optimization algorithms"
      ],
      benefits: [
        "40% reduction in operational costs",
        "60% faster check-in/check-out",
        "35% increase in guest satisfaction",
        "25% improvement in revenue per room"
      ],
      caseStudy: {
        title: "Luxury Resort Chain",
        result: "Implemented AI Chieftain across 50+ properties, resulting in $2M annual savings and 45% increase in guest satisfaction scores."
      },
      products: ["AI Chieftain", "Hotel Management System"]
    },
    {
      id: "healthcare",
      title: "Healthcare",
      icon: Heart,
      gradient: "from-green-500 to-blue-600",
      description: "Advanced AI solutions for healthcare providers to improve patient outcomes, streamline operations, and enhance medical decision-making.",
      challenges: [
        "Patient data management complexity",
        "Appointment scheduling inefficiencies",
        "Medical record digitization",
        "Resource allocation optimization",
        "Compliance and regulatory requirements"
      ],
      solutions: [
        "AI-driven patient care optimization",
        "Predictive health analytics",
        "Automated appointment scheduling",
        "Medical imaging analysis",
        "Treatment recommendation systems"
      ],
      benefits: [
        "50% reduction in administrative tasks",
        "30% improvement in patient care efficiency",
        "25% faster diagnosis and treatment",
        "90% accuracy in predictive health alerts"
      ],
      caseStudy: {
        title: "Multi-specialty Hospital Network",
        result: "AI implementation reduced patient wait times by 40% and improved diagnostic accuracy by 35% across 15 facilities."
      },
      products: ["Healthcare AI Platform", "Patient Management System"]
    },
    {
      id: "fintech",
      title: "Fintech",
      icon: Building2,
      gradient: "from-orange-500 to-red-600",
      description: "Cutting-edge AI solutions for financial institutions to enhance security, automate processes, and improve customer experience.",
      challenges: [
        "Fraud detection and prevention",
        "Risk assessment automation",
        "Customer onboarding complexity",
        "Regulatory compliance management",
        "Real-time transaction processing"
      ],
      solutions: [
        "AI-powered fraud detection systems",
        "Automated risk assessment tools",
        "Intelligent customer onboarding",
        "Compliance monitoring automation",
        "Predictive financial analytics"
      ],
      benefits: [
        "95% fraud detection accuracy",
        "70% faster customer onboarding",
        "60% reduction in compliance costs",
        "40% improvement in risk assessment"
      ],
      caseStudy: {
        title: "Digital Banking Platform",
        result: "AI fraud detection system prevented $15M in potential losses while reducing false positives by 80%."
      },
      products: ["Financial AI Suite", "Risk Management Platform"]
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
                Industries We <span className="text-gradient">Serve</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Transforming businesses across key industries with tailored AI solutions that drive innovation and growth.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="secondary" className="px-4 py-2">
                  <Hotel className="w-4 h-4 mr-2" />
                  Hospitality
                </Badge>
                <Badge variant="secondary" className="px-4 py-2">
                  <Heart className="w-4 h-4 mr-2" />
                  Healthcare
                </Badge>
                <Badge variant="secondary" className="px-4 py-2">
                  <Building2 className="w-4 h-4 mr-2" />
                  Fintech
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Industries Sections */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-32">
              {industries.map((industry, index) => {
                const IconComponent = industry.icon;
                return (
                  <div key={industry.id} className="relative">
                    {/* Industry Header */}
                    <div className="text-center mb-16">
                      <div className={`w-20 h-20 bg-gradient-to-r ${industry.gradient} rounded-full flex items-center justify-center mx-auto mb-6`}>
                        <IconComponent className="w-10 h-10 text-white" />
                      </div>
                      <h2 className="text-4xl font-bold mb-4">{industry.title}</h2>
                      <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        {industry.description}
                      </p>
                    </div>

                    {/* Industry Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                      {/* Challenges & Solutions */}
                      <div className="space-y-8">
                        <Card className="p-8">
                          <CardHeader className="p-0 mb-6">
                            <CardTitle className="flex items-center text-xl">
                              <TrendingUp className="w-6 h-6 text-red-500 mr-3" />
                              Industry Challenges
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="p-0">
                            <ul className="space-y-3">
                              {industry.challenges.map((challenge, i) => (
                                <li key={i} className="flex items-start space-x-3">
                                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span className="text-muted-foreground">{challenge}</span>
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>

                        <Card className="p-8">
                          <CardHeader className="p-0 mb-6">
                            <CardTitle className="flex items-center text-xl">
                              <Zap className="w-6 h-6 text-primary mr-3" />
                              Our AI Solutions
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="p-0">
                            <ul className="space-y-3">
                              {industry.solutions.map((solution, i) => (
                                <li key={i} className="flex items-start space-x-3">
                                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                  <span>{solution}</span>
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      </div>

                      {/* Benefits & Case Study */}
                      <div className="space-y-8">
                        <Card className="p-8">
                          <CardHeader className="p-0 mb-6">
                            <CardTitle className="flex items-center text-xl">
                              <BarChart3 className="w-6 h-6 text-accent mr-3" />
                              Proven Benefits
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="p-0">
                            <ul className="space-y-4">
                              {industry.benefits.map((benefit, i) => (
                                <li key={i} className="flex items-center space-x-3">
                                  <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                                    <TrendingUp className="w-4 h-4 text-accent" />
                                  </div>
                                  <span className="font-medium">{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>

                        <Card className={`p-8 bg-gradient-to-br ${industry.gradient} text-white`}>
                          <CardHeader className="p-0 mb-6">
                            <CardTitle className="text-xl">
                              Success Story: {industry.caseStudy.title}
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="p-0">
                            <p className="opacity-90 mb-6">{industry.caseStudy.result}</p>
                            <Button variant="secondary" size="sm" asChild>
                              <a href="/products#case-studies">
                                Read Full Case Study
                                <ArrowRight className="ml-2 w-4 h-4" />
                              </a>
                            </Button>
                          </CardContent>
                        </Card>
                      </div>
                    </div>

                    {/* Products for Industry */}
                    <Card className="p-8 bg-muted/50">
                      <div className="text-center">
                        <h3 className="text-2xl font-bold mb-4">Our {industry.title} Solutions</h3>
                        <div className="flex flex-wrap justify-center gap-4 mb-6">
                          {industry.products.map((product, i) => (
                            <Badge key={i} variant="default" className="px-4 py-2">
                              {product}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                          <Button asChild>
                            <Link to="/products">Explore Solutions</Link>
                          </Button>
                          <Button variant="outline" asChild>
                            <Link to="/contact">Request Demo</Link>
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-24 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-6">Why Industry Leaders Choose Us</h2>
              <p className="text-muted-foreground text-lg">
                We combine deep industry expertise with cutting-edge AI technology to deliver solutions that truly transform businesses.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Industry Expertise</h3>
                <p className="text-sm text-muted-foreground">
                  Deep understanding of sector-specific challenges and requirements.
                </p>
              </Card>

              <Card className="text-center p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-bold mb-2">Enterprise Security</h3>
                <p className="text-sm text-muted-foreground">
                  Bank-grade security with compliance to industry standards.
                </p>
              </Card>

              <Card className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Rapid Deployment</h3>
                <p className="text-sm text-muted-foreground">
                  Quick implementation with minimal disruption to operations.
                </p>
              </Card>

              <Card className="text-center p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-bold mb-2">Measurable ROI</h3>
                <p className="text-sm text-muted-foreground">
                  Proven track record of delivering significant returns on investment.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-primary to-accent text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Industry?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join the leaders in your industry who are already leveraging AI to drive innovation and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">Schedule Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary" asChild>
                <Link to="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Industries;