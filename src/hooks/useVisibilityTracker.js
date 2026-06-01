import { useEffect } from 'react';
import { trackEvent } from '../lib/telemetry';

export const useVisibilityTracker = (threshold = 0.5) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          trackEvent(`Viewed Section: ${entry.target.id}`);
          obs.unobserve(entry.target); // Detach immediately to save memory
        }
      });
    }, { threshold });

    // Helper function to find un-observed sections
    const observeSections = () => {
      // Find sections with the attribute that haven't been tagged yet
      const sections = document.querySelectorAll('[data-track-visibility="true"]:not([data-observed="true"])');
      sections.forEach(section => {
        observer.observe(section);
        section.setAttribute('data-observed', 'true'); // Mark as tracked
      });
    };

    // 1. Check immediately for components already in the DOM (like Home)
    observeSections();

    // 2. Watch the DOM for lazy-loaded components (Suspense)
    const mutationObserver = new MutationObserver(() => {
      observeSections();
    });
    
    // Attach to body to catch all React injections
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [threshold]);
};