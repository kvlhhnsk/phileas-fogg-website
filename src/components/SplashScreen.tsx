import { useEffect, useState } from "react";

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  console.log("SplashScreen component rendering");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 300); // Wait for fade out animation
    }, 3000); // Show for 3 seconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={`
        fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center
        transition-opacity duration-300
        ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}
      `}
    >
      {/* Photo Placeholder */}
      <div className="w-64 h-40 bg-muted border-2 border-border flex items-center justify-center mb-8 animate-scale-in">
        <span className="text-muted-foreground font-medium">PHOTO</span>
      </div>

      {/* Text Content */}
      <div className="text-center space-y-4 animate-fade-in">
        <h1 className="text-4xl font-serif font-bold tracking-wide">
          Phileas Fogg
        </h1>
        <p className="text-xl text-muted-foreground">Welcome</p>
      </div>

      {/* Loading indicator */}
      <div className="mt-12">
        <div className="w-32 h-1 bg-muted rounded-full overflow-hidden">
          <div className="h-full bg-primary rounded-full animate-slide-in-right"></div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;