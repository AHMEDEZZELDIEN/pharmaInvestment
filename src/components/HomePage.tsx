import { HeroSection } from './home/HeroSection';
import { TrustSection } from './home/TrustSection';
import { FeaturedCategories } from './home/FeaturedCategories';
import { FeaturedIngredients } from './home/FeaturedIngredients';
import { InstagramFeed } from './home/InstagramFeed';

interface HomePageProps {
  onNavigate: (page: string, product?: any) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div>
      <HeroSection onNavigate={onNavigate} />
      <TrustSection />
      <FeaturedCategories onNavigate={onNavigate} />
      <FeaturedIngredients onNavigate={onNavigate} />
      <InstagramFeed />
    </div>
  );
}