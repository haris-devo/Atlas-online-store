'use client';

import type { CarouselApi } from '@/components/ui/carousel';
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
      overlayOpacity: 0.7,
    },
    {
      id: 'gaming-gear',
      title: 'Gaming Gear Sale',
      subtitle: 'High-performance gaming equipment at unbeatable prices',
      buttonText: 'Explore Gaming',
      overlayOpacity: 0.7,
    },
    {
      id: 'smart-home',
      title: 'Smart Home Essentials',
      subtitle: 'Transform your home with cutting-edge smart technology',
      buttonText: 'Discover More',
      overlayOpacity: 0.7,
    },
  ];

  useEffect(() => {
    if (!api) {
      return;
    }

    const updateCount = () => {
      const newCount = api.scrollSnapList().length;
      setCount(newCount);
    };

    const updateCurrent = () => {
      const newCurrent = api.selectedScrollSnap() + 1;
      setCurrent(newCurrent);
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
                {/* Background with Tech Products */}
                <div className="absolute inset-0 bg-gradient-to-r from-stone-100 to-stone-200">
                  {/* Tech Products Layout - Matching the image exactly */}

                  {/* Small potted plant - Top Left */}
                  <div className="absolute top-8 left-8 h-12 w-12 rounded-full bg-green-400/60 flex items-center justify-center">
                    <div className="h-8 w-8 rounded-full bg-green-500/80"></div>
                  </div>

                  {/* Sony Headphones - Center */}
                  <div className="absolute top-16 left-1/2 -translate-x-1/2">
                    <div className="relative">
                      {/* Headphone band */}
                      <div className="h-2 w-24 bg-gray-800 rounded-full"></div>
                      {/* Left earcup */}
                      <div className="absolute -left-8 top-0 h-8 w-8 bg-gray-800 rounded-full"></div>
                      {/* Right earcup (facing up as in image) */}
                      <div className="absolute -right-8 top-0 h-8 w-8 bg-gray-800 rounded-full"></div>
                      {/* Cable */}
                      <div className="absolute -right-12 top-4 h-16 w-1 bg-gray-600"></div>
                      {/* Sony branding */}
                      <div className="absolute -left-6 top-2 text-xs font-bold text-gray-800">
                        SONY
                      </div>
                    </div>
                  </div>

                  {/* Logitech Keyboard - Mid-ground */}
                  <div className="absolute top-32 left-1/2 -translate-x-1/2">
                    <div className="relative">
                      {/* Keyboard base */}
                      <div className="h-8 w-48 bg-gray-800 rounded-lg"></div>
                      {/* Keys */}
                      <div className="absolute top-1 left-2 grid grid-cols-10 gap-1">
                        <div className="h-1.5 w-1.5 bg-gray-600 rounded text-xs flex items-center justify-center">
                          Q
                        </div>
                        <div className="h-1.5 w-1.5 bg-gray-600 rounded text-xs flex items-center justify-center">
                          W
                        </div>
                        <div className="h-1.5 w-1.5 bg-gray-600 rounded text-xs flex items-center justify-center">
                          A
                        </div>
                        <div className="h-1.5 w-1.5 bg-gray-600 rounded text-xs flex items-center justify-center">
                          S
                        </div>
                        <div className="h-1.5 w-1.5 bg-gray-600 rounded text-xs flex items-center justify-center">
                          D
                        </div>
                        <div className="h-1.5 w-3 bg-gray-600 rounded text-xs flex items-center justify-center">
                          back
                        </div>
                        <div className="h-1.5 w-3 bg-gray-600 rounded text-xs flex items-center justify-center">
                          invio
                        </div>
                        <div className="h-1.5 w-1.5 bg-gray-600 rounded text-xs flex items-center justify-center">
                          !
                        </div>
                        <div className="h-1.5 w-1.5 bg-gray-600 rounded text-xs flex items-center justify-center">
                          @
                        </div>
                        <div className="h-1.5 w-1.5 bg-gray-600 rounded text-xs flex items-center justify-center">
                          #
                        </div>
                      </div>
                      {/* Logitech branding */}
                      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-bold text-gray-800">
                        logitech
                      </div>
                    </div>
                  </div>

                  {/* Logitech Mouse - Right side, positioned vertically */}
                  <div className="absolute top-24 right-16">
                    <div className="relative">
                      {/* Mouse body */}
                      <div className="h-16 w-10 bg-gray-600 rounded-lg transform rotate-12"></div>
                      {/* Scroll wheel */}
                      <div className="absolute top-2 left-1/2 -translate-x-1/2 h-1 w-6 bg-gray-400 rounded-full"></div>
                      {/* Thumb rest */}
                      <div className="absolute bottom-2 right-1 h-3 w-2 bg-gray-500 rounded"></div>
                      {/* Logitech branding */}
                      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-bold text-gray-800">
                        logi
                      </div>
                    </div>
                  </div>

                  {/* Additional scattered tech elements */}
                  <div className="absolute top-40 left-16 h-6 w-6 rounded-lg bg-gray-500/20"></div>
                  <div className="absolute top-36 left-32 h-4 w-4 rounded-full bg-gray-300/25"></div>
                  <div className="absolute top-44 left-48 h-8 w-8 rounded bg-gray-400/20"></div>
                  <div className="absolute top-32 left-64 h-10 w-10 rounded-lg bg-gray-500/30"></div>
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
