import { useNavigate, useLocation } from "react-router-dom";

const CategoriesHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const categories = [
    { name: "Ceramics & Pottery", path: "/shop?category=ceramics" },
    { name: "Textiles & Weaving", path: "/shop?category=textiles" },
    { name: "Wood & Metal", path: "/shop?category=wood-metal" },
    { name: "Mixed Media", path: "/shop?category=mixed-media" }
  ];

  return (
    <div className="w-full bg-muted border-b border-border">
      <div className="container mx-auto px-5 py-2.5">
        <nav className="flex justify-center space-x-8 md:space-x-12">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => navigate(category.path)}
              className={`
                text-sm font-medium transition-colors duration-300 text-foreground hover:text-muted-foreground py-1
                ${location.search.includes(category.path.split('=')[1]) 
                  ? 'text-primary font-semibold' 
                  : ''
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