import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission",
      description: "Building domain-specific AI solutions that deliver measurable impact across Hospitality, Fintech, and Healthcare industries."
    },
    {
      icon: Eye,
      title: "Vision", 
      description: "To be the trusted AI partner for enterprises, transforming industries through intelligent, scalable, and future-ready solutions."
    },
    {
      icon: Users,
      title: "Values",
      description: "Innovation, integrity, and impact drive everything we do. We believe in creating AI that serves humanity and enhances business outcomes."
    }
  ];

  const teamMembers = [
    {
      name: "Atharv Sharma",
      role: "Founder & CEO",
      image: "/api/placeholder/300/300",
      description: "Visionary leader with expertise in AI strategy and business transformation."
    },
    // Add more team members as needed
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
                About <span className="text-gradient">Webisdom AI</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                We're pioneering the future of AI-driven business transformation, one industry at a time.
              </p>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                    Transforming Industries with <span className="text-gradient">Intelligent AI</span>
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    At Webisdom AI Solutions, we believe that artificial intelligence should be more than just a buzzword—it should be a powerful tool that creates real, measurable impact for businesses.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    Founded with the vision of democratizing AI across key industries, we specialize in building domain-specific solutions that understand the unique challenges and opportunities within Hospitality, Fintech, and Healthcare sectors.
                  </p>
                  <p className="text-muted-foreground">
                    Our flagship product, Hotel AI Chieftain, is already transforming hospitality operations worldwide. As we expand into Fintech and Healthcare, we remain committed to delivering AI solutions that are not just technologically advanced, but practically valuable.
                  </p>
                </div>
                <div className="relative">
                  <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Users className="h-10 w-10 text-white" />
                      </div>
                      <p className="text-muted-foreground">
                        Building the future of AI-driven business solutions
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Our <span className="text-gradient">Foundation</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The principles that guide our innovation and drive our commitment to excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <Card key={value.title} className="card-gradient hover:shadow-medium transition-all duration-300 text-center">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Meet Our <span className="text-gradient">Team</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The brilliant minds behind Webisdom AI Solutions, dedicated to pushing the boundaries of what's possible with artificial intelligence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <Card key={member.name} className="card-gradient hover:shadow-medium transition-all duration-300 text-center">
                  <CardContent className="p-8">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                      <Users className="h-12 w-12 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                    <p className="text-accent font-medium mb-4">{member.role}</p>
                    <p className="text-muted-foreground text-sm">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Card className="max-w-2xl mx-auto card-gradient">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Join Our Growing Team</h3>
                  <p className="text-muted-foreground mb-6">
                    We're always looking for talented individuals who share our passion for AI innovation and business transformation.
                  </p>
                  <p className="text-muted-foreground">
                    Interested in working with us? Reach out to learn about current opportunities.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Industry Focus */}
        <section className="py-24 bg-gradient-to-br from-accent/10 to-primary/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Industries We <span className="text-gradient">Transform</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {["Hospitality", "Fintech", "Healthcare"].map((industry, index) => (
                <Card key={industry} className="card-gradient hover:shadow-medium transition-all duration-300 text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl font-bold text-white">{index + 1}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-4">{industry}</h3>
                    <p className="text-muted-foreground">
                      {industry === "Hospitality" && "Revolutionizing guest experiences and operational efficiency with our Hotel AI Chieftain platform."}
                      {industry === "Fintech" && "Next-generation financial intelligence for risk management and customer insights. Coming soon."}
                      {industry === "Healthcare" && "Intelligent healthcare solutions for patient care optimization. Coming soon."}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;