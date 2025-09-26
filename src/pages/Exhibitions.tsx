import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Exhibitions = () => {
  const navigate = useNavigate();
  
  const featuredExhibition = {
    id: "exhibition-featured",
    title: "Artifacts of Wonder: A Journey Through Time",
    excerpt: "Experience our most captivating collection featuring rare artifacts and discoveries from expeditions around the world.",
    dates: "March 2024 - June 2024",
    venue: "Main Gallery"
  };

  const exhibitions = [
    { 
      id: "exhibition-1", 
      title: "Mountain Peaks Collection", 
      excerpt: "Stunning photography and artifacts from high-altitude expeditions.", 
      dates: "January 2024",
      venue: "North Wing"
    },
    { 
      id: "exhibition-2", 
      title: "Ocean Depths Revealed", 
      excerpt: "Underwater discoveries and maritime exploration treasures.", 
      dates: "February 2024",
      venue: "Aquatic Hall"
    },
    { 
      id: "exhibition-3", 
      title: "Desert Mysteries", 
      excerpt: "Ancient findings from the world's most remote desert expeditions.", 
      dates: "March 2024",
      venue: "Archaeological Wing"
    },
    { 
      id: "exhibition-4", 
      title: "Urban Chronicles", 
      excerpt: "Hidden stories and forgotten places from global cities.", 
      dates: "April 2024",
      venue: "Contemporary Space"
    },
    { 
      id: "exhibition-5", 
      title: "Wildlife Encounters", 
      excerpt: "Intimate portraits and stories from nature's wildest places.", 
      dates: "May 2024",
      venue: "Natural History Hall"
    },
    { 
      id: "exhibition-6", 
      title: "Cultural Tapestries", 
      excerpt: "Traditional crafts and stories from diverse global communities.", 
      dates: "June 2024",
      venue: "Cultural Center"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 pt-20">
        <div className="container mx-auto px-6 py-12">
          {/* Main Heading Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-serif font-bold mb-6 text-foreground">Exhibitions</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Discover extraordinary collections showcasing artifacts, photography, and stories from expeditions around the world. 
              Each exhibition offers an immersive journey through different cultures, landscapes, and adventures.
            </p>
          </div>

          {/* Featured Exhibition Section */}
          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl font-serif font-bold text-center mb-8 text-foreground">Featured Exhibition</h2>
            <article 
              className="border border-border rounded-lg overflow-hidden shadow-elegant hover:shadow-hover transition-all duration-300 group cursor-pointer bg-card"
              onClick={() => navigate(`/blog/${featuredExhibition.id}`)}
            >
              <div className="bg-muted h-80 flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                <span className="text-muted-foreground text-lg font-medium">Exhibition Preview</span>
              </div>
              
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-serif font-bold group-hover:text-primary transition-colors duration-300 text-foreground">
                    {featuredExhibition.title}
                  </h3>
                  <div className="text-right text-sm text-muted-foreground">
                    <div>{featuredExhibition.dates}</div>
                    <div>{featuredExhibition.venue}</div>
                  </div>
                </div>
                <p className="text-muted-foreground text-base mb-6 leading-relaxed">
                  {featuredExhibition.excerpt}
                </p>
                <button 
                  className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors duration-300"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/blog/${featuredExhibition.id}`);
                  }}
                >
                  View Exhibition Details
                </button>
              </div>
            </article>
          </div>

          {/* Exhibitions Grid */}
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-center mb-12 text-foreground">Current & Past Exhibitions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
              {exhibitions.map((exhibition) => (
                <div 
                  key={exhibition.id}
                  className="relative aspect-square overflow-hidden group cursor-pointer"
                  onClick={() => navigate(`/blog/${exhibition.id}`)}
                >
                  <div className="absolute inset-0 bg-muted flex items-center justify-center">
                    <span className="text-muted-foreground">Exhibition Photo</span>
                  </div>
                  
                  {/* Overlay with text */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-white text-lg font-serif font-semibold mb-2">
                      {exhibition.title}
                    </h3>
                    <div className="text-white/80 text-sm mb-2">
                      <div>{exhibition.dates}</div>
                      <div>{exhibition.venue}</div>
                    </div>
                    <p className="text-white/90 text-sm leading-relaxed">
                      {exhibition.excerpt}
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

export default Exhibitions;