import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Github, 
  ExternalLink, 
  Package, 
  TrendingUp,
  Code,
  Brain,
  Globe,
  Search
} from "lucide-react";
import { useScrollSection } from "@/hooks/useScrollSection";
import { projects } from "@/lib/portfolioData";

const categoryIcons = {
  web: Globe,
  ml: Brain,
  system: Code,
  research: Search,
};

const categoryColors = {
  web: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  ml: "bg-purple-500/10 text-purple-500 border-purple-500/20",
  system: "bg-cyan-500/10 text-cyan-500 border-cyan-500/20",
  research: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
};

export default function Projects() {
  const ref = useScrollSection("projects");

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
      id="projects"
      ref={ref}
      className="py-20 px-4 bg-gradient-to-b from-secondary/20 to-background"
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
              My Work
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Featured{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A showcase of my technical expertise across web development, 
              machine learning, system design, and research.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const IconComponent = categoryIcons[project.category];
              const categoryClass = categoryColors[project.category];

              return (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Card className="project-card h-full glass border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                    <CardHeader className="pb-4">
                      {/* Category Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <Badge className={categoryClass}>
                          <IconComponent className="w-3 h-3 mr-1" />
                          {project.category.toUpperCase()}
                        </Badge>
                        <div className="flex gap-2">
                          {project.links.github && (
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                              asChild
                            >
                              <a
                                href={project.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Github className="h-4 w-4" />
                              </a>
                            </Button>
                          )}
                          {project.links.live && (
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                              asChild
                            >
                              <a
                                href={project.links.live}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <ExternalLink className="h-4 w-4" />
                              </a>
                            </Button>
                          )}
                          {project.links.pypi && (
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                              asChild
                            >
                              <a
                                href={project.links.pypi}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Package className="h-4 w-4" />
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>

                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <p className="text-muted-foreground text-sm">
                        {project.description}
                      </p>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      {/* Long Description */}
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.longDescription}
                      </p>

                      {/* Stats */}
                      {project.stats && (
                        <div className="grid grid-cols-2 gap-3">
                          {project.stats.slice(0, 2).map((stat) => (
                            <div
                              key={stat.label}
                              className="text-center p-3 bg-primary/5 rounded-lg border border-primary/10"
                            >
                              <div className="text-lg font-bold text-primary">
                                {stat.value}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {stat.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Technologies */}
                      <div className="space-y-2">
                        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                          Technologies
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.slice(0, 6).map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="text-xs skill-tag"
                            >
                              {tech}
                            </Badge>
                          ))}
                          {project.technologies.length > 6 && (
                            <Badge variant="outline" className="text-xs">
                              +{project.technologies.length - 6} more
                            </Badge>
                          )}
                        </div>
                      </div>

                      {/* Key Features */}
                      <div className="space-y-2">
                        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                          Key Features
                        </p>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          {project.features.slice(0, 3).map((feature, i) => (
                            <li key={i} className="flex items-start">
                              <TrendingUp className="w-3 h-3 mr-2 mt-0.5 text-primary shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2 pt-2">
                        {project.links.github && (
                          <Button variant="outline" size="sm" className="flex-1" asChild>
                            <a
                              href={project.links.github}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="w-3 h-3 mr-1" />
                              Code
                            </a>
                          </Button>
                        )}
                        {project.links.live && (
                          <Button size="sm" className="flex-1" asChild>
                            <a
                              href={project.links.live}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="w-3 h-3 mr-1" />
                              Demo
                            </a>
                          </Button>
                        )}
                        {project.links.pypi && (
                          <Button variant="outline" size="sm" className="flex-1" asChild>
                            <a
                              href={project.links.pypi}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Package className="w-3 h-3 mr-1" />
                              PyPI
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* View More Projects CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <Button variant="outline" size="lg" asChild>
              <a
                href={`https://${personalInfo.github}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4 mr-2" />
                View All Projects on GitHub
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
