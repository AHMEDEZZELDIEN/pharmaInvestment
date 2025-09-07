import { useState, useEffect } from 'react';
import { Card } from '../ui/card';
import { Checkbox } from '../ui/checkbox';
import { Slider } from '../ui/slider';
import { Separator } from '../ui/separator';

interface FiltersState {
  categories: string[];
  priceRange: [number, number];
  brands: string[];
  ingredients: string[];
}

interface ShopFiltersProps {
  onFilterChange: (filters: FiltersState) => void;
}

export function ShopFilters({ onFilterChange }: ShopFiltersProps) {
  const [filters, setFilters] = useState<FiltersState>({
    categories: [],
    priceRange: [0, 100],
    brands: [],
    ingredients: []
  });

  const categories = [
    { id: 'skincare', label: 'Skincare', count: 18 },
    { id: 'makeup', label: 'Makeup', count: 12 },
    { id: 'fragrance', label: 'Fragrance', count: 8 },
    { id: 'haircare', label: 'Hair Care', count: 6 }
  ];

  const brands = [
    { id: 'belleza', label: 'Belleza', count: 24 },
    { id: 'natura', label: 'Natura', count: 12 },
    { id: 'verde', label: 'Verde', count: 8 }
  ];

  const ingredients = [
    { id: 'aloe-vera', label: 'Aloe Vera', count: 8 },
    { id: 'vitamin-c', label: 'Vitamin C', count: 6 },
    { id: 'hyaluronic-acid', label: 'Hyaluronic Acid', count: 5 },
    { id: 'rose-extract', label: 'Rose Extract', count: 4 },
    { id: 'argan-oil', label: 'Argan Oil', count: 3 }
  ];

  useEffect(() => {
    onFilterChange(filters);
  }, [filters, onFilterChange]);

  const handleCategoryChange = (categoryId: string, checked: boolean) => {
    setFilters(prev => ({
      ...prev,
      categories: checked 
        ? [...prev.categories, categoryId]
        : prev.categories.filter(id => id !== categoryId)
    }));
  };

  const handleBrandChange = (brandId: string, checked: boolean) => {
    setFilters(prev => ({
      ...prev,
      brands: checked 
        ? [...prev.brands, brandId]
        : prev.brands.filter(id => id !== brandId)
    }));
  };

  const handleIngredientChange = (ingredientId: string, checked: boolean) => {
    setFilters(prev => ({
      ...prev,
      ingredients: checked 
        ? [...prev.ingredients, ingredientId]
        : prev.ingredients.filter(id => id !== ingredientId)
    }));
  };

  const handlePriceChange = (value: number[]) => {
    setFilters(prev => ({
      ...prev,
      priceRange: [value[0], value[1]]
    }));
  };

  return (
    <Card className="p-6 h-fit">
      <h3 className="text-lg text-rose-900 mb-6">Filters</h3>

      {/* Categories */}
      <div className="mb-6">
        <h4 className="text-rose-800 mb-4">Category</h4>
        <div className="space-y-3">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id={category.id}
                  checked={filters.categories.includes(category.id)}
                  onCheckedChange={(checked) => 
                    handleCategoryChange(category.id, checked as boolean)
                  }
                />
                <label htmlFor={category.id} className="text-sm text-gray-700 cursor-pointer">
                  {category.label}
                </label>
              </div>
              <span className="text-xs text-gray-500">({category.count})</span>
            </div>
          ))}
        </div>
      </div>

      <Separator className="my-6" />

      {/* Price Range */}
      <div className="mb-6">
        <h4 className="text-rose-800 mb-4">Price Range</h4>
        <div className="px-2">
          <Slider
            value={filters.priceRange}
            onValueChange={handlePriceChange}
            max={100}
            min={0}
            step={5}
            className="mb-4"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>€{filters.priceRange[0]}</span>
            <span>€{filters.priceRange[1]}</span>
          </div>
        </div>
      </div>

      <Separator className="my-6" />

      {/* Brands */}
      <div className="mb-6">
        <h4 className="text-rose-800 mb-4">Brand</h4>
        <div className="space-y-3">
          {brands.map((brand) => (
            <div key={brand.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id={brand.id}
                  checked={filters.brands.includes(brand.id)}
                  onCheckedChange={(checked) => 
                    handleBrandChange(brand.id, checked as boolean)
                  }
                />
                <label htmlFor={brand.id} className="text-sm text-gray-700 cursor-pointer">
                  {brand.label}
                </label>
              </div>
              <span className="text-xs text-gray-500">({brand.count})</span>
            </div>
          ))}
        </div>
      </div>

      <Separator className="my-6" />

      {/* Key Ingredients */}
      <div className="mb-6">
        <h4 className="text-rose-800 mb-4">Key Ingredients</h4>
        <div className="space-y-3">
          {ingredients.map((ingredient) => (
            <div key={ingredient.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id={ingredient.id}
                  checked={filters.ingredients.includes(ingredient.id)}
                  onCheckedChange={(checked) => 
                    handleIngredientChange(ingredient.id, checked as boolean)
                  }
                />
                <label htmlFor={ingredient.id} className="text-sm text-gray-700 cursor-pointer">
                  {ingredient.label}
                </label>
              </div>
              <span className="text-xs text-gray-500">({ingredient.count})</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}