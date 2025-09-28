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
          <p className="text-xl text-muted-foreground">Welcome</p>
        </div>

        {/* Loading indicator */}
        <div className="mt-12">
          <div className="w-32 h-1 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-primary rounded-full animate-slide-in-right"></div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SplashPage;