import Image from "next/image";
import { InfiniteSlider } from "./ui/infinite-slider";
import { ProgressiveBlur } from "./ui/progressive-blur";

const LOGOS = [
  {
    name: "Breeze Mamaia",
    url: "/images/clienti/breeze-mamaia.webp",
    className:
      "h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300",
    width: 262,
    height: 180,
  },
  {
    name: "Loft Mamaia",
    url: "/images/clienti/loft-mamaia.webp",
    className:
      "h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300",
    width: 262,
    height: 180,
  },
  {
    name: "Nuba Mamaia",
    url: "/images/clienti/nuba.webp",
    className:
      "h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300",
    width: 262,
    height: 180,
  },
  {
    name: "Fratelli Beach & Club",
    url: "/images/clienti/fratelli.webp",
    className:
      "h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300",
    width: 262,
    height: 180,
  },
  {
    name: "Azimuth",
    url: "/images/clienti/azimuth.webp",
    className:
      "h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300",
    width: 262,
    height: 180,
  },
  {
    name: "Crazy Beach",
    url: "/images/clienti/crazy-beach.webp",
    className:
      "h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300",
    width: 262,
    height: 180,
  },
  {
    name: "EGO Club",
    url: "/images/clienti/ego-club.webp",
    className:
      "h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300",
    width: 262,
    height: 180,
  },
  {
    name: "Hotel Iaki",
    url: "/images/clienti/hotel-iaki.webp",
    className:
      "h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300",
    width: 262,
    height: 180,
  },
  {
    name: "Phoenicia Holiday Resort",
    url: "/images/clienti/phoenicia-holiday-resort.webp",
    className:
      "h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300",
    width: 262,
    height: 180,
  },
  {
    name: "Sensation Media Party",
    url: "/images/clienti/sensation-media-party.webp",
    className:
      "h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300",
    width: 262,
    height: 180,
  },
  {
    name: "Galla Ballroom",
    url: "/images/clienti/galla-ballroom.webp",
    className:
      "h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300",
    width: 262,
    height: 180,
  },
  {
    name: "Grand Imperial Ballroom",
    url: "/images/clienti/imperial-ballroom.webp",
    className:
      "h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300",
    width: 262,
    height: 180,
  },
  {
    name: "Reyna",
    url: "/images/clienti/reyna.webp",
    className:
      "h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300",
    width: 262,
    height: 180,
  },
  {
    name: "La Scoica",
    url: "/images/clienti/scoica.webp",
    className:
      "h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300",
    width: 262,
    height: 180,
  },
];

export const LogoCloud = () => {
  return (
    <section className="bg-background pb-16 md:pb-32">
      <div className="group relative m-auto max-w-6xl px-6">
        <div className="flex flex-col items-center md:flex-row">
          <div className="inline md:max-w-44 md:border-r md:pr-6">
            <p className="text-end text-sm">
              Locații care au încredere în noi
            </p>
          </div>
          <div className="relative py-6 md:w-[calc(100%-11rem)]">
            <InfiniteSlider speedOnHover={0} speed={40} gap={112}>
              {LOGOS.map((logo, idx) => (
                <div
                  key={idx}
                  className="group/logo relative flex items-center justify-center outline-none select-none"
                  tabIndex={0}
                >
                  <Image
                    className={`mx-auto w-fit dark:invert transition-opacity duration-300 group-hover/logo:opacity-0 group-focus/logo:opacity-0 ${logo.className}`}
                    src={logo.url}
                    alt={`${logo.name}`}
                    height={logo.height}
                    width={logo.width}
                  />
                  <span className="absolute inset-0 flex items-center justify-center text-sm font-semibold opacity-0 transition-opacity duration-300 group-hover/logo:opacity-100 group-focus/logo:opacity-100 whitespace-nowrap">
                    {logo.name}
                  </span>
                </div>
              ))}
            </InfiniteSlider>

            <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
            <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
            <ProgressiveBlur
              className="pointer-events-none absolute left-0 top-0 h-full w-20"
              direction="left"
              blurIntensity={1}
            />
            <ProgressiveBlur
              className="pointer-events-none absolute right-0 top-0 h-full w-20"
              direction="right"
              blurIntensity={1}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
