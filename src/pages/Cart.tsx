import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Minus, Plus, Trash2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";

const Cart = () => {
  const navigate = useNavigate();
  const { items, updateQuantity, removeFromCart, itemCount } = useCart();

  const subtotal = items.reduce((total, item) => {
    const price = parseFloat(item.price.replace('$', ''));
    return total + (price * item.quantity);
  }, 0);

  const shipping = subtotal > 50 ? 0 : 9.99;
  const taxes = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + taxes;

  const handleQuantityChange = (id: string, newQuantity: number) => {
    updateQuantity(id, newQuantity);
  };

  const handleCheckout = () => {
    // Navigate to checkout page (placeholder)
    navigate("/checkout");
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-1 pt-20">
          <div className="container mx-auto px-6 py-12">
            <div className="text-center">
              <h1 className="text-4xl font-serif font-bold mb-8 text-foreground">Your Cart</h1>
              <p className="text-lg text-muted-foreground mb-8">Your cart is empty</p>
              <button
                onClick={() => navigate("/shop")}
                className="bg-primary text-primary-foreground px-8 py-4 rounded-md font-medium text-lg hover:bg-primary/90 transition-colors duration-300"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 pt-20">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-4xl font-serif font-bold mb-12 text-foreground">Your Cart ({itemCount} items)</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Cart Items Section */}
            <div className="lg:col-span-2 space-y-6">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="border border-border rounded-lg p-6 bg-card"
                >
                  <div className="flex gap-6">
                    {/* Item Photo Placeholder */}
                    <div className="w-24 h-24 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-sm text-muted-foreground">Item Photo</span>
                    </div>

                    {/* Item Details */}
                    <div className="flex-1 space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">{item.name}</h3>
                        <p className="text-lg font-bold text-primary">{item.price}</p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                            className="p-1 border border-border rounded-md hover:bg-muted transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="w-12 text-center font-medium text-foreground">{item.quantity}</span>
                          <button
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                            className="p-1 border border-border rounded-md hover:bg-muted transition-colors duration-300"
                          >
                            <Plus size={16} />
                          </button>
                        </div>

                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="flex items-center gap-2 text-destructive hover:text-destructive/80 transition-colors duration-300"
                        >
                          <Trash2 size={16} />
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary Section */}
            <div className="lg:col-span-1">
              <div className="border border-border rounded-lg p-6 bg-card sticky top-24">
                <h2 className="text-2xl font-serif font-bold mb-6 text-foreground">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-foreground">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-foreground">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between text-foreground">
                    <span>Taxes</span>
                    <span>${taxes.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-border pt-4">
                    <div className="flex justify-between text-lg font-bold text-foreground">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  className="w-full bg-primary text-primary-foreground px-6 py-4 rounded-md font-medium text-lg hover:bg-primary/90 transition-colors duration-300 mb-4"
                >
                  Checkout
                </button>

                <button
                  onClick={() => navigate("/shop")}
                  className="w-full border border-border text-foreground px-6 py-3 rounded-md font-medium hover:bg-muted transition-colors duration-300"
                >
                  Continue Shopping
                </button>

                <div className="mt-6 p-4 bg-muted/50 rounded-md">
                  <p className="text-sm text-muted-foreground">
                    Order Summary + Shipping Details: Free shipping on orders over $50. Standard delivery takes 3-5 business days. All items are handcrafted and may vary slightly from photos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cart;