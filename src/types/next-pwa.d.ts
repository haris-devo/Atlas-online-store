declare module 'next-pwa' {
  import type { NextConfig } from 'next';

  type PWAConfig = {
    dest?: string;
    register?: boolean;
    skipWaiting?: boolean;
    disable?: boolean;
    buildExcludes?: RegExp[];
    cacheOnFrontEndNav?: boolean;
    aggressiveFrontEndNavCaching?: boolean;
    reloadOnOnline?: boolean;
    sw?: string;
    swcMinify?: boolean;
    workboxOptions?: {
      disableDevLogs?: boolean;
      runtimeCaching?: Array<{
        urlPattern: RegExp;
        handler: string;
        options?: {
          cacheName?: string;
          expiration?: {
            maxEntries?: number;
            maxAgeSeconds?: number;
          };
        };
      }>;
    };
  };

  function withPWA(config?: PWAConfig): (nextConfig: NextConfig) => NextConfig;
  export default withPWA;
}
