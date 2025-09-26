import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { X } from 'lucide-react';
import { Button } from './ui/button';
import paintSplatter from '@/assets/paint-splatter.png';

export const FloatingShopButton = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  // Hide on shop and cart pages
  const shouldHide = ['/shop', '/cart', '/checkout'].some(path => 
    location.pathname.startsWith(path)
  );

  useEffect(() => {
    // Check if user has permanently dismissed the button
    const dismissed = localStorage.getItem('floatingShopDismissed');
    if (dismissed) {
      setIsDismissed(true);
      return;
    }

    // Show button after 3 seconds if not on excluded pages
    if (!shouldHide) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [shouldHide]);

  const handleClose = () => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem('floatingShopDismissed', 'true');
  };

  const handleShopClick = () => {
    navigate('/shop');
  };

  if (shouldHide || isDismissed || !isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      <div className="relative group">
        {/* Paint Splatter Button */}
        <div
          onClick={handleShopClick}
          className="relative w-16 h-16 cursor-pointer transition-all duration-300 hover:scale-110 drop-shadow-lg hover:drop-shadow-xl"
          style={{
            backgroundImage: `url(${paintSplatter})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            filter: 'hue-rotate(210deg) saturate(1.5) brightness(0.8)',
          }}
        >
          
          {/* Expandable text on hover */}
          <div className="absolute right-full top-1/2 -translate-y-1/2 mr-3 bg-primary text-primary-foreground px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 whitespace-nowrap shadow-lg">
            <span className="text-sm font-medium">Visit Shop</span>
            {/* Arrow pointer */}
            <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-primary"></div>
          </div>
        </div>

        {/* Close button */}
        <Button
          onClick={handleClose}
          variant="ghost"
          size="icon"
          className="absolute -top-1 -right-1 h-5 w-5 bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          <X className="h-2.5 w-2.5" />
        </Button>
      </div>
    </div>
  );
};