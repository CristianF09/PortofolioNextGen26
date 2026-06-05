import Navbar from '@/components/portfolio/Navbar';
import HeroSection from '@/components/portfolio/HeroSection';
import AboutSection from '@/components/portfolio/AboutSection';
import CapabilitiesSection from '@/components/portfolio/CapabilitiesSection';
import ProjectsSection from '@/components/portfolio/ProjectsSection';
import SkillsSection from '@/components/portfolio/SkillsSection';
import ExperienceSection from '@/components/portfolio/ExperienceSection';
import ContactSection from '@/components/portfolio/ContactSection';
import Footer from '@/components/portfolio/Footer';
import ScrollProgress from '@/components/portfolio/ScrollProgress';

const IMAGES = {
  hero: 'https://media.base44.com/images/public/6a1fc4d2c31cd1c5ba0118f2/1124da832_generated_deeba254.png',
  ai: 'https://media.base44.com/images/public/6a1fc4d2c31cd1c5ba0118f2/059796191_generated_e17c637e.png',
  network: 'https://media.base44.com/images/public/6a1fc4d2c31cd1c5ba0118f2/b82e34d77_generated_99e3e334.png',
  hardware: 'https://media.base44.com/images/public/6a1fc4d2c31cd1c5ba0118f2/07f9932bd_generated_c6d8c3cc.png',
  fullstack: 'https://media.base44.com/images/public/6a1fc4d2c31cd1c5ba0118f2/e028fe535_generated_8aa81884.png',
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <Navbar />
      <HeroSection heroImage={IMAGES.hero} />
      <AboutSection />
      <CapabilitiesSection />
      <ProjectsSection images={IMAGES} />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </div>
  );
}