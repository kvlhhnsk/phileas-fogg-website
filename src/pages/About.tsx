import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Carousel from "@/components/Carousel";
import { Button } from "@/components/ui/button";

const About = () => {
  const navigate = useNavigate();

  const carouselItems = [
    { 
      id: "1", 
      title: "Photo 1",
      description: "Beautiful landscape from our first expedition showcasing the natural beauty we encountered."
    },
    { 
      id: "2", 
      title: "Photo 2",
      description: "Urban exploration capturing the essence of modern adventure in bustling city environments."
    },
    { 
      id: "3", 
      title: "Photo 3",
      description: "Cultural immersion documenting the rich traditions and people met along our journey."
    }
  ];

  const whoWeAreCards = [
    {
      id: 1,
      title: "Who We Are Card 1",
      description: "Placeholder text describing the first aspect of who we are and what makes us unique in our approach."
    },
    {
      id: 2,
      title: "Who We Are Card 2", 
      description: "Placeholder text describing the second aspect of our identity and mission in the marketplace."
    },
    {
      id: 3,
      title: "Who We Are Card 3",
      description: "Placeholder text describing the third pillar of our brand philosophy and core values."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-16 text-center">
          <h1 className="text-5xl font-serif font-bold mb-8 animate-fade-in">
            About Phileas Fogg
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Discover the story behind our extraordinary journey around the world of adventure and exploration.
          </p>
          <div className="flex gap-6 justify-center">
            <Button 
              onClick={() => navigate("/shop")}
              className="bg-yellow text-yellow-foreground hover:bg-yellow/90 px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Shop
            </Button>
            <Button 
              variant="outline"
              onClick={() => navigate("/about")}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg font-semibold transition-all duration-300"
            >
              About
            </Button>
          </div>
        </section>

        {/* Description + Who We Are Cards Section */}
        <section className="container mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold mb-6">Who We Are</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Placeholder text introducing our team and philosophy. This section provides context for the cards below 
              and sets the tone for understanding our brand identity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {whoWeAreCards.map((card) => (
              <div 
                key={card.id} 
                className="bg-card border border-border rounded-lg p-6 shadow-elegant hover:shadow-hover transition-all duration-300 hover:scale-105 group"
              >
                <div className="bg-muted h-48 flex items-center justify-center rounded-lg mb-6 group-hover:bg-accent transition-colors duration-300">
                  <span className="text-muted-foreground font-medium">Card {card.id}</span>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">{card.title}</h3>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-secondary py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-serif font-bold mb-8">Explore More</h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              Dive deeper into our world of adventure and discovery. Explore our gallery of expeditions 
              or meet the authors behind our incredible stories.
            </p>
            <div className="flex gap-6 justify-center">
              <Button 
                onClick={() => navigate("/gallery")}
                className="bg-yellow text-yellow-foreground hover:bg-yellow/90 px-10 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Gallery
              </Button>
              <Button 
                onClick={() => navigate("/authors")}
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-10 py-4 text-lg font-semibold transition-all duration-300"
              >
                Authors
              </Button>
            </div>
          </div>
        </section>

        {/* Additional Content Section */}
        <section className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-serif font-bold mb-8">Our Journey Continues</h2>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="mb-6">
                Placeholder text describing our ongoing mission and vision. This section provides additional 
                context about our brand story and what drives us forward in our quest for adventure and discovery.
              </p>
              <p className="mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                mollit anim id est laborum.
              </p>
            </div>
          </div>
        </section>

        {/* Photo Carousel Section */}
        <section className="container mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold mb-6">Our Adventures</h2>
            <p className="text-lg text-muted-foreground">
              A glimpse into our world of exploration and discovery
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Carousel items={carouselItems} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;