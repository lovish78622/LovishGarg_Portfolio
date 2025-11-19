import { Button } from "@/components/ui/button";
import { Menu, X, Home, User, Code, Briefcase, FolderOpen, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "skills", label: "Skills", icon: Code },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "projects", label: "Projects", icon: FolderOpen },
    { id: "contact", label: "Contact", icon: MessageCircle }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">LG</span>
            </div>
            <span className="font-montserrat font-bold text-lg text-foreground">Lovish Garg</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-300 ${
                  activeSection === item.id
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                <item.icon className="h-4 w-4" />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              className="btn-hero"
              onClick={() => scrollToSection("contact")}
            >
              Let's Talk
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-foreground hover:bg-primary/10 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border">
            <div className="px-6 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center space-x-3 w-full px-4 py-3 rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
              <div className="pt-4">
                <Button 
                  className="btn-hero w-full"
                  onClick={() => scrollToSection("contact")}
                >
                  Let's Talk
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;