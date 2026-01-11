import AboutSection from "@/components/about-section";
import HeroSection from "@/components/hero-section";
import { LogoCloud } from "@/components/logo-cloud";

export default function Home() {
  return (
    <div className="flex flex-col overflow-hidden">
      <HeroSection />
      <AboutSection />
      <LogoCloud />
    </div>
  );
}
