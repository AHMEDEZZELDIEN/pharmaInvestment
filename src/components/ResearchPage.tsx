import { useState } from 'react';
import { Calendar, Clock, User, ArrowLeft, ChevronRight, Search } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ResearchPageProps {
  onNavigate: (page: string) => void;
}

export function ResearchPage({ onNavigate }: ResearchPageProps) {
  const [selectedCategory, setSelectedCategory] = useState('All Research');
  const [searchTerm, setSearchTerm] = useState('');

  const featuredArticle = {
    id: '1',
    title: 'Revolutionary Clinical Trial Results: New Peptide Complex Shows 94% Improvement in Skin Barrier Function',
    excerpt: 'Our latest double-blind, placebo-controlled study reveals unprecedented results in dermal regeneration using advanced peptide technology.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnwwfHx8fDE3NTcxODIwMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    date: '2024-03-15',
    author: 'Dr. Maria Rossi, PhD',
    category: 'Clinical Research',
    readTime: '8 min read'
  };

  const researchArticles = [
    {
      id: '2',
      title: 'FDA Approval Process: Understanding Clinical Grade Skincare Standards',
      excerpt: 'Comprehensive guide to pharmaceutical-grade skincare regulations and quality control measures.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnwwfHx8fDE3NTcxODIwMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      date: '2024-03-10',
      author: 'Dr. Giuseppe Bianchi',
      category: 'Regulatory Science',
      readTime: '6 min read'
    },
    {
      id: '3',
      title: 'Breakthrough in Retinoid Technology: Micro-Encapsulation for Enhanced Delivery',
      excerpt: 'Latest advances in pharmaceutical delivery systems for improved skin penetration and reduced irritation.',
      image: 'https://images.unsplash.com/photo-1582560469781-1965b9af903d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnwwfHx8fDE3NTcxODIwMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      date: '2024-03-08',
      author: 'Dr. Elena Ferrari, PharmD',
      category: 'Drug Delivery',
      readTime: '10 min read'
    },
    {
      id: '4',
      title: 'Dermatologist-Recommended Protocols: Evidence-Based Treatment Pathways',
      excerpt: 'Clinical protocols developed in collaboration with leading dermatologists for optimal patient outcomes.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnwwfHx8fDE3NTcxODIwMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      date: '2024-03-05',
      author: 'Dr. Andrea Conti, MD',
      category: 'Clinical Practice',
      readTime: '12 min read'
    },
    {
      id: '5',
      title: 'Hyaluronic Acid Molecular Weight Studies: Optimizing Skin Hydration',
      excerpt: 'Comparative analysis of different molecular weights of hyaluronic acid and their clinical applications.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnwwfHx8fDE3NTcxODIwMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      date: '2024-03-01',
      author: 'Dr. Luca Romano, PhD',
      category: 'Molecular Research',
      readTime: '7 min read'
    },
    {
      id: '6',
      title: 'Anti-Aging Peptides: Clinical Efficacy and Mechanism of Action',
      excerpt: 'In-depth analysis of peptide complexes used in anti-aging formulations and their proven benefits.',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnwwfHx8fDE3NTcxODIwMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      date: '2024-02-28',
      author: 'Dr. Francesca Marino, PharmD',
      category: 'Anti-Aging Research',
      readTime: '9 min read'
    },
    {
      id: '7',
      title: 'Clinical Trial: Vitamin C Stability in Advanced Formulations',
      excerpt: '12-week double-blind study on novel vitamin C delivery systems and their impact on skin brightness.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnwwfHx8fDE3NTcxODIwMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      date: '2024-02-25',
      author: 'Dr. Roberto Silva, PhD',
      category: 'Clinical Research',
      readTime: '11 min read'
    },
    {
      id: '8',
      title: 'European Cosmetics Regulation: New Guidelines for Active Ingredients',
      excerpt: 'Latest updates on EU regulations affecting pharmaceutical-grade cosmetic formulations and market approval.',
      image: 'https://images.unsplash.com/photo-1582560469781-1965b9af903d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnwwfHx8fDE3NTcxODIwMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      date: '2024-02-20',
      author: 'Dr. Carmen Torres, LLM',
      category: 'Regulatory Science',
      readTime: '8 min read'
    }
  ];

  const categories = [
    'All Research',
    'Clinical Research',
    'Regulatory Science',
    'Drug Delivery',
    'Clinical Practice',
    'Molecular Research',
    'Anti-Aging Research'
  ];

  // Filter articles based on selected category and search term
  const filteredArticles = researchArticles.filter(article => {
    const matchesCategory = selectedCategory === 'All Research' || article.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.author.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  // Get article count for each category
  const getCategoryCount = (category: string) => {
    if (category === 'All Research') return researchArticles.length;
    return researchArticles.filter(article => article.category === category).length;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50/30 to-orange-50/20">
      {/* Header */}
      <div className="bg-white border-b border-green-200">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center gap-4 mb-6">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => onNavigate('home')}
              className="text-green-600 hover:text-green-700"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </div>
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-green-800 mb-4">
              Clinical Research & Scientific Publications
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Stay updated with the latest breakthroughs in pharmaceutical skincare, clinical trials, 
              and evidence-based dermatological research from our team of scientists and medical professionals.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
            <Input
              type="text"
              placeholder="Search articles, authors, or topics..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white border-green-200 focus:border-orange-500 focus:ring-orange-500/20"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card className="mb-6 border-green-200">
                <CardHeader>
                  <CardTitle className="text-lg text-green-800">Research Categories</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-200 flex items-center justify-between ${
                        selectedCategory === category
                          ? 'bg-green-100 text-green-700 shadow-sm' 
                          : 'text-slate-600 hover:bg-green-50 hover:text-green-600'
                      }`}
                    >
                      <span>{category}</span>
                      <Badge variant="secondary" className="text-xs bg-green-50 text-green-600">
                        {getCategoryCount(category)}
                      </Badge>
                    </button>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle className="text-lg text-green-800">Newsletter</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 mb-4">
                    Get weekly updates on our latest research findings and clinical studies.
                  </p>
                  <div className="space-y-3">
                    <Input
                      type="email"
                      placeholder="Your email address"
                      className="w-full bg-green-50 border-green-200 focus:border-orange-500 focus:ring-orange-500/20"
                    />
                    <Button className="w-full bg-green-700 hover:bg-green-800">
                      Subscribe
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Article */}
            {selectedCategory === 'All Research' && searchTerm === '' && (
              <Card className="mb-8 overflow-hidden border-green-200 shadow-lg">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <ImageWithFallback
                      src={featuredArticle.image}
                      alt={featuredArticle.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge className="bg-orange-100 text-orange-700">Featured</Badge>
                      <Badge variant="outline" className="text-green-600 border-green-200">
                        {featuredArticle.category}
                      </Badge>
                    </div>
                    <h2 className="text-2xl font-bold text-green-800 mb-3 leading-tight">
                      {featuredArticle.title}
                    </h2>
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      {featuredArticle.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(featuredArticle.date).toLocaleDateString('en-US', { 
                          month: 'long', 
                          day: 'numeric', 
                          year: 'numeric' 
                        })}
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {featuredArticle.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featuredArticle.readTime}
                      </div>
                    </div>
                    <Button className="bg-green-700 hover:bg-green-800">
                      Read Full Article
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </Card>
            )}

            {/* Results Summary */}
            <div className="mb-6">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-green-800">
                  {selectedCategory === 'All Research' ? 'Recent Publications' : `${selectedCategory} Articles`}
                </h3>
                <span className="text-sm text-slate-500">
                  {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''} found
                </span>
              </div>
              {searchTerm && (
                <p className="text-sm text-slate-600 mt-2">
                  Showing results for "<span className="font-medium text-green-700">{searchTerm}</span>"
                </p>
              )}
            </div>

            {/* Articles Grid */}
            <div className="space-y-6">
              {filteredArticles.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-6">
                  {filteredArticles.map((article) => (
                    <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 border-green-200 hover:border-green-300">
                      <div className="aspect-video overflow-hidden">
                        <ImageWithFallback
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge variant="outline" className="text-green-600 border-green-200">
                            {article.category}
                          </Badge>
                        </div>
                        <h4 className="text-lg font-semibold text-green-800 mb-2 leading-tight hover:text-green-700 transition-colors">
                          {article.title}
                        </h4>
                        <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                          {article.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-xs text-slate-500">
                          <div className="flex items-center gap-3">
                            <span>{article.author}</span>
                            <span>•</span>
                            <span>{new Date(article.date).toLocaleDateString('en-US', { 
                              month: 'short', 
                              day: 'numeric' 
                            })}</span>
                          </div>
                          <span>{article.readTime}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-medium text-green-800 mb-2">No articles found</h3>
                  <p className="text-slate-600 mb-4">
                    Try adjusting your search terms or selecting a different category.
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('All Research');
                    }}
                    className="text-green-600 border-green-200 hover:bg-green-50"
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>

            {/* Load More */}
            {filteredArticles.length > 0 && (
              <div className="text-center mt-12">
                <Button variant="outline" className="text-green-600 border-green-200 hover:bg-green-50">
                  Load More Articles
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}