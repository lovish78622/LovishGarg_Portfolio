import { Button } from "@/components/ui/button";
import { ArrowDown, Eye, Play } from "lucide-react";
import lovishPortrait from "@/assets/lovish-hero.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-primary rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 border-2 border-primary rotate-45 animate-pulse delay-300"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 border-2 border-primary-glow rotate-12 animate-pulse delay-700"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 fade-in-up">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-primary font-medium tracking-wide">👋 Hi, I'm Lovish Garg</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-montserrat font-bold hero-title leading-tight">
                AI & Data Science
                <br />
                <span className="text-glow">Enthusiast</span>
              </h1>
              
              <p className="text-xs font-medium text-primary/80 tracking-widest uppercase mt-2">
                Building Intelligent Solutions
              </p>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-md">
                Passionate about Artificial Intelligence and cutting-edge technology. 
                B.Tech student specializing in AI & Data Science, ready to innovate and create impact.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="btn-hero group px-8 py-4 text-lg font-semibold"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span>Contact Me</span>
                <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-4 text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => window.open("https://github.com/lovish78622/", "_blank")}
              >
                <Eye className="mr-2 h-5 w-5" />
                View My Work
              </Button>
            </div>
            
            <div className="flex justify-center pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">2023</div>
                <div className="text-sm text-muted-foreground">Started Journey</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Profile Image */}
          <div className="relative fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
              {/* Animated background circles */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-primary-glow/20 animate-pulse"></div>
              <div className="absolute inset-2 rounded-full border-2 border-primary/30 animate-spin" style={{ animationDuration: '10s' }}></div>
              <div className="absolute inset-8 rounded-full border border-primary/20 animate-pulse"></div>
              
              {/* Profile Image */}
              <img 
                src={lovishPortrait}
                alt="Lovish Garg - AI Engineer & Developer"
                className="absolute inset-4 w-full h-full object-cover rounded-full shadow-2xl glow-primary"
              />
              
              {/* Floating tech badges */}
              <div className="absolute -top-4 -right-4 bg-card px-3 py-2 rounded-lg border border-primary/50 glow-primary animate-bounce">
                <span className="text-sm font-semibold text-primary">AI/DS</span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-card px-3 py-2 rounded-lg border border-primary/50 glow-primary animate-bounce" style={{ animationDelay: '0.5s' }}>
                <span className="text-sm font-semibold text-primary">B.Tech</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2 animate-bounce">
          <span className="text-sm text-muted-foreground">Scroll down</span>
          <ArrowDown className="h-4 w-4 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;