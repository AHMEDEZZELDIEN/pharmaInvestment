export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  category: string;
  subcategory: string;
  ingredients: string[];
  image: string;
  images: string[];
  rating: number;
  reviewCount: number;
  description: string;
  usage: string;
  keyIngredients: string[];
  benefits: string[];
  inStock: boolean;
  isNew?: boolean;
  isBestseller?: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Clinical Hydration Complex",
    brand: "Pharma Investment",
    price: 85,
    category: "skincare",
    subcategory: "moisturizer",
    ingredients: ["Hyaluronic Acid Complex", "Ceramides", "Peptides", "Niacinamide"],
    image: "https://images.unsplash.com/photo-1643379850623-7eb6442cd262?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwc2tpbmNhcmUlMjBiZWF1dHklMjBwcm9kdWN0c3xlbnwxfHx8fDE3NTcxNjE3NjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: [
      "https://images.unsplash.com/photo-1643379850623-7eb6442cd262?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwc2tpbmNhcmUlMjBiZWF1dHklMjBwcm9kdWN0c3xlbnwxfHx8fDE3NTcxNjE3NjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1570126737049-70d237c201de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGFwcGx5aW5nJTIwc2tpbmNhcmUlMjBjcmVhbXxlbnwxfHx8fDE3NTcxNjE3Njd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    rating: 4.8,
    reviewCount: 124,
    description: "Advanced pharmaceutical-grade moisturizing complex with clinically proven ingredients. Developed through 3 years of clinical research for optimal skin barrier restoration.",
    usage: "Apply morning and evening to clean skin. Clinically tested for sensitive skin compatibility.",
    keyIngredients: ["Hyaluronic Acid Complex", "Ceramides"],
    benefits: ["Clinical Hydration", "Barrier Repair", "Proven Results"],
    inStock: true,
    isBestseller: true
  },
  {
    id: "2",
    name: "Advanced Vitamin C Treatment",
    brand: "Pharma Investment",
    price: 92,
    category: "skincare",
    subcategory: "serum",
    ingredients: ["L-Ascorbic Acid 20%", "Magnesium Ascorbyl Phosphate", "Ferulic Acid", "Tocopherol"],
    image: "https://images.unsplash.com/photo-1745159338135-39f6b462b382?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aXRhbWluJTIwYyUyMHNlcnVtJTIwYm90dGxlfGVufDF8fHx8MTc1NzE2MTc2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: [
      "https://images.unsplash.com/photo-1745159338135-39f6b462b382?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aXRhbWluJTIwYyUyMHNlcnVtJTIwYm90dGxlfGVufDF8fHx8MTc1NzE2MTc2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    rating: 4.7,
    reviewCount: 89,
    description: "Clinical-strength vitamin C serum with 20% L-Ascorbic Acid. Clinically proven to reduce hyperpigmentation by 40% in 12 weeks through controlled studies.",
    usage: "Apply 2-3 drops to clean skin in the morning. Start with alternate days. Always use SPF 30+ during treatment.",
    keyIngredients: ["L-Ascorbic Acid 20%", "Ferulic Acid"],
    benefits: ["Clinical Brightening", "Antioxidant Protection", "Proven Efficacy"],
    inStock: true,
    isNew: true
  },
  {
    id: "3",
    name: "Gentle Aloe Cleanser",
    brand: "Belleza",
    price: 28,
    category: "skincare",
    subcategory: "cleanser",
    ingredients: ["Aloe Vera", "Chamomile", "Coconut Oil", "Glycerin"],
    image: "https://images.unsplash.com/photo-1630398777700-afb6d24a502d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbG9lJTIwdmVyYSUyMHBsYW50JTIwc2tpbmNhcmV8ZW58MXx8fHwxNzU3MTYxNzY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: [
      "https://images.unsplash.com/photo-1630398777700-afb6d24a502d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbG9lJTIwdmVyYSUyMHBsYW50JTIwc2tpbmNhcmV8ZW58MXx8fHwxNzU3MTYxNzY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    rating: 4.6,
    reviewCount: 156,
    description: "A gentle, sulfate-free cleanser that removes impurities while maintaining skin's natural moisture barrier. Perfect for sensitive skin.",
    usage: "Apply to damp skin, massage gently, and rinse with lukewarm water. Use morning and evening.",
    keyIngredients: ["Aloe Vera", "Chamomile"],
    benefits: ["Gentle Cleansing", "Soothing", "Hydrating"],
    inStock: true
  },
  {
    id: "4",
    name: "Natural Lip Tint",
    brand: "Belleza",
    price: 24,
    originalPrice: 32,
    category: "makeup",
    subcategory: "lips",
    ingredients: ["Jojoba Oil", "Beeswax", "Rose Hip Oil", "Natural Pigments"],
    image: "https://images.unsplash.com/photo-1648942697933-d53379119b22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwY29zbWV0aWNzJTIwbWFrZXVwJTIwcGFzdGVsfGVufDF8fHx8MTc1NzE2MTc2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: [
      "https://images.unsplash.com/photo-1648942697933-d53379119b22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwY29zbWV0aWNzJTIwbWFrZXVwJTIwcGFzdGVsfGVufDF8fHx8MTc1NzE2MTc2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    rating: 4.5,
    reviewCount: 67,
    description: "A buildable lip tint that provides natural color and hydration. Made with organic ingredients for a healthy, glossy finish.",
    usage: "Apply directly to lips. Build up for more intensity or blend for a natural flush.",
    keyIngredients: ["Jojoba Oil", "Rose Hip Oil"],
    benefits: ["Natural Color", "Hydrating", "Long-lasting"],
    inStock: true
  },
  {
    id: "5",
    name: "Lavender Dream Fragrance",
    brand: "Belleza",
    price: 68,
    category: "fragrance",
    subcategory: "eau de parfum",
    ingredients: ["Lavender", "Bergamot", "Vanilla", "Sandalwood"],
    image: "https://images.unsplash.com/photo-1610207928705-0ecd72bd4b6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWF1dHklMjBicmFuZCUyMGhlcm98ZW58MXx8fHwxNzU3MTYxNzY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: [
      "https://images.unsplash.com/photo-1610207928705-0ecd72bd4b6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWF1dHklMjBicmFuZCUyMGhlcm98ZW58MXx8fHwxNzU3MTYxNzY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    rating: 4.9,
    reviewCount: 43,
    description: "An enchanting fragrance that captures the essence of Tuscan lavender fields at sunset. A perfect balance of floral and woody notes.",
    usage: "Spray on pulse points: wrists, behind ears, and at the base of the throat.",
    keyIngredients: ["Lavender", "Bergamot", "Vanilla"],
    benefits: ["Long-lasting", "Calming", "Sophisticated"],
    inStock: true,
    isNew: true
  },
  {
    id: "6",
    name: "Nourishing Hair Mask",
    brand: "Belleza",
    price: 36,
    category: "haircare",
    subcategory: "treatment",
    ingredients: ["Argan Oil", "Keratin", "Coconut Oil", "Avocado Extract"],
    image: "https://images.unsplash.com/photo-1570126737049-70d237c201de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGFwcGx5aW5nJTIwc2tpbmNhcmUlMjBjcmVhbXxlbnwxfHx8fDE3NTcxNjE3Njd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: [
      "https://images.unsplash.com/photo-1570126737049-70d237c201de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGFwcGx5aW5nJTIwc2tpbmNhcmUlMjBjcmVhbXxlbnwxfHx8fDE3NTcxNjE3Njd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    rating: 4.4,
    reviewCount: 78,
    description: "An intensive treatment mask that repairs and strengthens damaged hair, leaving it silky smooth and manageable.",
    usage: "Apply to damp hair, leave for 10-15 minutes, then rinse thoroughly. Use weekly.",
    keyIngredients: ["Argan Oil", "Keratin"],
    benefits: ["Repair", "Strengthen", "Shine"],
    inStock: true
  }
];

export const getProductsByCategory = (category: string) => {
  return products.filter(product => product.category === category);
};

export const getProductById = (id: string) => {
  return products.find(product => product.id === id);
};

export const getRelatedProducts = (productId: string, limit: number = 4) => {
  const product = getProductById(productId);
  if (!product) return [];
  
  return products
    .filter(p => p.id !== productId && p.category === product.category)
    .slice(0, limit);
};