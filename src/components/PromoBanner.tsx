'use client';

import X from 'lucide-react/dist/esm/icons/x';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

type CountdownTime = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export function PromoBanner() {
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof globalThis.window === 'undefined') {
      return true;
    }
    const dismissed = globalThis.localStorage.getItem('promo-banner-dismissed');
    return dismissed !== 'true';
  });

  const [countdown, setCountdown] = useState<CountdownTime>({
    days: 11,
    hours: 16,
    minutes: 55,
    seconds: 50,
  });

  // Countdown timer effect
  useEffect(() => {
    if (!isVisible) {
      return;
    }

    const timer = setInterval(() => {
      setCountdown((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isVisible]);

  const handleDismiss = () => {
    setIsVisible(false);
    globalThis.localStorage.setItem('promo-banner-dismissed', 'true');
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="relative w-full overflow-hidden">
      {/* Main banner */}
      <div className="relative px-4 py-2">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=60&fit=crop&crop=center"
            alt="Promotional banner background"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>

        {/* Red overlay */}
        <div className="absolute inset-0 bg-red-600/90" />

        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 flex items-center justify-between gap-4">
            {/* Promotional text */}
            <div className="text-white text-xs font-medium">
              EXTRA SALE 20% OFF + Free Express Shipping on order $991
            </div>

            {/* Promo code */}
            <div className="text-white text-xs">
              <span className="font-normal">Promo Code: </span>
              <span className="font-bold text-sm">SAVE 30</span>
            </div>

            {/* Countdown timer */}
            <div className="text-white">
              <div className="flex items-center gap-1">
                <div className="text-center">
                  <div className="text-sm font-bold">
                    {countdown.days.toString().padStart(2, '0')}
                  </div>
                  <div className="text-xs font-normal">D</div>
                </div>
                <div className="text-sm font-bold">:</div>
                <div className="text-center">
                  <div className="text-sm font-bold">
                    {countdown.hours.toString().padStart(2, '0')}
                  </div>
                  <div className="text-xs font-normal">H</div>
                </div>
                <div className="text-sm font-bold">:</div>
                <div className="text-center">
                  <div className="text-sm font-bold">
                    {countdown.minutes.toString().padStart(2, '0')}
                  </div>
                  <div className="text-xs font-normal">M</div>
                </div>
                <div className="text-sm font-bold">:</div>
                <div className="text-center">
                  <div className="text-sm font-bold">
                    {countdown.seconds.toString().padStart(2, '0')}
                  </div>
                  <div className="text-xs font-normal">S</div>
                </div>
              </div>
            </div>

            {/* Buy Now button */}
            <Button
              size="sm"
              className="bg-yellow-400 text-black hover:bg-yellow-500 font-medium px-3 py-1 h-7 text-xs"
            >
              Buy Now
            </Button>

            {/* Close button */}
            <button
              type="button"
              onClick={handleDismiss}
              className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              aria-label="Close banner"
            >
              <X className="h-3 w-3 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
