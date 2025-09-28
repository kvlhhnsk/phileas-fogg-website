import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ChevronLeft, ChevronRight, Filter } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CategoriesHeader from "@/components/CategoriesHeader";


const Shop = () => {
  const navigate = useNavigate();
  const { authorId, categoryId } = useParams();
  const [currentProductPage, setCurrentProductPage] = useState(0);
  const [currentMoreItemsPage, setCurrentMoreItemsPage] = useState(0);
  const [currentAuthorPage, setCurrentAuthorPage] = useState(0);

  // Authors data to match with Authors.tsx
  const authors = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: `Author ${i + 1}`
  }));

  const allProducts = [
    { id: 1, name: "Adventure Journal", price: "$24.99", authorId: 1 },
    { id: 2, name: "Vintage Compass", price: "$89.99", authorId: 2 },
    { id: 3, name: "Explorer's Map Set", price: "$34.99", authorId: 1 },
    { id: 4, name: "Travel Photography Book", price: "$45.99", authorId: 3 },
    { id: 5, name: "Leather Travel Bag", price: "$129.99", authorId: 4 },
    { id: 6, name: "Expedition Notebook", price: "$19.99", authorId: 2 },
    { id: 7, name: "World Atlas Collection", price: "$67.99", authorId: 5 },
    { id: 8, name: "Adventure Stories Bundle", price: "$39.99", authorId: 3 },
  ];

  const allMoreItems = [
    { id: 9, name: "Vintage Postcards", price: "$14.99", authorId: 6 },
    { id: 10, name: "Explorer's Kit", price: "$99.99", authorId: 1 },
    { id: 11, name: "Adventure Calendar", price: "$22.99", authorId: 7 },
    { id: 12, name: "Travel Journal Set", price: "$29.99", authorId: 8 },
  ];

  // Filter products based on author or category
  const products = authorId 
    ? allProducts.filter(product => product.authorId === parseInt(authorId))
    : allProducts;
  
  const moreItems = authorId 
    ? allMoreItems.filter(item => item.authorId === parseInt(authorId))
    : allMoreItems;

  const categories = [
    { id: 1, name: "Living Room", description: "Cozy and stylish pieces for your main living space" },
    { id: 2, name: "Office", description: "Productive and inspiring items for your workspace" },
    { id: 3, name: "Bedroom", description: "Comfortable and relaxing essentials for rest" },
  ];


  const productsPerPage = 4;
  const moreItemsPerPage = 4;
  const authorsPerPage = 6;

  const getCurrentProducts = () => {
    const start = currentProductPage * productsPerPage;
    return products.slice(start, start + productsPerPage);
  };

  const getCurrentMoreItems = () => {
    const start = currentMoreItemsPage * moreItemsPerPage;
    return moreItems.slice(start, start + moreItemsPerPage);
  };

  const getCurrentAuthors = () => {
    const start = currentAuthorPage * authorsPerPage;
    return authors.slice(start, start + authorsPerPage);
  };

  const totalProductPages = Math.ceil(products.length / productsPerPage);
  const totalMoreItemsPages = Math.ceil(moreItems.length / moreItemsPerPage);
  const totalAuthorPages = Math.ceil(authors.length / authorsPerPage);

  const handleNextProducts = () => {
    if (currentProductPage < totalProductPages - 1) {
      setCurrentProductPage(prev => prev + 1);
    }
  };

  const handlePrevProducts = () => {
    if (currentProductPage > 0) {
      setCurrentProductPage(prev => prev - 1);
    }
  };

  const handleNextMoreItems = () => {
    if (currentMoreItemsPage < totalMoreItemsPages - 1) {
      setCurrentMoreItemsPage(prev => prev + 1);
    }
  };

  const handlePrevMoreItems = () => {
    if (currentMoreItemsPage > 0) {
      setCurrentMoreItemsPage(prev => prev - 1);
    }
  };

  const handleNextAuthors = () => {
    if (currentAuthorPage < totalAuthorPages - 1) {
      setCurrentAuthorPage(prev => prev + 1);
    }
  };

  const handlePrevAuthors = () => {
    if (currentAuthorPage > 0) {
      setCurrentAuthorPage(prev => prev - 1);
    }
  };

  // Reset pagination when filter changes
  useEffect(() => {
    setCurrentProductPage(0);
    setCurrentMoreItemsPage(0);
    setCurrentAuthorPage(0);
  }, [authorId, categoryId]);

  // Get current author name for display
  const currentAuthor = authorId ? authors.find(author => author.id === parseInt(authorId)) : null;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <CategoriesHeader />
      
      <main className="flex-1 pt-32">
        <div className="container mx-auto px-6 py-12">
          {/* Main Heading Section */}
          <div className="text-center mb-12">
            {currentAuthor ? (
              <>
                <div className="mb-4">
                  <button 
                    onClick={() => navigate("/shop")}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    ← Back to All Products
                  </button>
                </div>
                <h1 className="text-5xl font-serif font-bold mb-6 text-foreground">
                  {currentAuthor.name}'s Works
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
                  Explore the complete collection of works by {currentAuthor.name}. 
                  From adventure tales to travel guides, discover their unique perspective on exploration.
                </p>
              </>
            ) : (
              <>
                <h1 className="text-5xl font-serif font-bold mb-6 text-foreground">Our Shop</h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
                  Discover carefully curated items that embody the spirit of adventure and exploration. 
                  From travel essentials to inspirational books, find everything you need for your next journey.
                </p>
              </>
            )}
            <button className="flex items-center gap-2 bg-muted text-foreground px-6 py-3 rounded-md font-medium hover:bg-accent transition-colors duration-300 mx-auto">
              <Filter size={20} />
              Filter Products
            </button>
          </div>

          {/* Product Grid Section */}
          <div className="mb-20">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-serif font-bold text-foreground">Featured Products</h2>
              <div className="flex gap-2">
                <button
                  onClick={handlePrevProducts}
                  disabled={currentProductPage === 0}
                  className="p-2 rounded-md border border-border hover:bg-muted transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={handleNextProducts}
                  disabled={currentProductPage >= totalProductPages - 1}
                  className="p-2 rounded-md border border-border hover:bg-muted transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {getCurrentProducts().map((product) => (
                <div
                  key={product.id}
                  className="border border-border rounded-lg overflow-hidden hover:shadow-elegant transition-all duration-300 group cursor-pointer bg-card"
                  onClick={() => navigate(`/shop/product/${product.id}`)}
                >
                  <div className="bg-muted h-48 flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                    <span className="text-muted-foreground">Item Photo</span>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300 text-foreground">
                      {product.name}
                    </h3>
                    <p className="text-xl font-bold text-primary mb-3">
                      {product.price}
                    </p>
                    <button 
                      className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-md font-medium hover:bg-primary/90 transition-colors duration-300"
                      onClick={(e) => {
                        e.stopPropagation();
                        // Add to cart logic here
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Shop by Author Section - Only show when not filtering by author */}
          {!authorId && (
            <div className="mb-20">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-serif font-bold text-foreground">Shop by Author</h2>
                <div className="flex gap-2">
                  <button
                    onClick={handlePrevAuthors}
                    disabled={currentAuthorPage === 0}
                    className="p-2 rounded-md border border-border hover:bg-muted transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={handleNextAuthors}
                    disabled={currentAuthorPage >= totalAuthorPages - 1}
                    className="p-2 rounded-md border border-border hover:bg-muted transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mb-8">
                {getCurrentAuthors().map((author) => (
                  <div
                    key={author.id}
                    className="border border-border rounded-lg overflow-hidden hover:shadow-elegant transition-all duration-300 group cursor-pointer bg-card"
                    onClick={() => navigate(`/shop/author/${author.id}`)}
                  >
                    <div className="bg-muted h-32 flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                      <span className="text-muted-foreground text-sm font-medium">Author Photo</span>
                    </div>
                    
                    <div className="p-4 text-center">
                      <h3 className="text-lg font-serif font-semibold group-hover:text-primary transition-colors duration-300 text-foreground">
                        {author.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        View Works
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <button
                  onClick={() => navigate('/authors')}
                  className="bg-secondary text-secondary-foreground px-6 py-3 rounded-md font-medium hover:bg-secondary/80 transition-colors duration-300"
                >
                  View All Authors ({authors.length})
                </button>
              </div>
            </div>
          )}

          {/* Shop by Room Section */}
          {!authorId && (
            <div className="mb-20">
              <h2 className="text-3xl font-serif font-bold text-center mb-12 text-foreground">Shop by Room</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className="border border-border rounded-lg overflow-hidden hover:shadow-elegant transition-all duration-300 group cursor-pointer bg-card"
                  onClick={() => navigate(`/shop/category/${category.id}`)}
                >
                  <div className="bg-muted h-40 flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                    <span className="text-muted-foreground text-lg font-medium">Room</span>
                  </div>
                  
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-serif font-semibold mb-2 group-hover:text-primary transition-colors duration-300 text-foreground">
                      {category.name}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            </div>
          )}

          {/* More Items Section */}
          <div className="mb-20">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-serif font-bold text-foreground">More Items</h2>
              <div className="flex gap-2">
                <button
                  onClick={handlePrevMoreItems}
                  disabled={currentMoreItemsPage === 0}
                  className="p-2 rounded-md border border-border hover:bg-muted transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={handleNextMoreItems}
                  disabled={currentMoreItemsPage >= totalMoreItemsPages - 1}
                  className="p-2 rounded-md border border-border hover:bg-muted transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {getCurrentMoreItems().map((item) => (
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
                        // Add to cart logic here
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

export default Shop;