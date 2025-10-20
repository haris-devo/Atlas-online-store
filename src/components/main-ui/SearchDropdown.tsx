'use client';

import Sparkles from 'lucide-react/dist/esm/icons/sparkles';
import TrendingUp from 'lucide-react/dist/esm/icons/trending-up';
import Link from 'next/link';

type SearchDropdownProps = {
  readonly searchQuery: string;
  readonly onSelectSuggestion: (suggestion: string) => void;
  readonly onClose: () => void;
};

type SuggestedItem = {
  id: string;
  text: string;
  icon: string;
  href: string;
};

type Category = {
  id: string;
  name: string;
  icon: string;
  href: string;
};

type TrendingSearch = {
  id: string;
  text: string;
  href: string;
};

export function SearchDropdown({
  searchQuery: _searchQuery,
  onSelectSuggestion,
  onClose,
}: SearchDropdownProps) {
  const aiSuggested: SuggestedItem[] = [
    {
      id: '1',
      text: 'wireless earbuds with noise cancellation',
      icon: '🎧',
      href: '/search?q=wireless+earbuds+with+noise+cancellation',
    },
    {
      id: '2',
      text: 'waterproof bluetooth speaker',
      icon: '🔊',
      href: '/search?q=waterproof+bluetooth+speaker',
    },
  ];

  const categories: Category[] = [
    {
      id: '1',
      name: 'Electronic',
      icon: '📱',
      href: '/category/electronic',
    },
    {
      id: '2',
      name: 'Computer',
      icon: '💻',
      href: '/category/computer',
    },
  ];

  const trendingSearches: TrendingSearch[] = [
    {
      id: '1',
      text: 'wireless earbuds with 100% noise cancellation',
      href: '/search?q=wireless+earbuds+with+100%25+noise+cancellation',
    },
  ];

  const handleSuggestionClick = (text: string) => {
    onSelectSuggestion(text);
    onClose();
  };

  return (
    <div className="absolute left-0 top-full z-50 mt-1 w-full rounded-md border border-gray-200 bg-white shadow-lg animate-in fade-in-0 slide-in-from-top-2 duration-200 ease-out">
      <div className="max-h-[500px] overflow-y-auto">
        {/* AI Suggested Section */}
        <div className="border-b border-gray-100 px-4 py-3">
          <div className="mb-3 flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-purple-600" />
            <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500">
              AI SUGGESTED
            </h3>
          </div>
          <div className="space-y-2">
            {aiSuggested.map(item => (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => handleSuggestionClick(item.text)}
                className="flex items-center gap-3 rounded-md px-2 py-2 transition-all duration-150 hover:bg-gray-50 hover:scale-[1.02]"
              >
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-50">
                  <span className="text-base">{item.icon}</span>
                </div>
                <span className="text-sm text-green-700 hover:text-green-800">
                  {item.text}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Categories Section */}
        <div className="border-b border-gray-100 px-4 py-3">
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
            CATEGORIES
          </h3>
          <div className="space-y-2">
            {categories.map(category => (
              <Link
                key={category.id}
                href={category.href}
                onClick={onClose}
                className="flex items-center gap-3 rounded-md px-2 py-2 transition-all duration-150 hover:bg-gray-50 hover:scale-[1.02]"
              >
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-50">
                  <span className="text-base">{category.icon}</span>
                </div>
                <span className="text-sm text-gray-700 hover:text-gray-900">
                  {category.name}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Trending Searches Section */}
        <div className="px-4 py-3">
          <div className="mb-3 flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-gray-600" />
            <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500">
              TRENDING SEARCHES
            </h3>
          </div>
          <div className="space-y-2">
            {trendingSearches.map(trend => (
              <Link
                key={trend.id}
                href={trend.href}
                onClick={() => handleSuggestionClick(trend.text)}
                className="flex items-center gap-3 rounded-md px-2 py-2 transition-all duration-150 hover:bg-gray-50 hover:scale-[1.02]"
              >
                <TrendingUp className="h-4 w-4 flex-shrink-0 text-gray-400" />
                <span className="text-sm text-gray-700 hover:text-gray-900">
                  {trend.text}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
