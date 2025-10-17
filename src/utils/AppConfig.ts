import type { LocalePrefixMode } from "next-intl/routing";

const localePrefix: LocalePrefixMode = "as-needed";

// App configuration variables - adjust according to your project
export const AppConfig = {
  // App info
  name: "Atlas Online Store",
  title: "Atlas Online Store - Modern E-commerce Platform",
  description:
    "A modern e-commerce platform built with Next.js, TypeScript, Tailwind CSS, and more.",
  url:
    process.env.NEXT_PUBLIC_APP_URL || "https://atlas-online-store.vercel.app",

  // SEO defaults
  titleSeparator: " | ",
  locale: "en_US",
  author: "Haris Ahmed",
  twitterHandle: "@harisahmed",

  // Internationalization settings
  locales: ["en", "fr"],
  defaultLocale: "en",
  localePrefix,

  // Theme settings
  defaultTheme: "system", // 'light', 'dark', or 'system'

  // Contact information
  contactEmail: "hello@example.com",

  // Social media
  social: {
    github: "https://github.com/Code-Huddle/atlas-online-store",
    twitter: "https://twitter.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
  },

  // Analytics
  googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID,

  // API endpoints - centralize API URLs here
  api: {
    base: process.env.NEXT_PUBLIC_API_URL,
    auth: "/v1/auth",
    users: "/v1/users",
  },

  // Feature flags
  features: {
    darkMode: true,
    auth: true,
    analytics: true,
  },
};
