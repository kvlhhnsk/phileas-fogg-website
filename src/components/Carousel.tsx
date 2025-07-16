import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
  items: Array<{
    id: string;
    title: string;
    description?: string;
  }>;
  autoRotate?: boolean;
  autoRotateInterval?: number;
  className?: string;
}

const Carousel = ({ 
  items, 
  autoRotate = true, 
  autoRotateInterval = 4000,
  className = "" 
}: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  useEffect(() => {
    if (!autoRotate || isHovered) return;

    const interval = setInterval(nextSlide, autoRotateInterval);
    return () => clearInterval(interval);
  }, [autoRotate, autoRotateInterval, isHovered]);

  return (
    <div 
      className={`relative group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main carousel container */}
      <div className="relative h-64 md:h-80 overflow-hidden rounded-lg bg-muted">
        {/* Slides */}
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`
              absolute inset-0 flex items-center justify-center transition-opacity duration-500
              ${index === currentIndex ? 'opacity-100' : 'opacity-0'}
            `}
          >
            {/* Photo placeholder */}
            <div className="text-center">
              <div className="text-xl font-medium text-muted-foreground mb-2">
                {item.title}
              </div>
              
              {/* Hover overlay with description */}
              {item.description && (
                <div 
                  className={`
                    absolute inset-0 bg-primary/90 flex items-center justify-center
                    transition-opacity duration-300
                    ${isHovered ? 'opacity-100' : 'opacity-0'}
                  `}
                >
                  <p className="text-primary-foreground text-center px-6 max-w-md">
                    {item.description}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 hover:bg-background transition-all duration-300 opacity-0 group-hover:opacity-100"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 hover:bg-background transition-all duration-300 opacity-0 group-hover:opacity-100"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center space-x-2 mt-4">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`
              w-2 h-2 rounded-full transition-all duration-300
              ${index === currentIndex ? 'bg-primary' : 'bg-muted-foreground/30'}
            `}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;