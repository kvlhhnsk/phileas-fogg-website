import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Carousel from "@/components/Carousel";
import { Button } from "@/components/ui/button";

const AuthorDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);

  const fullText = [
    "This is a comprehensive biography and description of our featured author. Here you would find information about their background, writing style, published works, awards, and what makes their contribution to literature unique. This author has been an integral part of our collection with their distinctive voice and compelling storytelling abilities.",
    "Born into a family of literary enthusiasts, this author discovered their passion for writing at an early age. Their journey through various literary forms and genres has shaped them into the versatile writer they are today. With influences ranging from classical literature to contemporary fiction, their work bridges traditional storytelling with modern narratives.",
    "Throughout their career, they have received numerous accolades and recognition for their contributions to the literary world. Their works have been translated into multiple languages and have touched the hearts of readers across different cultures and backgrounds. The author's commitment to authentic storytelling and character development has earned them a dedicated following.",
    "When not writing, they enjoy traveling to remote locations seeking inspiration for their next literary adventure. Their experiences in different cultures and landscapes often find their way into their narratives, adding depth and authenticity to their characters and settings. They believe that great stories come from genuine human experiences and connections."
  ];

  const visibleText = isExpanded ? fullText : fullText.slice(0, 2);

  const authorPhotos = [
    { id: "1", title: "Photo 1", description: "A beautiful showcase of the author's creative process" },
    { id: "2", title: "Photo 2", description: "Behind the scenes of their latest literary work" }, 
    { id: "3", title: "Photo 3", description: "Author's personal library and workspace" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 text-center border-b border-border">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-8">
              Meet Our Featured Author
            </h1>
            <div className="flex gap-4 justify-center">
              <button 
                onClick={() => navigate("/shop")}
                className="px-8 py-3 bg-foreground text-background hover:bg-foreground/90 transition-colors duration-300 rounded-lg font-medium"
              >
                Shop
              </button>
              <button 
                onClick={() => navigate("/about")}
                className="px-8 py-3 border border-border hover:bg-muted transition-colors duration-300 rounded-lg font-medium"
              >
                About
              </button>
            </div>
          </div>
        </section>

        {/* Author Information Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Author Photo */}
              <div className="order-2 lg:order-1">
                <div className="aspect-[4/5] bg-muted rounded-lg flex items-center justify-center text-muted-foreground border border-border">
                  <span className="text-lg font-medium">Photo of Author</span>
                </div>
              </div>
              
              {/* Author Details */}
              <div className="order-1 lg:order-2 text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                  Author Name {id}
                </h2>
                <div className="mb-8">
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-none' : 'max-h-48'}`}>
                    {visibleText.map((paragraph, index) => (
                      <p key={index} className="text-lg text-muted-foreground mb-4 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  {!isExpanded && fullText.length > 2 && (
                    <div className="bg-gradient-to-t from-background to-transparent h-6 -mt-6 relative z-10"></div>
                  )}
                  <Button
                    variant="ghost"
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="mt-4 text-accent hover:text-accent/80 p-0 h-auto font-medium"
                  >
                    {isExpanded ? 'Read Less' : 'Read More'}
                  </Button>
                </div>
                <Button className="px-8 py-3 bg-accent text-accent-foreground hover:bg-accent/90 transition-colors duration-300 rounded-lg font-medium">
                  Contact Author
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Photo Carousel Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-center mb-12">
              Author's Work Gallery
            </h3>
            <div className="max-w-4xl mx-auto">
              <Carousel items={authorPhotos} />
            </div>
          </div>
        </section>

        {/* Back Navigation */}
        <section className="py-8 border-t border-border">
          <div className="container mx-auto px-6 text-center">
            <button 
              onClick={() => navigate("/authors")}
              className="px-6 py-2 text-accent hover:text-accent/80 transition-colors duration-300 font-medium"
            >
              ← Back to Authors
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AuthorDetail;