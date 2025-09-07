import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface FeaturedCategoriesProps {
  onNavigate: (page: string) => void;
}

export function FeaturedCategories({ onNavigate }: FeaturedCategoriesProps) {
  const categories = [
    {
      title: "Clinical Skincare",
      description: "Professional-grade treatments with proven clinical results",
      image: "https://images.unsplash.com/photo-1643379850623-7eb6442cd262?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwc2tpbmNhcmUlMjBiZWF1dHklMjBwcm9kdWN0c3xlbnwxfHx8fDE3NTcxNjE3NjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Dermatological Solutions",
      description: "Advanced formulations for specific skin conditions",
      image: "https://images.unsplash.com/photo-1648942697933-d53379119b22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwY29zbWV0aWNzJTIwbWFrZXVwJTIwcGFzdGVsfGVufDF8fHx8MTc1NzE2MTc2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Professional Care",
      description: "Intensive treatments for optimal skin health",
      image: "https://images.unsplash.com/photo-1570126737049-70d237c201de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGFwcGx5aW5nJTIwc2tpbmNhcmUlMjBjcmVhbXxlbnwxfHx8fDE3NTcxNjE3Njd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-green-50/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl text-green-800 mb-4">Clinical Treatment Categories</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Each category represents decades of research and clinical validation for proven results
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl mb-4">
                <ImageWithFallback
                  src={category.image}
                  alt={category.title}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="text-center">
                <h3 className="text-xl text-green-800 mb-2">{category.title}</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">{category.description}</p>
                <Button 
                  variant="outline" 
                  onClick={() => onNavigate('shop')}
                  className="border-orange-500 text-orange-500 hover:bg-orange-50 rounded-lg px-6 border-2"
                >
                  Explore {category.title}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Research Spotlight */}
        <div className="mt-20 relative">
          <div className="bg-gradient-to-r from-green-50 to-orange-50/50 rounded-2xl p-12 text-center border border-green-200">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl text-green-800 mb-4">Latest Clinical Research</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Breakthrough formulations backed by 5 years of clinical trials. 
                Advanced peptide technology meets pharmaceutical precision for visible results.
              </p>
              <Button 
                onClick={() => onNavigate('research')}
                className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                View Research
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}