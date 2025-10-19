'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

type GridSection = {
  id: string;
  title: string;
  subtitle?: string;
  ctaText: string;
  backgroundColor: string;
  textColor: string;
  accentColor?: string;
  images: {
    src: string;
    alt: string;
    position: string;
  }[];
};

export function PromotionalGrid() {
  const sections: GridSection[] = [
    {
      id: 'home-essentials',
      title: 'Shop for your home essentials',
      ctaText: 'See all',
      backgroundColor: 'bg-pink-100',
      textColor: 'text-gray-900',
      accentColor: 'text-red-600',
      images: [
        {
          src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200&h=200&fit=crop&crop=center',
          alt: 'Towels and baskets',
          position: 'top-left',
        },
        {
          src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&h=200&fit=crop&crop=center',
          alt: 'Storage cabinet',
          position: 'top-right',
        },
        {
          src: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=200&h=200&fit=crop&crop=center',
          alt: 'Home decor',
          position: 'bottom-left',
        },
        {
          src: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=200&h=200&fit=crop&crop=center',
          alt: 'Bedroom essentials',
          position: 'bottom-right',
        },
      ],
    },
    {
      id: 'new-arrivals',
      title: 'New home arrivals under $50',
      ctaText: 'See all',
      backgroundColor: 'bg-amber-50',
      textColor: 'text-gray-900',
      accentColor: 'text-red-600',
      images: [
        {
          src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&h=200&fit=crop&crop=center',
          alt: 'Cooking pot',
          position: 'top-left',
        },
        {
          src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200&h=200&fit=crop&crop=center',
          alt: 'Storage canisters',
          position: 'top-right',
        },
        {
          src: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=200&h=200&fit=crop&crop=center',
          alt: 'Decorative mirror',
          position: 'bottom-left',
        },
        {
          src: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=200&h=200&fit=crop&crop=center',
          alt: 'Decorative pillow',
          position: 'bottom-right',
        },
      ],
    },
    {
      id: 'gaming',
      title: 'ENTER A GAMING UNIVERSE',
      subtitle: 'Shop consoles, accessories & more',
      ctaText: 'Shop now',
      backgroundColor: 'bg-black',
      textColor: 'text-white',
      accentColor: 'text-lime-400',
      images: [
        {
          src: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=300&fit=crop&crop=center',
          alt: 'Gaming consoles',
          position: 'full',
        },
      ],
    },
    {
      id: 'beauty',
      title: 'Elevate your style',
      subtitle: 'Explore the right tools for your daily routine',
      ctaText: 'Discover',
      backgroundColor: 'bg-purple-100',
      textColor: 'text-gray-900',
      accentColor: 'text-purple-600',
      images: [
        {
          src: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=300&fit=crop&crop=center',
          alt: 'Beauty tools',
          position: 'full',
        },
      ],
    },
  ];

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8">
      <div className="grid grid-cols-3 gap-4">
        {/* Home Essentials - Top Left */}
        <Card
          className="border-0 p-6"
          style={{
            background: 'rgba(255, 255, 255, 0.9)',
            boxShadow: '0px 4px 56px 0px rgba(0, 0, 0, 0.06)',
          }}
        >
          <h2
            className={`mb-4 text-xl font-semibold ${sections[0]?.textColor || 'text-gray-900'}`}
          >
            {sections[0]?.title || ''}
          </h2>
          <div className="mb-4 grid grid-cols-2 gap-3">
            {sections[0]?.images?.map(image => (
              <div
                key={`home-${image.src.split('/').pop()?.split('.')[0] || 'img'}`}
                className="aspect-square overflow-hidden rounded-lg bg-white"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={200}
                  height={200}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
          <Button
            variant="link"
            className={`p-0 ${sections[0]?.accentColor || 'text-red-600'} hover:underline`}
          >
            {sections[0]?.ctaText || 'See all'}
          </Button>
        </Card>

        {/* New Arrivals - Top Right */}
        <Card
          className={`${sections[1]?.backgroundColor || 'bg-amber-50'} border-0 p-6`}
          style={{
            boxShadow: '0px 4px 56px 0px rgba(0, 0, 0, 0.06)',
          }}
        >
          <h2
            className={`mb-4 text-xl font-semibold ${sections[1]?.textColor || 'text-gray-900'}`}
          >
            {sections[1]?.title || ''}
          </h2>
          <div className="mb-4 grid grid-cols-2 gap-3">
            {sections[1]?.images?.map(image => (
              <div
                key={`arrivals-${image.src.split('/').pop()?.split('.')[0] || 'img'}`}
                className="aspect-square overflow-hidden rounded-lg bg-white"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={200}
                  height={200}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
          <Button
            variant="link"
            className={`p-0 ${sections[1]?.accentColor || 'text-red-600'} hover:underline`}
          >
            {sections[1]?.ctaText || 'See all'}
          </Button>
        </Card>

        {/* Right Column - Two Cards Stacked Vertically */}
        <div className="flex flex-col gap-4">
          {/* Gaming Universe - Top Right */}
          <Card
            className={`${sections[2]?.backgroundColor || 'bg-black'} relative overflow-hidden border-0 p-6 flex-1`}
            style={{
              boxShadow: '0px 4px 56px 0px rgba(0, 0, 0, 0.06)',
            }}
          >
            {/* Gaming imagery background */}
            <div className="absolute inset-0">
              <div className="absolute right-0 top-0 h-full w-2/3">
                <Image
                  src={sections[2]?.images?.[0]?.src || ''}
                  alt={sections[2]?.images?.[0]?.alt || ''}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-black/40" />

                {/* Discount badge */}
                <div className="absolute right-24 top-16 flex h-16 w-16 items-center justify-center rounded-full bg-lime-400">
                  <div className="text-center">
                    <div className="text-xs font-bold text-black">UP TO</div>
                    <div className="text-lg font-black text-black">50%</div>
                    <div className="text-xs font-bold text-black">OFF</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10">
              <div className="mb-2 text-sm font-semibold tracking-wider text-white/80">
                ENTER A GAMING
              </div>
              <h2
                className={`mb-1 text-3xl font-bold ${sections[2]?.accentColor || 'text-lime-400'}`}
              >
                UNIVERSE
              </h2>
              <p
                className={`mb-4 text-base ${sections[2]?.textColor || 'text-white'}`}
              >
                {sections[2]?.subtitle || ''}
              </p>
            </div>
          </Card>

          {/* Beauty Tools - Bottom Right */}
          <Card
            className={`${sections[3]?.backgroundColor || 'bg-purple-100'} relative overflow-hidden border-0 p-6 flex-1`}
            style={{
              boxShadow: '0px 4px 56px 0px rgba(0, 0, 0, 0.06)',
            }}
          >
            {/* Beauty tools imagery */}
            <div className="absolute right-0 top-0 h-full w-1/2">
              <Image
                src={sections[3]?.images?.[0]?.src || ''}
                alt={sections[3]?.images?.[0]?.alt || ''}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-[50%]">
              <h2
                className={`mb-2 text-2xl font-bold ${sections[3]?.textColor || 'text-gray-900'}`}
              >
                {sections[3]?.title || ''}
              </h2>
              <p
                className={`mb-4 text-sm ${sections[3]?.textColor || 'text-gray-900'}/80`}
              >
                {sections[3]?.subtitle || ''}
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
