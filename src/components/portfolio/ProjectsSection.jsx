import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import ProjectCard from './ProjectCard';

export default function ProjectsSection({ images }) {
  const [ref, inView] = useInView(0.1);

  const PROJECTS = [
    {
      title: 'AI-Powered Network Monitor',
      category: 'AI · Infrastructure',
      problem: 'Enterprise clients needed real-time anomaly detection across 500+ network nodes with zero false-positive tolerance.',
      solution: 'Built a custom ML pipeline using TensorFlow that analyzes traffic patterns, predicts failures, and auto-triggers remediation scripts.',
      technologies: ['Python', 'TensorFlow', 'Grafana', 'Docker', 'SNMP', 'PostgreSQL'],
      impact: '73% reduction in downtime, 2.4x faster incident response.',
      image: images.ai,
    },
    {
      title: 'Enterprise Cloud Dashboard',
      category: 'Full Stack · DevOps',
      problem: 'A SaaS company needed a unified dashboard to manage multi-cloud infrastructure across AWS, GCP, and Azure.',
      solution: 'Developed a full-stack React + Node.js application with real-time monitoring, cost analytics, and automated scaling policies.',
      technologies: ['React', 'Node.js', 'GraphQL', 'Kubernetes', 'Terraform', 'Redis'],
      impact: '40% cost reduction in cloud spend, 99.97% uptime.',
      image: images.fullstack,
    },
    {
      title: 'Smart Building IoT Platform',
      category: 'Hardware · Software',
      problem: 'A commercial building needed automated HVAC, lighting, and security with centralized monitoring.',
      solution: 'Designed the full hardware layer (sensors, controllers, gateways) and built the software platform from scratch.',
      technologies: ['Arduino', 'Raspberry Pi', 'MQTT', 'Node.js', 'React', 'InfluxDB'],
      impact: '35% energy savings, remote management for 12 buildings.',
      image: images.hardware,
    },
    {
      title: 'Zero-Trust Network Architecture',
      category: 'Network · Security',
      problem: 'A financial institution required a complete network redesign to meet SOC 2 and zero-trust compliance.',
      solution: 'Architected VLAN segmentation, micro-perimeters, MFA-enforced VPN, and continuous monitoring with automated threat response.',
      technologies: ['Cisco', 'pfSense', 'WireGuard', 'SIEM', 'Active Directory', 'Ansible'],
      impact: 'Passed SOC 2 audit, 0 breaches in 24 months.',
      image: images.network,
    },
  ];

  return (
    <section id="projects" ref={ref} className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="font-mono text-xs text-primary tracking-widest uppercase">
            // Lab Reports
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-black mt-4 max-w-2xl leading-tight">
            Selected Case Studies
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl">
            Real problems, engineered solutions, measurable impact.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}