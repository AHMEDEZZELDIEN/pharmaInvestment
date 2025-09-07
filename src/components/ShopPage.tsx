import { useState } from 'react';
import { products, Product } from './data/products';
import { ProductCard } from './shop/ProductCard';
import { ShopFilters } from './shop/ShopFilters';
import { Footer } from './Footer';
import { Grid, List, Filter } from 'lucide-react';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

interface ShopPageProps {
  onNavigate: (page: string, product?: Product) => void;
}

export function ShopPage({ onNavigate }: ShopPageProps) {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);

  const handleFilterChange = (filters: any) => {
    let filtered = [...products];

    // Category filter
    if (filters.categories.length > 0) {
      filtered = filtered.filter(product => 
        filters.categories.includes(product.category)
      );
    }

    // Price filter
    if (filters.priceRange[0] > 0 || filters.priceRange[1] < 100) {
      filtered = filtered.filter(product => 
        product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]
      );
    }

    // Brand filter
    if (filters.brands.length > 0) {
      filtered = filtered.filter(product => 
        filters.brands.includes(product.brand)
      );
    }

    // Ingredient filter
    if (filters.ingredients.length > 0) {
      filtered = filtered.filter(product => 
        filters.ingredients.some((ingredient: string) => 
          product.ingredients.some(productIngredient => 
            productIngredient.toLowerCase().includes(ingredient.toLowerCase())
          )
        )
      );
    }

    setFilteredProducts(filtered);
  };

  const handleSort = (value: string) => {
    setSortBy(value);
    let sorted = [...filteredProducts];

    switch (value) {
      case 'price-low':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        sorted.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      default:
        // Featured - bestsellers first, then new products
        sorted.sort((a, b) => {
          if (a.isBestseller && !b.isBestseller) return -1;
          if (!a.isBestseller && b.isBestseller) return 1;
          if (a.isNew && !b.isNew) return -1;
          if (!a.isNew && b.isNew) return 1;
          return 0;
        });
    }

    setFilteredProducts(sorted);
  };

  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl text-rose-900 mb-4">Shop All Products</h1>
          <p className="text-gray-600">
            Discover our complete collection of natural beauty products
          </p>
        </div>

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <div className={`${showFilters ? 'block' : 'hidden lg:block'} w-full lg:w-80 mb-8 lg:mb-0`}>
            <ShopFilters onFilterChange={handleFilterChange} />
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Top Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden border-rose-300 text-rose-700"
                >
                  <Filter className="w-4 h-4 mr-2" />
                  Filters
                </Button>
                <span className="text-gray-600">
                  {filteredProducts.length} products
                </span>
              </div>

              <div className="flex items-center gap-4">
                <Select value={sortBy} onValueChange={handleSort}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Customer Rating</SelectItem>
                  </SelectContent>
                </Select>

                <div className="flex rounded-lg border border-rose-200 overflow-hidden">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                    className={`rounded-none ${viewMode === 'grid' ? 'bg-rose-100 text-rose-700' : ''}`}
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                    className={`rounded-none ${viewMode === 'list' ? 'bg-rose-100 text-rose-700' : ''}`}
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className={
              viewMode === 'grid' 
                ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6' 
                : 'space-y-4'
            }>
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  viewMode={viewMode}
                  onProductClick={(product) => onNavigate('product', product)}
                />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <div className="text-gray-400 mb-4">No products found</div>
                <p className="text-gray-600">Try adjusting your filters to see more results</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}