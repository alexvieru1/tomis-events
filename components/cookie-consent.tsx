'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

const COOKIE_CONSENT_KEY = 'cookie-consent';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="container mx-auto">
        <div className="bg-background border border-border rounded-2xl shadow-lg p-4 md:p-6 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
          <div className="flex-1">
            <p className="text-sm md:text-base text-foreground">
              Folosim cookie-uri pentru a-ți oferi cea mai bună experiență pe site-ul nostru.{' '}
              <Link
                href="/politica-cookies"
                className="text-[#E81ADE] hover:underline"
              >
                Află mai multe
              </Link>
            </p>
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <Button
              variant="outline"
              size="sm"
              onClick={handleDecline}
              className="flex-1 md:flex-none"
            >
              Refuz
            </Button>
            <Button
              size="sm"
              onClick={handleAccept}
              className="flex-1 md:flex-none bg-[#E81ADE] hover:bg-[#E81ADE]/90"
            >
              Accept
            </Button>
          </div>
          <button
            onClick={handleDecline}
            className="absolute top-3 right-3 md:static text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Închide"
          >
            <X className="size-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
