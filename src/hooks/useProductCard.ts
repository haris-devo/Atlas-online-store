'use client';

import { useCallback } from 'react';
import { logger } from '@/libs/Logger';

type UseProductCardOptions = {
  onAddToCart?: (productId: string) => void;
  onProductClick?: (productId: string) => void;
  enableAnalytics?: boolean;
};

export function useProductCard({
  onAddToCart,
  onProductClick,
  enableAnalytics = true,
}: UseProductCardOptions = {}) {
  const handleAddToCart = useCallback(
    (productId: string) => {
      if (enableAnalytics) {
        // Client-side logging - using console for now
        logger.info({ productId }, 'Product added to cart');
      }

      onAddToCart?.(productId);
    },
    [onAddToCart, enableAnalytics],
  );

  const handleProductClick = useCallback(
    (productId: string) => {
      if (enableAnalytics) {
        // Client-side logging - using console for now
        logger.info({ productId }, 'Product clicked');
      }

      onProductClick?.(productId);
    },
    [onProductClick, enableAnalytics],
  );

  return {
    handleAddToCart,
    handleProductClick,
  };
}
