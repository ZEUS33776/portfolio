import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollSection } from "@/hooks/useScrollSection";
import { personalInfo, achievements } from "@/lib/portfolioData";

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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Building the Future with{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Code & Creativity
              </span>
            </h2>
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

                  {/* Quick Facts */}
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-primary/5 rounded-lg border border-primary/10">
                      <div className="text-2xl font-bold text-primary">9.06</div>
                      <div className="text-sm text-muted-foreground">CGPA</div>
                    </div>
                    <div className="text-center p-4 bg-primary/5 rounded-lg border border-primary/10">
                      <div className="text-2xl font-bold text-primary">1752</div>
                      <div className="text-sm text-muted-foreground">LeetCode Rating</div>
                    </div>
                    <div className="text-center p-4 bg-primary/5 rounded-lg border border-primary/10">
                      <div className="text-2xl font-bold text-primary">800+</div>
                      <div className="text-sm text-muted-foreground">Problems Solved</div>
                    </div>
                    <div className="text-center p-4 bg-primary/5 rounded-lg border border-primary/10">
                      <div className="text-2xl font-bold text-primary">4+</div>
                      <div className="text-sm text-muted-foreground">Major Projects</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Achievements */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Key Achievements</h3>
              
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="group"
                >
                  <Card className="glass border-primary/20 hover:border-primary/40 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                            {achievement.title}
                          </h4>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {achievement.description}
                          </p>
                        </div>
                        {achievement.metric && (
                          <div className="ml-4 text-right">
                            <div className="text-2xl font-bold text-primary">
                              {achievement.metric}
                            </div>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}

              {/* Contact Info */}
              <Card className="glass border-primary/20 mt-8">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-4">Let's Connect</h4>
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
