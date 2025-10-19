'use client';

import ChevronRightIcon from 'lucide-react/dist/esm/icons/chevron-right';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { useProductCard } from '@/hooks/useProductCard';
import { ProductCard } from './ProductCard';

type RecentlyViewedProduct = {
  id: string;
  title: string;
  image: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  viewedText: string;
};

const recentlyViewedProducts: RecentlyViewedProduct[] = [
  {
    id: 'recent-1',
    title: 'Wireless Bluetooth Earbuds with Noise Cancellation',
    image:
      'https://images.unsplash.com/photo-1606220838315-056192d5e927?w=500&h=500&fit=crop',
    price: 79.99,
    originalPrice: 99.99,
    rating: 4.5,
    reviewCount: 2345,
    viewedText: 'Viewed 2 hours ago',
  },
  {
    id: 'recent-2',
    title: 'Wireless Bluetooth Earbuds with Noise Cancellation',
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop',
    price: 129.99,
    rating: 4.5,
    reviewCount: 2345,
    viewedText: 'Viewed 1 day ago',
  },
  {
    id: 'recent-3',
    title: 'Wireless Bluetooth Earbuds with Noise Cancellation',
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
    price: 89.99,
    rating: 4.5,
    reviewCount: 2345,
    viewedText: 'Viewed 3 days ago',
  },
  {
    id: 'recent-4',
    title: 'Wireless Bluetooth Earbuds with Noise Cancellation',
    image:
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop',
    price: 199.99,
    originalPrice: 249.99,
    rating: 4.5,
    reviewCount: 2345,
    viewedText: 'Viewed 1 week ago',
  },
  {
    id: 'recent-5',
    title: 'Wireless Bluetooth Earbuds with Noise Cancellation',
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
    price: 149.99,
    rating: 4.5,
    reviewCount: 2345,
    viewedText: 'Viewed 2 weeks ago',
  },
];

export function RecentlyViewed() {
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
              Recently Viewed
            </h2>
          </div>
          <Link href="/recently-viewed">
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
          {recentlyViewedProducts.map(product => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
              originalPrice={product.originalPrice}
              rating={product.rating}
              reviewCount={product.reviewCount}
              recommendationText={product.viewedText}
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
