import { useState } from 'react';
import { Product, getRelatedProducts, products } from './data/products';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Footer } from './Footer';
import { Star, Heart, ShoppingCart, Truck, Shield, RotateCcw, Users, Plus, Minus } from 'lucide-react';

interface ProductDetailPageProps {
  product: Product | null;
  onNavigate: (page: string, product?: Product) => void;
}

export function ProductDetailPage({ product, onNavigate }: ProductDetailPageProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedReviewTab, setSelectedReviewTab] = useState('all');

  if (!product) {
    // Fallback to first product if none selected
    product = products[0];
  }

  const relatedProducts = getRelatedProducts(product.id);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < Math.floor(rating) 
            ? 'text-yellow-400 fill-current' 
            : 'text-gray-300'
        }`}
      />
    ));
  };

  const mockReviews = [
    {
      id: 1,
      name: "Sarah M.",
      rating: 5,
      date: "2 weeks ago",
      review: "This product is absolutely amazing! My skin feels so much softer and more hydrated. The texture is perfect and it absorbs quickly.",
      verified: true
    },
    {
      id: 2,
      name: "Elena R.",
      rating: 4,
      date: "1 month ago", 
      review: "Really good quality and the scent is lovely. I've been using it for a month now and can see visible improvements in my skin texture.",
      verified: true
    },
    {
      id: 3,
      name: "Maria L.",
      rating: 5,
      date: "6 weeks ago",
      review: "Perfect for sensitive skin! No irritation at all and my skin looks more radiant. Will definitely repurchase.",
      verified: true
    }
  ];

  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        {/* Product Images and Info */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-2xl bg-rose-50">
              <ImageWithFallback
                src={product.images[selectedImage] || product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 ${
                      selectedImage === index ? 'border-rose-400' : 'border-transparent'
                    }`}
                  >
                    <ImageWithFallback
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                {product.isNew && (
                  <Badge className="bg-green-500 text-white">New</Badge>
                )}
                {product.isBestseller && (
                  <Badge className="bg-rose-500 text-white">Bestseller</Badge>
                )}
                {product.originalPrice && (
                  <Badge className="bg-red-500 text-white">Sale</Badge>
                )}
              </div>
              <h1 className="text-3xl text-rose-900 mb-2">{product.name}</h1>
              <p className="text-lg text-gray-600">{product.brand}</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                {renderStars(product.rating)}
                <span className="text-rose-600 ml-2">{product.rating}</span>
              </div>
              <span className="text-gray-600">({product.reviewCount} reviews)</span>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-3xl text-rose-600">€{product.price}</span>
              {product.originalPrice && (
                <span className="text-xl text-gray-500 line-through">
                  €{product.originalPrice}
                </span>
              )}
            </div>

            <p className="text-gray-700 leading-relaxed">{product.description}</p>

            {/* Benefits */}
            <div>
              <h3 className="text-rose-900 mb-3">Key Benefits</h3>
              <div className="flex flex-wrap gap-2">
                {product.benefits.map((benefit, index) => (
                  <Badge key={index} variant="outline" className="border-rose-200 text-rose-700">
                    {benefit}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-gray-700">Quantity:</span>
                <div className="flex items-center border border-rose-200 rounded-lg">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="h-10 w-10"
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="w-12 text-center">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                    className="h-10 w-10"
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="flex gap-4">
                <Button className="flex-1 bg-rose-500 hover:bg-rose-600 text-white py-6">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart - €{(product.price * quantity).toFixed(2)}
                </Button>
                <Button variant="outline" size="icon" className="py-6 px-6 border-rose-300 text-rose-700 hover:bg-rose-50">
                  <Heart className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-rose-100">
              <div className="text-center">
                <Truck className="w-6 h-6 text-rose-500 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Free shipping over €50</p>
              </div>
              <div className="text-center">
                <Shield className="w-6 h-6 text-rose-500 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Natural & cruelty-free</p>
              </div>
              <div className="text-center">
                <RotateCcw className="w-6 h-6 text-rose-500 mx-auto mb-2" />
                <p className="text-sm text-gray-600">30-day returns</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mb-16">
          <Tabs defaultValue="details" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="details">Details & Usage</TabsTrigger>
              <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
              <TabsTrigger value="reviews">Reviews ({product.reviewCount})</TabsTrigger>
            </TabsList>
            
            <TabsContent value="details" className="space-y-6">
              <Card className="p-6">
                <h3 className="text-xl text-rose-900 mb-4">Product Details</h3>
                <p className="text-gray-700 leading-relaxed mb-6">{product.description}</p>
                
                <h4 className="text-lg text-rose-800 mb-3">How to Use</h4>
                <p className="text-gray-700 leading-relaxed">{product.usage}</p>
              </Card>
            </TabsContent>
            
            <TabsContent value="ingredients" className="space-y-6">
              <Card className="p-6">
                <h3 className="text-xl text-rose-900 mb-4">Full Ingredient List</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg text-rose-800 mb-3">Key Ingredients</h4>
                    <ul className="space-y-2">
                      {product.keyIngredients.map((ingredient, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-rose-400 rounded-full"></div>
                          <span className="text-gray-700">{ingredient}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg text-rose-800 mb-3">All Ingredients</h4>
                    <p className="text-sm text-gray-600">
                      {product.ingredients.join(', ')}
                    </p>
                  </div>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="reviews" className="space-y-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    {renderStars(product.rating)}
                    <span className="text-2xl text-rose-600">{product.rating}</span>
                  </div>
                  <div className="text-gray-600">
                    <Users className="w-5 h-5 inline mr-1" />
                    {product.reviewCount} reviews
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {mockReviews.map((review) => (
                  <Card key={review.id} className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-rose-900">{review.name}</span>
                          {review.verified && (
                            <Badge variant="outline" className="text-xs border-green-200 text-green-700">
                              Verified Purchase
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          {renderStars(review.rating)}
                          <span className="text-sm text-gray-500">{review.date}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{review.review}</p>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h3 className="text-2xl text-rose-900 mb-8">You Might Also Like</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Card key={relatedProduct.id} className="group overflow-hidden hover:shadow-lg transition-shadow cursor-pointer" onClick={() => onNavigate('product', relatedProduct)}>
                  <div className="relative">
                    <ImageWithFallback
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="text-rose-900 mb-1">{relatedProduct.name}</h4>
                    <p className="text-sm text-gray-600 mb-2">{relatedProduct.brand}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg text-rose-600">€{relatedProduct.price}</span>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600">{relatedProduct.rating}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}