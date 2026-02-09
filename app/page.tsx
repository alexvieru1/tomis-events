import AboutSection from "@/components/about-section";
import HeroSection from "@/components/hero-section";
import { LogoCloud } from "@/components/logo-cloud";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tomis Events - Organizare Evenimente Constanța",
  description: "Organizăm evenimente de neuitat în Constanța. Servicii complete: mașină fum greu, artificii dansul mirilor, gheață carbonică și efecte speciale.",
  alternates: {
    canonical: 'https://tomisevents.com',
  },
};

export default function Home() {
  return (
    <div className="flex flex-col overflow-hidden -mt-24">
      <HeroSection />
      <AboutSection />
      <LogoCloud />
    </div>
  );
}
