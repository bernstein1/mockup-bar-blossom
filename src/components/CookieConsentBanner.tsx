import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CookieConsentBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('cookie_consent', 'true');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 bg-rosy-navy text-white p-4 flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
      <p>
        We use cookies to enhance your experience.{' '}
        <Link to="/cookies" className="underline">
          Learn more
        </Link>
        .
      </p>
      <Button onClick={accept} className="bg-rosy-teal hover:bg-rosy-teal/90 text-white">
        Accept
      </Button>
    </div>
  );
};

export default CookieConsentBanner;
