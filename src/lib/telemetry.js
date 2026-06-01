// src/lib/telemetry.js

export const trackEvent = (eventName, eventData = {}) => {
  // Fail silently if ad-blocker blocked the script or umami isn't loaded
  if (typeof window === 'undefined' || !window.umami) return; 
  
  window.umami.track(eventName, eventData);
};