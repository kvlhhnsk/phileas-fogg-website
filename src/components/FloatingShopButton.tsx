import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ShoppingBag, X } from 'lucide-react';
import { Button } from './ui/button';

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
        {/* Main Button */}
        <Button
          onClick={handleShopClick}
          className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full h-14 w-14 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse group-hover:animate-none relative overflow-hidden"
          size="icon"
        >
          <ShoppingBag className="h-6 w-6" />
          
          {/* Expandable text on hover */}
          <div className="absolute left-0 top-0 h-full bg-primary text-primary-foreground rounded-full flex items-center pl-4 pr-16 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-full group-hover:translate-x-0 whitespace-nowrap">
            <span className="text-sm font-medium">Visit Shop</span>
          </div>
        </Button>

        {/* Close button */}
        <Button
          onClick={handleClose}
          variant="ghost"
          size="icon"
          className="absolute -top-2 -right-2 h-6 w-6 bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          <X className="h-3 w-3" />
        </Button>
      </div>
    </div>
  );
};