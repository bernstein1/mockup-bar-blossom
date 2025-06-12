
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const heroPost = {
    id: 1,
    title: "The Art of Rooftop Cocktails: A Journey Through NYC's Sky-High Scene",
    excerpt: "Discover how Rory's Rooftop is redefining the craft cocktail experience with panoramic views and innovative mixology techniques that capture the essence of the Meatpacking District.",
    author: "Sarah Mitchell",
    date: "December 15, 2025",
    readTime: "8 min read",
    category: "Cocktails",
    image: "/lovable-uploads/502499cf-340b-4a8b-b1e1-887ba25bbb02.png",
    featured: true
  };

  const featuredPosts = [
    {
      id: 2,
      title: "Weekend Brunch: Where Luxury Meets Comfort",
      excerpt: "Explore our chef's philosophy behind creating the perfect weekend brunch experience that combines elevated dining with the relaxed atmosphere of a rooftop setting.",
      author: "Chef Marcus Rodriguez",
      date: "December 12, 2025",
      readTime: "6 min read",
      category: "Brunch",
      image: "/lovable-uploads/05b8a751-a6ac-486c-9bd4-6ae70ab8a119.png"
    },
    {
      id: 3,
      title: "The High Line Connection: A Neighborhood Love Story",
      excerpt: "How our location just steps from the High Line's 14th Street entrance shapes our identity and connects us to the vibrant energy of the Meatpacking District.",
      author: "Emma Thompson",
      date: "December 10, 2025",
      readTime: "5 min read",
      category: "Neighborhood",
      image: "/lovable-uploads/28d3f1df-cef1-4af6-b8ae-417b8f7bce94.png"
    }
  ];

  const recentPosts = [
    {
      id: 4,
      title: "Sunset Hour: Capturing Magic Hour from Above",
      excerpt: "Why our rooftop offers the most spectacular sunset views in Manhattan and how we've designed our space to maximize this daily spectacle.",
      author: "David Chen",
      date: "December 8, 2025",
      readTime: "4 min read",
      category: "Views",
      image: "/lovable-uploads/1667dc4a-2f5e-40a6-b4ad-fdc37bb0a6d9.png"
    },
    {
      id: 5,
      title: "Private Events: Creating Unforgettable Moments",
      excerpt: "From intimate celebrations to corporate gatherings, discover how we transform our space to match your vision and create lasting memories.",
      author: "Lisa Park",
      date: "December 5, 2025",
      readTime: "7 min read",
      category: "Events",
      image: "/lovable-uploads/e35d06d6-2f7c-4043-a60a-6bc928f0b403.png"
    },
    {
      id: 6,
      title: "Seasonal Ingredients: Farm-to-Rooftop Philosophy",
      excerpt: "Meet our local suppliers and learn how seasonal ingredients inspire our ever-evolving menu and craft cocktail program.",
      author: "Chef Marcus Rodriguez",
      date: "December 2, 2025",
      readTime: "6 min read",
      category: "Ingredients",
      image: "/lovable-uploads/7cb26fe8-e325-48ac-9ed5-b6404609ab84.png"
    }
  ];

  const categories = ["All", "Cocktails", "Brunch", "Neighborhood", "Views", "Events", "Ingredients"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-rosy-navy/90 to-rosy-teal/70 z-10"></div>
        <img 
          src="/lovable-uploads/502499cf-340b-4a8b-b1e1-887ba25bbb02.png"
          alt="Rory's Rooftop Blog"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center text-white max-w-4xl px-4">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 animate-fade-in">
            STORIES FROM
            <span className="block text-rosy-coral">THE ROOFTOP</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Discover the inspiration, stories, and passion behind Rory's Rooftop experience
          </p>
        </div>
      </section>

      {/* Hero Post */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-6xl mx-auto overflow-hidden shadow-2xl animate-scale-in">
            <div className="grid lg:grid-cols-5">
              <div className="lg:col-span-3 relative overflow-hidden">
                <img 
                  src={heroPost.image}
                  alt={heroPost.title}
                  className="w-full h-full object-cover min-h-[400px] transition-transform duration-700 hover:scale-105"
                />
                <Badge className="absolute top-6 left-6 bg-rosy-pink text-white text-sm px-3 py-1">
                  {heroPost.category}
                </Badge>
              </div>
              <CardContent className="lg:col-span-2 p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    <span>{heroPost.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{heroPost.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{heroPost.readTime}</span>
                  </div>
                </div>
                
                <CardTitle className="text-2xl md:text-3xl font-playfair text-rosy-navy mb-4 leading-tight">
                  {heroPost.title}
                </CardTitle>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {heroPost.excerpt}
                </p>
                
                <Button className="bg-rosy-teal hover:bg-rosy-teal/90 text-white w-fit group">
                  READ FULL STORY
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 bg-rosy-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-rosy-navy mb-4">
              FEATURED STORIES
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {featuredPosts.map((post, index) => (
              <Card 
                key={post.id} 
                className="overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-xl animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <Badge className="absolute top-4 left-4 bg-rosy-teal text-white">
                    {post.category}
                  </Badge>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <CardTitle className="text-xl font-playfair text-rosy-navy mb-3 group-hover:text-rosy-teal transition-colors leading-tight">
                    {post.title}
                  </CardTitle>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-rosy-navy mb-8">
              RECENT STORIES
            </h2>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant="outline"
                  size="sm"
                  className="rounded-full border-rosy-teal text-rosy-teal hover:bg-rosy-teal hover:text-white"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
              <article 
                key={post.id} 
                className="group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <Badge className="absolute top-4 left-4 bg-rosy-pink text-white text-xs">
                    {post.category}
                  </Badge>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-playfair text-rosy-navy group-hover:text-rosy-teal transition-colors leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <Button 
                    variant="ghost" 
                    className="text-rosy-teal hover:text-rosy-teal/80 p-0 h-auto font-medium group"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </article>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              variant="outline"
              className="border-rosy-teal text-rosy-teal hover:bg-rosy-teal hover:text-white rounded-full px-8"
            >
              LOAD MORE STORIES
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
