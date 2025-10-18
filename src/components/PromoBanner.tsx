'use client';

import X from 'lucide-react/dist/esm/icons/x';
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
    // Initialize visibility based on localStorage
    if (typeof window === 'undefined') {
      return true;
    }
    const dismissed = localStorage.getItem('promo-banner-dismissed');
    return dismissed !== 'true';
  });
  const [countdown, setCountdown] = useState<CountdownTime>({
    days: 11,
    hours: 16,
    minutes: 55,
    seconds: 50,
  });

  // Check localStorage on mount
  useEffect(() => {
    // This effect is now redundant since we initialize state properly
    // But keeping it for any future logic that might be needed
  }, []);

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
    localStorage.setItem('promo-banner-dismissed', 'true');
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="relative w-full overflow-hidden">
      {/* Main banner with red background and decorative circles */}
      <div className="relative bg-red-600 px-6 py-4">
        <div className="mx-auto max-w-7xl">
          {/* Decorative circles */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-2 left-4 h-2 w-2 rounded-full bg-red-500/30"></div>
            <div className="absolute top-6 left-12 h-1 w-1 rounded-full bg-red-500/40"></div>
            <div className="absolute top-3 left-20 h-1.5 w-1.5 rounded-full bg-red-500/25"></div>
            <div className="absolute top-8 left-32 h-1 w-1 rounded-full bg-red-500/35"></div>
            <div className="absolute top-2 left-48 h-2 w-2 rounded-full bg-red-500/20"></div>
            <div className="absolute top-5 left-64 h-1 w-1 rounded-full bg-red-500/30"></div>
            <div className="absolute top-7 left-80 h-1.5 w-1.5 rounded-full bg-red-500/25"></div>
            <div className="absolute top-3 left-96 h-1 w-1 rounded-full bg-red-500/40"></div>
            <div className="absolute top-6 left-[28rem] h-2 w-2 rounded-full bg-red-500/20"></div>
            <div className="absolute top-2 left-[32rem] h-1 w-1 rounded-full bg-red-500/35"></div>
            <div className="absolute top-8 left-[36rem] h-1.5 w-1.5 rounded-full bg-red-500/25"></div>
            <div className="absolute top-4 left-[40rem] h-1 w-1 rounded-full bg-red-500/30"></div>
            <div className="absolute top-7 left-[44rem] h-2 w-2 rounded-full bg-red-500/20"></div>
            <div className="absolute top-3 left-[48rem] h-1 w-1 rounded-full bg-red-500/40"></div>
            <div className="absolute top-5 left-[52rem] h-1.5 w-1.5 rounded-full bg-red-500/25"></div>
            <div className="absolute top-8 left-[56rem] h-1 w-1 rounded-full bg-red-500/35"></div>
            <div className="absolute top-2 left-[60rem] h-2 w-2 rounded-full bg-red-500/20"></div>
            <div className="absolute top-6 left-[64rem] h-1 w-1 rounded-full bg-red-500/30"></div>
            <div className="absolute top-4 left-[68rem] h-1.5 w-1.5 rounded-full bg-red-500/25"></div>
            <div className="absolute top-7 left-[72rem] h-1 w-1 rounded-full bg-red-500/40"></div>
            <div className="absolute top-3 left-[76rem] h-2 w-2 rounded-full bg-red-500/20"></div>
            <div className="absolute top-5 left-[80rem] h-1 w-1 rounded-full bg-red-500/35"></div>
            <div className="absolute top-8 left-[84rem] h-1.5 w-1.5 rounded-full bg-red-500/25"></div>
            <div className="absolute top-2 left-[88rem] h-1 w-1 rounded-full bg-red-500/30"></div>
            <div className="absolute top-6 left-[92rem] h-2 w-2 rounded-full bg-red-500/20"></div>
            <div className="absolute top-4 left-[96rem] h-1 w-1 rounded-full bg-red-500/40"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 flex items-center justify-between">
            {/* Left: Promotional text */}
            <div className="text-white">
              <span className="text-sm font-normal">
                EXTRA SALE 20% OFF + Free Express Shipping on order $991
              </span>
            </div>

            {/* Middle-left: Promo code */}
            <div className="text-white">
              <span className="text-sm font-normal">Promo Code: </span>
              <span className="text-lg font-semibold">SAVE 30</span>
            </div>

            {/* Middle-right: Countdown timer */}
            <div className="text-white">
              <div className="flex items-center space-x-1">
                <div className="text-center">
                  <div className="text-xl font-bold">
                    {countdown.days.toString().padStart(2, '0')}
                  </div>
                  <div className="text-xs font-normal">DAYS</div>
                </div>
                <div className="text-xl font-bold">:</div>
                <div className="text-center">
                  <div className="text-xl font-bold">
                    {countdown.hours.toString().padStart(2, '0')}
                  </div>
                  <div className="text-xs font-normal">HRS</div>
                </div>
                <div className="text-xl font-bold">:</div>
                <div className="text-center">
                  <div className="text-xl font-bold">
                    {countdown.minutes.toString().padStart(2, '0')}
                  </div>
                  <div className="text-xs font-normal">MIN</div>
                </div>
                <div className="text-xl font-bold">:</div>
                <div className="text-center">
                  <div className="text-xl font-bold">
                    {countdown.seconds.toString().padStart(2, '0')}
                  </div>
                  <div className="text-xs font-normal">SEC</div>
                </div>
              </div>
            </div>

            {/* Right: Buy Now button */}
            <Button className="bg-yellow-400 text-black hover:bg-yellow-500 font-normal px-6 py-2 rounded-md">
              Buy Now
            </Button>

            {/* Close button */}
            <button
              type="button"
              onClick={handleDismiss}
              className="absolute top-2 right-2 flex h-6 w-6 items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              aria-label="Close banner"
            >
              <X className="h-4 w-4 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Dark green bottom section */}
      <div className="h-3 bg-green-800"></div>
    </div>
  );
}
