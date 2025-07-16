import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Carousel from "@/components/Carousel";

const HomePage = () => {
  const navigate = useNavigate();

  // Carousel data
  const photoCarouselItems = [
    {
      id: "photo1",
      title: "Photo 1",
      description: "This photo showcases the elegance and adventure spirit of Phileas Fogg's world"
    },
    {
      id: "photo2", 
      title: "Photo 2",
      description: "A glimpse into the sophisticated lifestyle and timeless design philosophy"
    },
    {
      id: "photo3",
      title: "Photo 3", 
      description: "Capturing the essence of exploration and refined taste"
    }
  ];

  const eventCarouselItems = [
    {
      id: "event1",
      title: "Event Photo 1",
      description: "Behind the scenes of our latest exhibition"
    },
    {
      id: "event2",
      title: "Event Photo 2", 
      description: "Gallery opening showcasing travel-inspired collections"
    },
    {
      id: "event3",
      title: "Event Photo 3",
      description: "Community gathering celebrating adventure and storytelling"
    }
  ];

  const uspCards = [
    {
      id: 1,
      title: "Card 1",
      description: "Exceptional Quality",
      detail: "Crafted with attention to detail and premium materials"
    },
    {
      id: 2,
      title: "Card 2", 
      description: "Adventure Spirit",
      detail: "Inspired by global exploration and discovery"
    },
    {
      id: 3,
      title: "Card 3",
      description: "Timeless Design", 
      detail: "Classic aesthetics that transcend trends"
    }
  ];

  const redirectLinks = [
    { name: "About", path: "/about", description: "Our Story" },
    { name: "Authors", path: "/authors", description: "Meet the Team" },
    { name: "Shop", path: "/shop", description: "Browse Collection" },
    { name: "Gallery", path: "/gallery", description: "Visual Journey" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-subtle">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 animate-fade-in">
              Embark on Your Adventure
            </h1>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in">
              Welcome to Phileas Fogg's world of exploration, discovery, and timeless elegance
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
              <button 
                onClick={() => navigate("/shop")}
                className="px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg transition-all duration-300 hover:scale-105 shadow-elegant hover:shadow-hover"
              >
                Shop
              </button>
              <button 
                onClick={() => navigate("/about")}
                className="px-8 py-3 border border-border hover:bg-accent rounded-lg transition-all duration-300 hover:scale-105"
              >
                About
              </button>
            </div>
          </div>
        </section>

        {/* First Photo Carousel */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-serif font-semibold text-center mb-12">
              Discover Our World
            </h2>
            <Carousel items={photoCarouselItems} />
          </div>
        </section>

        {/* USP Cards Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-serif font-semibold text-center mb-4">
              Why Choose Phileas Fogg
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Discover what makes our brand exceptional through our core values and commitment to excellence
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {uspCards.map((card, index) => (
                <div
                  key={card.id}
                  className="group bg-card border border-border rounded-lg p-6 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-muted h-32 flex items-center justify-center rounded-lg mb-4 group-hover:bg-accent transition-colors duration-300">
                    <span className="text-muted-foreground font-medium">{card.title}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{card.description}</h3>
                  <p className="text-muted-foreground text-sm">{card.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Page Redirect Links Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-serif font-semibold text-center mb-4">
              Explore More
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Dive deeper into our world through these curated sections
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {redirectLinks.map((link, index) => (
                <button
                  key={link.name}
                  onClick={() => navigate(link.path)}
                  className="group aspect-square bg-card border border-border rounded-lg p-6 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 hover:border-primary/30"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="h-full flex flex-col items-center justify-center text-center">
                    <div className="bg-muted w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <span className="text-xs font-medium">{link.name}</span>
                    </div>
                    <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors duration-300">
                      {link.name}
                    </h3>
                    <p className="text-xs text-muted-foreground">{link.description}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Event/Exhibit Photos Carousel */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-serif font-semibold text-center mb-4">
              Event/Exhibit Photos
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              A glimpse into our latest exhibitions and community events
            </p>
            <Carousel items={eventCarouselItems} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;