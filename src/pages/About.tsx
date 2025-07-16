import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-20">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-4xl font-serif font-bold text-center mb-8">About Phileas Fogg</h1>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="bg-muted h-64 flex items-center justify-center rounded-lg">
                <span className="text-muted-foreground">About Photo</span>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Our Story</h2>
                <p className="text-muted-foreground">
                  Placeholder text about Phileas Fogg's journey and adventures. 
                  This section will contain compelling narrative about the brand's 
                  inspiration and mission.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="text-center p-6 border border-border rounded-lg">
                  <div className="bg-muted h-32 flex items-center justify-center rounded-lg mb-4">
                    <span className="text-muted-foreground">Value {i}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Core Value {i}</h3>
                  <p className="text-muted-foreground text-sm">
                    Placeholder description for core value {i}
                  </p>
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

export default About;