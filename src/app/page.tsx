import { HeroSection } from '@/app/sections/HeroSection';
import { PhilosophySection } from '@/app/sections/PhilosophySection';
import { AboutSection } from '@/app/sections/AboutSection';
import { PortfolioSection } from '@/app/sections/PortfolioSection';
import { AtelierSection } from '@/app/sections/AtelierSection';
import { ContactSection } from '@/app/sections/ContactSection';
import { Footer } from '@/app/sections/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-creme">
      {/* Hero Section */}
      <HeroSection />

      {/* Philosophy Section */}
      <PhilosophySection />

      {/* About Section */}
      <AboutSection />

      {/* Portfolio Section */}
      <PortfolioSection />

      {/* Atelier Section */}
      <AtelierSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
