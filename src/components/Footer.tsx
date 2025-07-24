import { Github, Linkedin, Twitter, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/MalayaWilburd", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/malaya-wilburd-751aa82ba", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/malayatech?s=11", label: "Twitter" },
  ];

  const quickLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="text-2xl font-bold mb-4">
                <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                  Portfolio
                </span>
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Aspiring Software Engineer focused on AI/Machine Learning, driven by a passion for building 
                data-driven, impactful solutions and seamless user experiences with clean, efficient code.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="p-2 bg-card rounded-lg hover:bg-primary hover:text-primary-foreground transition-smooth shadow-soft hover:shadow-medium"
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
              <nav className="space-y-2">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Get In Touch</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>malayawilburd.dev@gmail.com</p>
                <p>+1 (501) 283-1498</p>
                <p>Little Rock, AR</p>
              </div>
              <div className="mt-4 p-4 bg-gradient-to-r from-primary/5 to-primary-glow/5 rounded-lg border border-primary/10">
                <p className="text-sm text-muted-foreground mb-2">
                  Available for new opportunities
                </p>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-success">Available for hire</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-muted-foreground text-sm">
                © {currentYear} Portfolio. All rights reserved.
              </div>
              
              <div className="flex items-center space-x-1 text-muted-foreground text-sm">
                Malaya Wilburd
              </div>
              
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                  Made with using React & Tailwind CSS
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;