import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const quickLinks = [
    { name: "About", path: "/about" },
    { name: "Authors", path: "/authors" },
    { name: "Blog", path: "/blog" },
    { name: "Shop", path: "/shop" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => navigate(link.path)}
                  className="block text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Column 2: Copyright - Center */}
          <div className="flex items-center justify-center">
            <div className="text-center">
              <p className="text-sm font-medium">© Phileas Fogg</p>
              <p className="text-xs text-primary-foreground/60 mt-1">
                {new Date().getFullYear()}
              </p>
            </div>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Where to find us?</h3>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <p>123 Adventure Street</p>
              <p>London, UK SW1A 1AA</p>
              <p className="mt-3">+44 20 7123 4567</p>
              <p>hello@phileasfogg.com</p>
            </div>
          </div>

          {/* Column 4: Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="space-y-2">
              <a
                href="#"
                className="block text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300"
              >
                Instagram
              </a>
              <a
                href="#"
                className="block text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;