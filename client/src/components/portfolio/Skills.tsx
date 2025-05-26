import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Monitor, 
  Server, 
  Database, 
  Brain, 
  Wrench,
  Star
} from "lucide-react";
import { useScrollSection } from "@/hooks/useScrollSection";
import { skills } from "@/lib/portfolioData";

const categoryIcons = {
  "Programming Languages": Code,
  "Frontend Development": Monitor,
  "Backend Development": Server,
  "Databases & Cloud": Database,
  "AI & Machine Learning": Brain,
  "Tools & Technologies": Wrench,
};

export default function Skills() {
  const ref = useScrollSection("skills");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 px-4 bg-gradient-to-b from-background to-secondary/20"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Technical Expertise
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Skills &{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Technologies
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A comprehensive toolkit spanning full-stack development, AI/ML, 
              cloud technologies, and modern development practices.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillCategory, categoryIndex) => {
              const IconComponent = categoryIcons[skillCategory.category as keyof typeof categoryIcons] || Code;

              return (
                <motion.div
                  key={skillCategory.category}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Card className="h-full glass border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                    <CardContent className="p-6">
                      {/* Category Header */}
                      <div className="flex items-center mb-6">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-3 group-hover:bg-primary/20 transition-colors">
                          <IconComponent className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                            {skillCategory.category}
                          </h3>
                          <p className="text-xs text-muted-foreground">
                            {skillCategory.skills.length} technologies
                          </p>
                        </div>
                      </div>

                      {/* Skills List */}
                      <motion.div
                        className="space-y-3"
                        variants={containerVariants}
                      >
                        {skillCategory.skills.map((skill, skillIndex) => (
                          <motion.div
                            key={skill}
                            variants={skillVariants}
                            whileHover={{ scale: 1.02 }}
                            className="group/skill"
                          >
                            <Badge
                              variant="secondary"
                              className="w-full justify-between skill-tag cursor-pointer group-hover/skill:bg-primary/10 group-hover/skill:text-primary group-hover/skill:border-primary/20"
                            >
                              <span>{skill}</span>
                              <Star className="w-3 h-3 opacity-0 group-hover/skill:opacity-100 transition-opacity" />
                            </Badge>
                          </motion.div>
                        ))}
                      </motion.div>


                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>


        </motion.div>
      </div>
    </section>
  );
}
