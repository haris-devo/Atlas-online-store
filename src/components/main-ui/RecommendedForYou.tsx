'use client';

import ChevronRightIcon from 'lucide-react/dist/esm/icons/chevron-right';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { useProductCard } from '@/hooks/useProductCard';
import { ProductCard } from './ProductCard';

type RecommendedProduct = {
  id: string;
  title: string;
  image: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  recommendationText: string;
};

const recommendedProducts: RecommendedProduct[] = [
  {
    id: 'rec-1',
    title: 'Wireless Bluetooth Earbuds with Noise Cancellation',
    image:
      'https://images.unsplash.com/photo-1543512214-318c7553f230?w=500&h=500&fit=crop',
    price: 99.99,
    originalPrice: 99.99,
    rating: 4.5,
    reviewCount: 2345,
    recommendationText: 'Based on your speaker purchase',
  },
  {
    id: 'rec-2',
    title: 'Wireless Bluetooth Earbuds with Noise Cancellation',
    image:
      'https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=500&h=500&fit=crop',
    price: 59.99,
    rating: 4.5,
    reviewCount: 2345,
    recommendationText: 'Based on your TV purchase',
  },
  {
    id: 'rec-3',
    title: 'Wireless Bluetooth Earbuds with Noise Cancellation',
    image:
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=500&fit=crop',
    price: 59.99,
    rating: 4.5,
    reviewCount: 2345,
    recommendationText: 'Based on your mobile purchase',
  },
  {
    id: 'rec-4',
    title: 'Wireless Bluetooth Earbuds with Noise Cancellation',
    image:
      'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&h=500&fit=crop',
    price: 59.99,
    rating: 4.5,
    reviewCount: 2345,
    recommendationText: 'Based on your home purchase',
  },
  {
    id: 'rec-5',
    title: 'Wireless Bluetooth Earbuds with Noise Cancellation',
    image:
      'https://images.unsplash.com/photo-1561112014-e6e4aa9e8119?w=500&h=500&fit=crop',
    price: 59.99,
    originalPrice: 99.99,
    rating: 4.5,
    reviewCount: 2345,
    recommendationText: 'Based on your TV purchase',
  },
];

export function RecommendedForYou() {
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
              Recommended For You
            </h2>
          </div>
          <Link href="/recommended">
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
          {recommendedProducts.slice(0, 5).map(product => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
              originalPrice={product.originalPrice}
              rating={product.rating}
              reviewCount={product.reviewCount}
              recommendationText={product.recommendationText}
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
