import { useState, useEffect } from "react";
import SplashScreen from "@/components/SplashScreen";
import HomePage from "./HomePage";

const Index = () => {
  console.log("Index component rendering");
  const [showSplash, setShowSplash] = useState(true);
  const [hasVisited, setHasVisited] = useState(false);
  
  console.log("Index state:", { showSplash, hasVisited });

  useEffect(() => {
    // Check if user has already visited (using sessionStorage for this session only)
    const visited = sessionStorage.getItem('hasVisited');
    if (visited) {
      setShowSplash(false);
      setHasVisited(true);
    }
  }, []);

  const handleSplashComplete = () => {
    setShowSplash(false);
    setHasVisited(true);
    sessionStorage.setItem('hasVisited', 'true');
  };

  // Show splash screen only on first visit
  if (showSplash && !hasVisited) {
    console.log("Rendering SplashScreen");
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  console.log("Rendering HomePage");
  return <HomePage />;
};

export default Index;
