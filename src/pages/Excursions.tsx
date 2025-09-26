import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Excursions = () => {
  const navigate = useNavigate();
  
  const featuredExcursion = {
    id: "excursion-featured",
    title: "Grand Expedition: Following Ancient Trade Routes",
    excerpt: "Join us on an epic journey retracing the steps of ancient explorers through diverse landscapes and forgotten civilizations.",
    dates: "September 2024",
    duration: "21 Days"
  };

  const excursions = [
    { 
      id: "excursion-1", 
      title: "Alpine Adventure Trek", 
      excerpt: "Multi-day expedition through pristine mountain wilderness.", 
      dates: "July 2024",
      duration: "14 Days"
    },
    { 
      id: "excursion-2", 
      title: "Maritime Discovery Voyage", 
      excerpt: "Sailing expedition exploring remote islands and hidden coves.", 
      dates: "August 2024",
      duration: "10 Days"
    },
    { 
      id: "excursion-3", 
      title: "Desert Caravan Experience", 
      excerpt: "Traditional desert crossing following ancient nomadic routes.", 
      dates: "October 2024",
      duration: "12 Days"
    },
    { 
      id: "excursion-4", 
      title: "Urban Explorer's Journey", 
      excerpt: "Deep dive into hidden histories of world's most fascinating cities.", 
      dates: "November 2024",
      duration: "8 Days"
    },
    { 
      id: "excursion-5", 
      title: "Wildlife Photography Safari", 
      excerpt: "Immersive experience in pristine natural habitats.", 
      dates: "December 2024",
      duration: "16 Days"
    },
    { 
      id: "excursion-6", 
      title: "Cultural Immersion Quest", 
      excerpt: "Living alongside local communities to understand traditional ways of life.", 
      dates: "January 2025",
      duration: "18 Days"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 pt-20">
        <div className="container mx-auto px-6 py-12">
          {/* Main Heading Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-serif font-bold mb-6 text-foreground">Excursions</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Embark on extraordinary adventures designed for the curious explorer. Our carefully curated excursions 
              offer immersive experiences that combine discovery, learning, and the thrill of exploration.
            </p>
          </div>

          {/* Featured Excursion Section */}
          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl font-serif font-bold text-center mb-8 text-foreground">Featured Excursion</h2>
            <article 
              className="border border-border rounded-lg overflow-hidden shadow-elegant hover:shadow-hover transition-all duration-300 group cursor-pointer bg-card"
              onClick={() => navigate(`/blog/${featuredExcursion.id}`)}
            >
              <div className="bg-muted h-80 flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                <span className="text-muted-foreground text-lg font-medium">Excursion Preview</span>
              </div>
              
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-serif font-bold group-hover:text-primary transition-colors duration-300 text-foreground">
                    {featuredExcursion.title}
                  </h3>
                  <div className="text-right text-sm text-muted-foreground">
                    <div>{featuredExcursion.dates}</div>
                    <div>{featuredExcursion.duration}</div>
                  </div>
                </div>
                <p className="text-muted-foreground text-base mb-6 leading-relaxed">
                  {featuredExcursion.excerpt}
                </p>
                <button 
                  className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors duration-300"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/blog/${featuredExcursion.id}`);
                  }}
                >
                  View Excursion Details
                </button>
              </div>
            </article>
          </div>

          {/* Excursions Grid */}
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-center mb-12 text-foreground">Upcoming & Past Excursions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
              {excursions.map((excursion) => (
                <div 
                  key={excursion.id}
                  className="relative aspect-square overflow-hidden group cursor-pointer"
                  onClick={() => navigate(`/blog/${excursion.id}`)}
                >
                  <div className="absolute inset-0 bg-muted flex items-center justify-center">
                    <span className="text-muted-foreground">Excursion Photo</span>
                  </div>
                  
                  {/* Overlay with text */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-white text-lg font-serif font-semibold mb-2">
                      {excursion.title}
                    </h3>
                    <div className="text-white/80 text-sm mb-2">
                      <div>{excursion.dates}</div>
                      <div>{excursion.duration}</div>
                    </div>
                    <p className="text-white/90 text-sm leading-relaxed">
                      {excursion.excerpt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Excursions;