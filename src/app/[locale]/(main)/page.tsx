import { setRequestLocale } from 'next-intl/server';
import { LimitedTimeTechDeals } from '@/components/main-ui/LimitedTimeTechDeals';
import { Navbar } from '@/components/main-ui/Navbar';
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
    </div>
  );
}
