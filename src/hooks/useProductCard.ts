'use client';

import { useCallback } from 'react';
import { Logger } from '@/libs/ClientLogger';

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
        Logger.info('Product added to cart', { productId });
      }

      onAddToCart?.(productId);
    },
    [onAddToCart, enableAnalytics],
  );

  const handleProductClick = useCallback(
    (productId: string) => {
      if (enableAnalytics) {
        // Client-side logging - using console for now
        Logger.info('Product clicked', { productId });
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
