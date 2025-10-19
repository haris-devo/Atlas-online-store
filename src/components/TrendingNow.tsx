'use client';

import ChevronLeft from 'lucide-react/dist/esm/icons/chevron-left';
import ChevronRight from 'lucide-react/dist/esm/icons/chevron-right';
import Link from 'next/link';
import { useState } from 'react';

type TrendingCategory = {
  id: string;
  label: string;
  href: string;
  isNew?: boolean;
};

export function TrendingNow() {
  const [activeCategory, setActiveCategory] = useState('smart-home-devices');

  const categories: TrendingCategory[] = [
    {
      id: 'smart-home-devices',
      label: 'Smart Home Devices',
      href: '/categories/smart-home',
    },
    {
      id: 'wireless-earbuds',
      label: 'Wireless Earbuds',
      href: '/categories/wireless-earbuds',
    },
    {
      id: 'gaming-laptops',
      label: 'Gaming Laptops',
      href: '/categories/gaming-laptops',
    },
    {
      id: 'fitness-trackers',
      label: 'Fitness Trackers',
      href: '/categories/fitness-trackers',
    },
    { id: 'air-fryers', label: 'Air Fryers', href: '/categories/air-fryers' },
    {
      id: 'mechanical-keyboards',
      label: 'Mechanical Keyboards',
      href: '/categories/mechanical-keyboards',
    },
    {
      id: 'robot-vacuums',
      label: 'Robot Vacuums',
      href: '/categories/robot-vacuums',
    },
    {
      id: 'mobile-accessories',
      label: 'Mobile Accessories',
      href: '/categories/mobile-accessories',
    },
  ];

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  const scrollLeft = () => {
    const container = document.getElementById('trending-categories');
    if (container) {
      container.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    const container = document.getElementById('trending-categories');
    if (container) {
      container.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full bg-[#DAA520] py-3">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4">
        {/* Trending Now Label */}
        <div className="flex items-center gap-2 whitespace-nowrap">
          <span className="text-2xl">🔥</span>
          <span className="text-lg font-semibold text-gray-900">
            Trending Now:
          </span>
        </div>

        {/* Categories Container */}
        <div className="relative flex-1">
          <div
            id="trending-categories"
            className="flex gap-3 overflow-x-auto scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {categories.map(category => (
              <div key={category.id} className="relative flex-shrink-0">
                {/* New Badge */}
                {category.isNew && activeCategory === category.id && (
                  <div className="absolute -top-2 left-1/2 z-10 -translate-x-1/2 transform">
                    <span className="rounded-full bg-white px-2 py-0.5 text-xs font-bold text-gray-900 shadow-sm">
                      New
                    </span>
                  </div>
                )}

                {/* Category Button */}
                <Link
                  href={category.href}
                  onClick={() => handleCategoryClick(category.id)}
                  className={`
                    relative block rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 hover:scale-105
                    ${
              activeCategory === category.id
                ? 'bg-[#CE1126] text-white'
                : 'bg-[#EAD99C] text-gray-900 hover:bg-[#D4C47A]'
              }
                  `}
                  style={{
                    boxShadow: '0px 4px 56px 0px rgba(0, 0, 0, 0.06)',
                  }}
                >
                  {category.label}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={scrollLeft}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EAD99C] text-gray-600 transition-all duration-200 hover:bg-[#D4C47A] hover:text-gray-800"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={scrollRight}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-[#C7A84A] text-white transition-all duration-200 hover:bg-[#B8963A]"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
