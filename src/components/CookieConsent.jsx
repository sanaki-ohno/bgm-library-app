import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true,
    analytics: false,
    advertising: false,
  });

  useEffect(() => {
    const checkCookieConsent = () => {
      const consent = localStorage.getItem('cookieConsent');
      const consentTimestamp = localStorage.getItem('cookieConsentTimestamp');
      const currentTime = new Date().getTime();
      const oneDay = 24 * 60 * 60 * 1000; // One day in milliseconds

      if (
        consent === null ||
        !consentTimestamp ||
        currentTime - parseInt(consentTimestamp) > oneDay
      ) {
        setShowConsent(true);
      } else {
        try {
          const parsedConsent = JSON.parse(consent);
          if (typeof parsedConsent === 'object') {
            setCookiePreferences(parsedConsent);
          } else {
            // Convert old format data to new format
            setCookiePreferences({
              necessary: true,
              analytics: consent === 'accepted',
              advertising: consent === 'accepted',
            });
          }
        } catch (error) {
          console.error('Error parsing cookie consent:', error);
          setShowConsent(true);
        }
      }
    };

    checkCookieConsent();
  }, []);

  const handleConsent = (preferences) => {
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    localStorage.setItem(
      'cookieConsentTimestamp',
      new Date().getTime().toString()
    );
    setCookiePreferences(preferences);
    setShowConsent(false);
  };

  const handleAccept = () => {
    handleConsent({ ...cookiePreferences, analytics: true, advertising: true });
    // Enable analytics and advertising cookies here
    console.log('Analytics and advertising cookies enabled');
  };

  const handleDecline = () => {
    handleConsent({
      ...cookiePreferences,
      analytics: false,
      advertising: false,
    });
    // Disable analytics and advertising cookies here
    console.log('Analytics and advertising cookies disabled');
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4">
      <div className="container mx-auto">
        <p className="mb-4">
          We use cookies to enhance your browsing experience, serve personalized
          ads or content, and analyze our traffic. By clicking "Accept All", you
          consent to our use of cookies.
          <Link to="/privacy" className="underline ml-1">
            Read More
          </Link>
        </p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={handleDecline}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
