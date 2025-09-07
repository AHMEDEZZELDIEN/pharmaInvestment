import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ArrowRight, Play } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (page: string) => void;
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(29, 191, 0, 0.1), rgba(252, 156, 0, 0.05), rgba(16, 185, 129, 0.1))' }}></div>
      
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl md:text-6xl leading-tight" style={{ color: '#1dbf00' }}>
                Advanced Clinical
                <br />
                <span style={{ color: '#fc9c00' }}>Skincare</span>
                <br />
                Solutions
              </h1>
              <p className="text-xl text-gray-600 mt-6 leading-relaxed max-w-2xl">
                Discover our pharmaceutical-grade skincare treatments developed by leading dermatologists 
                and backed by clinical research. Experience the future of professional skincare.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                onClick={() => onNavigate('shop')}
                className="professional-button text-white px-8 py-6 rounded-lg flex items-center gap-2"
                style={{ background: '#1dbf00' }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#17a300'}
                onMouseLeave={(e) => e.currentTarget.style.background = '#1dbf00'}
              >
                Explore Products
                <ArrowRight className="w-4 h-4" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => onNavigate('research')}
                className="professional-button px-8 py-6 rounded-lg flex items-center gap-2"
                style={{ border: '2px solid #fc9c00', color: '#fc9c00', background: 'transparent' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(252, 156, 0, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                Learn More
                <Play className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl" style={{ color: '#1dbf00' }}>25+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl" style={{ color: '#fc9c00' }}>FDA</div>
                <div className="text-sm text-gray-600">Approved</div>
              </div>
              <div className="text-center">
                <div className="text-2xl" style={{ color: '#1dbf00' }}>100+</div>
                <div className="text-sm text-gray-600">Products</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 rounded-lg blur-3xl" style={{ background: 'linear-gradient(to bottom right, rgba(29, 191, 0, 0.2), rgba(252, 156, 0, 0.3))' }}></div>
            
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 ">
              <ImageWithFallback
                src="https://lirp.cdn-website.com/md/unsplash/dms3rep/multi/opt/photo-1551029313-1c711302ce7e-1495w.jpg"
                alt="Skincare products"
                className="rounded-lg shadow-2xl w-full h-[550px] object-cover"
              />
              
              
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 rounded-full flex justify-center" style={{ borderColor: '#1dbf00' }}>
          <div className="w-1 h-3 rounded-full mt-2" style={{ background: '#1dbf00' }}></div>
        </div>
      </div>
    </section>
  );
}