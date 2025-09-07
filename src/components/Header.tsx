import { Search, ShoppingBag, User, Heart } from 'lucide-react';
import React, { useRef, useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [helpOpen, setHelpOpen] = useState(false);
  const helpRef = useRef<HTMLDivElement>(null);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (helpRef.current && !helpRef.current.contains(event.target as Node)) {
        setHelpOpen(false);
      }
    }
    if (helpOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [helpOpen]);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between py-2 text-sm text-slate-600 border-b border-slate-100">
          <div className="flex items-center gap-6">
            <span>Free shipping on orders over €50</span>
            <span>Clinical Grade • FDA Approved • Made in Italy</span>
          </div>
          <div className="flex items-center gap-4">
            <span>Customer Care: +39 02 1234 5678</span>
            <select className="bg-transparent text-sm">
              <option>English</option>
              <option>Italiano</option>
            </select>
          </div>
        </div>

        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-8">
            <div 
              className="cursor-pointer flex items-center gap-3"
              onClick={() => onNavigate('home')}
            >
              <ImageWithFallback
                src="https://lirp.cdn-website.com/7a03c9f3/dms3rep/multi/opt/Pharma+investment-154w.png"
                alt="Pharma Investment Logo"
                className="h-12 w-auto"
              />
              <div className="flex flex-col">
                <h1 className="text-xl text-green-800 font-semibold leading-none">
                  PHARMA INVESTMENT
                </h1>
                <span className="text-sm text-orange-500 leading-none">
                  Advanced Clinical Skincare
                </span>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <button 
                onClick={() => onNavigate('home')}
                className={`pb-1 border-b-2 transition-colors ${
                  currentPage === 'home' 
                    ? 'border-orange-500 text-green-800' 
                    : 'border-transparent text-slate-600 hover:text-green-600'
                }`}
              >
                Home
              </button>
              <button 
                onClick={() => onNavigate('shop')}
                className={`pb-1 border-b-2 transition-colors ${
                  currentPage === 'shop' 
                    ? 'border-orange-500 text-green-800' 
                    : 'border-transparent text-slate-600 hover:text-green-600'
                }`}
              >
                Shop
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className={`pb-1 border-b-2 transition-colors ${
                  currentPage === 'contact'
                    ? 'border-orange-500 text-green-800'
                    : 'border-transparent text-slate-600 hover:text-green-600'
                }`}
              >
                Contact Us
              </button>
              <button 
                onClick={() => onNavigate('research')}
                className={`pb-1 border-b-2 transition-colors ${
                  currentPage === 'research' 
                    ? 'border-orange-500 text-green-800' 
                    : 'border-transparent text-slate-600 hover:text-green-600'
                }`}
              >
                Blog
              </button>
              {/* Help Center Dropdown at the end, opens on click */}
              <div className="relative" ref={helpRef}>
                <button
                  className={`pb-1 border-b-2 transition-colors ${currentPage === 'help-center' ? 'border-orange-500 text-green-800' : 'border-transparent text-slate-600 hover:text-green-600'}`}
                  onClick={() => setHelpOpen((v) => !v)}
                  aria-haspopup="true"
                  aria-expanded={helpOpen}
                >
                  Help Center
                </button>
                {helpOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-white border border-slate-200 rounded-lg shadow-lg z-50">
                    <button className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-green-50" onClick={() => { setHelpOpen(false); onNavigate('privacy-policy'); }}>Privacy Policy</button>
                    <button className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-green-50" onClick={() => { setHelpOpen(false); onNavigate('terms-conditions'); }}>Terms & Conditions</button>
                  </div>
                )}
              </div>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
              <Input
                placeholder="Search products..."
                className="pl-10 w-64 bg-green-50 border-green-200 focus:border-orange-500 focus:ring-orange-500"
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
                onKeyDown={e => {
                  if (e.key === 'Enter') {
                    onNavigate('shop');
                  }
                }}
              />
            </div>
            <Button variant="ghost" size="icon" className="text-slate-600 hover:text-green-600">
              <User className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-slate-600 hover:text-green-600">
              <Heart className="w-5 h-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-slate-600 hover:text-green-600 relative"
              onClick={() => onNavigate('checkout')}
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                2
              </span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}