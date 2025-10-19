'use client';

import ChevronRightIcon from 'lucide-react/dist/esm/icons/chevron-right';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { useProductCard } from '@/hooks/useProductCard';
import { ProductCard } from './ProductCard';

type ExploringProduct = {
  id: string;
  title: string;
  image: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  trendingText: string;
};

const exploringProducts: ExploringProduct[] = [
  {
    id: 'explore-1',
    title: 'Wireless Bluetooth Earbuds with Noise Cancellation',
    image:
      'https://images.unsplash.com/photo-1606220838315-056192d5e927?w=500&h=500&fit=crop',
    price: 79.99,
    originalPrice: 99.99,
    rating: 4.5,
    reviewCount: 2345,
    trendingText: 'Trending in Electronics',
  },
  {
    id: 'explore-2',
    title: 'Wireless Bluetooth Earbuds with Noise Cancellation',
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop',
    price: 129.99,
    rating: 4.5,
    reviewCount: 2345,
    trendingText: 'Popular in Sports',
  },
  {
    id: 'explore-3',
    title: 'Wireless Bluetooth Earbuds with Noise Cancellation',
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
    price: 89.99,
    rating: 4.5,
    reviewCount: 2345,
    trendingText: 'Hot in Fashion',
  },
  {
    id: 'explore-4',
    title: 'Wireless Bluetooth Earbuds with Noise Cancellation',
    image:
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop',
    price: 199.99,
    originalPrice: 249.99,
    rating: 4.5,
    reviewCount: 2345,
    trendingText: 'Rising in Home',
  },
];

export function OthersAreExploring() {
  const { handleAddToCart, handleProductClick } = useProductCard();

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
            <h2
              className="text-[26px] font-medium leading-8 tracking-normal"
              style={{ fontFamily: 'Metropolis' }}
            >
              Others Are Exploring
            </h2>
          </div>
          <Link href="/trending">
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
          {exploringProducts.slice(0, 5).map(product => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
              originalPrice={product.originalPrice}
              rating={product.rating}
              reviewCount={product.reviewCount}
              recommendationText={product.trendingText}
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
