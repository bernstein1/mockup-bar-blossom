
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Instagram } from 'lucide-react';

interface InstagramPost {
  id: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  media_url: string;
  permalink: string;
  caption?: string;
  thumbnail_url?: string;
}

const InstagramSection = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fallback images in case Instagram API fails
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
        // Check if we have an access token in localStorage
        const accessToken = localStorage.getItem('instagram_access_token');
        
        if (!accessToken) {
          console.log('No Instagram access token found. Please authenticate first.');
          setError('Instagram not connected. Using sample images.');
          setLoading(false);
          return;
        }

        // Fetch user's media from Instagram Basic Display API
        const response = await fetch(
          `https://graph.instagram.com/me/media?fields=id,media_type,media_url,permalink,caption,thumbnail_url&access_token=${accessToken}`
        );

        if (!response.ok) {
          throw new Error(`Instagram API error: ${response.status}`);
        }

        const data = await response.json();
        
        if (data.error) {
          throw new Error(data.error.message);
        }

        // Filter for images and videos, limit to 8 posts
        const mediaPosts = data.data
          .filter((post: InstagramPost) => 
            post.media_type === 'IMAGE' || 
            post.media_type === 'VIDEO' || 
            post.media_type === 'CAROUSEL_ALBUM'
          )
          .slice(0, 8);

        setPosts(mediaPosts);
        console.log('Successfully fetched Instagram posts:', mediaPosts.length);
        
      } catch (err) {
        console.error('Error fetching Instagram posts:', err);
        setError('Failed to load Instagram posts. Using sample images.');
      } finally {
        setLoading(false);
      }
    };

    fetchInstagramPosts();
  }, []);

  const handleInstagramAuth = () => {
    // Instagram OAuth flow
    const clientId = 'YOUR_INSTAGRAM_APP_ID'; // This needs to be set
    const redirectUri = encodeURIComponent(window.location.origin);
    const scope = 'user_profile,user_media';
    
    const authUrl = `https://api.instagram.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=code`;
    
    // For now, just show an alert since we need proper Instagram app setup
    alert('Instagram integration requires app setup. Contact developer to configure Instagram Basic Display API with your Instagram App ID and Secret.');
  };

  const displayImages = posts.length > 0 ? posts : fallbackImages.map((url, index) => ({ 
    id: `fallback-${index}`, 
    media_url: url, 
    permalink: 'https://instagram.com/rorysrooftop',
    media_type: 'IMAGE' as const
  }));

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
          {error && (
            <p className="text-sm text-muted-foreground mt-2">
              {error}
            </p>
          )}
        </div>
        
        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="aspect-square bg-muted animate-pulse rounded-lg"></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {displayImages.slice(0, 8).map((item, index) => {
              const isInstagramPost = typeof item === 'object' && 'media_url' in item;
              const imageUrl = isInstagramPost ? 
                (item.media_type === 'VIDEO' ? item.thumbnail_url || item.media_url : item.media_url) : 
                item;
              const link = isInstagramPost ? item.permalink : 'https://instagram.com/rorysrooftop';
              
              return (
                <a
                  key={item.id || index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Opens in a new tab"
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
        )}
        
        <div className="text-center space-y-4">
          <Button
            size="lg"
            className="bg-rosy-teal hover:bg-rosy-teal/90 text-white rounded-full px-8 py-4"
            aria-label="Opens in a new tab"
            onClick={() => window.open('https://instagram.com/rorysrooftop', '_blank')}
          >
            <Instagram className="w-5 h-5 mr-2" />
            FOLLOW US
          </Button>
          
          {posts.length === 0 && (
            <Button 
              variant="outline"
              size="sm"
              onClick={handleInstagramAuth}
              className="text-rosy-teal border-rosy-teal hover:bg-rosy-teal hover:text-white"
            >
              Connect Instagram Account
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
