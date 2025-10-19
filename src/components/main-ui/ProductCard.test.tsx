import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { ProductCard } from './ProductCard';

describe('ProductCard', () => {
  const mockProduct = {
    id: 'test-product-1',
    title: 'Test Product',
    image: '/test-image.jpg',
    price: 99.99,
    rating: 4.5,
    reviewCount: 100,
  };

  it('renders product information correctly', () => {
    render(<ProductCard {...mockProduct} />);

    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('$99.99')).toBeInTheDocument();
    expect(screen.getByText('(100)')).toBeInTheDocument();
  });

  it('displays discount badge when discount is provided', () => {
    render(
      <ProductCard {...mockProduct} originalPrice={199.99} discount={50} />,
    );

    expect(screen.getByText('-50%')).toBeInTheDocument();
    expect(screen.getByText('$199.99')).toBeInTheDocument();
  });

  it('calculates discount automatically from prices', () => {
    render(<ProductCard {...mockProduct} price={50} originalPrice={100} />);

    expect(screen.getByText('-50%')).toBeInTheDocument();
  });

  it('displays custom badge when provided', () => {
    render(
      <ProductCard
        {...mockProduct}
        badge={{ text: 'NEW', variant: 'default' }}
      />,
    );

    expect(screen.getByText('NEW')).toBeInTheDocument();
  });

  it('displays recommendation text when provided', () => {
    render(
      <ProductCard
        {...mockProduct}
        recommendationText="Based on your TV purchase"
      />,
    );

    expect(screen.getByText('Based on your TV purchase')).toBeInTheDocument();
  });

  it('calls onAddToCart when add to cart button is clicked', () => {
    const handleAddToCart = vi.fn();
    render(<ProductCard {...mockProduct} onAddToCart={handleAddToCart} />);

    const addButton = screen.getByLabelText('Add to cart');
    fireEvent.click(addButton);

    expect(handleAddToCart).toHaveBeenCalledWith('test-product-1');
  });

  it('calls onProductClick when card is clicked', () => {
    const handleProductClick = vi.fn();
    render(
      <ProductCard {...mockProduct} onProductClick={handleProductClick} />,
    );

    const card = screen.getByText('Test Product').closest('.group');
    if (card) {
      fireEvent.click(card);
    }

    expect(handleProductClick).toHaveBeenCalledWith('test-product-1');
  });

  it('renders correct number of rating stars', () => {
    const { container } = render(<ProductCard {...mockProduct} rating={5} />);

    const filledStars = container.querySelectorAll('.fill-yellow-400');

    expect(filledStars).toHaveLength(5);
  });

  it('renders horizontal layout correctly', () => {
    const { container } = render(
      <ProductCard {...mockProduct} layout="horizontal" />,
    );

    const flexContainer = container.querySelector('.flex.gap-4');

    expect(flexContainer).toBeInTheDocument();
  });

  it('renders vertical layout by default', () => {
    const { container } = render(<ProductCard {...mockProduct} />);

    const flexContainer = container.querySelector('.flex.flex-col');

    expect(flexContainer).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(
      <ProductCard {...mockProduct} className="custom-class" />,
    );

    const card = container.querySelector('.custom-class');

    expect(card).toBeInTheDocument();
  });

  it('does not render rating section when reviewCount is 0', () => {
    render(<ProductCard {...mockProduct} reviewCount={0} />);

    expect(screen.queryByText(/\(/)).not.toBeInTheDocument();
  });

  it('formats price correctly', () => {
    render(<ProductCard {...mockProduct} price={1234.56} />);

    expect(screen.getByText('$1,234.56')).toBeInTheDocument();
  });

  it('prioritizes discount badge over custom badge', () => {
    render(
      <ProductCard
        {...mockProduct}
        discount={25}
        badge={{ text: 'NEW', variant: 'default' }}
      />,
    );

    expect(screen.getByText('-25%')).toBeInTheDocument();
    expect(screen.queryByText('NEW')).not.toBeInTheDocument();
  });

  it('stops propagation when add to cart is clicked', () => {
    const handleAddToCart = vi.fn();
    const handleProductClick = vi.fn();

    render(
      <ProductCard
        {...mockProduct}
        onAddToCart={handleAddToCart}
        onProductClick={handleProductClick}
      />,
    );

    const addButton = screen.getByLabelText('Add to cart');
    fireEvent.click(addButton);

    expect(handleAddToCart).toHaveBeenCalledWith('test-product-1');
    expect(handleProductClick).not.toHaveBeenCalled();
  });
});
