import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Code, 
  Database, 
  MessageSquare, 
  TrendingUp, 
  Lightbulb,
  BarChart3,
  Presentation,
  Users,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "AI Model Development",
      description: "Design and develop custom AI models tailored to your specific business needs and objectives.",
      features: [
        "Custom ML algorithm development",
        "Model training and optimization",
        "Performance monitoring and tuning",
        "Integration with existing systems"
      ],
      color: "text-blue-400",
      gradient: "from-blue-400/10 to-blue-600/10"
    },
    {
      icon: Database,
      title: "Data Science Solutions",
      description: "Transform your raw data into actionable insights through advanced analytics and visualization.",
      features: [
        "Data cleaning and preprocessing",
        "Statistical analysis and modeling",
        "Interactive dashboard creation",
        "Predictive analytics implementation"
      ],
      color: "text-green-400",
      gradient: "from-green-400/10 to-green-600/10"
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Build modern, responsive web applications with cutting-edge technologies and best practices.",
      features: [
        "React/TypeScript applications",
        "Responsive UI/UX design",
        "API integration and development",
        "Performance optimization"
      ],
      color: "text-primary",
      gradient: "from-primary/10 to-primary-glow/10"
    },
    {
      icon: MessageSquare,
      title: "Technical Consultation",
      description: "Provide expert guidance on AI implementation strategies and technology roadmaps.",
      features: [
        "AI feasibility assessment",
        "Technology stack recommendations",
        "Implementation roadmap planning",
        "Best practices consulting"
      ],
      color: "text-purple-400",
      gradient: "from-purple-400/10 to-purple-600/10"
    },
    {
      icon: Presentation,
      title: "Training & Workshops",
      description: "Deliver engaging presentations and workshops on AI concepts and practical applications.",
      features: [
        "AI concepts for non-technical teams",
        "Hands-on coding workshops",
        "Industry trend presentations",
        "Custom curriculum development"
      ],
      color: "text-amber-400",
      gradient: "from-amber-400/10 to-amber-600/10"
    }
  ];


  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 border border-primary rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 border border-primary-glow rotate-45 animate-pulse delay-300"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 border border-primary rotate-12 animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-montserrat font-bold mb-6 section-divider">
            What I <span className="text-primary">Offer</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive AI and technology solutions to help you innovate and grow
          </p>
        </div>

        {/* Services Grid */}
        <div className="flex flex-wrap justify-center gap-8 mb-20">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="card-gradient card-hover p-8 group relative overflow-hidden fade-in-up w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-md"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              <div className="relative z-10 space-y-6">
                {/* Icon and title */}
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <service.icon className={`h-8 w-8 ${service.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

              </div>
            </Card>
          ))}
        </div>


        {/* CTA Section */}
        <div className="text-center mt-16 fade-in-up" style={{ animationDelay: '0.8s' }}>
          <Card className="card-gradient p-8 max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">
                  Ready to Start Your AI Journey?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Let's discuss how we can work together to bring your ideas to life with innovative AI solutions.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="btn-hero px-8"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Get In Touch
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Lightbulb className="mr-2 h-5 w-5" />
                  View My Work
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;