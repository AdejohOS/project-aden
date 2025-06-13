import { AboutSection } from "@/components/about-section";
import { CtaSection } from "@/components/cta-section";
import { Hero } from "@/components/hero-section";
import { ImpactSection } from "@/components/impact-section";
import { MandatesSection } from "@/components/mandate-section";
import PartnersSection from "@/components/partners-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { WelcomeNote } from "@/components/welcome-note";

export default function Home() {
  return (
    <main>
      <Hero />
      <WelcomeNote />
      <AboutSection />
      <MandatesSection />
      <ImpactSection />
      <TestimonialsSection />
      <PartnersSection />
      <CtaSection />
    </main>
  );
}
