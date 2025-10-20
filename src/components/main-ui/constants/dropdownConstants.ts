export const DEFAULT_CATEGORIES = {
  'Camera & Photo': [
    'Electronics',
    'Toys, Kids & Baby',
    'Fashion',
    'Beauty & Personal Care',
    'Home & Kitchen',
    'Books & Media',
    'Sports & Outdoors',
    'Automotive',
  ],
  'Accessories & Parts': [
    'Batteries',
    'MP3/MP4 Bags & Cases',
    'Rail Systems',
    'Power Filters',
    'Cable Winder',
    'CD Cases',
  ],
  'Home Audio & Video': [
    'Home Theatre System',
    'Home Theater Amplifiers',
    'TV Receivers',
    'Projects & Accessories',
    'Soundbar',
    'TV Stick',
  ],
  'Game & Accessories': [
    'Wheels & Flight Joysticks',
    'Bags',
    'Handheld Game Players',
    'Video Game Consoles',
    'Replacement Parts',
    'Game Deals',
  ],
  'Smart Electronics': [
    'Automation Kits',
    'Smart Home',
    'Portable Television',
    'Translator',
    'Smart Remote Controls',
    'Smart Watches',
  ],
  'Portable Audio & Video': [
    'Audio & Video Replacement...',
    'Speakers',
    'VR,AR Devices& Acces...',
    'Microphones',
    'Earphone accessories',
    'Earphones & Headphon...',
  ],
  'More Ways to Shop': ['Top selling', 'Brand', 'AI Suggested'],
} as const;

export const DROPDOWN_STYLES = {
  sidebar: {
    width: 'w-72',
    background: 'bg-[#003F26]',
    padding: 'px-6 py-6',
    border: 'border-r border-gray-200',
  },
  mainContent: {
    container: 'flex flex-1 gap-8 px-8 py-6',
    column: 'flex-1 transition-all duration-200 ease-out',
  },
  colors: {
    primary: 'text-[#007185]',
    hover: 'hover:text-[#C7511F]',
    underline: 'hover:underline',
    background: 'bg-white',
    text: 'text-gray-900',
  },
  transitions: 'transition-colors duration-150 ease-out',
} as const;

export const HOVER_DELAY = 100;
