export type Product = {
  id: string;
  title: string;
  description?: string;
  image: string;
  images?: string[];
  price: number;
  originalPrice?: number;
  discount?: number;
  rating?: number;
  reviewCount?: number;
  category?: string;
  subcategory?: string;
  tags?: string[];
  inStock?: boolean;
  sku?: string;
  brand?: string;
  specifications?: Record<string, string>;
  features?: string[];
};

export type ProductBadge = {
  text: string;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary';
};

export type ProductCardData = {
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
};

export type CartItem = {
  quantity: number;
  addedAt: Date;
} & Product;

export type ProductFilters = {
  category?: string;
  priceRange?: {
    min: number;
    max: number;
  };
  rating?: number;
  inStock?: boolean;
  brands?: string[];
  tags?: string[];
};

export type ProductSortOptions = {
  field: 'price' | 'rating' | 'title' | 'popularity';
  order: 'asc' | 'desc';
};
