import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  GraduationCap, 
  Calendar,
  MapPin,
  TrendingUp,
  Star,
  Award
} from "lucide-react";
import { useScrollSection } from "@/hooks/useScrollSection";
import { experience } from "@/lib/portfolioData";

export default function Experience() {
  const ref = useScrollSection("experience");

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

  const timelineVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="experience"
      ref={ref}
      className="py-20 px-4 bg-gradient-to-b from-secondary/20 to-background"
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
              Professional Journey
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Experience &{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Education
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              My professional journey spanning software engineering and academics.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 to-primary/20 hidden lg:block" />

            <div className="space-y-12">
              {/* Work Experience */}
              {experience
                .filter(exp => exp.type === 'work')
                .map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    variants={timelineVariants}
                    className="relative lg:pl-20"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-6 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg hidden lg:block" />
                    
                    <Card className="glass border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                      <CardContent className="p-8">
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                          <div className="flex items-start mb-4 lg:mb-0">
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 shrink-0">
                              <Building2 className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                              <h3 className="text-xl font-semibold">{exp.position}</h3>
                              <p className="text-primary font-medium">{exp.company}</p>
                              <div className="flex items-center text-sm text-muted-foreground mt-1">
                                <MapPin className="w-4 h-4 mr-1" />
                                {exp.location}
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <Badge variant="outline" className="mb-2">
                              <Calendar className="w-3 h-3 mr-1" />
                              {exp.duration}
                            </Badge>
                            <div className="text-sm text-muted-foreground">
                              {exp.type === 'work' ? 'Professional' : 'Academic'}
                            </div>
                          </div>
                        </div>

                        {/* Achievements */}
                        <div className="space-y-3">
                          {exp.achievements.map((achievement, achievementIndex) => (
                            <div
                              key={achievementIndex}
                              className="flex items-start text-sm text-muted-foreground"
                            >
                              <TrendingUp className="w-4 h-4 mr-3 mt-0.5 text-primary shrink-0" />
                              <span className="leading-relaxed">{achievement}</span>
                            </div>
                          ))}
                        </div>

                        {/* Technologies */}
                        {exp.technologies && (
                          <div className="mt-6 pt-4 border-t border-border/50">
                            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-3">
                              Technologies Used
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech) => (
                                <Badge key={tech} variant="secondary" className="text-xs">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}

              {/* Education */}
              {experience
                .filter(exp => exp.type === 'education')
                .map((exp) => (
                  <motion.div
                    key={exp.id}
                    variants={timelineVariants}
                    className="relative lg:pl-20"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-6 top-6 w-4 h-4 bg-emerald-500 rounded-full border-4 border-background shadow-lg hidden lg:block" />
                    
                    <Card className="glass border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10">
                      <CardContent className="p-8">
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                          <div className="flex items-start mb-4 lg:mb-0">
                            <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mr-4 shrink-0">
                              <GraduationCap className="w-6 h-6 text-emerald-500" />
                            </div>
                            <div>
                              <h3 className="text-xl font-semibold">{exp.position}</h3>
                              <p className="text-emerald-500 font-medium">{exp.company}</p>
                              <div className="flex items-center text-sm text-muted-foreground mt-1">
                                <MapPin className="w-4 h-4 mr-1" />
                                {exp.location}
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <Badge variant="outline" className="mb-2 border-emerald-500/20">
                              <Calendar className="w-3 h-3 mr-1" />
                              {exp.duration}
                            </Badge>
                          </div>
                        </div>

                        {/* Simple education description */}
                        <div className="text-sm text-muted-foreground">
                          <div className="flex items-center gap-2 mb-2">
                            <Star className="w-4 h-4 text-yellow-500" />
                            <span className="font-medium text-base">CGPA: 9.06</span>
                          </div>
                          <p>Currently pursuing Bachelor of Technology in Computer Science and Engineering with focus on software development and system design.</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}


            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
