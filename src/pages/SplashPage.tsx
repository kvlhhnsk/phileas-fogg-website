import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SplashPage = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background flex flex-col items-center pt-24 pb-16">
        {/* Text Content at Top */}
        <div className="text-center space-y-4 animate-fade-in mb-16">
          <h1 className="text-6xl md:text-7xl font-serif font-bold tracking-wide">
            Phileas Fogg
          </h1>
          <p className="text-3xl md:text-4xl text-muted-foreground">Welcome</p>
        </div>

        {/* Large Photo Placeholder - Centered */}
        <div className="flex-1 flex items-center justify-center w-full px-8">
          <div className="w-96 h-64 md:w-[32rem] md:h-80 lg:w-[40rem] lg:h-96 bg-muted border-2 border-border flex items-center justify-center animate-scale-in">
            <span className="text-muted-foreground font-medium text-lg">PHOTO</span>
          </div>
        </div>

        {/* Loading indicator at bottom */}
        <div className="mt-16">
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