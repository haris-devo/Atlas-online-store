'use client';

import ChevronRightIcon from 'lucide-react/dist/esm/icons/chevron-right';
import ZapIcon from 'lucide-react/dist/esm/icons/zap';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { useProductCard } from '@/hooks/useProductCard';
import { ProductCard } from './ProductCard';

// Removed unused constant FLASH_DEAL_DURATION

type FlashDealProduct = {
  id: string;
  title: string;
  image: string;
  price: number;
  originalPrice: number;
  discount: number;
  rating: number;
  reviewCount: number;
};

const flashDealProducts: FlashDealProduct[] = [
  {
    id: 'flash-1',
    title: 'Wireless Bluetooth Earbuds with Noise Cancellation',
    image:
      'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=500&h=500&fit=crop',
    price: 59.99,
    originalPrice: 99.99,
    discount: 40,
    rating: 4.5,
    reviewCount: 2345,
  },
  {
    id: 'flash-2',
    title: 'Wireless Bluetooth Earbuds with Noise Cancellation',
    image:
      'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&h=500&fit=crop',
    price: 18.99,
    originalPrice: 45.99,
    discount: 12,
    rating: 4.5,
    reviewCount: 2345,
  },
  {
    id: 'flash-3',
    title: 'Wireless Bluetooth Earbuds with Noise Cancellation',
    image:
      'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=500&h=500&fit=crop',
    price: 1559.99,
    originalPrice: 2999.99,
    discount: 40,
    rating: 4.5,
    reviewCount: 2345,
  },
  {
    id: 'flash-4',
    title: 'Wireless Bluetooth Earbuds with Noise Cancellation',
    image:
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&h=500&fit=crop',
    price: 159.99,
    originalPrice: 234.99,
    discount: 34,
    rating: 4.5,
    reviewCount: 2345,
  },
  {
    id: 'flash-5',
    title: 'Wireless Bluetooth Earbuds with Noise Cancellation',
    image:
      'https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&h=500&fit=crop',
    price: 59.99,
    originalPrice: 99.99,
    discount: 40,
    rating: 4.5,
    reviewCount: 2345,
  },
];

export function FlashDeals() {
  const { handleAddToCart, handleProductClick } = useProductCard();
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = Date.now();
      const endOfDay = new Date();
      endOfDay.setHours(23, 59, 59, 999);
      const difference = endOfDay.getTime() - now;

      if (difference > 0) {
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60),
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft(() => ({ hours, minutes, seconds }));
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number) => String(time).padStart(2, '0');

  return (
    <section className="w-full px-4">
      <div
        className="rounded-[12px] p-6 shadow-sm"
        style={{
          backgroundColor: '#FFFFFFE5',
        }}
      >
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ZapIcon className="h-6 w-6 text-red-600" />
            <h2
              className="text-[26px] font-medium leading-8 tracking-normal"
              style={{ fontFamily: 'Metropolis' }}
            >
              Flash Deals
            </h2>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Ends in:</span>
              <div className="flex items-center gap-1">
                <div className="flex h-8 w-10 items-center justify-center rounded-[4px] bg-black text-white">
                  <span className="text-sm font-bold">
                    {formatTime(timeLeft.hours)}
                  </span>
                </div>
                <span className="text-sm font-bold text-gray-900">:</span>
                <div className="flex h-8 w-10 items-center justify-center rounded-[4px] bg-black text-white">
                  <span className="text-sm font-bold">
                    {formatTime(timeLeft.minutes)}
                  </span>
                </div>
                <span className="text-sm font-bold text-gray-900">:</span>
                <div className="flex h-8 w-10 items-center justify-center rounded-[4px] bg-black text-white">
                  <span className="text-sm font-bold">
                    {formatTime(timeLeft.seconds)}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <Link href="/flash-deals">
            <Button
              variant="link"
              className="text-red-600 hover:text-red-700 p-0"
            >
              See all
              <ChevronRightIcon className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* Products Grid - 5 cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {flashDealProducts.slice(0, 5).map(product => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
              originalPrice={product.originalPrice}
              discount={product.discount}
              rating={product.rating}
              reviewCount={product.reviewCount}
              onAddToCart={handleAddToCart}
              onProductClick={handleProductClick}
              layout="vertical"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
