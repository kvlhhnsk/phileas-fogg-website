import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Blog = () => {
  const navigate = useNavigate();
  const featuredPost = {
    id: "featured",
    title: "Featured Adventure: Journey Through the Unknown",
    excerpt: "Discover the most thrilling expedition stories and travel insights from our featured adventurer. This comprehensive guide will take you through breathtaking landscapes and unforgettable experiences."
  };

  const blogPosts = [
    { id: 1, title: "Mountain Expedition Chronicles", excerpt: "An epic journey through the highest peaks and most challenging terrains of the world." },
    { id: 2, title: "Ocean Adventures Unveiled", excerpt: "Dive into the depths of maritime exploration and discover hidden treasures beneath the waves." },
    { id: 3, title: "Desert Wanderings", excerpt: "Navigate through endless dunes and discover the secrets hidden in the world's most remote deserts." },
    { id: 4, title: "Urban Exploration Guide", excerpt: "Uncover the hidden gems and secret spots in the world's most fascinating cities." },
    { id: 5, title: "Wildlife Encounters", excerpt: "Close encounters with nature's most magnificent creatures in their natural habitats." },
    { id: 6, title: "Cultural Immersion Stories", excerpt: "Deep dives into local traditions and customs from around the globe." },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 pt-20">
        <div className="container mx-auto px-6 py-12">
          {/* Main Heading Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-serif font-bold mb-6 text-foreground">Our Blog</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Explore captivating stories, expert insights, and inspiring adventures from around the world. 
              Join us on a journey of discovery through our carefully curated collection of travel experiences and cultural explorations.
            </p>
          </div>

          {/* Featured Blog Post Section */}
          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl font-serif font-bold text-center mb-8 text-foreground">Featured Story</h2>
            <article 
              className="border border-border rounded-lg overflow-hidden shadow-lg hover:shadow-elegant transition-all duration-300 group cursor-pointer bg-card"
              onClick={() => navigate('/blog/featured')}
            >
              <div className="bg-muted h-80 flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                <span className="text-muted-foreground text-lg font-medium">Featured Blog Photo</span>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-serif font-bold mb-4 group-hover:text-primary transition-colors duration-300 text-foreground">
                  {featuredPost.title}
                </h3>
                <p className="text-muted-foreground text-base mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <button 
                  className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors duration-300"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate('/blog/featured');
                  }}
                >
                  Read More
                </button>
              </div>
            </article>
          </div>

          {/* Blog Post Grid */}
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-center mb-12 text-foreground">Recent Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
              {blogPosts.map((post) => (
                <div 
                  key={post.id}
                  className="relative aspect-square overflow-hidden group cursor-pointer"
                  onClick={() => navigate(`/blog/${post.id}`)}
                >
                  <div className="absolute inset-0 bg-muted flex items-center justify-center">
                    <span className="text-muted-foreground">Story Photo</span>
                  </div>
                  
                  {/* Overlay with text */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-white text-lg font-serif font-semibold mb-2">
                      {post.title}
                    </h3>
                    <div className="text-white/80 text-sm mb-2">
                      January {post.id}, 2024
                    </div>
                    <p className="text-white/90 text-sm leading-relaxed">
                      {post.excerpt}
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

export default Blog;