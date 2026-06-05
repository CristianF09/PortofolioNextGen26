import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';

const SKILL_GROUPS = [
  {
    title: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'Python', 'C/C++', 'Bash', 'SQL'],
  },
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'Three.js', 'Framer Motion', 'Figma'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'FastAPI', 'GraphQL', 'REST', 'WebSocket'],
  },
  {
    title: 'Data & AI',
    skills: ['TensorFlow', 'PyTorch', 'OpenAI', 'LangChain', 'Pandas', 'Scikit-learn'],
  },
  {
    title: 'Infrastructure',
    skills: ['Docker', 'Kubernetes', 'AWS', 'GCP', 'Terraform', 'Ansible'],
  },
  {
    title: 'Networking',
    skills: ['Cisco', 'MikroTik', 'pfSense', 'VPN/IPSec', 'VLAN', 'DNS/DHCP'],
  },
];

export default function SkillsSection() {
  const [ref, inView] = useInView(0.1);

  return (
    <section ref={ref} className="py-32 relative bg-card/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="font-mono text-xs text-primary tracking-widest uppercase">
            // Tech Stack
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-black mt-4 max-w-2xl leading-tight">
            Skills & Technologies
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.title}
              className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/20 transition-all duration-300"
            >
              <h3 className="font-mono text-xs text-primary tracking-widest uppercase mb-4">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm font-mono bg-secondary/60 border border-border/40 rounded-lg text-foreground/80 hover:text-primary hover:border-primary/30 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}