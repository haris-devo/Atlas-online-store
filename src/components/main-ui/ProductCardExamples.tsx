'use client';

import { ProductCard } from '@/components/main-ui/ProductCard';

export function ProductCardExamples() {
  const handleAddToCart = (productId: string) => {
    // eslint-disable-next-line no-console
    console.log('Add to cart:', productId);
  };

  const handleProductClick = (productId: string) => {
    // eslint-disable-next-line no-console
    console.log('Product clicked:', productId);
  };

  return (
    <div className="space-y-12 p-8">
      {/* Example 1: Product with Discount */}
      <section>
        <h2 className="mb-4 text-2xl font-bold">Product with Discount Badge</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <ProductCard
            id="product-1"
            title="Wireless Bluetooth Earbuds with Noise Cancellation"
            image="https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop"
            price={59.99}
            originalPrice={99.99}
            discount={40}
            rating={4.5}
            reviewCount={2345}
            onAddToCart={handleAddToCart}
            onProductClick={handleProductClick}
          />
        </div>
      </section>

      {/* Example 2: Product with Recommendation Text */}
      <section>
        <h2 className="mb-4 text-2xl font-bold">Product with Recommendation</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <ProductCard
            id="product-2"
            title="Wireless Bluetooth Earbuds with Noise Cancellation"
            image="https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=400&fit=crop"
            price={59.99}
            originalPrice={99.99}
            rating={4.5}
            reviewCount={2345}
            recommendationText="Based on your TV purchase"
            onAddToCart={handleAddToCart}
            onProductClick={handleProductClick}
          />
        </div>
      </section>

      {/* Example 3: Product without Discount */}
      <section>
        <h2 className="mb-4 text-2xl font-bold">Product without Discount</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <ProductCard
            id="product-3"
            title="Premium Mechanical Gaming Keyboard RGB"
            image="https://images.unsplash.com/photo-1595225476474-87563907a212?w=400&h=400&fit=crop"
            price={129.99}
            rating={4.8}
            reviewCount={1567}
            onAddToCart={handleAddToCart}
            onProductClick={handleProductClick}
          />
        </div>
      </section>

      {/* Example 4: Product with Custom Badge */}
      <section>
        <h2 className="mb-4 text-2xl font-bold">Product with Custom Badge</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <ProductCard
            id="product-4"
            title="Smart Home Security Camera System"
            image="https://images.unsplash.com/photo-1558002038-1055907df827?w=400&h=400&fit=crop"
            price={199.99}
            rating={4.7}
            reviewCount={892}
            badge={{ text: 'NEW', variant: 'default' }}
            onAddToCart={handleAddToCart}
            onProductClick={handleProductClick}
          />
        </div>
      </section>

      {/* Example 5: Horizontal Layout */}
      <section>
        <h2 className="mb-4 text-2xl font-bold">Horizontal Layout</h2>
        <div className="grid grid-cols-1 gap-4">
          <ProductCard
            id="product-5"
            title="Wireless Gaming Mouse with RGB Lighting"
            image="https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop"
            price={79.99}
            originalPrice={129.99}
            rating={4.6}
            reviewCount={1234}
            layout="horizontal"
            onAddToCart={handleAddToCart}
            onProductClick={handleProductClick}
          />
          <ProductCard
            id="product-6"
            title="Mechanical Gaming Keyboard with Blue Switches"
            image="https://images.unsplash.com/photo-1595225476474-87563907a212?w=400&h=400&fit=crop"
            price={89.99}
            originalPrice={149.99}
            rating={4.7}
            reviewCount={2567}
            recommendationText="Based on your TV purchase"
            layout="horizontal"
            onAddToCart={handleAddToCart}
            onProductClick={handleProductClick}
          />
        </div>
      </section>

      {/* Example 6: Grid of Products */}
      <section>
        <h2 className="mb-4 text-2xl font-bold">Product Grid</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <ProductCard
            id="product-7"
            title="Wireless Gaming Headset with 7.1 Surround Sound"
            image="https://images.unsplash.com/photo-1599669454699-248893623440?w=400&h=400&fit=crop"
            price={149.99}
            originalPrice={199.99}
            discount={25}
            rating={4.8}
            reviewCount={3456}
            onAddToCart={handleAddToCart}
            onProductClick={handleProductClick}
          />
          <ProductCard
            id="product-8"
            title="4K Ultra HD Gaming Monitor 27 inch"
            image="https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=400&fit=crop"
            price={349.99}
            originalPrice={499.99}
            discount={30}
            rating={4.9}
            reviewCount={2890}
            onAddToCart={handleAddToCart}
            onProductClick={handleProductClick}
          />
          <ProductCard
            id="product-9"
            title="Ergonomic Gaming Chair with Lumbar Support"
            image="https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=400&h=400&fit=crop"
            price={299.99}
            rating={4.6}
            reviewCount={1823}
            badge={{ text: 'BESTSELLER', variant: 'secondary' }}
            onAddToCart={handleAddToCart}
            onProductClick={handleProductClick}
          />
          <ProductCard
            id="product-10"
            title="Portable SSD 1TB External Storage"
            image="https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&h=400&fit=crop"
            price={119.99}
            originalPrice={179.99}
            rating={4.7}
            reviewCount={4567}
            recommendationText="Frequently bought together"
            onAddToCart={handleAddToCart}
            onProductClick={handleProductClick}
          />
        </div>
      </section>
    </div>
  );
}
