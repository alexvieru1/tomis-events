import CardFlip from "@/components/kokonutui/card-flip";
import { SERVICII_INTERIOR, SERVICII_EXTERIOR } from "@/lib/services";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicii Premium Evenimente",
  description: "Descoperă gama noastră completă de servicii pentru evenimente în Constanța: mașină fum greu, artificii dansul mirilor, cabină foto, gheață carbonică. Calitate garantată!",
  keywords: ['servicii nunta constanta', 'inchiriere fum greu', 'artificii nunta', 'cabina foto constanta', 'gheata carbonica', 'lumini arhitecturale'],
  alternates: {
    canonical: 'https://tomisevents.com/servicii',
  },
};

const Servicii = () => {
  return (
    <div className="container mx-auto px-4 py-16 md:py-32">
      <h1 className="mb-12 text-center font-heading text-4xl font-semibold text-[#E81ADE] md:text-5xl">
        Serviciile Noastre
      </h1>

      <div className="mb-16">
        <h2 className="mb-8 font-heading text-2xl font-semibold text-neutral-800 dark:text-neutral-200">
          Servicii Interior
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {SERVICII_INTERIOR.map((service, idx) => (
            <CardFlip
              key={`interior-${idx}`}
              title={service.title}
              description={service.descriere}
              features={service.subCategories}
              href={service.href}
              image={service.img}
            />
          ))}
        </div>
      </div>

      <div>
        <h2 className="mb-8 font-heading text-2xl font-semibold text-neutral-800 dark:text-neutral-200">
          Servicii Exterior
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {SERVICII_EXTERIOR.map((service, idx) => (
            <CardFlip
              key={`exterior-${idx}`}
              title={service.title}
              description={service.descriere}
              features={service.subCategories}
              href={service.href}
              image={service.img}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Servicii;