'use client';

import type { CarouselApi } from '@/components/ui/carousel';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

type Category = {
  id: string;
  name: string;
  image: string;
};

const categories: Category[] = [
  {
    id: 'electronic',
    name: 'Electronic',
    image:
      'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=400&fit=crop&crop=center',
  },
  {
    id: 'fashion',
    name: 'Fashion',
    image:
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop&crop=center',
  },
  {
    id: 'home',
    name: 'Home',
    image:
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&crop=center',
  },
  {
    id: 'kitchen',
    name: 'Kitchen',
    image:
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop&crop=center',
  },
  {
    id: 'sport',
    name: 'Sport',
    image:
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=center',
  },
  {
    id: 'gaming',
    name: 'Gaming',
    image:
      'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=400&fit=crop&crop=center',
  },
  {
    id: 'cloths',
    name: 'Cloths',
    image:
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop&crop=center',
  },
  {
    id: 'shoes',
    name: 'Shoes',
    image:
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop&crop=center',
  },
  {
    id: 'computer',
    name: 'Computer',
    image:
      'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=400&h=400&fit=crop&crop=center',
  },
  {
    id: 'phone',
    name: 'Phone',
    image:
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop&crop=center',
  },
  {
    id: 'books',
    name: 'Books',
    image:
      'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=400&fit=crop&crop=center',
  },
  {
    id: 'toys',
    name: 'Toys',
    image:
      'https://images.unsplash.com/photo-1558060370-539c4a70165a?w=400&h=400&fit=crop&crop=center',
  },
  {
    id: 'beauty',
    name: 'Beauty',
    image:
      'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop&crop=center',
  },
  {
    id: 'automotive',
    name: 'Automotive',
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&crop=center',
  },
  {
    id: 'jewelry',
    name: 'Jewelry',
    image:
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop&crop=center',
  },
  {
    id: 'health',
    name: 'Health',
    image:
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=center',
  },
  {
    id: 'music',
    name: 'Music',
    image:
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop&crop=center',
  },
  {
    id: 'outdoor',
    name: 'Outdoor',
    image:
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=400&fit=crop&crop=center',
  },
];

export function CategoryIcons() {
  const [api, setApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCanScrollPrev(() => api.canScrollPrev());
    setCanScrollNext(() => api.canScrollNext());

    api.on('select', () => {
      setCanScrollPrev(() => api.canScrollPrev());
      setCanScrollNext(() => api.canScrollNext());
    });
  }, [api]);

  return (
    <section className="mx-auto max-w-7xl px-4 py-8">
      <div className="relative flex items-center justify-center gap-4">
        <Carousel
          setApi={setApi}
          opts={{
            align: 'start',
            loop: false,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {categories.map(category => (
              <CarouselItem
                key={category.id}
                className="pl-2 md:pl-4 basis-auto"
              >
                <button
                  className="group flex min-w-[100px] flex-col items-center gap-2 transition-transform hover:scale-105 bg-[#E4E4E4] rounded-sm px-2.5 py-1.5"
                  type="button"
                >
                  <div className="relative h-[80px] w-[88px] overflow-hidden rounded-sm border border-gray-700 shadow-sm transition-shadow group-hover:shadow-md ">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  <span className="text-sm font-semibold text-gray-900">
                    {category.name}
                  </span>
                </button>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Custom positioned arrows outside the carousel */}
        <button
          onClick={() => api?.scrollPrev()}
          disabled={!canScrollPrev}
          className="absolute -left-12 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 shadow-md transition-all hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
          type="button"
          aria-label="Previous slide"
        >
          <svg
            className="h-5 w-5 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={() => api?.scrollNext()}
          disabled={!canScrollNext}
          className="absolute -right-12 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 shadow-md transition-all hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
          type="button"
          aria-label="Next slide"
        >
          <svg
            className="h-5 w-5 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
