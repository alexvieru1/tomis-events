import AboutSection from "@/components/about-section";
import HeroSection from "@/components/hero-section";
import { LogoCloud } from "@/components/logo-cloud";
import PartnersSection from "@/components/partners-section";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <AboutSection />
      <LogoCloud />
      <PartnersSection />
    </div>
  );
}
