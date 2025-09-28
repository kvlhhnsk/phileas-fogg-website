import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SplashPage = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background flex flex-col items-center justify-center pt-16">
        {/* Photo Placeholder */}
        <div className="w-96 h-64 md:w-[32rem] md:h-80 bg-muted border-2 border-border flex items-center justify-center mb-12 animate-scale-in">
          <span className="text-muted-foreground font-medium text-2xl">PHOTO</span>
        </div>

        {/* Text Content */}
        <div className="text-center space-y-6 animate-fade-in">
          <h1 className="text-6xl md:text-7xl font-serif font-bold tracking-wide">
            Phileas Fogg
          </h1>
          <p className="text-3xl md:text-4xl text-muted-foreground">Welcome</p>
        </div>

        {/* Loading indicator */}
        <div className="mt-16">
          <div className="w-48 h-2 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-primary rounded-full animate-slide-in-right"></div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SplashPage;