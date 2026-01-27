"use client";
import { TextEffect } from "./ui/text-effect";
import Image from "next/image";
import { AnimatedGroup } from "./ui/animated-group";
import CountUp from "./count-up";

const AboutSection = () => {
  return (
    <section className="container mx-auto px-6 py-24">
      <div className="mb-16 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
          Visează, de restul ne ocupăm noi!
        </p>
        <TextEffect
          preset="fade-in-blur"
          speedSegment={0.3}
          as="h2"
          className="font-heading text-4xl font-bold text-[#E81ADE] md:text-5xl"
          startOnView={true}
        >
          Povestea Noastră
        </TextEffect>
        <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-[#E81ADE]" />
      </div>

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <AnimatedGroup
          className="grid grid-cols-2 gap-4"
          preset="scale"
          variants={{
            container: {
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            },
          }}
        >
          <div className="relative aspect-9/16 overflow-hidden rounded-2xl">
            <Image
              src="https://pub-039f9033d8464e8d933b76f3820fd6c0.r2.dev/images/artificii-exterior.webp"
              alt="Artificii exterior"
              fill
              className="object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>
          <div className="relative aspect-9/16 overflow-hidden rounded-2xl">
            <Image
              src="https://pub-039f9033d8464e8d933b76f3820fd6c0.r2.dev/images/artificii-zi.webp"
              alt="Artificii zi"
              fill
              className="object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>
          <div className="relative col-span-2 aspect-9/16 overflow-hidden rounded-2xl">
            <Image
              src="https://pub-039f9033d8464e8d933b76f3820fd6c0.r2.dev/images/valsul-mirilor.webp"
              alt="Valsul mirilor"
              fill
              className="object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>
          <div className="relative aspect-9/16 overflow-hidden rounded-2xl">
            <Image
              src="https://pub-039f9033d8464e8d933b76f3820fd6c0.r2.dev/images/servicii/artificii-exterior-2.webp"
              alt="Artificii exterior"
              fill
              className="object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>
        </AnimatedGroup>

        <div className="flex flex-col justify-start space-y-8 lg:sticky lg:top-32 h-fit">
          <h3 className="font-heading text-2xl font-bold leading-tight text-zinc-900 md:text-3xl dark:text-zinc-100">
            Secretul real pentru succesul unei firme de pirotehnie constă în
            pasiunea membrilor echipei și dorința fiecăruia de a oferi
            &quot;spectacolul perfect&quot;.
          </h3>
          
          <div className="space-y-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
            <p>
              <span className="text-3xl font-bold text-[#E81ADE]">2006</span>
              <span className="ml-2">
                - Echipa noastră este formată din oameni cu experiență în domeniul
                pirotehnic, experiență care și-a spus cuvântul atât în cadrul
                evenimentelor pe plan național, cât și internațional.
              </span>
            </p>
            <p>
              Această experiență o transmitem spectatorilor printr-un limbaj
              pirotehnic, creând tablouri încărcate de emoție și culoare și mai
              presus de toate unice, care să vă umple sufletele de bucurie și să
              vă facă să vibrați odată cu ele.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 pt-6 border-t border-zinc-200 sm:grid-cols-3 dark:border-zinc-800">
            <div className="text-center">
              <div className="flex items-center justify-center text-3xl font-bold text-[#E81ADE]">
                <CountUp to={20} className="inline-block" />
                <span className="ml-1">+</span>
              </div>
              <p className="mt-2 text-sm font-medium text-zinc-600 dark:text-zinc-400">
                Ani de Experiență
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center text-3xl font-bold text-[#E81ADE]">
                <CountUp to={2000} separator="," className="inline-block" />
                <span className="ml-1">+</span>
              </div>
              <p className="mt-2 text-sm font-medium text-zinc-600 dark:text-zinc-400">
                Evenimente
              </p>
            </div>
            <div className="col-span-2 text-center sm:col-span-1">
              <div className="flex items-center justify-center text-3xl font-bold text-[#E81ADE]">
                <CountUp to={100} className="inline-block" />
                <span className="ml-1">%</span>
              </div>
              <p className="mt-2 text-sm font-medium text-zinc-600 dark:text-zinc-400">
                Pasiune
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
