import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SplashPage = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background flex flex-col items-center justify-center pt-16">
        {/* Photo Placeholder */}
        <div className="w-64 h-40 bg-muted border-2 border-border flex items-center justify-center mb-8 animate-scale-in">
          <span className="text-muted-foreground font-medium">PHOTO</span>
        </div>

        {/* Text Content */}
        <div className="text-center space-y-4 animate-fade-in">
          <h1 className="text-4xl font-serif font-bold tracking-wide">
            Phileas Fogg
          </h1>
          <p className="text-xl text-muted-foreground">Welcome to Our Gallery</p>
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            Discover extraordinary art exhibitions, explore curated collections, and embark on artistic journeys that inspire and transform.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SplashPage;