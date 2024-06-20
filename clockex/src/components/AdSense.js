// src/components/AdSense.js
import React, { useEffect } from 'react';

const AdSense = ({ adSlot }) => {
  useEffect(() => {
    if (window.adsbygoogle && process.env.NODE_ENV !== "development") {
      window.adsbygoogle.push({});
    }
  }, []);

  return (
    <ins className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client="ca-pub-6117529761188568"
      data-ad-slot={adSlot}
      data-ad-format="auto"></ins>
  );
};

export default AdSense;
