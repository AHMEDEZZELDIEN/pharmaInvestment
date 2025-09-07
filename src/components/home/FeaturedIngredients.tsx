import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';

interface FeaturedIngredientsProps {
  onNavigate: (page: string) => void;
}

export function FeaturedIngredients({ onNavigate }: FeaturedIngredientsProps) {
  const ingredients = [
    {
      name: "Retinaldehyde",
      description: "Clinical-grade retinoid that delivers anti-aging results with minimal irritation, proven in 24-week clinical studies",
      benefits: ["Anti-Aging", "Clinically Proven", "Gentle"],
      image: "https://images.unsplash.com/photo-1630398777700-afb6d24a502d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbG9lJTIwdmVyYSUyMHBsYW50JTIwc2tpbmNhcmV8ZW58MXx8fHwxNzU3MTYxNzY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      productCount: 8
    },
    {
      name: "Peptide Complex",
      description: "Advanced bioactive peptides that stimulate collagen synthesis and improve skin firmness through targeted cellular repair",
      benefits: ["Collagen Boost", "Firming", "Cellular Repair"],
      image: "https://images.unsplash.com/photo-1745159338135-39f6b462b382?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aXRhbWluJTIwYyUyMHNlcnVtJTIwYm90dGxlfGVufDF8fHx8MTc1NzE2MTc2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      productCount: 12
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl text-green-800 mb-4">Clinical Active Ingredients</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Pharmaceutical-grade actives backed by rigorous clinical research and proven efficacy data
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {ingredients.map((ingredient, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <ImageWithFallback
                  src={ingredient.image}
                  alt={ingredient.name}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 text-sm text-orange-500 font-medium border border-orange-200">
                  {ingredient.productCount} products
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl text-green-800">{ingredient.name}</h3>
                <p className="text-slate-600 leading-relaxed">{ingredient.description}</p>
                
                <div className="flex gap-2 mb-4">
                  {ingredient.benefits.map((benefit, benefitIndex) => (
                    <span 
                      key={benefitIndex}
                      className="px-3 py-1 bg-orange-50 text-orange-600 text-sm rounded-full border border-orange-200"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>

                <Button 
                  variant="ghost" 
                  onClick={() => onNavigate('research')}
                  className="text-orange-500 hover:text-orange-600 hover:bg-orange-50 p-0 group"
                >
                  View {ingredient.name} Research
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* All Ingredients Link */}
        <div className="text-center mt-16">
          <Button 
            variant="outline" 
            onClick={() => onNavigate('research')}
            className="border-orange-500 text-orange-500 hover:bg-orange-50 px-8 py-3 rounded-lg border-2"
          >
            View Clinical Research
          </Button>
        </div>
      </div>
    </section>
  );
}