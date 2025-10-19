'use client';

import type { CarouselApi } from '@/components/ui/carousel';
import ChevronLeftIcon from 'lucide-react/dist/esm/icons/chevron-left';
import ChevronRightIcon from 'lucide-react/dist/esm/icons/chevron-right';
import Image from 'next/image';
import Link from 'next/link';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

type PromoSlide = {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  brands: string[];
  products: {
    name: string;
    image: string;
    position: 'top-right' | 'center-left' | 'bottom-right';
  }[];
  link: string;
};

const promoSlides: PromoSlide[] = [
  {
    id: 'headphones-deals',
    title: 'TOP DEALS',
    subtitle: 'On Headphones & Earphones',
    price: 'Starting from $59',
    brands: ['JBL', 'Apple', 'SONY'],
    products: [
      {
        name: 'JBL Portable Speaker',
        image:
          'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop',
        position: 'top-right',
      },
      {
        name: 'Apple AirPods',
        image:
          'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=300&h=300&fit=crop',
        position: 'center-left',
      },
      {
        name: 'Over-Ear Headphones',
        image:
          'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&h=300&fit=crop',
        position: 'bottom-right',
      },
    ],
    link: '/deals/headphones',
  },
  {
    id: 'smartphone-deals',
    title: 'SMART DEALS',
    subtitle: 'On Smartphones & Accessories',
    price: 'Starting from $199',
    brands: ['Apple', 'Samsung', 'Google'],
    products: [
      {
        name: 'iPhone 15',
        image:
          'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=300&fit=crop',
        position: 'top-right',
      },
      {
        name: 'Samsung Galaxy',
        image:
          'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop',
        position: 'center-left',
      },
      {
        name: 'Google Pixel',
        image:
          'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop',
        position: 'bottom-right',
      },
    ],
    link: '/deals/smartphones',
  },
  {
    id: 'laptop-deals',
    title: 'BEST DEALS',
    subtitle: 'On Laptops & Computers',
    price: 'Starting from $399',
    brands: ['Apple', 'Dell', 'HP'],
    products: [
      {
        name: 'MacBook Pro',
        image:
          'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300&h=300&fit=crop',
        position: 'top-right',
      },
      {
        name: 'Dell XPS',
        image:
          'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=300&fit=crop',
        position: 'center-left',
      },
      {
        name: 'HP Pavilion',
        image:
          'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=300&fit=crop',
        position: 'bottom-right',
      },
    ],
    link: '/deals/laptops',
  },
];

export function TopDealsCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const getBrandLogo = (brand: string) => {
    switch (brand) {
      case 'JBL':
        return (
          <div className="flex h-8 w-12 items-center justify-center rounded bg-orange-500">
            <span className="text-xs font-bold text-white">JBL</span>
          </div>
        );
      case 'Apple':
        return <span className="text-lg font-medium text-white">Apple</span>;
      case 'SONY':
        return <span className="text-lg font-medium text-white">SONY</span>;
      case 'Samsung':
        return <span className="text-lg font-medium text-white">Samsung</span>;
      case 'Google':
        return <span className="text-lg font-medium text-white">Google</span>;
      case 'Dell':
        return <span className="text-lg font-medium text-white">Dell</span>;
      case 'HP':
        return <span className="text-lg font-medium text-white">HP</span>;
      case 'PlayStation':
        return (
          <span className="text-lg font-medium text-white">PlayStation</span>
        );
      case 'Xbox':
        return <span className="text-lg font-medium text-white">Xbox</span>;
      case 'Nintendo':
        return <span className="text-lg font-medium text-white">Nintendo</span>;
      case 'Amazon':
        return <span className="text-lg font-medium text-white">Amazon</span>;
      case 'Nike':
        return <span className="text-lg font-medium text-white">Nike</span>;
      case 'Adidas':
        return <span className="text-lg font-medium text-white">Adidas</span>;
      case 'Puma':
        return <span className="text-lg font-medium text-white">Puma</span>;
      default:
        return <span className="text-lg font-medium text-white">{brand}</span>;
    }
  };

  const getProductPosition = (position: string) => {
    switch (position) {
      case 'top-right':
        return 'top-4 right-4 h-24 w-24';
      case 'center-left':
        return 'top-1/2 left-4 -translate-y-1/2 h-32 w-32';
      case 'bottom-right':
        return 'bottom-4 right-8 h-40 w-40';
      default:
        return 'top-4 right-4 h-24 w-24';
    }
  };

  return (
    <section className="w-full py-8">
      <div className="w-full">
        <Carousel
          className="w-full relative"
          opts={{
            align: 'start',
            loop: true,
            skipSnaps: false,
            dragFree: false,
          }}
          setApi={setApi}
        >
          <CarouselContent>
            {promoSlides.map(slide => (
              <CarouselItem key={slide.id} className="basis-full">
                <div className="relative overflow-hidden">
                  {/* Gradient Background */}
                  <div className="relative h-[400px] w-full bg-gradient-to-br from-black via-gray-900 to-orange-900">
                    {/* Content Container */}
                    <div className="relative z-10 flex h-full items-center justify-between p-8">
                      {/* Left Side - Text Content */}
                      <div className="flex flex-col space-y-6">
                        {/* Brand Logos */}
                        <div className="flex flex-col space-y-3">
                          {slide.brands.map(brand => (
                            <div
                              key={brand}
                              className="flex items-center space-x-2"
                            >
                              {getBrandLogo(brand)}
                            </div>
                          ))}
                        </div>

                        {/* Main Text */}
                        <div className="space-y-2">
                          <h2
                            className="text-4xl font-bold text-orange-200"
                            style={{ fontFamily: 'Metropolis' }}
                          >
                            {slide.title}
                          </h2>
                          <p className="text-xl text-white">{slide.subtitle}</p>
                        </div>

                        {/* Price Button */}
                        <Link href={slide.link}>
                          <Button className="rounded-full bg-white px-6 py-3 text-black hover:bg-gray-100">
                            {slide.price}
                          </Button>
                        </Link>
                      </div>

                      {/* Right Side - Product Images */}
                      <div className="relative h-full w-1/2">
                        {slide.products.map(product => (
                          <div
                            key={product.name}
                            className={`absolute ${getProductPosition(product.position)}`}
                          >
                            <Image
                              src={product.image}
                              alt={product.name}
                              fill
                              className="object-contain"
                              sizes="(max-width: 768px) 100px, (max-width: 1200px) 150px, 200px"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Arrows - Outside CarouselContent */}
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-white/20 border-2 border-white/40 hover:bg-white/30 hover:border-white/60 transition-all duration-300 text-white">
            <ChevronLeftIcon className="h-6 w-6 text-white" />
            <span className="sr-only">Previous slide</span>
          </CarouselPrevious>
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-white/20 border-2 border-white/40 hover:bg-white/30 hover:border-white/60 transition-all duration-300 text-white">
            <ChevronRightIcon className="h-6 w-6 text-white" />
            <span className="sr-only">Next slide</span>
          </CarouselNext>

          {/* Carousel Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
            {Array.from({ length: count }).map((_, index) => (
              <button
                type="button"
                key={`indicator-${index}-stable`}
                className={`h-3 w-3 rounded-full transition-all duration-300 border-2 ${
                  index + 1 === current
                    ? 'bg-white border-white'
                    : 'bg-white/20 border-white/40 hover:bg-white/40 hover:border-white/60'
                }`}
                onClick={() => api?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </Carousel>
      </div>
    </section>
  );
}
