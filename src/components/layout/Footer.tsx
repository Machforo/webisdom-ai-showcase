import { Link } from "react-router-dom";
import { Linkedin, Twitter, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/261cb841-1550-43b8-927d-f30d8e8fb3c7.png" 
                alt="Webisdom AI Solutions" 
                className="h-16 sm:h-20 w-auto brightness-0 invert"
              />
              <span className="text-lg font-bold">Webisdom AI</span>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Building domain-specific AI solutions that deliver measurable impact across Hospitality, Fintech, and Healthcare.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/webisdom" target="_blank" rel="noopener noreferrer" aria-label="Webisdom LinkedIn" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://x.com/Webisdom" target="_blank" rel="noopener noreferrer" aria-label="Webisdom Twitter" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Twitter size={20} />
              </a>
              <a href="mailto:contact@webisdom.ai" aria-label="Email Webisdom" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="https://ai-chieftain.webisdomtech.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Hotel AI Chieftain
                </a>
              </li>
              <li>
                <Link to="/services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  AI Audit Service
                </Link>
              </li>
              <li>
                <span className="text-primary-foreground/60">Fintech Solutions (Coming Soon)</span>
              </li>
              <li>
                <span className="text-primary-foreground/60">Healthcare Solutions (Coming Soon)</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-start space-x-2">
                <Mail size={16} className="mt-0.5 text-primary-foreground/80" />
                <div className="flex flex-col gap-1">
                  <a 
                    href="mailto:contact@webisdom.ai" 
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    contact@webisdom.ai
                  </a>
                  <a 
                    href="mailto:atharv.kumar@webisdom.ai" 
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    atharv.kumar@webisdom.ai
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-primary-foreground/80 text-sm">Phone: +91 9569394675</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="mt-0.5 text-primary-foreground/80" />
                <span className="text-primary-foreground/80">
                  First Floor, 8/78, Dentedge, Janpath, Connaught Place, New Delhi, Delhi, 110001
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/80 text-sm">
            © 2024 Webisdom AI Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;