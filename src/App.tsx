import { useState } from 'react';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { ShopPage } from './components/ShopPage';
import { ProductDetailPage } from './components/ProductDetailPage';
import { CheckoutPage } from './components/CheckoutPage';
import { ResearchPage } from './components/ResearchPage';
import { Footer } from './components/Footer';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import TermsConditionsPage from './components/TermsConditionsPage';
import ContactPage from './components/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const navigateTo = (page: string, product?: any) => {
    setCurrentPage(page);
    if (product) {
      setSelectedProduct(product);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={navigateTo} />;
      case 'shop':
        return <ShopPage onNavigate={navigateTo} />;
      case 'product':
        return <ProductDetailPage product={selectedProduct} onNavigate={navigateTo} />;
      case 'checkout':
        return <CheckoutPage onNavigate={navigateTo} />;
      case 'research':
        return <ResearchPage onNavigate={navigateTo} />;
      case 'privacy-policy':
        return <PrivacyPolicyPage />;
      case 'terms-conditions':
        return <TermsConditionsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50/30 to-orange-50/20">
      <Header currentPage={currentPage} onNavigate={navigateTo} />
      <main>
        {renderPage()}
      </main>
      <Footer onNavigate={navigateTo} />
    </div>
  );
}