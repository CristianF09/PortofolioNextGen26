import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

export default function HeroSection({ heroImage }) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Abstract technology background with glowing circuits"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Grid lines overlay */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(84 100% 72% / 0.5) 1px, transparent 1px), linear-gradient(90deg, hsl(84 100% 72% / 0.5) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-24 pb-16">
        <div className="flex flex-col gap-8">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
            </span>
            <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
              Available for hire · Full-Time / Contract
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black leading-[1.05] tracking-tight max-w-4xl"
          >
            Hardware Foundation.
            <br />
            <span className="text-primary">Intelligent</span> Software.
            <br />
            Scalable Future.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            Full Stack Developer & AI Engineer focused on scalable web systems,
            network-aware solutions, and practical automation.
          </motion.p>

          {/* System readout */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap gap-4 font-mono text-xs text-muted-foreground"
          >
            <span className="px-3 py-1.5 rounded-md bg-secondary/80 border border-border/50">
              OS: Linux
            </span>
            <span className="px-3 py-1.5 rounded-md bg-secondary/80 border border-border/50">
              STACK: Full
            </span>
            <span className="px-3 py-1.5 rounded-md bg-secondary/80 border border-border/50">
              INTEL: AI-Enhanced
            </span>
            <span className="px-3 py-1.5 rounded-md bg-secondary/80 border border-border/50">
              NET: Infrastructure
            </span>
          </motion.div>

          {/* CTA + Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <a
              href="#projects"
              className="px-8 py-3.5 bg-primary text-primary-foreground font-mono font-bold text-sm rounded-full hover:bg-primary/90 transition-all duration-300 hover:shadow-[0_0_30px_hsl(84_100%_72%_/_0.3)]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 border border-border text-foreground font-mono font-medium text-sm rounded-full hover:border-primary/50 hover:text-primary transition-all duration-300"
            >
              Get In Touch
            </a>
            <div className="flex items-center gap-3 ml-2">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="mailto:hello@example.com" className="p-2.5 rounded-full border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="w-4 h-4 text-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}