'use client';

import Camera from 'lucide-react/dist/esm/icons/camera';
import ChevronDown from 'lucide-react/dist/esm/icons/chevron-down';
import Clock from 'lucide-react/dist/esm/icons/clock';
import Menu from 'lucide-react/dist/esm/icons/menu';
import Mic from 'lucide-react/dist/esm/icons/mic';
import Search from 'lucide-react/dist/esm/icons/search';
import ShoppingCart from 'lucide-react/dist/esm/icons/shopping-cart';
import Sparkles from 'lucide-react/dist/esm/icons/sparkles';
import User from 'lucide-react/dist/esm/icons/user';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { AllCategoriesDropdown } from './AllCategoriesDropdown';
import { ImageSearchDialog } from './ImageSearchDialog';
import { SearchDropdown } from './SearchDropdown';

type Category = {
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
  href?: string;
  hasDropdown?: boolean;
};

export function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isImageDialogOpen, setIsImageDialogOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);
  const cartItemCount = 2; // Example cart count

  const categories: Category[] = [
    { label: 'All Category', icon: Menu, hasDropdown: true },
    { label: 'Today\'s Deal', href: '/deals/today' },
    { label: 'Best Sellers', href: '/best-sellers' },
    { label: 'Electronics', href: '/electronics' },
    { label: 'Fashion', href: '/fashion' },
    { label: 'Home & Kitchen', href: '/home-kitchen' },
    { label: 'Books', href: '/books' },
  ];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchFocus = () => {
    setIsSearchFocused(true);
  };

  const handleSearchBlur = () => {
    // Delay to allow clicks on dropdown items
    setTimeout(() => {
      setIsSearchFocused(false);
    }, 200);
  };

  const handleSelectSuggestion = (suggestion: string) => {
    setSearchQuery(suggestion);
    setIsSearchFocused(false);
  };

  const handleCloseDropdown = () => {
    setIsSearchFocused(false);
  };

  const handleCameraClick = () => {
    setIsImageDialogOpen(true);
  };

  const handleImageUpload = (_file: File) => {
    // Handle image upload for visual search
    // Here you would typically send the image to your search API
    // For now, we'll just log it
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchContainerRef.current
        && !searchContainerRef.current.contains(event.target as Node)
      ) {
        setIsSearchFocused(false);
      }
      if (
        categoriesRef.current
        && !categoriesRef.current.contains(event.target as Node)
      ) {
        setIsCategoriesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="w-full bg-[#006B3F] text-white py-4">
      {/* Main Navigation Bar */}
      <div className="border-b border-[#006648] pb-4">
        <div className="mx-auto flex h-14 max-w-[1440px] items-center gap-4 px-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
              <div className="relative h-8 w-8">
                <svg
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="20" cy="20" r="18" fill="#007557" />
                  <path
                    d="M12 20C12 15.5817 15.5817 12 20 12C24.4183 12 28 15.5817 28 20"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M16 24C16 21.7909 17.7909 20 20 20C22.2091 20 24 21.7909 24 24"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <circle cx="20" cy="28" r="2" fill="white" />
                </svg>
              </div>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-lg font-bold">Atlas</span>
              <span className="text-xs font-normal">Online Store</span>
            </div>
          </Link>

          {/* Language Selector */}
          <button
            type="button"
            className="flex items-center gap-1 rounded px-2 py-1 hover:bg-[#006648]"
          >
            <div className="h-4 w-5 overflow-hidden rounded-sm">
              <div className="h-full w-full bg-gradient-to-b from-red-600 via-white to-red-600" />
            </div>
            <span className="text-sm font-medium">English</span>
            <ChevronDown className="h-3 w-3" />
          </button>

          {/* Search Bar */}
          <div className="flex flex-1 items-center">
            <div ref={searchContainerRef} className="relative w-full max-w-3xl">
              <Input
                type="text"
                placeholder="wireless headphone"
                value={searchQuery}
                onChange={handleSearchChange}
                onFocus={handleSearchFocus}
                onBlur={handleSearchBlur}
                className="h-10 w-full rounded-r-none border-0 bg-white pr-20 text-sm text-gray-900 placeholder:text-gray-500 focus-visible:ring-0 focus-visible:ring-offset-0 transition-all duration-200 focus:shadow-md"
                style={{ borderRadius: '4px 0 0 4px' }}
              />
              <div className="absolute right-0 top-0 flex h-10 items-center gap-1 pr-1">
                <button
                  type="button"
                  className="rounded p-2 transition-all duration-150 hover:bg-gray-100 hover:scale-110"
                  aria-label="Voice search"
                >
                  <Mic className="h-4 w-4 text-gray-600" />
                </button>
                <button
                  type="button"
                  className="rounded p-2 transition-all duration-150 hover:bg-gray-100 hover:scale-110"
                  aria-label="Image search"
                  onClick={handleCameraClick}
                >
                  <Camera className="h-4 w-4 text-gray-600" />
                </button>
              </div>

              {/* Search Dropdown */}
              {isSearchFocused && (
                <SearchDropdown
                  searchQuery={searchQuery}
                  onSelectSuggestion={handleSelectSuggestion}
                  onClose={handleCloseDropdown}
                />
              )}
            </div>
            <Button
              type="submit"
              className="h-10 rounded-l-none bg-[#FFA500] px-6 text-white hover:bg-[#FF8C00]"
              style={{ borderRadius: '0 4px 4px 0' }}
            >
              <Search className="h-5 w-5" />
            </Button>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-6">
            {/* History */}
            <Link
              href="/history"
              className="flex items-center gap-2 hover:opacity-80"
            >
              <Clock className="h-5 w-5" />
              <span className="text-sm font-medium">History</span>
            </Link>

            {/* Account */}
            <button
              type="button"
              className="flex items-center gap-2 hover:opacity-80"
            >
              <User className="h-5 w-5" />
              <span className="text-sm font-medium">Account</span>
              <ChevronDown className="h-3 w-3" />
            </button>

            {/* Shopping Cart */}
            <Link href="/cart" className="relative hover:opacity-80">
              <ShoppingCart className="h-6 w-6" />
              {cartItemCount > 0 && (
                <Badge className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#FFA500] px-1 text-xs font-bold text-white hover:bg-[#FFA500]">
                  {cartItemCount}
                </Badge>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Secondary Navigation Bar */}
      <div className="bg-[#004026] relative">
        <div className="mx-auto flex h-10 max-w-[1440px] items-center justify-between px-4">
          {/* Left Side Categories */}
          <div className="flex items-center gap-6">
            {categories.map(category => (
              <div
                key={category.label}
                ref={category.hasDropdown ? categoriesRef : null}
              >
                {category.hasDropdown
                  ? (
                      <button
                        type="button"
                        onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                        className="flex items-center gap-1 text-sm font-medium hover:opacity-80"
                      >
                        {category.icon && <category.icon className="h-4 w-4" />}
                        {category.label}
                      </button>
                    )
                  : (
                      <Link
                        href={category.href || '#'}
                        className="text-sm font-medium hover:opacity-80"
                      >
                        {category.label}
                      </Link>
                    )}
                {' '}
              </div>
            ))}
            <Link
              href="/recommendations"
              className="flex items-center gap-1 text-sm font-medium hover:opacity-80"
            >
              <span className="flex items-center gap-1">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="currentColor"
                >
                  <path d="M12 2L9 9L2 9.5L7.5 14.5L6 22L12 18L18 22L16.5 14.5L22 9.5L15 9L12 2Z" />
                </svg>
                AI Recommendations
              </span>
              <Badge className="ml-1 bg-red-500 px-1.5 py-0 text-[10px] font-bold uppercase text-white hover:bg-red-500">
                NEW
              </Badge>
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-6">
            <Link href="/sell" className="text-sm font-medium hover:opacity-80">
              Sell
            </Link>
            <Link
              href="/support"
              className="text-sm font-medium hover:opacity-80"
            >
              Support
            </Link>
            <Link
              href="/deals"
              className="flex items-center gap-2 text-sm font-medium hover:opacity-80"
            >
              <Sparkles className="h-4 w-4 text-[#FFA500]" />
              <span>Deals for You</span>
            </Link>
          </div>
        </div>

        {/* All Categories Dropdown */}
        <AllCategoriesDropdown
          isOpen={isCategoriesOpen}
          onClose={() => setIsCategoriesOpen(false)}
        />
      </div>

      {/* Image Search Dialog */}
      <ImageSearchDialog
        isOpen={isImageDialogOpen}
        onClose={() => setIsImageDialogOpen(false)}
        onImageUpload={handleImageUpload}
      />
    </nav>
  );
}
