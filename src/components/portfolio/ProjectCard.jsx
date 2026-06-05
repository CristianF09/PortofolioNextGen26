import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { ArrowUpRight } from 'lucide-react';

export default function ProjectCard({ project, index }) {
  const [ref, inView] = useInView(0.15);
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="group rounded-2xl bg-card border border-border/50 overflow-hidden hover:border-primary/20 transition-all duration-500"
    >
      <div className={`grid lg:grid-cols-2 ${isEven ? '' : 'lg:[direction:rtl]'}`}>
        {/* Image */}
        <div className="relative h-64 lg:h-auto overflow-hidden">
          <img
            src={project.image}
            alt={`${project.title} project visualization`}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-card/30" />
        </div>

        {/* Content */}
        <div className={`p-8 md:p-10 flex flex-col justify-center ${isEven ? '' : 'lg:[direction:ltr]'}`}>
          <span className="font-mono text-xs text-primary tracking-widest uppercase">
            {project.category}
          </span>
          <h3 className="text-xl md:text-2xl font-heading font-bold mt-3 mb-4">
            {project.title}
          </h3>

          <div className="space-y-4 mb-6">
            <div>
              <span className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase">
                Problem
              </span>
              <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                {project.problem}
              </p>
            </div>
            <div>
              <span className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase">
                Solution
              </span>
              <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-[11px] font-mono bg-secondary/80 border border-border/50 rounded-md text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Impact */}
          <div className="flex items-center justify-between">
            <div className="px-4 py-2 rounded-lg bg-primary/10 border border-primary/20">
              <span className="font-mono text-xs text-primary font-semibold">
                ↗ {project.impact}
              </span>
            </div>
            <button className="flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-primary transition-colors group/btn">
              Audit Case Study
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}