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
    <div className="w-full bg-[#f5f5f5] border-b border-gray-300" style={{ padding: '10px 20px', minHeight: '60px' }}>
      <div className="container mx-auto">
        <nav className="flex justify-center space-x-8 md:space-x-12">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => navigate(category.path)}
              className={`
                text-sm font-medium transition-colors duration-300 text-black hover:text-gray-600
                ${location.search.includes(category.path.split('=')[1]) 
                  ? 'font-semibold underline' 
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