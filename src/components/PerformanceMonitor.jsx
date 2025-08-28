"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export const PerformanceMonitor = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Track page views with service categorization
    if (typeof gtag !== 'undefined') {
      const serviceType = getServiceType(pathname);
      const location = getLocationFromPath(pathname);
      
      gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: document.title,
        page_location: window.location.href,
        custom_map: {
          'dimension1': serviceType,
          'dimension2': location
        }
      });

      gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
        service_type: serviceType,
        location: location
      });
    }

    // Track scroll depth
    let maxScroll = 0;
    const handleScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );
      
      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;
        
        // Track milestone scroll depths
        if ([25, 50, 75, 90].includes(scrollPercent)) {
          gtag('event', 'scroll', {
            event_category: 'engagement',
            event_label: `${scrollPercent}%`,
            value: scrollPercent
          });
        }
      }
    };

    // Track time on page
    const startTime = Date.now();
    const trackTimeOnPage = () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      if (timeSpent > 30) { // Only track if user spent more than 30 seconds
        gtag('event', 'time_on_page', {
          event_category: 'engagement',
          event_label: pathname,
          value: timeSpent
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('beforeunload', trackTimeOnPage);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('beforeunload', trackTimeOnPage);
    };
  }, [pathname]);

  return null; // This component doesn't render anything
};

// Helper functions
const getServiceType = (pathname) => {
  if (pathname.includes('instalatii-gaze')) return 'instalatii_gaze';
  if (pathname.includes('centrale-termice')) return 'centrale_termice';
  if (pathname.includes('revizii-anre')) return 'revizii_anre';
  if (pathname.includes('urgente')) return 'urgente';
  if (pathname.includes('sisteme-siguranta') || pathname.includes('montaj-senzori')) return 'siguranta';
  if (pathname.includes('modernizare')) return 'modernizare';
  if (pathname.includes('pregatire-centrala')) return 'mentenanta';
  if (pathname.includes('intrebari-frecvente')) return 'informatii';
  return 'general';
};

const getLocationFromPath = (pathname) => {
  if (pathname.includes('mamaia')) return 'mamaia';
  if (pathname.includes('constanta')) return 'constanta';
  if (pathname.includes('navodari') || pathname.includes('medgidia')) return 'navodari_medgidia';
  if (pathname.includes('mangalia') || pathname.includes('eforie')) return 'mangalia_eforie';
  if (pathname.includes('nationale')) return 'nationale';
  return 'general';
};