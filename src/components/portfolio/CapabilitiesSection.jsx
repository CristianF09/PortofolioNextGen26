import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Server, Code2, Monitor, Brain } from 'lucide-react';

const LAYERS = [
  {
    id: 'infrastructure',
    label: 'L1',
    title: 'Infrastructure',
    subtitle: 'Hardware & Network',
    icon: Server,
    description: 'Design, deploy, and maintain robust network architectures and hardware systems that form the foundation of every digital solution.',
    tools: ['Cisco IOS', 'MikroTik', 'pfSense', 'VMware ESXi', 'Proxmox', 'Active Directory', 'DNS/DHCP', 'VPN/IPSec', 'VLAN', 'Fiber Optics', 'UPS Systems', 'Rack Assembly'],
  },
  {
    id: 'backend',
    label: 'L2',
    title: 'Core Logic',
    subtitle: 'Software & Backend',
    icon: Code2,
    description: 'Architect scalable backend systems with clean APIs, efficient databases, and reliable microservices that power complex applications.',
    tools: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'Kubernetes', 'REST APIs', 'GraphQL', 'AWS/GCP', 'CI/CD', 'Linux Admin'],
  },
  {
    id: 'frontend',
    label: 'L3',
    title: 'Interface',
    subtitle: 'Frontend & UX',
    icon: Monitor,
    description: 'Craft pixel-perfect, responsive interfaces with smooth interactions and accessibility-first design that users genuinely enjoy.',
    tools: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Figma', 'Three.js', 'PWA', 'Responsive Design', 'A11y', 'Performance', 'SEO'],
  },
  {
    id: 'cognition',
    label: 'L4',
    title: 'Cognition',
    subtitle: 'AI & Automation',
    icon: Brain,
    description: 'Implement intelligent systems that learn, adapt, and automate — from NLP pipelines and computer vision to custom ML models and LLM integrations.',
    tools: ['TensorFlow', 'PyTorch', 'OpenAI API', 'LangChain', 'Hugging Face', 'Scikit-learn', 'Computer Vision', 'NLP', 'RAG Systems', 'Fine-tuning', 'MLOps', 'Data Pipelines'],
  },
];

export default function CapabilitiesSection() {
  const [activeLayer, setActiveLayer] = useState('infrastructure');
  const [ref, inView] = useInView(0.1);
  const active = LAYERS.find((l) => l.id === activeLayer);

  return (
    <section id="capabilities" ref={ref} className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="font-mono text-xs text-primary tracking-widest uppercase">
            // Capabilities
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-black mt-4 max-w-2xl leading-tight">
            The Vertical Stack
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl">
            Four layers of expertise, from physical infrastructure to artificial intelligence.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 grid lg:grid-cols-[300px_1fr] gap-8"
        >
          {/* Layer selector */}
          <div className="flex lg:flex-col gap-2">
            {LAYERS.map((layer) => {
              const Icon = layer.icon;
              const isActive = activeLayer === layer.id;
              return (
                <button
                  key={layer.id}
                  onClick={() => setActiveLayer(layer.id)}
                  className={`flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300 w-full ${
                    isActive
                      ? 'bg-primary/10 border border-primary/30'
                      : 'bg-card/50 border border-border/30 hover:border-border'
                  }`}
                >
                  <div className={`p-2.5 rounded-lg ${isActive ? 'bg-primary text-primary-foreground' : 'bg-secondary text-muted-foreground'} transition-colors`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="hidden sm:block">
                    <span className="font-mono text-[10px] text-muted-foreground tracking-widest">
                      {layer.label}
                    </span>
                    <div className={`text-sm font-semibold ${isActive ? 'text-primary' : 'text-foreground'} transition-colors`}>
                      {layer.title}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active layer detail */}
          <AnimatePresence mode="wait">
            {active && (
              <motion.div
                key={active.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="p-8 md:p-10 rounded-2xl bg-card/80 border border-border/50 backdrop-blur-sm"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-xs text-primary tracking-widest">{active.label}</span>
                  <span className="text-muted-foreground/40">—</span>
                  <span className="font-mono text-xs text-muted-foreground">{active.subtitle}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                  {active.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl">
                  {active.description}
                </p>

                {/* Tools bento */}
                <div className="flex flex-wrap gap-2">
                  {active.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1.5 text-xs font-mono bg-secondary/80 border border-border/50 rounded-lg text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors duration-200 cursor-default"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}