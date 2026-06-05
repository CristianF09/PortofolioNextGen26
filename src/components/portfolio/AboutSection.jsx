import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';

const STATS = [
  { value: '8+', label: 'Years Experience' },
  { value: '50+', label: 'Projects Delivered' },
  { value: '30+', label: 'Happy Clients' },
  { value: '99.9%', label: 'Uptime Achieved' },
];

export default function AboutSection() {
  const [ref, inView] = useInView(0.2);

  return (
    <section id="about" ref={ref} className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-2 gap-16 items-start"
        >
          {/* Left - Label + Heading */}
          <div>
            <span className="font-mono text-xs text-primary tracking-widest uppercase">
              // About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-black mt-4 leading-tight">
              Building modern software,
              <br />
              <span className="text-primary">infrastructure-aware</span> solutions,
              <br />
              and intelligent digital experiences.
            </h2>
          </div>

          {/* Right - Description */}
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed text-lg">
              I'm a full-spectrum engineer with deep expertise across the entire technology stack — 
              from configuring network infrastructure and assembling hardware systems, to developing 
              scalable full-stack applications and deploying AI-powered automation.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My approach combines the precision of systems engineering with the agility of modern 
              software development. I build solutions that are not just functional, but resilient, 
              performant, and future-proof.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether it's architecting a cloud-native application, training a machine learning model, 
              or troubleshooting a complex network topology — I bring the same level of rigor and 
              craftsmanship to every layer of the stack.
            </p>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="p-6 rounded-2xl bg-card border border-border/50 backdrop-blur-sm"
            >
              <div className="text-3xl md:text-4xl font-heading font-black text-primary">
                {stat.value}
              </div>
              <div className="font-mono text-xs text-muted-foreground mt-2 tracking-wide uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}