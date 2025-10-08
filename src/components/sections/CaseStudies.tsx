import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, TrendingUp, Users, Star, Building2, Calendar } from "lucide-react";

const CaseStudies = () => {
  const caseStudies = [
    {
      id: "ai-chieftain-ilora",
      product: "AI Chieftain",
      client: "Ilora Retreats",
      clientType: "Luxury Safari Resort",
      location: "Masai Mara, Kenya",
      website: "https://ilora-retreats.com/",
      implementation: "https://webisdomtech.com/ilora_case",
      image: "/lovable-uploads/2ca69ba8-ceb5-425d-92d5-52e9066faf81.png",
      challenge: "Ilora Retreats, a premium luxury safari camp in Masai Mara, needed an intelligent system to manage guest experiences, coordinate safari activities, and optimize staff operations while maintaining the intimate, personalized touch expected by high-end travelers.",
      solution: "AI Chieftain was customized to handle the unique demands of a luxury safari retreat, integrating guest preferences with wildlife activity patterns, weather conditions, and staff availability to create seamless, memorable experiences.",
      results: [
        { metric: "Guest Satisfaction", value: "95%", description: "Increase in positive reviews" },
        { metric: "Operational Efficiency", value: "40%", description: "Reduction in manual coordination" },
        { metric: "Revenue Growth", value: "28%", description: "Increase in repeat bookings" },
        { metric: "Staff Productivity", value: "35%", description: "Improvement in task completion" }
      ],
      features: [
        "Personalized Safari Scheduling",
        "Real-time Wildlife Activity Tracking",
        "Automated Guest Preference Management",
        "Dynamic Meal Planning & Dietary Management",
        "Staff Coordination & Task Assignment",
        "Weather-based Activity Recommendations"
      ],
      testimonial: {
        quote: "AI Chieftain transformed how we manage our luxury retreat. Our guests receive personalized safari experiences while our staff operates more efficiently than ever.",
        author: "Operations Manager",
        company: "Ilora Retreats"
      },
      timeline: "3 months implementation, 2 weeks training",
      roi: "Investment recovered in 6 months"
    },
    {
      id: "ai-pms-ilora",
      product: "AI Property Management System",
      client: "Ilora Retreats",
      clientType: "Luxury Safari Resort",
      location: "Masai Mara, Kenya",
      website: "https://ilora-retreats.com/",
      implementation: "https://webisdomservices.in",
      image: "/lovable-uploads/506b0336-44ee-4e68-8cea-73e6a5f369ca.png",
      challenge: "Managing multiple luxury tents, coordinating housekeeping in a remote location, tracking inventory for a high-end property, and maintaining the pristine standards expected by luxury travelers required a sophisticated yet user-friendly system.",
      solution: "Our AI-powered Property Management System was tailored for Ilora's unique environment, providing comprehensive management of accommodations, inventory, maintenance, and guest services with offline capabilities for remote operations.",
      results: [
        { metric: "Property Maintenance", value: "45%", description: "Faster issue resolution" },
        { metric: "Inventory Accuracy", value: "99%", description: "Stock tracking precision" },
        { metric: "Housekeeping Efficiency", value: "50%", description: "Improved scheduling" },
        { metric: "Guest Experience", value: "92%", description: "Satisfaction rating" }
      ],
      features: [
        "Tent & Accommodation Management",
        "Intelligent Inventory Control",
        "Predictive Maintenance Alerts",
        "Housekeeping Workflow Optimization",
        "Guest Profile & Preference Tracking",
        "Offline Operation Capability"
      ],
      testimonial: {
        quote: "The AI PMS handles the complexity of running a luxury safari camp seamlessly. From tent maintenance to inventory management, everything is at our fingertips.",
        author: "General Manager",
        company: "Ilora Retreats"
      },
      timeline: "2 months implementation, 1 week training",
      roi: "Investment recovered in 5 months"
    }
  ];

  return (
    <div className="space-y-16">
      {caseStudies.map((study, index) => (
        <div key={study.id}>
          <Card className="overflow-hidden">
            <CardHeader className="bg-gradient-to-br from-primary/10 to-accent/10">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                <div>
                  <Badge variant="outline" className="mb-2">{study.product}</Badge>
                  <CardTitle className="text-3xl mb-2">{study.client}</CardTitle>
                  <div className="flex flex-wrap gap-2 text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Building2 className="w-4 h-4" />
                      <span className="text-sm">{study.clientType}</span>
                    </div>
                    <span className="text-sm">•</span>
                    <span className="text-sm">{study.location}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" asChild>
                    <a href={study.website} target="_blank" rel="noopener noreferrer">
                      Visit Website
                    </a>
                  </Button>
                  <Button asChild>
                    <a href={study.implementation} target="_blank" rel="noopener noreferrer">
                      View Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-8 space-y-8">
              {/* Challenge & Solution */}
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 bg-destructive/10 rounded-full flex items-center justify-center text-destructive">!</span>
                    The Challenge
                  </h3>
                  <p className="text-muted-foreground">{study.challenge}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary">✓</span>
                    Our Solution
                  </h3>
                  <p className="text-muted-foreground">{study.solution}</p>
                </div>
              </div>

              {/* Results */}
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-accent" />
                  Measurable Results
                </h3>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {study.results.map((result, i) => (
                    <Card key={i} className="text-center p-4 bg-gradient-to-br from-primary/5 to-accent/5">
                      <div className="text-3xl font-bold text-primary mb-1">{result.value}</div>
                      <div className="font-semibold text-sm mb-1">{result.metric}</div>
                      <div className="text-xs text-muted-foreground">{result.description}</div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Features Implemented */}
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  Key Features Implemented
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {study.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-6 rounded-xl">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <blockquote className="text-lg italic mb-4">"{study.testimonial.quote}"</blockquote>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-muted-foreground" />
                  <cite className="not-italic font-semibold">{study.testimonial.author}</cite>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-sm text-muted-foreground">{study.testimonial.company}</span>
                </div>
              </div>

              {/* Timeline & ROI */}
              <div className="grid md:grid-cols-2 gap-4 p-4 bg-muted/30 rounded-lg">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-semibold text-sm">Implementation Timeline</div>
                    <div className="text-sm text-muted-foreground">{study.timeline}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-accent" />
                  <div>
                    <div className="font-semibold text-sm">Return on Investment</div>
                    <div className="text-sm text-muted-foreground">{study.roi}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {index < caseStudies.length - 1 && (
            <div className="my-12 border-t border-border"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CaseStudies;