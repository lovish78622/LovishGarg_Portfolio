import { Card } from "@/components/ui/card";
import { GraduationCap, Briefcase, Heart, Target } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "B.Tech in AI & Data Science",
      detail: "Delhi Technical Campus (2023-2027)"
    },
    {
      icon: Briefcase,
      title: "Experience",
      description: "HCL Technologies Intern",
      detail: "7 weeks contributing to Microsoft projects"
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Artificial Intelligence",
      detail: "Exploring innovative AI technologies"
    },
    {
      icon: Target,
      title: "Goal",
      description: "Future AI Professional",
      detail: "Creating meaningful impact through technology"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-montserrat font-bold mb-6 section-divider">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate technology enthusiast on a journey to master the world of Artificial Intelligence
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Main Description */}
          <div className="space-y-6 fade-in-up">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">
                Hi there! I'm Lovish Garg
              </h3>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I'm currently pursuing my <strong className="text-primary">B.Tech in Artificial Intelligence and Data Science</strong> at Delhi Technical Campus (Session 2023–2027). My journey in technology is driven by an insatiable curiosity about how AI can transform our world.
                </p>
                <p>
                  What excites me most about AI is its potential to solve complex real-world problems. From machine learning algorithms to prompt engineering, I'm constantly exploring innovative technologies and applying them to meaningful projects.
                </p>
                <p>
                  With a blend of <strong className="text-primary">technical expertise and strong communication skills</strong>, I aim to bridge the gap between complex AI concepts and practical applications. My goal is to grow as a future AI professional who contributes to impactful, game-changing solutions.
                </p>
              </div>
            </div>
            
            <div className="pt-6">
              <h2 className="text-3xl font-montserrat font-bold mb-6 text-foreground">What I <span className="text-primary">Bring</span></h2>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Strong analytical and problem-solving mindset</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Excellent communication and presentation skills</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Passionate about continuous learning and innovation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Team collaboration and leadership qualities</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right - Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 fade-in-up" style={{ animationDelay: '0.2s' }}>
            {highlights.map((item, index) => (
              <Card 
                key={index} 
                className="card-gradient card-hover p-6 text-center group"
              >
                <div className="mb-4">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h4 className="text-lg font-semibold mb-2 text-foreground">{item.title}</h4>
                <p className="text-primary font-medium mb-1">{item.description}</p>
                <p className="text-sm text-muted-foreground">{item.detail}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;