import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card } from './ui/card';
import { Checkbox } from './ui/checkbox';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Separator } from './ui/separator';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Footer } from './Footer';
import { ArrowLeft, CreditCard, Truck, Gift, Lock } from 'lucide-react';

interface CheckoutPageProps {
  onNavigate: (page: string) => void;
}

export function CheckoutPage({ onNavigate }: CheckoutPageProps) {
  const [isGuestCheckout, setIsGuestCheckout] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [shippingMethod, setShippingMethod] = useState('standard');

  // Mock cart items
  const cartItems = [
    {
      id: '1',
      name: 'Hydrating Rose Cream',
      brand: 'Belleza',
      price: 45,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1643379850623-7eb6442cd262?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwc2tpbmNhcmUlMjBiZWF1dHklMjBwcm9kdWN0c3xlbnwxfHx8fDE3NTcxNjE3NjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: '2',
      name: 'Vitamin C Brightening Serum',
      brand: 'Belleza',
      price: 52,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1745159338135-39f6b462b382?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aXRhbWluJTIwYyUyMHNlcnVtJTIwYm90dGxlfGVufDF8fHx8MTc1NzE2MTc2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 50 ? 0 : 5.99;
  const total = subtotal + shipping;

  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button 
            variant="ghost" 
            onClick={() => onNavigate('shop')}
            className="text-rose-700 hover:text-rose-800 hover:bg-rose-50"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Continue Shopping
          </Button>
          <h1 className="text-3xl text-rose-900">Checkout</h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Forms */}
          <div className="lg:col-span-2 space-y-8">
            {/* Guest Checkout Option */}
            <Card className="p-6">
              <h2 className="text-xl text-rose-900 mb-4">Account</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="guest"
                    checked={isGuestCheckout}
                    onCheckedChange={setIsGuestCheckout}
                  />
                  <Label htmlFor="guest">Continue as guest</Label>
                </div>
                {!isGuestCheckout && (
                  <div className="space-y-4">
                    <p className="text-sm text-gray-600">
                      Already have an account? <a href="#" className="text-rose-600 hover:text-rose-700">Sign in</a>
                    </p>
                  </div>
                )}
              </div>
            </Card>

            {/* Shipping Information */}
            <Card className="p-6">
              <h2 className="text-xl text-rose-900 mb-4">Shipping Information</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input id="firstName" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input id="lastName" className="mt-1" />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" className="mt-1" />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="address">Address *</Label>
                  <Input id="address" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="city">City *</Label>
                  <Input id="city" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="postal">Postal Code *</Label>
                  <Input id="postal" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="country">Country *</Label>
                  <select id="country" className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md">
                    <option>Italy</option>
                    <option>France</option>
                    <option>Germany</option>
                    <option>Spain</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" className="mt-1" />
                </div>
              </div>
            </Card>

            {/* Shipping Method */}
            <Card className="p-6">
              <h2 className="text-xl text-rose-900 mb-4">Shipping Method</h2>
              <RadioGroup value={shippingMethod} onValueChange={setShippingMethod}>
                <div className="flex items-center justify-between p-4 border border-rose-200 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="standard" id="standard" />
                    <div>
                      <Label htmlFor="standard" className="cursor-pointer">Standard Shipping</Label>
                      <p className="text-sm text-gray-600">5-7 business days</p>
                    </div>
                  </div>
                  <span className="text-rose-600">{subtotal > 50 ? 'Free' : '€5.99'}</span>
                </div>
                <div className="flex items-center justify-between p-4 border border-rose-200 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="express" id="express" />
                    <div>
                      <Label htmlFor="express" className="cursor-pointer">Express Shipping</Label>
                      <p className="text-sm text-gray-600">2-3 business days</p>
                    </div>
                  </div>
                  <span className="text-rose-600">€9.99</span>
                </div>
              </RadioGroup>
            </Card>

            {/* Payment */}
            <Card className="p-6">
              <h2 className="text-xl text-rose-900 mb-4">Payment</h2>
              <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="mb-6">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="card" id="card" />
                  <Label htmlFor="card" className="cursor-pointer flex items-center gap-2">
                    <CreditCard className="w-4 h-4" />
                    Credit Card
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="paypal" id="paypal" />
                  <Label htmlFor="paypal" className="cursor-pointer">PayPal</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="klarna" id="klarna" />
                  <Label htmlFor="klarna" className="cursor-pointer">Klarna Pay Later</Label>
                </div>
              </RadioGroup>

              {paymentMethod === 'card' && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="cardNumber">Card Number *</Label>
                    <Input id="cardNumber" placeholder="1234 5678 9012 3456" className="mt-1" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="expiry">Expiry Date *</Label>
                      <Input id="expiry" placeholder="MM/YY" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="cvv">CVV *</Label>
                      <Input id="cvv" placeholder="123" className="mt-1" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="cardName">Name on Card *</Label>
                    <Input id="cardName" className="mt-1" />
                  </div>
                </div>
              )}
            </Card>
          </div>

          {/* Right Column - Order Summary */}
          <div className="space-y-6">
            <Card className="p-6">
              <h2 className="text-xl text-rose-900 mb-4">Order Summary</h2>
              
              {/* Cart Items */}
              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <div className="w-16 h-16 bg-rose-50 rounded-lg overflow-hidden">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-rose-900 text-sm">{item.name}</h4>
                      <p className="text-xs text-gray-600">{item.brand}</p>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-sm text-gray-600">Qty: {item.quantity}</span>
                        <span className="text-rose-600">€{item.price}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <Separator className="my-4" />

              {/* Pricing */}
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>€{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'Free' : `€${shipping.toFixed(2)}`}</span>
                </div>
                {subtotal > 50 && (
                  <div className="text-sm text-green-600 flex items-center gap-1">
                    <Gift className="w-4 h-4" />
                    Free shipping applied!
                  </div>
                )}
              </div>

              <Separator className="my-4" />

              <div className="flex justify-between text-lg">
                <span className="text-rose-900">Total</span>
                <span className="text-rose-600">€{total.toFixed(2)}</span>
              </div>

              <Button className="w-full mt-6 bg-rose-500 hover:bg-rose-600 text-white py-6">
                <Lock className="w-4 h-4 mr-2" />
                Complete Order
              </Button>

              <div className="text-center mt-4">
                <p className="text-xs text-gray-600">
                  Secure checkout powered by Stripe
                </p>
              </div>
            </Card>

            {/* Trust Badges */}
            <Card className="p-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Truck className="w-4 h-4 text-rose-500" />
                  Free shipping on orders over €50
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Lock className="w-4 h-4 text-rose-500" />
                  Secure SSL encrypted checkout
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Gift className="w-4 h-4 text-rose-500" />
                  30-day money-back guarantee
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}