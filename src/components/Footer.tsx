import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-green-900 via-green-800 to-green-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <ImageWithFallback
                src="https://lirp.cdn-website.com/7a03c9f3/dms3rep/multi/opt/Pharma+investment-154w.png"
                alt="Pharma Investment Logo"
                className="w-12 h-12 object-contain"
              />
              <div>
                <h3 className="text-xl font-semibold text-white">
                  PHARMA INVESTMENT
                </h3>
                <span className="text-sm text-green-200">
                  Advanced Clinical Skincare
                </span>
              </div>
            </div>
            <p className="text-green-100 mb-6 leading-relaxed">
              Leading the future of pharmaceutical-grade skincare with clinically proven formulations 
              backed by rigorous scientific research and regulatory excellence.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-green-200">
                <Mail className="w-4 h-4 text-orange-400" />
                <span>info@pharmainvestment.it</span>
              </div>
              <div className="flex items-center gap-3 text-green-200">
                <Phone className="w-4 h-4 text-orange-400" />
                <span>+39 02 1234 5678</span>
              </div>
              <div className="flex items-center gap-3 text-green-200">
                <MapPin className="w-4 h-4 text-orange-400" />
                <span>Milan, Italy</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => onNavigate('home')}
                  className="text-green-200 hover:text-orange-400 transition-colors hover:translate-x-1 duration-200 flex items-center gap-2"
                >
                  <ArrowRight className="w-3 h-3" />
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('shop')}
                  className="text-green-200 hover:text-orange-400 transition-colors hover:translate-x-1 duration-200 flex items-center gap-2"
                >
                  <ArrowRight className="w-3 h-3" />
                  Clinical Skincare
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('research')}
                  className="text-green-200 hover:text-orange-400 transition-colors hover:translate-x-1 duration-200 flex items-center gap-2"
                >
                  <ArrowRight className="w-3 h-3" />
                  Blog & Research
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('shop')}
                  className="text-green-200 hover:text-orange-400 transition-colors hover:translate-x-1 duration-200 flex items-center gap-2"
                >
                  <ArrowRight className="w-3 h-3" />
                  Professional Solutions
                </button>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Clinical Categories</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => onNavigate('shop')}
                  className="text-green-200 hover:text-orange-400 transition-colors hover:translate-x-1 duration-200 flex items-center gap-2"
                >
                  <ArrowRight className="w-3 h-3" />
                  Anti-Aging Solutions
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('shop')}
                  className="text-green-200 hover:text-orange-400 transition-colors hover:translate-x-1 duration-200 flex items-center gap-2"
                >
                  <ArrowRight className="w-3 h-3" />
                  Acne Treatment
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('shop')}
                  className="text-green-200 hover:text-orange-400 transition-colors hover:translate-x-1 duration-200 flex items-center gap-2"
                >
                  <ArrowRight className="w-3 h-3" />
                  Hyperpigmentation
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('shop')}
                  className="text-green-200 hover:text-orange-400 transition-colors hover:translate-x-1 duration-200 flex items-center gap-2"
                >
                  <ArrowRight className="w-3 h-3" />
                  Sensitive Skin Care
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Stay Updated</h4>
            <p className="text-green-200 mb-4 leading-relaxed">
              Subscribe to our newsletter for the latest clinical research, product launches, and exclusive offers.
            </p>
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="bg-green-800/50 border-green-600 text-white placeholder:text-green-300 focus:border-orange-400 focus:ring-orange-400/20"
              />
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                Subscribe Now
              </Button>
            </div>
            
            {/* Social Media */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-3 text-white">Follow Us</h5>
              <div className="flex gap-3">
                <button className="w-8 h-8 bg-green-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors">
                  <Facebook className="w-4 h-4" />
                </button>
                <button className="w-8 h-8 bg-green-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors">
                  <Twitter className="w-4 h-4" />
                </button>
                <button className="w-8 h-8 bg-green-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors">
                  <Instagram className="w-4 h-4" />
                </button>
                <button className="w-8 h-8 bg-green-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors">
                  <Linkedin className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-green-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-green-200 text-sm">
              © {currentYear} Pharma Investment. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <button className="text-green-200 hover:text-orange-400 transition-colors">
                Privacy Policy
              </button>
              <button className="text-green-200 hover:text-orange-400 transition-colors">
                Terms of Service
              </button>
              <button className="text-green-200 hover:text-orange-400 transition-colors">
                Cookie Policy
              </button>
              <button className="text-green-200 hover:text-orange-400 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Certification Strip */}
      <div className="bg-green-950 border-t border-green-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap justify-center items-center gap-8 text-xs text-green-300">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
              FDA Registered Facility
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
              ISO 9001:2015 Certified
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
              GMP Manufacturing
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
              Clinical Grade Standards
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}