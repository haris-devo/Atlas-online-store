'use client';

import type { ProductBadge } from '@/types/product';
import PlusIcon from 'lucide-react/dist/esm/icons/plus';
import StarIcon from 'lucide-react/dist/esm/icons/star';
import Image from 'next/image';

import { memo } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

type ProductCardProps = {
  id: string;
  title: string;
  image: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating?: number;
  reviewCount?: number;
  badge?: ProductBadge;
  recommendationText?: string;
  onAddToCart?: (productId: string) => void;
  onProductClick?: (productId: string) => void;
  className?: string;
  imageClassName?: string;
  layout?: 'vertical' | 'horizontal';
};

export const ProductCard = memo(({
  id,
  title,
  image,
  price,
  originalPrice,
  discount,
  rating = 0,
  reviewCount = 0,
  badge,
  recommendationText,
  onAddToCart,
  onProductClick,
  className,
  imageClassName,
  layout = 'vertical',
}: ProductCardProps) => {
  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart?.(id);
  };

  const handleProductClick = () => {
    onProductClick?.(id);
  };

  const renderRatingStars = () => {
    const fullStars = Math.floor(rating);
    const stars = [];

    for (let i = 0; i < 5; i++) {
      stars.push(
        <StarIcon
          key={`star-${i}`}
          className={cn(
            'h-3.5 w-3.5',
            i < fullStars
              ? 'fill-yellow-400 text-yellow-400'
              : 'fill-gray-300 text-gray-300',
          )}
        />,
      );
    }

    return stars;
  };

  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  const discountPercentage
    = discount
      ?? (originalPrice
        ? Math.round(((originalPrice - price) / originalPrice) * 100)
        : 0);

  if (layout === 'horizontal') {
    return (
      <Card
        className={cn(
          'group relative overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer bg-white rounded-[8px]',
          className,
        )}
        onClick={handleProductClick}
      >
        <div className="flex gap-[9px] pt-[6px] pr-[12px] pb-[6px] pl-[12px]">
          {/* Image Section */}
          <div className="relative h-32 w-32 flex-shrink-0">
            {discountPercentage > 0 && (
              <Badge className="absolute left-2 top-2 z-10 bg-red-600 text-white hover:bg-red-700">
                -
                {discountPercentage}
                %
              </Badge>
            )}
            {badge && !discountPercentage && (
              <Badge
                className="absolute left-2 top-2 z-10"
                variant={badge.variant}
              >
                {badge.text}
              </Badge>
            )}
            <div className="relative h-full w-full overflow-hidden rounded-[6px] bg-white">
              <Image
                src={image}
                alt={title}
                fill
                className={cn(
                  'object-contain transition-transform duration-300 group-hover:scale-105',
                  imageClassName,
                )}
                sizes="128px"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="flex flex-1 flex-col justify-between">
            {/* Title */}
            <h3 className="line-clamp-2 text-sm font-medium text-gray-900 dark:text-gray-100">
              {title}
            </h3>

            {/* Price Section */}
            <div className="flex items-baseline gap-2">
              {originalPrice && originalPrice > price && (
                <span className="text-sm text-gray-400 line-through">
                  {formatPrice(originalPrice)}
                </span>
              )}
              <span className="text-lg font-bold text-gray-900 dark:text-gray-100">
                {formatPrice(price)}
              </span>
            </div>

            {/* Rating and Reviews */}
            {reviewCount > 0 && (
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-0.5">
                  {renderRatingStars()}
                </div>
                <span className="text-xs text-gray-500">
                  (
                  {reviewCount.toLocaleString()}
                  )
                </span>
              </div>
            )}

            {/* Recommendation Text */}
            {recommendationText && (
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {recommendationText}
              </p>
            )}
          </div>

          {/* Add to Cart Button */}
          <div className="flex items-end">
            <Button
              size="icon"
              onClick={handleAddToCart}
              className="h-7 w-7 rounded-full bg-[#DAA520] text-white hover:bg-[#B8860B] transition-all duration-200 hover:scale-110 opacity-100"
              aria-label="Add to cart"
            >
              <PlusIcon className="h-4 w-4 text-white" />
            </Button>
          </div>
        </div>
      </Card>
    );
  }

  // Vertical Layout (Default)
  return (
    <Card
      className={cn(
        'group relative overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer bg-white rounded-[8px]',
        className,
      )}
      onClick={handleProductClick}
    >
      <div className="flex flex-col">
        {/* Image Section */}
        <div className="relative aspect-square w-full">
          {discountPercentage > 0 && (
            <Badge className="absolute left-3 top-3 z-10 bg-red-600 text-white hover:bg-red-700">
              -
              {discountPercentage}
              %
            </Badge>
          )}
          {badge && !discountPercentage && (
            <Badge
              className="absolute left-3 top-3 z-10"
              variant={badge.variant}
            >
              {badge.text}
            </Badge>
          )}
          <div className="relative h-full w-full overflow-hidden rounded-[6px] bg-white">
            <Image
              src={image}
              alt={title}
              fill
              className={cn(
                'object-contain p-6 transition-transform duration-300 group-hover:scale-105',
                imageClassName,
              )}
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col gap-[9px] pt-[6px] pr-[12px] pb-[12px] pl-[12px]">
          {/* Title */}
          <h3 className="line-clamp-2 min-h-[2.5rem] text-base font-medium text-gray-900 dark:text-gray-100">
            {title}
          </h3>

          {/* Price Section */}
          <div className="flex items-baseline gap-2">
            {originalPrice && originalPrice > price && (
              <span className="text-sm text-gray-400 line-through">
                {formatPrice(originalPrice)}
              </span>
            )}
            <span className="text-xl font-bold text-gray-900 dark:text-gray-100">
              {formatPrice(price)}
            </span>
          </div>

          {/* Rating and Reviews */}
          {reviewCount > 0 && (
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-0.5">
                {renderRatingStars()}
              </div>
              <span className="text-sm text-gray-500">
                (
                {reviewCount.toLocaleString()}
                )
              </span>
            </div>
          )}

          {/* Recommendation Text */}
          {recommendationText && (
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {recommendationText}
            </p>
          )}

          {/* Add to Cart Button - Positioned at bottom right */}
          <div className="flex justify-end">
            <Button
              size="icon"
              onClick={handleAddToCart}
              className="h-7 w-7 rounded-full bg-[#DAA520] text-white hover:bg-[#B8860B] transition-all duration-200 hover:scale-110 shadow-md opacity-100"
              aria-label="Add to cart"
            >
              <PlusIcon className="h-4 w-4 text-white" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
});
