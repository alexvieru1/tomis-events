import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { SERVICII_INTERIOR, SERVICII_EXTERIOR, Serviciu } from '@/lib/services';
import { Metadata } from 'next';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { VideoPlayer } from '@/components/video-player';

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Helper to find service by slug
function getServiceBySlug(slug: string): Serviciu | undefined {
  const allServices = [...SERVICII_INTERIOR, ...SERVICII_EXTERIOR];
  return allServices.find((service) => service.href === `/servicii/${slug}`);
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const service = getServiceBySlug(resolvedParams.slug);

  if (!service) {
    return {
      title: 'Serviciu Inexistent - Tomis Events',
    };
  }

  return {
    title: `${service.title} - Tomis Events`,
    description: service.descriere,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const resolvedParams = await params;
  const service = getServiceBySlug(resolvedParams.slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen lg:pt-10 pb-16">
      <div className="container mx-auto px-6">
        {/* Breadcrumb / Back Link */}
        <div className="mb-8">
          <Button variant="ghost" asChild className="pl-0 hover:bg-transparent hover:text-primary">
            <Link href="/servicii">← Înapoi la Servicii</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Video, Image Carousel, or Single Image */}
          <div className="flex flex-col gap-6">
            {/* Video Player (if videoUrl exists) */}
            {service.videoUrl && (
              <div className="shadow-xl">
                <VideoPlayer
                  src={service.videoUrl}
                  poster={service.img}
                  aspectRatio={service.videoAspectRatio}
                />
              </div>
            )}

            {/* Image or Carousel (shown below video or as main media) */}
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-xl bg-muted">
              {service.images && service.images.length > 0 ? (
                <Carousel className="w-full h-full">
                  <CarouselContent className="-ml-0 h-full">
                    {service.images.map((imageSrc, index) => (
                      <CarouselItem key={index} className="pl-0 h-full relative basis-full">
                        <div className="relative w-full h-full">
                          <Image
                            src={imageSrc}
                            alt={`${service.title} - imagine ${index + 1}`}
                            fill
                            className="object-cover"
                            priority={index === 0}
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
                  <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
                </Carousel>
              ) : (
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-cover"
                  priority
                />
              )}
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="flex flex-col gap-8">
            <div>
              <h1 className="text-4xl lg:text-5xl font-heading font-bold text-[#E81ADE] mb-4">
                {service.title}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {service.about || service.descriere}
              </p>
            </div>

            {/* Features/Subcategories */}
            <div className="bg-muted/30 p-8 rounded-xl border border-border">
              <h3 className="text-xl font-semibold text-[#E81ADE] mb-6">Ce include acest serviciu:</h3>
              <ul className="space-y-4">
                {service.subCategories.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 bg-primary/10 p-1 rounded-full">
                      <Check className="size-4 text-[#E81ADE]" />
                    </div>
                    <span className="text-foreground/90">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button asChild size="lg" className="text-lg px-8 rounded-full bg-[#E81ADE] hover:bg-[#E81ADE]/90">
                <Link href="/contact">Cere o Ofertă Personalizată</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
