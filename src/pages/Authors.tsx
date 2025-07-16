import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Authors = () => {
  const navigate = useNavigate();

  const authors = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: `Author ${i + 1}`
  }));

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
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the talented writers and creators behind our exceptional collection. 
              Each author brings unique perspectives and storytelling mastery to our literary world.
            </p>
          </div>
        </section>

        {/* Authors Grid */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {authors.map((author) => (
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
                  <h3 className="text-xl font-serif font-semibold text-center group-hover:text-accent transition-colors duration-300">
                    {author.name}
                  </h3>
                  
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