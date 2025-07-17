import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Checkout = () => {
  const { items } = useCart();
  const [deliveryMethod, setDeliveryMethod] = useState("ship");
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [emailOffers, setEmailOffers] = useState(false);
  const [useShippingAsBilling, setUseShippingAsBilling] = useState(true);
  const [rememberMe, setRememberMe] = useState(false);
  const [saveInfo, setSaveInfo] = useState(false);

  const subtotal = items.reduce((total, item) => total + (parseFloat(item.price.replace('$', '')) * item.quantity), 0);
  const shipping = 10.00;
  const taxes = subtotal * 0.13; // 13% tax
  const total = subtotal + shipping + taxes;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Checkout</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - Forms */}
              <div className="space-y-8">
                {/* Express Checkout */}
                <div>
                  <h2 className="text-xl font-semibold mb-4">Express checkout</h2>
                  <div className="grid grid-cols-3 gap-3">
                    <Button variant="outline" className="h-12">Shop Pay</Button>
                    <Button variant="outline" className="h-12">Pay</Button>
                    <Button variant="outline" className="h-12">G Pay</Button>
                  </div>
                  <div className="flex items-center my-6">
                    <Separator className="flex-1" />
                    <span className="px-4 text-muted-foreground">OR</span>
                    <Separator className="flex-1" />
                  </div>
                </div>

                {/* Contact Information */}
                <div>
                  <h2 className="text-xl font-semibold mb-4">Contact</h2>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Email" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="email-offers" 
                        checked={emailOffers}
                        onCheckedChange={(checked) => setEmailOffers(checked === true)}
                      />
                      <Label htmlFor="email-offers" className="text-sm">Email me with news and offers</Label>
                    </div>
                    <div className="text-right">
                      <a href="#" className="text-primary text-sm hover:underline">Log in</a>
                    </div>
                  </div>
                </div>

                {/* Delivery */}
                <div>
                  <h2 className="text-xl font-semibold mb-4">Delivery</h2>
                  <RadioGroup value={deliveryMethod} onValueChange={setDeliveryMethod}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="ship" id="ship" />
                      <Label htmlFor="ship">Ship</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="pickup" id="pickup" />
                      <Label htmlFor="pickup">Pickup in store</Label>
                    </div>
                  </RadioGroup>

                  {deliveryMethod === "ship" && (
                    <div className="mt-6 space-y-4">
                      <div>
                        <Label htmlFor="country">Country/Region</Label>
                        <Select defaultValue="canada">
                          <SelectTrigger>
                            <SelectValue placeholder="Select country" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="canada">Canada</SelectItem>
                            <SelectItem value="usa">United States</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First name</Label>
                          <Input id="firstName" placeholder="First name" />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last name</Label>
                          <Input id="lastName" placeholder="Last name" />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="company">Company (optional)</Label>
                        <Input id="company" placeholder="Company" />
                      </div>

                      <div>
                        <Label htmlFor="address">Address</Label>
                        <Input id="address" placeholder="Address" />
                      </div>

                      <div>
                        <Label htmlFor="apartment">Apartment, suite, etc. (optional)</Label>
                        <Input id="apartment" placeholder="Apartment, suite, etc." />
                      </div>

                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <Label htmlFor="city">City</Label>
                          <Input id="city" placeholder="City" />
                        </div>
                        <div>
                          <Label htmlFor="province">Province</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Province" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="on">Ontario</SelectItem>
                              <SelectItem value="bc">British Columbia</SelectItem>
                              <SelectItem value="ab">Alberta</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="postal">Postal code</Label>
                          <Input id="postal" placeholder="Postal code" />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" type="tel" placeholder="Phone" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Shipping Method */}
                <div>
                  <h2 className="text-xl font-semibold mb-4">Shipping method</h2>
                  <div className="p-4 border border-dashed border-muted-foreground rounded-md text-center text-muted-foreground">
                    Enter your shipping address to view available shipping methods
                  </div>
                </div>

                {/* Payment */}
                <div>
                  <h2 className="text-xl font-semibold mb-4">Payment</h2>
                  <div className="space-y-4">
                    <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="credit-card" id="credit-card" />
                        <Label htmlFor="credit-card">Credit card</Label>
                        <div className="flex space-x-2 ml-4">
                          <span className="text-xs bg-muted px-2 py-1 rounded">Visa</span>
                          <span className="text-xs bg-muted px-2 py-1 rounded">Mastercard</span>
                          <span className="text-xs bg-muted px-2 py-1 rounded">Amex</span>
                          <span className="text-xs bg-muted px-2 py-1 rounded">Discover</span>
                        </div>
                      </div>
                      
                      {paymentMethod === "credit-card" && (
                        <div className="ml-6 space-y-4">
                          <div>
                            <Label htmlFor="cardNumber">Card number</Label>
                            <Input id="cardNumber" placeholder="1234 1234 1234 1234" />
                          </div>
                          <div className="grid grid-cols-3 gap-4">
                            <div>
                              <Label htmlFor="expiry">Expiration date</Label>
                              <Input id="expiry" placeholder="MM / YY" />
                            </div>
                            <div>
                              <Label htmlFor="cvv">Security code</Label>
                              <Input id="cvv" placeholder="CVV" />
                            </div>
                            <div>
                              <Label htmlFor="cardName">Name on card</Label>
                              <Input id="cardName" placeholder="Name on card" />
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox 
                              id="billing-address" 
                              checked={useShippingAsBilling}
                              onCheckedChange={(checked) => setUseShippingAsBilling(checked === true)}
                            />
                            <Label htmlFor="billing-address" className="text-sm">Use shipping address as billing address</Label>
                          </div>
                        </div>
                      )}

                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="apple-pay" id="apple-pay" />
                        <Label htmlFor="apple-pay">Apple Pay</Label>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="payplan" id="payplan" />
                        <Label htmlFor="payplan">Pay Over Time with PayPlan by RBC</Label>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="interac" id="interac" />
                        <Label htmlFor="interac">Interac E-Transfer by PSI</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>

                {/* Remember Me */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="remember-me" 
                      checked={rememberMe}
                      onCheckedChange={(checked) => setRememberMe(checked === true)}
                    />
                    <Label htmlFor="remember-me" className="text-sm">Remember me</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="save-info" 
                      checked={saveInfo}
                      onCheckedChange={(checked) => setSaveInfo(checked === true)}
                    />
                    <Label htmlFor="save-info" className="text-sm">Save my information for a faster checkout</Label>
                  </div>
                </div>

                {/* Pay Now Button */}
                <Button className="w-full h-12 text-lg font-semibold">
                  Pay now
                </Button>
              </div>

              {/* Right Column - Order Summary */}
              <div className="lg:sticky lg:top-24 lg:self-start">
                <div className="bg-muted/50 p-6 rounded-lg">
                  <h2 className="text-xl font-semibold mb-6">Order summary</h2>
                  
                  <div className="space-y-4 mb-6">
                    {items.map((item) => (
                      <div key={item.id} className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-muted rounded-md flex items-center justify-center">
                          <span className="text-xs text-muted-foreground">IMG</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium">{item.name}</h3>
                          <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <Label htmlFor="discount">Discount code or gift card</Label>
                      <div className="flex space-x-2 mt-2">
                        <Input id="discount" placeholder="Discount code" className="flex-1" />
                        <Button variant="outline">Apply</Button>
                      </div>
                    </div>
                  </div>

                  <Separator className="my-6" />

                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span>${shipping.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Taxes</span>
                      <span>${taxes.toFixed(2)}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between text-lg font-semibold">
                      <span>Total</span>
                      <span>CAD ${total.toFixed(2)}</span>
                    </div>
                  </div>
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

export default Checkout;