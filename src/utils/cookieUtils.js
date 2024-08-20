export const getCookieConsent = () => {
  const consent = localStorage.getItem('cookieConsent');
  if (consent === null) return null;

  try {
    const parsedConsent = JSON.parse(consent);
    if (typeof parsedConsent === 'object') {
      return parsedConsent;
    } else {
      // Convert old format data to new format
      return {
        necessary: true,
        analytics: consent === 'accepted',
        advertising: consent === 'accepted',
      };
    }
  } catch (error) {
    console.error('Error parsing cookie consent:', error);
    return null;
  }
};

export const canUseAnalytics = () => {
  const consent = getCookieConsent();
  return consent && consent.analytics;
};

export const canUseAdvertising = () => {
  const consent = getCookieConsent();
  return consent && consent.advertising;
};

export const initializeAnalytics = () => {
  if (canUseAnalytics()) {
    // Initialize Google Analytics or other analytics tools here
    console.log('Analytics initialized');
  }
};

export const initializeAdvertising = () => {
  if (canUseAdvertising()) {
    // Initialize advertising scripts here
    console.log('Advertising initialized');
  }
};
