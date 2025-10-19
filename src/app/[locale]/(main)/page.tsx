import { setRequestLocale } from 'next-intl/server';
import { CategoryIcons } from '@/components/main-ui/CategoryIcons';
import { FlashDeals } from '@/components/main-ui/FlashDeals';
import { LimitedTimeTechDeals } from '@/components/main-ui/LimitedTimeTechDeals';
import { Navbar } from '@/components/main-ui/Navbar';
import { OthersAreExploring } from '@/components/main-ui/OthersAreExploring';
import { ProductListed } from '@/components/main-ui/ProductListed';
import { PromotionalGrid } from '@/components/main-ui/PromotionalGrid';
import { RecentlyViewed } from '@/components/main-ui/RecentlyViewed';
import { RecommendedForYou } from '@/components/main-ui/RecommendedForYou';
import { TopDealsCarousel } from '@/components/main-ui/TopDealsCarousel';
import { PromoBanner } from '@/components/PromoBanner';
import { TrendingNow } from '@/components/TrendingNow';

type IIndexProps = {
  readonly params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: IIndexProps) {
  await props.params;
  return {
    title: 'Atlas Online Store - Modern E-commerce Platform',
    description:
      'A modern e-commerce platform built with Next.js, TypeScript, Tailwind CSS, and authentication.',
  };
}

export default async function Index(props: IIndexProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <div className="geometric-bg min-h-screen bg-background">
      {/* Promotional Banner */}
      <PromoBanner />

      {/* Navigation */}
      <Navbar />

      {/* Trending Now Section */}
      <TrendingNow />

      {/* Limited Time Tech Deals Banner */}
      <LimitedTimeTechDeals />

      {/* Category Icons */}
      <CategoryIcons />

      {/* Promotional Grid */}
      <PromotionalGrid />

      {/* Product Sections Container */}
      <div className="mx-auto w-full max-w-7xl space-y-4">
        {/* Flash Deals Section */}
        <FlashDeals />

        {/* Recommended For You Section */}
        <RecommendedForYou />

        {/* Others Are Exploring Section */}
        <OthersAreExploring />
      </div>

      {/* Top Deals Carousel - Full Width */}
      <TopDealsCarousel />

      {/* Product Sections Container */}
      <div className="mx-auto w-full max-w-7xl space-y-4">
        {/* Product Listed Section */}
        <ProductListed />

        {/* Recently Viewed Section */}
        <RecentlyViewed />
      </div>
    </div>
  );
}
