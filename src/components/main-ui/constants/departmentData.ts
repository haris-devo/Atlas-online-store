import Car from 'lucide-react/dist/esm/icons/car';
import Footprints from 'lucide-react/dist/esm/icons/footprints';
import Home from 'lucide-react/dist/esm/icons/home';
import Laptop from 'lucide-react/dist/esm/icons/laptop';
import Package from 'lucide-react/dist/esm/icons/package';
import Shirt from 'lucide-react/dist/esm/icons/shirt';
import ShoppingBag from 'lucide-react/dist/esm/icons/shopping-bag';
import Sparkles from 'lucide-react/dist/esm/icons/sparkles';
import Wrench from 'lucide-react/dist/esm/icons/wrench';

export type DepartmentItem = {
  readonly id: string;
  readonly label: string;
  readonly icon: React.ComponentType<{ className?: string }>;
  readonly href: string;
  readonly submenu: {
    readonly title: string;
    readonly items: readonly string[];
  }[];
};

export const DEPARTMENT_ITEMS: readonly DepartmentItem[] = [
  {
    id: 'electronics',
    label: 'Electronics',
    icon: Laptop,
    href: '/electronics',
    submenu: [
      {
        title: 'Camera & Photo',
        items: [
          'Electronics',
          'Toys, Kids & Baby',
          'Fashion',
          'Beauty & Personal Care',
          'Home & Kitchen',
          'Books & Media',
          'Sports & Outdoors',
          'Automotive',
        ],
      },
    ],
  },
  {
    id: 'toys-kids-baby',
    label: 'Toys, Kids & Baby',
    icon: Package,
    href: '/toys-kids-baby',
    submenu: [
      {
        title: 'Kids & Baby',
        items: [
          'Baby Clothing',
          'Baby Gear',
          'Toys & Games',
          'Educational Toys',
          'Outdoor Play',
          'Safety Equipment',
        ],
      },
    ],
  },
  {
    id: 'fashion',
    label: 'Fashion',
    icon: Shirt,
    href: '/fashion',
    submenu: [
      {
        title: 'Fashion',
        items: [
          'Men\'s Clothing',
          'Women\'s Clothing',
          'Accessories',
          'Shoes',
          'Jewelry',
          'Watches',
          'Bags & Handbags',
          'Luggage',
        ],
      },
    ],
  },
  {
    id: 'beauty-personal-care',
    label: 'Beauty & Personal Care',
    icon: Sparkles,
    href: '/beauty-personal-care',
    submenu: [
      {
        title: 'Beauty & Personal Care',
        items: [
          'Skincare',
          'Makeup',
          'Hair Care',
          'Fragrance',
          'Personal Care',
          'Health & Wellness',
        ],
      },
    ],
  },
  {
    id: 'home-kitchen',
    label: 'Home & Kitchen',
    icon: Home,
    href: '/home-kitchen',
    submenu: [
      {
        title: 'Home & Kitchen',
        items: [
          'Kitchen Appliances',
          'Cookware',
          'Home Decor',
          'Furniture',
          'Bedding',
          'Bath',
          'Storage',
          'Cleaning',
        ],
      },
    ],
  },
  {
    id: 'books-media',
    label: 'Books & Media',
    icon: Package,
    href: '/books-media',
    submenu: [
      {
        title: 'Books & Media',
        items: [
          'Books',
          'Movies & TV',
          'Music',
          'Video Games',
          'Software',
          'Magazines',
        ],
      },
    ],
  },
  {
    id: 'sports-outdoors',
    label: 'Sports & Outdoors',
    icon: Footprints,
    href: '/sports-outdoors',
    submenu: [
      {
        title: 'Sports & Outdoors',
        items: [
          'Exercise & Fitness',
          'Outdoor Recreation',
          'Sports Equipment',
          'Camping & Hiking',
          'Water Sports',
          'Winter Sports',
        ],
      },
    ],
  },
  {
    id: 'automotive',
    label: 'Automotive',
    icon: Car,
    href: '/automotive',
    submenu: [
      {
        title: 'Automotive',
        items: [
          'Car Parts',
          'Car Care',
          'Car Electronics',
          'Motorcycle',
          'Tools & Equipment',
          'Accessories',
        ],
      },
    ],
  },
  {
    id: 'home-improvement',
    label: 'Home Improvement',
    icon: Wrench,
    href: '/home-improvement',
    submenu: [
      {
        title: 'Home Improvement',
        items: [
          'Tools',
          'Hardware',
          'Building Materials',
          'Lighting',
          'Plumbing',
          'Electrical',
        ],
      },
    ],
  },
  {
    id: 'home-appliances',
    label: 'Home Appliances',
    icon: Home,
    href: '/home-appliances',
    submenu: [
      {
        title: 'Home Appliances',
        items: [
          'Kitchen Appliances',
          'Laundry',
          'Heating & Cooling',
          'Vacuum Cleaners',
          'Small Appliances',
        ],
      },
    ],
  },
  {
    id: 'automotive-motorcycle',
    label: 'Automotive & Motorcycle',
    icon: Car,
    href: '/automotive-motorcycle',
    submenu: [
      {
        title: 'Automotive & Motorcycle',
        items: [
          'Car Parts',
          'Motorcycle Parts',
          'Tools',
          'Accessories',
          'Maintenance',
        ],
      },
    ],
  },
  {
    id: 'luggages-bags',
    label: 'Luggages & Bags',
    icon: ShoppingBag,
    href: '/luggages-bags',
    submenu: [
      {
        title: 'Luggages & Bags',
        items: [
          'Suitcases',
          'Backpacks',
          'Handbags',
          'Travel Bags',
          'Business Bags',
          'Laptop Bags',
        ],
      },
    ],
  },
  {
    id: 'shoes',
    label: 'Shoes',
    icon: Footprints,
    href: '/shoes',
    submenu: [
      {
        title: 'Shoes',
        items: [
          'Men\'s Shoes',
          'Women\'s Shoes',
          'Kids\' Shoes',
          'Athletic Shoes',
          'Dress Shoes',
          'Boots',
        ],
      },
    ],
  },
  {
    id: 'special-occasion-costume',
    label: 'Special Occasion Costume',
    icon: Sparkles,
    href: '/special-occasion-costume',
    submenu: [
      {
        title: 'Special Occasion Costume',
        items: [
          'Party Costumes',
          'Halloween',
          'Formal Wear',
          'Wedding Attire',
          'Themed Clothing',
        ],
      },
    ],
  },
  {
    id: 'womens-clothing',
    label: 'Women\'s Clothing',
    icon: Shirt,
    href: '/womens-clothing',
    submenu: [
      {
        title: 'Women\'s Clothing',
        items: [
          'Dresses',
          'Tops & Blouses',
          'Pants & Jeans',
          'Skirts',
          'Outerwear',
          'Intimate Apparel',
        ],
      },
    ],
  },
] as const;
