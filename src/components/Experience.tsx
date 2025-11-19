import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, GraduationCap, Calendar, MapPin, Award, Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      type: "internship",
      company: "HCL Technologies",
      role: "Technology Intern",
      duration: "2 Months",
      period: "July 2025 - September 2025",
      location: "Noida, India",
      description: "Gained valuable hands-on experience contributing to Microsoft-related projects and working in a professional corporate environment.",
      achievements: [
        "Contributed to Microsoft technology projects",
        "Collaborated with experienced development teams",
        "Gained exposure to enterprise-level software development",
        "Applied academic knowledge to real-world business scenarios"
      ],
      technologies: ["Microsoft Technologies", "Corporate Workflows", "Team Collaboration"]
    }
  ];

  const education = [
    {
      institution: "Delhi Technical Campus",
      degree: "B.Tech in Artificial Intelligence & Data Science",
      duration: "2023 - 2027",
      status: "Currently Pursuing",
      description: "Specializing in cutting-edge AI and data science technologies with a comprehensive curriculum covering machine learning, deep learning, and modern AI applications.",
      highlights: [
        "AI & Machine Learning Fundamentals",
        "Data Science and Analytics",
        "Programming and Software Development",
        "Research Methodology and Technical Writing"
      ],
      gpa: "Pursuing Excellence"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-montserrat font-bold mb-6 section-divider">
            Experience & <span className="text-primary">Education</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            My professional journey and academic foundation in AI and technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Professional Experience */}
          <div className="space-y-8">
            <div className="flex items-center space-x-3 mb-8">
              <Briefcase className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-semibold text-foreground">Professional Experience</h3>
            </div>
            
            {experiences.map((exp, index) => (
              <Card key={index} className="card-gradient card-hover p-8 fade-in-up">
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <h4 className="text-xl font-semibold text-foreground mb-1">{exp.role}</h4>
                      <div className="flex items-center space-x-2 text-primary font-medium">
                        <Building2 className="h-4 w-4" />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex flex-col sm:items-end space-y-2">
                      <Badge variant="outline" className="border-primary text-primary">
                        {exp.duration}
                      </Badge>
                      <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="space-y-4">
                    <h5 className="font-semibold text-foreground flex items-center space-x-2">
                      <Award className="h-4 w-4 text-primary" />
                      <span>Key Achievements</span>
                    </h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-8">
            <div className="flex items-center space-x-3 mb-8">
              <GraduationCap className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-semibold text-foreground">Education</h3>
            </div>
            
            {education.map((edu, index) => (
              <Card key={index} className="card-gradient card-hover p-8 fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="space-y-6">
                  <div className="space-y-3">
                    <h4 className="text-xl font-semibold text-foreground">{edu.degree}</h4>
                    <div className="flex items-center space-x-2 text-primary font-medium">
                      <GraduationCap className="h-4 w-4" />
                      <span>{edu.institution}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <span>{edu.duration}</span>
                      </div>
                      <Badge variant="outline" className="border-primary text-primary">
                        {edu.status}
                      </Badge>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {edu.description}
                  </p>
                  
                  <div className="space-y-4">
                    <h5 className="font-semibold text-foreground">Core Focus Areas</h5>
                    <div className="grid grid-cols-1 gap-3">
                      {edu.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-start space-x-3">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-border">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Academic Performance</span>
                      <span className="text-primary font-semibold">{edu.gpa}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;