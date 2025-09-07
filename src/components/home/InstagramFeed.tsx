import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Instagram, Heart, MessageCircle } from 'lucide-react';

export function InstagramFeed() {
  const posts = [
    {
      image: "https://images.unsplash.com/photo-1643379850623-7eb6442cd262?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwc2tpbmNhcmUlMjBiZWF1dHklMjBwcm9kdWN0c3xlbnwxfHx8fDE3NTcxNjE3NjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      likes: 234,
      comments: 12
    },
    {
      image: "https://images.unsplash.com/photo-1648942697933-d53379119b22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwY29zbWV0aWNzJTIwbWFrZXVwJTIwcGFzdGVsfGVufDF8fHx8MTc1NzE2MTc2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      likes: 456,
      comments: 28
    },
    {
      image: "https://images.unsplash.com/photo-1630398777700-afb6d24a502d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbG9lJTIwdmVyYSUyMHBsYW50JTIwc2tpbmNhcmV8ZW58MXx8fHwxNzU3MTYxNzY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      likes: 189,
      comments: 15
    },
    {
      image: "https://images.unsplash.com/photo-1745159338135-39f6b462b382?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aXRhbWluJTIwYyUyMHNlcnVtJTIwYm90dGxlfGVufDF8fHx8MTc1NzE2MTc2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      likes: 567,
      comments: 43
    },
    {
      image: "https://images.unsplash.com/photo-1570126737049-70d237c201de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGFwcGx5aW5nJTIwc2tpbmNhcmUlMjBjcmVhbXxlbnwxfHx8fDE3NTcxNjE3Njd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      likes: 321,
      comments: 19
    },
    {
      image: "https://images.unsplash.com/photo-1610207928705-0ecd72bd4b6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWF1dHklMjBicmFuZCUyMGhlcm98ZW58MXx8fHwxNzU3MTYxNzY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      likes: 678,
      comments: 52
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-rose-25">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram className="w-8 h-8 text-rose-500" />
            <h2 className="text-3xl text-rose-900">Follow Our Journey</h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Join our community of beauty lovers and see how our products fit into real routines
          </p>
          <a 
            href="#" 
            className="text-rose-700 hover:text-rose-800 transition-colors"
          >
            @belleza_beauty
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {posts.map((post, index) => (
            <div key={index} className="relative group cursor-pointer">
              <div className="aspect-square overflow-hidden rounded-lg">
                <ImageWithFallback
                  src={post.image}
                  alt={`Instagram post ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                <div className="flex items-center gap-4 text-white">
                  <div className="flex items-center gap-1">
                    <Heart className="w-5 h-5" fill="currentColor" />
                    <span className="text-sm">{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="w-5 h-5" />
                    <span className="text-sm">{post.comments}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-3 rounded-full hover:from-pink-600 hover:to-rose-600 transition-all"
          >
            <Instagram className="w-5 h-5" />
            Follow Us on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}