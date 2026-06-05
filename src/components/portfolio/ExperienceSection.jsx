import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';

const EXPERIENCE = [
  {
    period: '2022 — Present',
    role: 'Senior Full Stack Developer & AI Engineer',
    company: 'Freelance / Contract',
    description: 'Leading end-to-end development of AI-integrated web platforms, designing network infrastructure for SMBs, and consulting on cloud architecture and automation strategies.',
  },
  {
    period: '2020 — 2022',
    role: 'Full Stack Developer',
    company: 'Tech Solutions Inc.',
    description: 'Built and maintained enterprise SaaS products using React, Node.js, and PostgreSQL. Implemented CI/CD pipelines and containerized deployments across multi-region infrastructure.',
  },
  {
    period: '2018 — 2020',
    role: 'IT Network & Systems Engineer',
    company: 'NetCore Services',
    description: 'Designed and deployed enterprise network architectures including VLANs, VPN tunnels, and firewall policies. Managed server infrastructure and virtualization platforms.',
  },
  {
    period: '2016 — 2018',
    role: 'Junior Developer & IT Support',
    company: 'Digital Works',
    description: 'Started with hardware repair and network troubleshooting, then transitioned into web development building internal tools and client-facing applications.',
  },
];

export default function ExperienceSection() {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="experience" ref={ref} className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="font-mono text-xs text-primary tracking-widest uppercase">
            // Career Timeline
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-black mt-4 max-w-2xl leading-tight">
            Experience
          </h2>
        </motion.div>

        <div className="mt-16 relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border/50" />

          <div className="space-y-12">
            {EXPERIENCE.map((item, i) => (
              <motion.div
                key={item.period}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 * i }}
                className="relative pl-12 md:pl-20"
              >
                {/* Dot */}
                <div className="absolute left-2.5 md:left-6.5 top-2 w-3 h-3 rounded-full bg-primary border-4 border-background" />

                <span className="font-mono text-xs text-primary tracking-widest">
                  {item.period}
                </span>
                <h3 className="text-lg font-heading font-bold mt-1">
                  {item.role}
                </h3>
                <p className="text-sm font-mono text-muted-foreground mt-0.5">
                  {item.company}
                </p>
                <p className="text-muted-foreground mt-3 leading-relaxed max-w-2xl">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}