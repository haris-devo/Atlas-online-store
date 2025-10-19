'use client';

import type { CarouselApi } from '@/components/ui/carousel';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

type TechDealSlide = {
  id: string;
  title: string;
  subtitle: string;
  buttonText: string;
  image: string;
  overlayOpacity: number;
};

export function LimitedTimeTechDeals() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const slides: TechDealSlide[] = [
    {
      id: 'tech-deals-1',
      title: 'Limited Time Tech Deals',
      subtitle: 'Up to 50% off on premium electronics and accessories',
      buttonText: 'Shop Now',
      image:
        'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=1200&h=400&fit=crop&crop=center',
      overlayOpacity: 0.7,
    },
    {
      id: 'gaming-gear',
      title: 'Gaming Gear Sale',
      subtitle: 'High-performance gaming equipment at unbeatable prices',
      buttonText: 'Explore Gaming',
      image:
        'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=1200&h=400&fit=crop&crop=center',
      overlayOpacity: 0.7,
    },
    {
      id: 'smart-home',
      title: 'Smart Home Essentials',
      subtitle: 'Transform your home with cutting-edge smart technology',
      buttonText: 'Discover More',
      image:
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=400&fit=crop&crop=center',
      overlayOpacity: 0.7,
    },
  ];

  useEffect(() => {
    if (!api) {
      return;
    }

    const updateCount = () => {
      const newCount = api.scrollSnapList().length;
      setCount(() => newCount);
    };

    const updateCurrent = () => {
      const newCurrent = api.selectedScrollSnap() + 1;
      setCurrent(() => newCurrent);
    };

    updateCount();
    updateCurrent();

    api.on('select', updateCurrent);
    api.on('reInit', updateCount);

    return () => {
      api.off('select', updateCurrent);
      api.off('reInit', updateCount);
    };
  }, [api]);

  const goToSlide = (index: number) => {
    api?.scrollTo(index);
  };

  return (
    <section className="relative mx-auto w-full max-w-7xl">
      <Carousel
        setApi={setApi}
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-0">
          {slides.map(slide => (
            <CarouselItem key={slide.id} className="pl-0">
              {/* Main Banner */}
              <div className="relative h-[400px] w-full">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1200px"
                    priority
                  />
                </div>

                {/* Dark Overlay - covers left two-thirds */}
                <div
                  className="absolute inset-0 bg-black"
                  style={{
                    opacity: slide.overlayOpacity,
                    clipPath: 'polygon(0 0, 66% 0, 66% 100%, 0 100%)',
                  }}
                />

                {/* Content */}
                <div className="relative z-10 flex h-full items-center justify-center px-8">
                  <div className="max-w-4xl text-center">
                    {/* Main Title */}
                    <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                      {slide.title}
                    </h1>

                    {/* Subtitle */}
                    <p className="mb-8 text-lg text-white md:text-xl lg:text-2xl">
                      {slide.subtitle}
                    </p>

                    {/* CTA Button */}
                    <Button
                      size="lg"
                      className="bg-yellow-400 px-8 py-3 text-lg font-semibold text-black hover:bg-yellow-500 transition-colors"
                    >
                      {slide.buttonText}
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Arrows - Top Right Corner */}
        <div className="absolute top-4 right-4 z-30 flex space-x-2">
          <CarouselPrevious className="relative left-0 top-0 h-8 w-8 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 border-0" />
          <CarouselNext className="relative left-0 top-0 h-8 w-8 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 border-0" />
        </div>

        {/* Pagination Dots - Bottom Center - Fixed position */}
        <div className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 space-x-2">
          {Array.from({ length: count }, (_, index) => (
            <button
              key={`pagination-dot-${index}`}
              type="button"
              onClick={() => goToSlide(index)}
              className={`h-3 w-3 rounded-full transition-all ${
                index === current - 1
                  ? 'bg-yellow-400'
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </Carousel>

      {/* Auto-play indicator */}
      <div className="absolute bottom-0 left-0 h-1 w-full bg-black/20">
        <div
          className="h-full bg-yellow-400 transition-all duration-5000 ease-linear"
          style={{
            width: `${(current / count) * 100}%`,
          }}
        />
      </div>
    </section>
  );
}
