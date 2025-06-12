
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Instagram } from 'lucide-react';

interface InstagramPost {
  id: string;
  media_type: string;
  media_url: string;
  permalink: string;
  caption?: string;
}

const InstagramSection = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fallback images in case Instagram API is not configured
  const fallbackImages = [
    '/lovable-uploads/05b8a751-a6ac-486c-9bd4-6ae70ab8a119.png',
    '/lovable-uploads/502499cf-340b-4a8b-b1e1-887ba25bbb02.png',
    '/lovable-uploads/28d3f1df-cef1-4af6-b8ae-417b8f7bce94.png',
    '/lovable-uploads/1667dc4a-2f5e-40a6-b4ad-fdc37bb0a6d9.png',
    '/lovable-uploads/502499cf-340b-4a8b-b1e1-887ba25bbb02.png',
    '/lovable-uploads/e35d06d6-2f7c-4043-a60a-6bc928f0b403.png',
    '/lovable-uploads/7cb26fe8-e325-48ac-9ed5-b6404609ab84.png',
    '/lovable-uploads/502499cf-340b-4a8b-b1e1-887ba25bbb02.png'
  ];

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        // You'll need to set up Instagram Basic Display API
        // For now, we'll use fallback images
        console.log('Instagram API not configured, using fallback images');
        setLoading(false);
      } catch (err) {
        console.error('Error fetching Instagram posts:', err);
        setError('Failed to load Instagram posts');
        setLoading(false);
      }
    };

    fetchInstagramPosts();
  }, []);

  const displayImages = posts.length > 0 ? posts.slice(0, 8) : fallbackImages;

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-rosy-teal mb-4">
            FOLLOW US ON INSTAGRAM
          </h2>
          <p className="text-lg text-muted-foreground">
            @rorysrooftop
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {displayImages.map((item, index) => {
            const isInstagramPost = typeof item === 'object';
            const imageUrl = isInstagramPost ? item.media_url : item;
            const link = isInstagramPost ? item.permalink : 'https://instagram.com/rorysrooftop';
            
            return (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-square overflow-hidden rounded-lg group cursor-pointer animate-scale-in hover:opacity-90 transition-opacity"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img 
                  src={imageUrl}
                  alt={`Instagram post ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </a>
            );
          })}
        </div>
        
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-rosy-teal hover:bg-rosy-teal/90 text-white rounded-full px-8 py-4"
            onClick={() => window.open('https://instagram.com/rorysrooftop', '_blank')}
          >
            <Instagram className="w-5 h-5 mr-2" />
            FOLLOW US
          </Button>
        </div>
        
        {error && (
          <div className="text-center mt-4 text-sm text-muted-foreground">
            {error}
          </div>
        )}
      </div>
    </section>
  );
};

export default InstagramSection;
