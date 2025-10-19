'use client';

import ChevronRightIcon from 'lucide-react/dist/esm/icons/chevron-right';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { useProductCard } from '@/hooks/useProductCard';
import { ProductCard } from './ProductCard';

type ListedProduct = {
  id: string;
  title: string;
  image: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  categoryText: string;
};

const listedProducts: ListedProduct[] = [
  {
    id: 'listed-1',
    title: 'Wireless Bluetooth Earbuds with Noise Cancellation',
    image:
      'https://images.unsplash.com/photo-1606220838315-056192d5e927?w=500&h=500&fit=crop',
    price: 79.99,
    originalPrice: 99.99,
    rating: 4.5,
    reviewCount: 2345,
    categoryText: 'Best in Electronics',
  },
  {
    id: 'listed-2',
    title: 'Wireless Bluetooth Earbuds with Noise Cancellation',
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop',
    price: 129.99,
    rating: 4.5,
    reviewCount: 2345,
    categoryText: 'Top in Sports',
  },
  {
    id: 'listed-3',
    title: 'Wireless Bluetooth Earbuds with Noise Cancellation',
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
    price: 89.99,
    rating: 4.5,
    reviewCount: 2345,
    categoryText: 'Featured in Fashion',
  },
  {
    id: 'listed-4',
    title: 'Wireless Bluetooth Earbuds with Noise Cancellation',
    image:
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop',
    price: 199.99,
    originalPrice: 249.99,
    rating: 4.5,
    reviewCount: 2345,
    categoryText: 'Popular in Home',
  },
  {
    id: 'listed-5',
    title: 'Wireless Bluetooth Earbuds with Noise Cancellation',
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
    price: 149.99,
    rating: 4.5,
    reviewCount: 2345,
    categoryText: 'Trending in Tech',
  },
  {
    id: 'listed-6',
    title: 'Wireless Bluetooth Earbuds with Noise Cancellation',
    image:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=500&fit=crop',
    price: 69.99,
    originalPrice: 89.99,
    rating: 4.5,
    reviewCount: 2345,
    categoryText: 'Hot in Beauty',
  },
  {
    id: 'listed-7',
    title: 'Wireless Bluetooth Earbuds with Noise Cancellation',
    image:
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=500&fit=crop',
    price: 299.99,
    rating: 4.5,
    reviewCount: 2345,
    categoryText: 'Premium in Lifestyle',
  },
  {
    id: 'listed-8',
    title: 'Wireless Bluetooth Earbuds with Noise Cancellation',
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=500&fit=crop',
    price: 39.99,
    originalPrice: 59.99,
    rating: 4.5,
    reviewCount: 2345,
    categoryText: 'Value in Essentials',
  },
  {
    id: 'listed-9',
    title: 'Wireless Bluetooth Earbuds with Noise Cancellation',
    image:
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=500&fit=crop',
    price: 179.99,
    rating: 4.5,
    reviewCount: 2345,
    categoryText: 'Elite in Gaming',
  },
  {
    id: 'listed-10',
    title: 'Wireless Bluetooth Earbuds with Noise Cancellation',
    image:
      'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=500&fit=crop',
    price: 99.99,
    originalPrice: 129.99,
    rating: 4.5,
    reviewCount: 2345,
    categoryText: 'Smart in Automation',
  },
];

export function ProductListed() {
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
              Product Listed
            </h2>
          </div>
          <Link href="/products">
            <Button
              variant="link"
              className="text-red-600 hover:text-red-700 p-0"
            >
              See all
              <ChevronRightIcon className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* Products Grid - 5 cards per row */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {listedProducts.map(product => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
              originalPrice={product.originalPrice}
              rating={product.rating}
              reviewCount={product.reviewCount}
              recommendationText={product.categoryText}
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
