import type { Metadata } from 'next';

import { ProductCardExamples } from '@/components/main-ui/ProductCardExamples';

export const metadata: Metadata = {
  title: 'Product Card Components Demo',
  description: 'Showcase of all product card variations and layouts',
};

export default function ProductCardsDemoPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="mb-8 space-y-4">
        <h1 className="text-4xl font-bold">Product Card Components</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          A comprehensive showcase of all product card variations, layouts, and
          configurations.
        </p>
      </div>

      <ProductCardExamples />
    </div>
  );
}
