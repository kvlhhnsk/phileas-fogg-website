import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SplashPage = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 flex flex-col items-center pt-24 pb-16 overflow-hidden">
        {/* Text Content at Top */}
        <div className="text-center space-y-6 animate-fade-in mb-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent blur-3xl"></div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold tracking-wide bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent leading-tight">
            Phileas Fogg
          </h1>
          <div className="relative">
            <p className="text-3xl md:text-4xl lg:text-5xl text-muted-foreground font-light tracking-wider">Welcome</p>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          </div>
        </div>

        {/* Large Photo Placeholder - Centered */}
        <div className="flex-1 flex items-center justify-center w-full px-8 relative">
          <div className="relative group">
            {/* Backdrop glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 blur-2xl scale-110 opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
            
            {/* Main photo container */}
            <div className="relative w-96 h-64 md:w-[36rem] md:h-80 lg:w-[44rem] lg:h-96 bg-gradient-to-br from-muted via-background to-muted border border-border/50 rounded-lg shadow-2xl flex items-center justify-center animate-scale-in hover:scale-105 transition-all duration-500 backdrop-blur-sm">
              {/* Inner border effect */}
              <div className="absolute inset-2 border border-primary/20 rounded-md"></div>
              
              {/* Photo text */}
              <span className="text-muted-foreground/80 font-medium text-xl tracking-widest z-10 relative">
                GALLERY
              </span>
              
              {/* Corner decorations */}
              <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-primary/30"></div>
              <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-primary/30"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-primary/30"></div>
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-primary/30"></div>
            </div>
          </div>
        </div>

        {/* Enhanced loading indicator */}
        <div className="mt-20 relative">
          <div className="w-40 h-1 bg-muted/50 rounded-full overflow-hidden shadow-inner">
            <div className="h-full bg-gradient-to-r from-primary via-primary-glow to-primary rounded-full animate-slide-in-right shadow-lg"></div>
          </div>
          <div className="absolute inset-0 bg-primary/20 blur-sm rounded-full animate-pulse"></div>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-1/4 left-10 w-2 h-2 bg-primary/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-16 w-1 h-1 bg-primary/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-20 w-1.5 h-1.5 bg-primary/25 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </main>
      <Footer />
    </>
  );
};

export default SplashPage;