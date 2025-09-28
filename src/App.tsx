import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { FloatingShopButton } from "./components/FloatingShopButton";
import Index from "./pages/Index";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Authors from "./pages/Authors";
import AuthorDetail from "./pages/AuthorDetail";
import Checkout from "./pages/Checkout";
import Exhibitions from "./pages/Exhibitions";
import Excursions from "./pages/Excursions";
import SplashPage from "./pages/SplashPage";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";

const queryClient = new QueryClient();

// Component to handle GitHub Pages redirect
const GitHubPagesRedirect = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Check if we have a redirect URL from the 404 page
    const redirect = sessionStorage.redirect;
    if (redirect) {
      sessionStorage.removeItem('redirect');
      // Extract the path from the full URL
      const url = new URL(redirect);
      const path = url.pathname.replace('/phileas-fogg-website', '');
      navigate(path || '/');
    }
  }, [navigate]);
  
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CartProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename="/phileas-fogg-website">
          <GitHubPagesRedirect />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/splash" element={<SplashPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/exhibitions" element={<Exhibitions />} />
            <Route path="/excursions" element={<Excursions />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/author/:authorId" element={<Shop />} />
            <Route path="/shop/category/:categoryId" element={<Shop />} />
            <Route path="/shop/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/authors" element={<Authors />} />
            <Route path="/authors/:id" element={<AuthorDetail />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <FloatingShopButton />
        </BrowserRouter>
      </TooltipProvider>
    </CartProvider>
  </QueryClientProvider>
);

export default App;
