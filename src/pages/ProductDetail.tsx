import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronLeft, ChevronRight, Minus, Plus } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CategoriesHeader from "@/components/CategoriesHeader";

import { useCart } from "@/context/CartContext";
import { useToast } from "@/hooks/use-toast";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);
  const [currentRelatedPage, setCurrentRelatedPage] = useState(0);
  const [currentUsersViewedPage, setCurrentUsersViewedPage] = useState(0);

  // Sample product data - would typically come from API or state management
  const product = {
    id: id,
    name: "Adventure Journal",
    price: "$24.99",
    description: "A beautifully crafted leather-bound journal perfect for documenting your adventures and travels. Features high-quality paper and a durable binding that will last through countless journeys.",
    fullDescription: "This premium adventure journal combines functionality with timeless design. Crafted from genuine leather with hand-stitched binding, it features 200 pages of acid-free paper perfect for writing, sketching, or planning your next expedition. The compact size makes it ideal for travel, while the robust construction ensures it can withstand the rigors of any adventure.",
    shipping: "Free shipping on orders over $50. Standard delivery takes 3-5 business days. Express shipping available for $9.99.",
    returns: "30-day return policy. Items must be in original condition. Return shipping costs are covered for defective items."
  };

  const relatedItems = [
    { id: 2, name: "Vintage Compass", price: "$89.99" },
    { id: 3, name: "Explorer's Map Set", price: "$34.99" },
    { id: 4, name: "Travel Photography Book", price: "$45.99" },
    { id: 5, name: "Leather Travel Bag", price: "$129.99" },
    { id: 6, name: "Expedition Notebook", price: "$19.99" },
    { id: 7, name: "World Atlas Collection", price: "$67.99" },
  ];

  const usersAlsoViewedItems = [
    { id: 8, name: "Mountain Hiking Guide", price: "$32.99" },
    { id: 9, name: "Camping Essentials Kit", price: "$156.99" },
    { id: 10, name: "Wildlife Field Notes", price: "$28.99" },
    { id: 11, name: "Outdoor Photography Tips", price: "$39.99" },
    { id: 12, name: "Navigation Tools Set", price: "$78.99" },
    { id: 13, name: "Adventure Planning Journal", price: "$21.99" },
  ];

  const itemsPerPage = 3;
  const totalPages = Math.ceil(relatedItems.length / itemsPerPage);
  const totalUsersViewedPages = Math.ceil(usersAlsoViewedItems.length / itemsPerPage);

  const getCurrentRelatedItems = () => {
    const start = currentRelatedPage * itemsPerPage;
    return relatedItems.slice(start, start + itemsPerPage);
  };

  const getCurrentUsersViewedItems = () => {
    const start = currentUsersViewedPage * itemsPerPage;
    return usersAlsoViewedItems.slice(start, start + itemsPerPage);
  };

  const handleNextRelated = () => {
    if (currentRelatedPage < totalPages - 1) {
      setCurrentRelatedPage(prev => prev + 1);
    }
  };

  const handlePrevRelated = () => {
    if (currentRelatedPage > 0) {
      setCurrentRelatedPage(prev => prev - 1);
    }
  };

  const handleNextUsersViewed = () => {
    if (currentUsersViewedPage < totalUsersViewedPages - 1) {
      setCurrentUsersViewedPage(prev => prev + 1);
    }
  };

  const handlePrevUsersViewed = () => {
    if (currentUsersViewedPage > 0) {
      setCurrentUsersViewedPage(prev => prev - 1);
    }
  };

  const handleQuantityChange = (change: number) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id as string,
        name: product.name,
        price: product.price
      });
    }
    toast({
      title: "Added to cart",
      description: `${quantity} ${product.name}(s) added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <CategoriesHeader />
      
      <main className="flex-1 pt-8">
        <div className="container mx-auto px-6 py-12">
          {/* Back Navigation */}
          <button
            onClick={() => navigate("/shop")}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 mb-8"
          >
            <ArrowLeft size={20} />
            Back to Shop
          </button>

          {/* Product Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Product Image */}
            <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
              <span className="text-2xl text-muted-foreground font-medium">Item Photo</span>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-serif font-bold mb-4 text-foreground">{product.name}</h1>
                <p className="text-3xl font-bold text-primary mb-6">{product.price}</p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Quantity Selector */}
              <div className="space-y-4">
                <label className="text-sm font-medium text-foreground">Quantity</label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    disabled={quantity <= 1}
                    className="p-2 border border-border rounded-md hover:bg-muted transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-12 text-center font-medium text-foreground">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    disabled={quantity >= 10}
                    className="p-2 border border-border rounded-md hover:bg-muted transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button 
                onClick={handleAddToCart}
                className="w-full bg-primary text-primary-foreground px-8 py-4 rounded-md font-medium text-lg hover:bg-primary/90 transition-colors duration-300"
              >
                Add to Cart
              </button>

              {/* Shipping Information */}
              <div className="pt-6 border-t border-border">
                <h3 className="font-semibold mb-2 text-foreground">Shipping Information</h3>
                <p className="text-sm text-muted-foreground">
                  {product.shipping}
                </p>
              </div>
            </div>
          </div>

          {/* Product Information Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-2xl font-serif font-bold mb-6 text-foreground">Item Description</h2>
              <p className="text-muted-foreground leading-relaxed">
                {product.fullDescription}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold mb-6 text-foreground">Shipping & Returns</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2 text-foreground">Shipping Policy</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {product.shipping}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-foreground">Returns Policy</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {product.returns}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Related Items Section */}
          <div className="mb-20">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-serif font-bold text-foreground">From Same Author</h2>
              <div className="flex gap-2">
                <button
                  onClick={handlePrevRelated}
                  disabled={currentRelatedPage === 0}
                  className="p-2 rounded-md border border-border hover:bg-muted transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={handleNextRelated}
                  disabled={currentRelatedPage >= totalPages - 1}
                  className="p-2 rounded-md border border-border hover:bg-muted transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {getCurrentRelatedItems().map((item) => (
                <div
                  key={item.id}
                  className="border border-border rounded-lg overflow-hidden hover:shadow-elegant transition-all duration-300 group cursor-pointer bg-card"
                  onClick={() => navigate(`/shop/product/${item.id}`)}
                >
                  <div className="bg-muted h-48 flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                    <span className="text-muted-foreground">Item Photo</span>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300 text-foreground">
                      {item.name}
                    </h3>
                    <p className="text-xl font-bold text-primary mb-3">
                      {item.price}
                    </p>
                    <button 
                      className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-md font-medium hover:bg-primary/90 transition-colors duration-300"
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart({
                          id: item.id.toString(),
                          name: item.name,
                          price: item.price
                        });
                        toast({
                          title: "Added to cart",
                          description: `${item.name} added to your cart.`,
                        });
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Users Also Viewed Section */}
          <div className="mb-20">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-serif font-bold text-foreground">Similar Items</h2>
              <div className="flex gap-2">
                <button
                  onClick={handlePrevUsersViewed}
                  disabled={currentUsersViewedPage === 0}
                  className="p-2 rounded-md border border-border hover:bg-muted transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={handleNextUsersViewed}
                  disabled={currentUsersViewedPage >= totalUsersViewedPages - 1}
                  className="p-2 rounded-md border border-border hover:bg-muted transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {getCurrentUsersViewedItems().map((item) => (
                <div
                  key={item.id}
                  className="border border-border rounded-lg overflow-hidden hover:shadow-elegant transition-all duration-300 group cursor-pointer bg-card"
                  onClick={() => navigate(`/shop/product/${item.id}`)}
                >
                  <div className="bg-muted h-48 flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                    <span className="text-muted-foreground">Item Photo</span>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300 text-foreground">
                      {item.name}
                    </h3>
                    <p className="text-xl font-bold text-primary mb-3">
                      {item.price}
                    </p>
                    <button 
                      className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-md font-medium hover:bg-primary/90 transition-colors duration-300"
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart({
                          id: item.id.toString(),
                          name: item.name,
                          price: item.price
                        });
                        toast({
                          title: "Added to cart",
                          description: `${item.name} added to your cart.`,
                        });
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
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

export default ProductDetail;