import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";

import Services from "@/components/Services";
import Contact from "@/components/Contact";

const Index = () => {
  console.log('Index component rendering...');
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-16">
        <section id="home">
          <Hero />
        </section>
        
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Services />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xs">LG</span>
              </div>
              <span className="text-muted-foreground">
                © 2025 Lovish Garg. All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;