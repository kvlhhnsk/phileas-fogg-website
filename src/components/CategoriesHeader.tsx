import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const CategoriesHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSticky, setIsSticky] = useState(false);

  const categories = [
    { name: "Ceramics & Pottery", path: "/shop?category=ceramics" },
    { name: "Textiles & Weaving", path: "/shop?category=textiles" },
    { name: "Wood & Metal", path: "/shop?category=wood-metal" },
    { name: "Other", path: "/shop?category=other" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const headerHeight = 80; // Approximate header height
      setIsSticky(scrollTop > headerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`
      w-full bg-muted/50 border-b border-border transition-all duration-300
      ${isSticky ? 'fixed top-16 left-0 right-0 z-40 shadow-sm' : 'relative'}
    `}>
      <div className="container mx-auto px-6 py-3">
        <nav className="flex justify-center space-x-12">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => navigate(category.path)}
              className={`
                text-sm font-medium transition-colors duration-300
                ${location.search.includes(category.path.split('=')[1]) 
                  ? 'text-primary' 
                  : 'text-muted-foreground hover:text-foreground'
                }
              `}
            >
              {category.name}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default CategoriesHeader;