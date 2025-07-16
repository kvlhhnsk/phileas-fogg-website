import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
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
          <nav className="flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => navigate(item.path)}
                className={`
                  relative px-2 py-1 text-sm font-medium transition-all duration-300
                  ${location.pathname === item.path 
                    ? 'text-primary' 
                    : 'text-muted-foreground hover:text-foreground'
                  }
                  after:content-[''] after:absolute after:w-full after:scale-x-0 
                  after:h-0.5 after:bottom-0 after:left-0 after:bg-primary 
                  after:origin-bottom-right after:transition-transform after:duration-300 
                  hover:after:scale-x-100 hover:after:origin-bottom-left
                  ${location.pathname === item.path ? 'after:scale-x-100' : ''}
                `}
              >
                {item.name}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;