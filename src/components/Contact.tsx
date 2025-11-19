import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MessageSquare, Send, Linkedin, Github } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize EmailJS
  emailjs.init("RPAsMb1VRlCst1RUA");

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "lovishg8400@gmail.com",
      href: "mailto:lovishg8400@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9310087203",
      href: "tel:+919310087203"
    },
    {
      icon: MessageSquare,
      label: "Let's Connect",
      value: "Available for opportunities",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/lovish-garg-696294294/",
      color: "hover:text-blue-400"
    },
    {
      icon: Github,
      name: "GitHub", 
      href: "https://github.com/lovish78622/",
      color: "hover:text-foreground"
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isSubmitting) return;
    
    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      await emailjs.send(
        "service_5q4h9b9", // Service ID
        "template_my6zzt8", // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject || "Portfolio Contact",
          message: formData.message,
          to_email: "lovishg8400@gmail.com"
        }
      );

      // Show success toast
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });

    } catch (error) {
      console.error("Failed to send email:", error);
      toast({
        title: "Failed to Send Message",
        description: "Something went wrong. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-montserrat font-bold mb-6 section-divider">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to collaborate on exciting AI projects or discuss opportunities? Let's connect!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8 fade-in-up">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Let's Start a Conversation
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always excited to discuss new opportunities, innovative projects, or simply connect with fellow technology enthusiasts. Whether you're looking for an AI enthusiast to join your team or want to collaborate on exciting projects, I'd love to hear from you.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <Card key={index} className="card-gradient p-6 card-hover">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <contact.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{contact.label}</h4>
                      {contact.href !== "#" ? (
                        <a 
                          href={contact.href}
                          className="text-primary hover:text-primary-glow transition-colors"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{contact.value}</p>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-border">
              <h4 className="font-semibold text-foreground mb-4">Follow My Journey</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary ${social.color} transition-all duration-300 hover:scale-110 glow-primary`}
                    aria-label={social.name}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Card className="card-gradient p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-input border-border focus:border-primary"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-input border-border focus:border-primary"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-foreground">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="bg-input border-border focus:border-primary"
                    placeholder="What's this about?"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="bg-input border-border focus:border-primary resize-none"
                    placeholder="Tell me about your project, opportunity, or just say hello!"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full btn-hero group"
                  disabled={isSubmitting}
                >
                  <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-muted-foreground mb-8">
              Whether it's AI innovation, technology solutions, or just a great conversation about the future of tech - I'm here for it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="btn-hero"
                onClick={() => window.location.href = "mailto:lovishg8400@gmail.com"}
              >
                <Mail className="mr-2 h-5 w-5" />
                Email Me Directly
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => window.location.href = "tel:+919310087203"}
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;