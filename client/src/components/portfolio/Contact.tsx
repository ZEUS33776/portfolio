import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Send,
  CheckCircle,
  ExternalLink
} from "lucide-react";
import { useScrollSection } from "@/hooks/useScrollSection";
import { usePortfolio } from "@/lib/stores/usePortfolio";
import { personalInfo } from "@/lib/portfolioData";
import { toast } from "sonner";

export default function Contact() {
  const ref = useScrollSection("contact");
  const { contactFormData, updateContactForm, resetContactForm } = usePortfolio();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic form validation
    if (!contactFormData.name || !contactFormData.email || !contactFormData.message) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate form submission (replace with actual API call)
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsSubmitted(true);
      resetContactForm();
      toast.success("Message sent successfully! I'll get back to you soon.");
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: "text-blue-500"
    },
    {
      icon: Phone,
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      color: "text-emerald-500"
    },
    {
      icon: MapPin,
      label: "Location",
      value: personalInfo.location,
      href: "#",
      color: "text-purple-500"
    },
    {
      icon: Github,
      label: "GitHub",
      value: personalInfo.github,
      href: `https://${personalInfo.github}`,
      color: "text-gray-500"
    }
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 px-4 bg-gradient-to-b from-background to-secondary/20"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Get In Touch
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Let's{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Connect
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, 
              or just having a great conversation about technology and innovation.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Let's Talk</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Whether you're looking for a dedicated software engineer, have an 
                  exciting project in mind, or want to discuss the latest in AI and 
                  technology, I'd love to hear from you.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={method.label}
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                    className="group"
                  >
                    <Card className="glass border-primary/20 hover:border-primary/40 transition-all duration-300">
                      <CardContent className="p-4">
                        <div className="flex items-center">
                          <div className={`w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-4 ${method.color}`}>
                            <method.icon className="w-5 h-5" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm text-muted-foreground">{method.label}</p>
                            <p className="font-medium group-hover:text-primary transition-colors">
                              {method.value}
                            </p>
                          </div>
                          {method.href !== "#" && (
                            <Button
                              variant="ghost"
                              size="sm"
                              className="opacity-0 group-hover:opacity-100 transition-opacity"
                              asChild
                            >
                              <a
                                href={method.href}
                                target={method.href.startsWith('http') ? "_blank" : undefined}
                                rel={method.href.startsWith('http') ? "noopener noreferrer" : undefined}
                              >
                                <ExternalLink className="w-4 h-4" />
                              </a>
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-6">
                <h4 className="font-medium mb-4">Find me online</h4>
                <div className="flex space-x-4">
                  <Button variant="outline" asChild>
                    <a
                      href={`https://${personalInfo.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a
                      href={`https://${personalInfo.leetcode}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      LeetCode
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <Card className="glass border-primary/20 hover:border-primary/40 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    {isSubmitted ? (
                      <>
                        <CheckCircle className="w-5 h-5 mr-2 text-emerald-500" />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send a Message
                      </>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">Thank you!</h3>
                      <p className="text-muted-foreground">
                        Your message has been sent successfully. I'll get back to you soon!
                      </p>
                      <Button
                        variant="outline"
                        className="mt-4"
                        onClick={() => setIsSubmitted(false)}
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium mb-2 block">
                            Name *
                          </label>
                          <Input
                            placeholder="Your full name"
                            value={contactFormData.name}
                            onChange={(e) => updateContactForm({ name: e.target.value })}
                            required
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-2 block">
                            Email *
                          </label>
                          <Input
                            type="email"
                            placeholder="your.email@example.com"
                            value={contactFormData.email}
                            onChange={(e) => updateContactForm({ email: e.target.value })}
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Message *
                        </label>
                        <Textarea
                          placeholder="Tell me about your project, opportunity, or just say hello!"
                          rows={6}
                          value={contactFormData.message}
                          onChange={(e) => updateContactForm({ message: e.target.value })}
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              className="w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"
                            />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Footer */}
          <motion.div
            variants={itemVariants}
            className="mt-20 pt-8 border-t border-border/50 text-center"
          >
            <p className="text-muted-foreground">
              © 2024 {personalInfo.name}. Built with React, Three.js, and lots of ☕
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
