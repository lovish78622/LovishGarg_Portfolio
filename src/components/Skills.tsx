import { Card } from "@/components/ui/card";
import { 
  MessageSquare, 
  FileSpreadsheet, 
  Brain, 
  Zap,
  Code,
  Database,
  Cpu
} from "lucide-react";

const Skills = () => {
  const skills = [
    {
      category: "Communication & Presentation",
      icon: MessageSquare,
      color: "text-blue-400",
      items: [
        { name: "Communication", level: 90, description: "Excellent verbal and written communication skills" },
        { name: "MS PowerPoint", level: 85, description: "Creating compelling presentations and visual content" },
        { name: "Public Speaking", level: 80, description: "Confident presentation and audience engagement" }
      ]
    },
    {
      category: "Data & Analytics",
      icon: FileSpreadsheet,
      color: "text-green-400",
      items: [
        { name: "MS Excel", level: 85, description: "Advanced data analysis and spreadsheet management" },
        { name: "Data Visualization", level: 75, description: "Creating insightful charts and dashboards" },
        { name: "Statistical Analysis", level: 70, description: "Understanding data patterns and trends" }
      ]
    },
    {
      category: "Artificial Intelligence",
      icon: Brain,
      color: "text-primary",
      items: [
        { name: "AI Model Training", level: 80, description: "Training and optimizing machine learning models" },
        { name: "Prompt Engineering", level: 85, description: "Crafting effective prompts for AI systems" },
        { name: "Machine Learning", level: 75, description: "Understanding ML algorithms and applications" }
      ]
    },
    {
      category: "Technical Skills",
      icon: Code,
      color: "text-purple-400",
      items: [
        { name: "Python", level: 75, description: "Programming for AI and data science applications" },
        { name: "Problem Solving", level: 90, description: "Analytical thinking and solution development" },
        { name: "Research", level: 80, description: "Technical research and documentation" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-montserrat font-bold mb-6 section-divider">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A diverse skill set combining technical expertise with strong communication abilities
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {skills.map((skillCategory, categoryIndex) => (
            <Card 
              key={categoryIndex} 
              className="card-gradient card-hover p-8 fade-in-up"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <skillCategory.icon className={`h-6 w-6 ${skillCategory.color}`} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{skillCategory.category}</h3>
                </div>
              </div>
              
              <div className="space-y-5">
                {skillCategory.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <h4 className="text-lg font-medium text-foreground">{skill.name}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
        
        {/* Additional Skills Tags */}
        <div className="mt-16 text-center fade-in-up" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-2xl font-semibold mb-8 text-foreground">Additional Competencies</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              "Team Leadership", "Critical Thinking", "Project Management",
              "Data Analysis", "Innovation", "Adaptability",
              "Client Relations", "Cross-functional Collaboration"
            ].map((tag, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-primary/10 text-primary rounded-full border border-primary/20 hover:bg-primary/20 transition-colors cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;