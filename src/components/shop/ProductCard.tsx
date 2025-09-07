import { Product } from '../data/products';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Star, Heart, ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  viewMode: 'grid' | 'list';
  onProductClick: (product: Product) => void;
}

export function ProductCard({ product, viewMode, onProductClick }: ProductCardProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating) 
            ? 'text-yellow-400 fill-current' 
            : 'text-gray-300'
        }`}
      />
    ));
  };

  if (viewMode === 'list') {
    return (
      <Card className="p-4 hover:shadow-lg transition-shadow">
        <div className="flex gap-4">
          <div className="relative w-32 h-32 flex-shrink-0">
            <ImageWithFallback
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover rounded-lg cursor-pointer"
              onClick={() => onProductClick(product)}
            />
            {product.isNew && (
              <Badge className="absolute top-2 left-2 bg-green-500 text-white text-xs">
                New
              </Badge>
            )}
            {product.isBestseller && (
              <Badge className="absolute top-2 left-2 bg-rose-500 text-white text-xs">
                Bestseller
              </Badge>
            )}
          </div>

          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h3 
                className="text-lg text-rose-900 mb-1 cursor-pointer hover:text-rose-700"
                onClick={() => onProductClick(product)}
              >
                {product.name}
              </h3>
              <p className="text-sm text-gray-600 mb-2">{product.brand}</p>
              <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                {product.description}
              </p>
              
              <div className="flex items-center gap-1 mb-2">
                {renderStars(product.rating)}
                <span className="text-sm text-gray-600 ml-1">
                  ({product.reviewCount})
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xl text-blue-600">€{product.price}</span>
                {product.originalPrice && (
                  <span className="text-sm text-gray-500 line-through">
                    €{product.originalPrice}
                  </span>
                )}
              </div>

              <div className="flex gap-2">
                <Button variant="ghost" size="icon" className="text-gray-600 hover:text-rose-700">
                  <Heart className="w-5 h-5" />
                </Button>
                <Button className="bg-rose-500 hover:bg-rose-600 text-white">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover cursor-pointer group-hover:scale-105 transition-transform duration-300"
          onClick={() => onProductClick(product)}
        />
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {product.isNew && (
            <Badge className="bg-cyan-500 text-white text-xs">New Research</Badge>
          )}
          {product.isBestseller && (
            <Badge className="bg-blue-600 text-white text-xs">Clinical Proven</Badge>
          )}
          {product.originalPrice && (
            <Badge className="bg-red-500 text-white text-xs">Special Price</Badge>
          )}
        </div>

        {/* Quick Actions */}
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button variant="ghost" size="icon" className="bg-white/80 hover:bg-white text-gray-600 hover:text-rose-700">
            <Heart className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="p-4">
        <div className="mb-2">
          <h3 
            className="text-rose-900 mb-1 cursor-pointer hover:text-rose-700 transition-colors"
            onClick={() => onProductClick(product)}
          >
            {product.name}
          </h3>
          <p className="text-sm text-gray-600">{product.brand}</p>
        </div>

        <div className="flex items-center gap-1 mb-3">
          {renderStars(product.rating)}
          <span className="text-sm text-gray-600 ml-1">({product.reviewCount})</span>
        </div>

        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-lg text-rose-600">€{product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                €{product.originalPrice}
              </span>
            )}
          </div>
        </div>

        <Button 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white"
          onClick={(e) => {
            e.stopPropagation();
            // Add to cart logic here
          }}
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
      </div>
    </Card>
  );
}