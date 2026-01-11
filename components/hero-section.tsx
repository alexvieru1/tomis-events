import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TextEffect } from "@/components/ui/text-effect";
import { AnimatedGroup } from "@/components/ui/animated-group";
import Image from "next/image";
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
    <>
      <main className="overflow-hidden [--color-primary-foreground:var(--color-white)] [--color-primary:var(--color-green-600)]">
        <section>
          <div className="relative mx-auto max-w-6xl px-6 pb-20">
            <div className="relative z-10 mx-auto max-w-4xl text-center">
              <TextEffect
                preset="fade-in-blur"
                speedSegment={0.3}
                as="h1"
                className="text-balance text-5xl font-medium text-[#E81ADE] md:text-6xl"
              >
                Evenimentul tău merită o sclipire de geniu
              </TextEffect>
              <TextEffect
                per="line"
                preset="fade-in-blur"
                speedSegment={0.3}
                delay={0.5}
                as="p"
                className="mx-auto mt-6 max-w-2xl text-pretty text-lg"
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
                      variant="outline"
                      className="rounded-full px-8 text-base font-semibold border-neutral-200 hover:bg-neutral-100 dark:border-neutral-800 dark:hover:bg-neutral-800 transition-all duration-300"
                      size="lg"
                    >
                      Vezi Pachetele
                    </Button>
                  </Link>
                </div>
                <div className="mask-b-from-55% relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
                  <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1">
                  <Image className="z-2 border-border/25 aspect-15/8 relative rounded-2xl border" src="/images/hero.webp" alt="Hero Image" width={1200} height={640} />
                  </div>
                </div>
                {/* <div className="mx-auto 2xl:max-w-7xl">
                  <div className="perspective-distant pl-8 lg:pl-44">
                    <div className="lg:h-176 rotate-x-20 mask-b-from-90% mask-b-to-100% mask-r-from-75% skew-x-12 pl-6 pt-6">
                      <Image
                        src="/images/hero.webp"
                        alt="Hero Image"
                        width={2048}
                        height={1357}
                        className="rounded-(--radius) border shadow-xl dark:hidden"
                      />
                    </div>
                  </div>
                </div> */}
                {/* <div
                  aria-hidden
                  className="bg-radial from-primary/50 dark:from-primary/25 relative mx-auto mt-32 max-w-2xl to-transparent to-55% text-left"
                >
                  <div className="bg-background border-border/50 absolute inset-0 mx-auto w-80 -translate-x-3 -translate-y-12 rounded-[2rem] border p-2 [mask-image:linear-gradient(to_bottom,#000_50%,transparent_90%)] sm:-translate-x-6">
                    <div className="relative h-96 overflow-hidden rounded-[1.5rem] border p-2 pb-12 before:absolute before:inset-0 before:bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_6px)] before:opacity-50">
                      <Image
                        src="/images/hero-back.webp"
                        alt="Hero Background"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="bg-muted dark:bg-background/50 border-border/50 mx-auto w-80 translate-x-4 rounded-[2rem] border p-2 backdrop-blur-3xl [mask-image:linear-gradient(to_bottom,#000_50%,transparent_90%)] sm:translate-x-8">
                    <div className="bg-background space-y-2 overflow-hidden rounded-[1.5rem] border shadow-xl dark:bg-white/5 dark:shadow-black dark:backdrop-blur-3xl">
                      <Image
                        src="/images/hero-front.webp"
                        alt="Hero Front"
                        width={384}
                        height={512}
                        className="rounded-[1rem] object-cover"
                      />

                      <div className="bg-muted rounded-[1rem] p-4 pb-16 dark:bg-white/5"></div>
                    </div>
                  </div>
                </div> */}
              </AnimatedGroup>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
