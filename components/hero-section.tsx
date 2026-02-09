import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TextEffect } from "@/components/ui/text-effect";
import { AnimatedGroup } from "@/components/ui/animated-group";
import Link from "next/link";

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring" as const,
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        poster="https://pub-039f9033d8464e8d933b76f3820fd6c0.r2.dev/images/servicii/CleanShot%202026-02-09%20at%2009.37.04%402x.png"
      >
        <source
          src="https://pub-039f9033d8464e8d933b76f3820fd6c0.r2.dev/videos/artificii-exterior.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <TextEffect
          preset="fade-in-blur"
          speedSegment={0.3}
          as="h1"
          className="text-balance text-5xl font-medium text-white md:text-6xl drop-shadow-lg"
        >
          Evenimentul tău merită o sclipire de geniu
        </TextEffect>
        <TextEffect
          per="line"
          preset="fade-in-blur"
          speedSegment={0.3}
          delay={0.5}
          as="p"
          className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-white drop-shadow-md"
        >
          Efecte speciale premium, pirotehnică de interior și exterior
          pentru momente care rămân gravate în memoria invitaților tăi.
        </TextEffect>

        <AnimatedGroup
          variants={{
            container: {
              visible: {
                transition: {
                  staggerChildren: 0.05,
                  delayChildren: 0.75,
                },
              },
            },
            ...transitionVariants,
          }}
          className="mt-12"
        >
          <div className="flex flex-col items-center justify-center gap-4 mt-8 sm:flex-row">
            <Link href="/servicii">
              <Button
                className="rounded-full bg-[#E81ADE] px-8 text-base font-semibold text-white hover:bg-[#c912bf] hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(232,26,222,0.3)]"
                size="lg"
              >
                Vezi Serviciile
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/pachete">
              <Button
                className="rounded-full px-8 text-base font-semibold border border-white/40 bg-transparent text-white hover:bg-white/10 transition-all duration-300"
                size="lg"
              >
                Vezi Pachetele
              </Button>
            </Link>
          </div>
        </AnimatedGroup>
      </div>
    </section>
  );
}
