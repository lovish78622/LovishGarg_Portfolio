import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Brain, Code2 } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Portfolio Website",
      description: "Modern, responsive portfolio website showcasing AI and development skills with smooth animations and professional design.",
      image: "/placeholder.svg",
      category: "Web Development",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      features: [
        "Responsive design across all devices",
        "Smooth animations and transitions", 
        "Modern dark theme with cyan accents",
        "SEO optimized and performance focused"
      ],
      status: "Completed",
      icon: Code2
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-500/10 text-green-400 border-green-500/20";
      case "In Progress":
        return "bg-primary/10 text-primary border-primary/20";
      case "Planning":
        return "bg-yellow-500/10 text-yellow-400 border-yellow-500/20";
      default:
        return "bg-muted text-muted-foreground border-border";
    }
  };

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-montserrat font-bold mb-6 section-divider">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Showcasing my passion for AI and technology through innovative projects and applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="card-gradient card-hover overflow-hidden group fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image/Icon */}
              <div className="relative h-48 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                <project.icon className="h-16 w-16 text-primary/60 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute top-4 right-4">
                  <Badge className={`${getStatusColor(project.status)} border`}>
                    {project.status}
                  </Badge>
                </div>
              </div>

              <div className="p-8 space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      {project.category}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Key Features</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start space-x-2 text-sm text-muted-foreground">
                          <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {project.technologies && project.technologies.length > 0 && project.title !== "AI-Powered Portfolio Website" && (
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <Badge 
                            key={i} 
                            variant="secondary" 
                            className="bg-primary/5 text-primary border-primary/20 text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex gap-3 pt-4 border-t border-border">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className={`${project.title === "AI-Powered Portfolio Website" ? "w-full" : "flex-1"} border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground`}
                    disabled={project.status === "Planning" || project.title === "Machine Learning Model Trainer"}
                    onClick={() => {
                      if (project.title === "AI-Powered Portfolio Website") {
                        window.open("https://github.com/lovish78622/AI-Portfolio-website", "_blank");
                      }
                    }}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  {project.title !== "AI-Powered Portfolio Website" && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex-1 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
                      disabled={project.status !== "Completed"}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 fade-in-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-muted-foreground mb-6">
            More exciting projects coming soon! Follow my journey as I continue building innovative AI solutions.
          </p>
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            onClick={() => window.open("https://github.com/lovish78622/", "_blank")}
          >
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;