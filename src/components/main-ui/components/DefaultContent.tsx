import Link from 'next/link';
import {
  DEFAULT_CATEGORIES,
  DROPDOWN_STYLES,
} from '../constants/dropdownConstants';

export function DefaultContent() {
  const categories = Object.entries(DEFAULT_CATEGORIES);
  const firstSixCategories = categories.slice(0, 6);
  const moreWaysToShop = categories[6]; // "More Ways to Shop"

  return (
    <div className="flex flex-1 gap-8 animate-in fade-in-0 slide-in-from-right-2 duration-200">
      {/* 3x3 Grid for first 6 categories */}
      <div className="flex-1">
        <div className="grid grid-cols-3 gap-6">
          {firstSixCategories.map(([title, items]) => (
            <div key={title} className="space-y-2">
              <h3 className="text-sm font-bold text-gray-900">{title}</h3>
              <ul className="space-y-1">
                {items.slice(0, 3).map(item => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase().replaceAll(/\s+/g, '-')}`}
                      className={`text-sm ${DROPDOWN_STYLES.colors.primary} ${DROPDOWN_STYLES.colors.hover} ${DROPDOWN_STYLES.colors.underline}`}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* More Ways to Shop - Separate column */}
      {moreWaysToShop && Array.isArray(moreWaysToShop[1]) && (
        <div className="w-48 border-l border-gray-200 pl-6">
          <h3 className="mb-4 text-sm font-bold text-gray-900">
            {moreWaysToShop[0]}
          </h3>
          <ul className="space-y-2">
            {moreWaysToShop[1].map(item => (
              <li key={item}>
                <Link
                  href={`/${item.toLowerCase().replaceAll(/\s+/g, '-')}`}
                  className={`text-sm ${DROPDOWN_STYLES.colors.primary} ${DROPDOWN_STYLES.colors.hover} ${DROPDOWN_STYLES.colors.underline}`}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
