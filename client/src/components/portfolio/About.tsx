import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollSection } from "@/hooks/useScrollSection";
import { personalInfo } from "@/lib/portfolioData";
import { Linkedin, ExternalLink } from "lucide-react";

export default function About() {
  const ref = useScrollSection("about");

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

  return (
    <section
      id="about"
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
              About Me
            </Badge>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Transforming ideas into impactful solutions through{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Code & Creativity
              </span>
            </h3>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Bio Section */}
            <motion.div variants={itemVariants}>
              <Card className="glass border-primary/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6 text-primary">
                    My Journey
                  </h3>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      {personalInfo.bio}
                    </p>
                    <p>
                      Currently working as a Software Engineering Intern at Xcdify Solutions, 
                      where I'm developing enterprise-grade solutions and contributing to 
                      data-driven decision making across multiple agile sprints.
                    </p>
                    <p>
                      My passion lies in creating innovative solutions that bridge the gap 
                      between complex technical challenges and real-world applications. 
                      Whether it's building distributed systems, developing AI-powered 
                      applications, or optimizing algorithms, I thrive on turning ideas 
                      into impactful software.
                    </p>
                  </div>
                  {/* Quick Facts below */}
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-primary/5 rounded-lg border border-primary/10">
                      <div className="text-2xl font-bold text-primary">8+</div>
                      <div className="text-sm text-muted-foreground">Major Projects</div>
                    </div>
                    <div className="text-center p-4 bg-primary/5 rounded-lg border border-primary/10">
                      <div className="text-2xl font-bold text-primary">500+</div>
                      <div className="text-sm text-muted-foreground">Problems Solved on coding platforms.</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Relevant Links */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Relevant Links</h3>
              
              <div className="grid gap-4">
                {/* LinkedIn */}
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="group"
                >
                  <Card className="glass border-primary/20 hover:border-primary/40 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mr-4">
                            <Linkedin className="w-6 h-6 text-blue-500" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-lg group-hover:text-primary transition-colors">
                              LinkedIn Profile
                            </h4>
                            <p className="text-muted-foreground text-sm">
                              Professional Network • Connect with me
                            </p>
                          </div>
                        </div>
                        <a
                          href={`https://${personalInfo.linkedin}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* GitHub */}
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="group"
                >
                  <Card className="glass border-primary/20 hover:border-primary/40 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-12 h-12 bg-gray-500/10 rounded-lg flex items-center justify-center mr-4">
                            <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold text-lg group-hover:text-primary transition-colors">
                              GitHub Profile
                            </h4>
                            <p className="text-muted-foreground text-sm">
                              Open Source Projects • Code Repository
                            </p>
                          </div>
                        </div>
                        <a
                          href={`https://${personalInfo.github}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 transition-colors"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
                          </svg>
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              {/* Contact Info */}
              <Card className="glass border-primary/20 mt-8">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-4">Contact Information</h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <span className="w-16">Email:</span>
                      <a 
                        href={`mailto:${personalInfo.email}`}
                        className="text-primary hover:underline"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                    <div className="flex items-center">
                      <span className="w-16">Phone:</span>
                      <span>{personalInfo.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-16">Location:</span>
                      <span>{personalInfo.location}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
