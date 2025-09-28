import { useNavigate, useLocation } from "react-router-dom";
import { ShoppingCart, ChevronDown } from "lucide-react";
import { useCart } from "@/context/CartContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { itemCount } = useCart();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left Side - Splash Screen Link */}
          <div className="flex-1">
            <button
              onClick={() => navigate("/splash")}
              className={`
                relative px-2 py-1 text-sm font-medium transition-all duration-300
                ${location.pathname === "/splash" 
                  ? 'text-primary' 
                  : 'text-muted-foreground hover:text-foreground'
                }
                after:content-[''] after:absolute after:w-full after:scale-x-0 
                after:h-0.5 after:bottom-0 after:left-0 after:bg-primary 
                after:origin-bottom-right after:transition-transform after:duration-300 
                hover:after:scale-x-100 hover:after:origin-bottom-left
                ${location.pathname === "/splash" ? 'after:scale-x-100' : ''}
              `}
            >
              Splash
            </button>
          </div>

          {/* Logo - Centered */}
          <div className="flex-1 flex justify-center">
            <button
              onClick={() => navigate("/")}
              className="text-2xl font-serif font-bold tracking-wide hover:scale-105 transition-all duration-300"
            >
              Phileas Fogg
            </button>
          </div>

          {/* Navigation - Right Side */}
          <nav className="flex items-center space-x-8">
            {/* Home */}
            <button
              onClick={() => navigate("/")}
              className={`
                relative px-2 py-1 text-sm font-medium transition-all duration-300
                ${location.pathname === "/" 
                  ? 'text-primary' 
                  : 'text-muted-foreground hover:text-foreground'
                }
                after:content-[''] after:absolute after:w-full after:scale-x-0 
                after:h-0.5 after:bottom-0 after:left-0 after:bg-primary 
                after:origin-bottom-right after:transition-transform after:duration-300 
                hover:after:scale-x-100 hover:after:origin-bottom-left
                ${location.pathname === "/" ? 'after:scale-x-100' : ''}
              `}
            >
              Home
            </button>

            {/* About */}
            <button
              onClick={() => navigate("/about")}
              className={`
                relative px-2 py-1 text-sm font-medium transition-all duration-300
                ${location.pathname === "/about" 
                  ? 'text-primary' 
                  : 'text-muted-foreground hover:text-foreground'
                }
                after:content-[''] after:absolute after:w-full after:scale-x-0 
                after:h-0.5 after:bottom-0 after:left-0 after:bg-primary 
                after:origin-bottom-right after:transition-transform after:duration-300 
                hover:after:scale-x-100 hover:after:origin-bottom-left
                ${location.pathname === "/about" ? 'after:scale-x-100' : ''}
              `}
            >
              About
            </button>

            {/* Exhibitions Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 px-2 py-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 focus:outline-none">
                Exhibitions
                <ChevronDown size={14} />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-40">
                <DropdownMenuItem 
                  onClick={() => navigate("/exhibitions")}
                  className="cursor-pointer"
                >
                  Exhibitions
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => navigate("/excursions")}
                  className="cursor-pointer"
                >
                  Excursions
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Blog */}
            <button
              onClick={() => navigate("/blog")}
              className={`
                relative px-2 py-1 text-sm font-medium transition-all duration-300
                ${location.pathname === "/blog" 
                  ? 'text-primary' 
                  : 'text-muted-foreground hover:text-foreground'
                }
                after:content-[''] after:absolute after:w-full after:scale-x-0 
                after:h-0.5 after:bottom-0 after:left-0 after:bg-primary 
                after:origin-bottom-right after:transition-transform after:duration-300 
                hover:after:scale-x-100 hover:after:origin-bottom-left
                ${location.pathname === "/blog" ? 'after:scale-x-100' : ''}
              `}
            >
              Blog
            </button>

            {/* Authors */}
            <button
              onClick={() => navigate("/authors")}
              className={`
                relative px-2 py-1 text-sm font-medium transition-all duration-300
                ${location.pathname === "/authors" 
                  ? 'text-primary' 
                  : 'text-muted-foreground hover:text-foreground'
                }
                after:content-[''] after:absolute after:w-full after:scale-x-0 
                after:h-0.5 after:bottom-0 after:left-0 after:bg-primary 
                after:origin-bottom-right after:transition-transform after:duration-300 
                hover:after:scale-x-100 hover:after:origin-bottom-left
                ${location.pathname === "/authors" ? 'after:scale-x-100' : ''}
              `}
            >
              Authors
            </button>

            {/* Shop */}
            <button
              onClick={() => navigate("/shop")}
              className={`
                relative px-2 py-1 text-sm font-medium transition-all duration-300
                ${location.pathname === "/shop" 
                  ? 'text-primary' 
                  : 'text-muted-foreground hover:text-foreground'
                }
                after:content-[''] after:absolute after:w-full after:scale-x-0 
                after:h-0.5 after:bottom-0 after:left-0 after:bg-primary 
                after:origin-bottom-right after:transition-transform after:duration-300 
                hover:after:scale-x-100 hover:after:origin-bottom-left
                ${location.pathname === "/shop" ? 'after:scale-x-100' : ''}
              `}
            >
              Shop
            </button>
            
            {/* Cart Icon with Badge */}
            <button
              onClick={() => navigate("/cart")}
              className={`
                relative p-2 transition-all duration-300
                ${location.pathname === "/cart" 
                  ? 'text-primary' 
                  : 'text-muted-foreground hover:text-foreground'
                }
              `}
            >
              <ShoppingCart size={20} />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                  {itemCount}
                </span>
              )}
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;