import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollSection } from "@/hooks/useScrollSection";
import { personalInfo } from "@/lib/portfolioData";
import { Linkedin, ExternalLink, Code } from "lucide-react";

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
                      data-driven decision making.
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

            {/* Featured Project - Distill */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <div className="text-center mb-8">
                <Badge variant="outline" className="mb-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/20">
                  Featured Project
                </Badge>
                <h3 className="text-2xl font-semibold mb-6">My Best Work</h3>
              </div>
              
              <Card className="glass border-primary/30 bg-gradient-to-br from-blue-500/5 to-purple-500/5 hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h4 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        Distill - AI-Powered Document Processing Platform
                      </h4>
                      <p className="text-muted-foreground">
                        A modern web application for intelligent document processing and AI-powered chat interactions
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <a
                        href="https://distill-frontend-dj2j.onrender.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                      <a
                        href="https://github.com/ZEUS33776/Distill--AI-powered-study-assistant"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 border border-primary/20 rounded-lg hover:bg-primary/10 transition-colors text-sm font-medium"
                      >
                        <Code className="w-4 h-4" />
                        GitHub
                      </a>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Key Features */}
                    <div>
                      <h5 className="font-semibold mb-4 text-primary">Key Features</h5>
                      <ul className="space-y-3 text-sm text-muted-foreground">
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span><strong className="text-foreground">PDF Processing:</strong> Upload documents with intelligent chunking and vector embeddings</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span><strong className="text-foreground">AI Chat Interface:</strong> Contextual conversations powered by Groq's fast inference API</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span><strong className="text-foreground">Video Processing:</strong> YouTube transcript extraction and processing</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span><strong className="text-foreground">Secure Authentication:</strong> JWT-based user system with isolated namespaces</span>
                        </li>
                      </ul>
                    </div>

                    {/* Tech Stack & Achievements */}
                    <div>
                      <h5 className="font-semibold mb-4 text-primary">Tech Stack & Achievements</h5>
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm text-muted-foreground mb-2">
                            <strong className="text-foreground">Frontend:</strong> React 19, Vite, Tailwind CSS, Framer Motion
                          </p>
                          <p className="text-sm text-muted-foreground mb-2">
                            <strong className="text-foreground">Backend:</strong> FastAPI, PostgreSQL, Vector Databases
                          </p>
                          <p className="text-sm text-muted-foreground mb-4">
                            <strong className="text-foreground">AI Services:</strong> Cohere AI, Groq, Pinecone, Custom Algorithms
                          </p>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-3">
                          <div className="text-center p-3 bg-primary/5 rounded-lg border border-primary/10">
                            <div className="text-lg font-bold text-primary">Full-Stack</div>
                            <div className="text-xs text-muted-foreground">End-to-End Development</div>
                          </div>
                          <div className="text-center p-3 bg-primary/5 rounded-lg border border-primary/10">
                            <div className="text-lg font-bold text-primary">Production</div>
                            <div className="text-xs text-muted-foreground">Deployed on Render</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Impact Statement */}
                  <div className="mt-6 p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg border border-primary/10">
                    <p className="text-sm text-muted-foreground italic">
                      "This project showcases my ability to integrate multiple AI services, handle complex data processing pipelines, 
                      and create intuitive user experiences. It demonstrates proficiency in modern web technologies, 
                      AI/ML integration, and production deployment."
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Relevant Links Section */}
          <div className="grid lg:grid-cols-2 gap-12 mt-16">
            <div></div> {/* Empty div for spacing */}
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

                {/* LeetCode */}
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="group"
                >
                  <Card className="glass border-primary/20 hover:border-primary/40 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center mr-4">
                            <Code className="w-6 h-6 text-yellow-500" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-lg group-hover:text-primary transition-colors">
                              LeetCode Profile
                            </h4>
                            <p className="text-muted-foreground text-sm">
                              Coding Platform • Problem Solving
                            </p>
                          </div>
                        </div>
                        <a
                          href={`https://${personalInfo.leetcode}`}
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
