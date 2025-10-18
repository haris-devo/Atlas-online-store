import * as React from 'react';

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(() => {
    // Initialize state based on current window width
    if (typeof window === 'undefined') {
      return undefined;
    }
    return window.innerWidth < MOBILE_BREAKPOINT;
  });

  const updateMobileState = React.useCallback(() => {
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
  }, []);

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      updateMobileState();
    };
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, [updateMobileState]);

  return !!isMobile;
}
