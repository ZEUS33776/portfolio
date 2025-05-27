import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollSection } from "@/hooks/useScrollSection";
import { personalInfo } from "@/lib/portfolioData";

export default function Hero() {
  const ref = useScrollSection("hero");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
      id="hero"
      ref={ref}
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20" />
      
      {/* Content */}
      <motion.div
        className="max-w-4xl mx-auto text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Greeting */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-medium text-sm">
            👋 Hello, I'm
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
        >
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            {personalInfo.name}
          </span>
        </motion.h1>

        {/* Title */}
        <motion.h2
          variants={itemVariants}
          className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 font-light"
        >
          {personalInfo.title} & Full Stack Developer
        </motion.h2>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          {personalInfo.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <Button size="lg" className="min-w-[160px] animate-glow" asChild>
            <a href="#contact">
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </a>
          </Button>
          
          <Button variant="outline" size="lg" className="min-w-[160px]" asChild>
            <a
              href="/public/attached_assets/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </a>
          </Button>
          
          <Button variant="ghost" size="lg" className="min-w-[160px]" asChild>
            <a
              href={`https://${personalInfo.github}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-4 w-4" />
              View GitHub
            </a>
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center text-muted-foreground"
        >
          <span className="text-sm mb-2">Explore my journey</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ArrowDown className="h-5 w-5" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * -100 - 100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  );
}
