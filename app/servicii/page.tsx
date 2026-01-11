import CardFlip from "@/components/kokonutui/card-flip";
import { SERVICII_INTERIOR, SERVICII_EXTERIOR } from "@/lib/services";

const Servicii = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="mb-12 text-center font-heading text-4xl font-bold md:text-5xl">
        Serviciile Noastre
      </h1>

      <div className="mb-16">
        <h2 className="mb-8 font-heading text-2xl font-bold text-neutral-800 dark:text-neutral-200">
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
        <h2 className="mb-8 font-heading text-2xl font-bold text-neutral-800 dark:text-neutral-200">
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