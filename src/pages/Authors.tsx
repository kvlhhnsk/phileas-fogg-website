import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Authors = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const authors = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: `Author ${i + 1}`,
    specialty: i % 4 === 0 ? "Adventure Fiction" : i % 4 === 1 ? "Travel Writing" : i % 4 === 2 ? "Cultural Studies" : "Historical Fiction"
  }));

  const filteredAuthors = useMemo(() => {
    if (!searchQuery.trim()) return authors;
    
    const query = searchQuery.toLowerCase().trim();
    return authors.filter(author => 
      author.name.toLowerCase().includes(query) ||
      author.specialty.toLowerCase().includes(query)
    );
  }, [authors, searchQuery]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 text-center">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Our Authors
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Discover the talented writers and creators behind our exceptional collection. 
              Each author brings unique perspectives and storytelling mastery to our literary world.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search authors or specialties..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  maxLength={100}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Authors Grid */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            {searchQuery && (
              <div className="text-center mb-8">
                <p className="text-muted-foreground">
                  {filteredAuthors.length === 0 
                    ? `No authors found for "${searchQuery}"`
                    : `${filteredAuthors.length} author${filteredAuthors.length === 1 ? '' : 's'} found for "${searchQuery}"`
                  }
                </p>
              </div>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {filteredAuthors.map((author) => (
                <button
                  key={author.id}
                  onClick={() => navigate(`/authors/${author.id}`)}
                  className="group relative bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  {/* Author Image Placeholder */}
                  <div className="aspect-[4/5] bg-muted rounded-lg mb-4 flex items-center justify-center text-muted-foreground border border-border">
                    <span className="text-sm font-medium">Author Photo</span>
                  </div>
                  
                  {/* Author Name */}
                  <h3 className="text-xl font-serif font-semibold text-center group-hover:text-accent transition-colors duration-300 mb-2">
                    {author.name}
                  </h3>
                  
                  {/* Author Specialty */}
                  <p className="text-sm text-muted-foreground text-center mb-4">
                    {author.specialty}
                  </p>
                  
                  {/* Shop Works Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/shop/author/${author.id}`);
                    }}
                    className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors duration-300"
                  >
                    Shop Works
                  </button>
                  
                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-accent/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Authors;