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

  console.log("CategoriesHeader rendering...");
  
  return (
    <div className="fixed top-[65px] left-0 right-0 z-40 w-full bg-muted/95 backdrop-blur-sm border-b border-border px-5 py-3">
      <div className="container mx-auto">
        <nav className="flex justify-center space-x-8 md:space-x-12">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => navigate(category.path)}
              className={`
                text-sm font-medium transition-colors duration-300 text-foreground hover:text-primary
                ${location.search.includes(category.path.split('=')[1]) 
                  ? 'font-semibold text-primary' 
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