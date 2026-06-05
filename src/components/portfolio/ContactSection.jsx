import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Github, Linkedin, Mail, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export default function ContactSection() {
  const [ref, inView] = useInView(0.1);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    // Simulate send
    await new Promise((r) => setTimeout(r, 1200));
    toast.success('Message sent! I\'ll get back to you soon.');
    setForm({ name: '', email: '', message: '' });
    setSending(false);
  };

  return (
    <section id="contact" ref={ref} className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="grid lg:grid-cols-2 gap-16"
        >
          {/* Left - Info */}
          <div>
            <span className="font-mono text-xs text-primary tracking-widest uppercase">
              // Contact
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-black mt-4 leading-tight">
              Let's Build
              <br />
              Something <span className="text-primary">Great</span>
            </h2>
            <p className="text-muted-foreground mt-6 leading-relaxed max-w-md">
              Have a project in mind? Need a full-stack engineer with infrastructure expertise? 
              I'm always open to discussing new opportunities and ideas.
            </p>

            <div className="mt-10 space-y-4">
              <a href="mailto:hello@example.com" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group">
                <div className="p-3 rounded-xl bg-secondary border border-border/50 group-hover:border-primary/30 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-muted-foreground/60 tracking-widest uppercase">Email</span>
                  <p className="text-sm font-medium text-foreground">hello@example.com</p>
                </div>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group">
                <div className="p-3 rounded-xl bg-secondary border border-border/50 group-hover:border-primary/30 transition-colors">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-muted-foreground/60 tracking-widest uppercase">GitHub</span>
                  <p className="text-sm font-medium text-foreground">github.com/username</p>
                </div>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group">
                <div className="p-3 rounded-xl bg-secondary border border-border/50 group-hover:border-primary/30 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-muted-foreground/60 tracking-widest uppercase">LinkedIn</span>
                  <p className="text-sm font-medium text-foreground">linkedin.com/in/username</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right - CLI-style form */}
          <div className="rounded-2xl bg-card border border-border/50 overflow-hidden">
            {/* Terminal header */}
            <div className="px-5 py-3 border-b border-border/50 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-destructive/60" />
              <div className="w-3 h-3 rounded-full bg-chart-4/60" />
              <div className="w-3 h-3 rounded-full bg-primary/60" />
              <span className="ml-3 font-mono text-xs text-muted-foreground">terminal — contact</span>
            </div>

            <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-5">
              <div>
                <label className="font-mono text-xs text-muted-foreground tracking-wider uppercase mb-2 block">
                  &gt; name
                </label>
                <Input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="John Doe"
                  required
                  className="bg-secondary/50 border-border/50 font-mono text-sm focus:border-primary/50"
                />
              </div>
              <div>
                <label className="font-mono text-xs text-muted-foreground tracking-wider uppercase mb-2 block">
                  &gt; email
                </label>
                <Input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="john@example.com"
                  required
                  className="bg-secondary/50 border-border/50 font-mono text-sm focus:border-primary/50"
                />
              </div>
              <div>
                <label className="font-mono text-xs text-muted-foreground tracking-wider uppercase mb-2 block">
                  &gt; message
                </label>
                <Textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  required
                  rows={5}
                  className="bg-secondary/50 border-border/50 font-mono text-sm focus:border-primary/50 resize-none"
                />
              </div>
              <Button
                type="submit"
                disabled={sending}
                className="w-full bg-primary text-primary-foreground font-mono font-bold hover:bg-primary/90 h-12 rounded-xl"
              >
                {sending ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-4 h-4" />
                    Send Message
                  </span>
                )}
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}