
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

const Events = () => {
  const featuredEvent = {
    id: 1,
    title: "Sunset Jazz Series",
    date: "Every Friday",
    time: "6:00 PM - 10:00 PM",
    location: "Main Rooftop",
    capacity: "80 guests",
    price: "$35",
    description: "Join us every Friday evening for live jazz performances against the backdrop of stunning Hudson River sunsets. Featuring local jazz artists and our signature cocktail pairings.",
    image: "/lovable-uploads/1667dc4a-2f5e-40a6-b4ad-fdc37bb0a6d9.png",
    category: "Music",
    featured: true
  };

  const upcomingEvents = [
    {
      id: 2,
      title: "Craft Cocktail Masterclass",
      date: "Dec 28, 2025",
      time: "7:00 PM - 9:00 PM",
      location: "Private Bar",
      capacity: "12 guests",
      price: "$85",
      description: "Learn the art of mixology from our award-winning bartenders. Create three signature cocktails while enjoying small plates.",
      image: "/lovable-uploads/502499cf-340b-4a8b-b1e1-887ba25bbb02.png",
      category: "Workshop"
    },
    {
      id: 3,
      title: "NYE Celebration",
      date: "Dec 31, 2025",
      time: "9:00 PM - 2:00 AM",
      location: "Full Venue",
      capacity: "200 guests",
      price: "$150",
      description: "Ring in the new year with panoramic city views, premium cocktails, and live DJ entertainment. Includes champagne toast at midnight.",
      image: "/lovable-uploads/28d3f1df-cef1-4af6-b8ae-417b8f7bce94.png",
      category: "Celebration"
    },
    {
      id: 4,
      title: "Wine & Paint Night",
      date: "Jan 15, 2026",
      time: "6:30 PM - 8:30 PM",
      location: "Indoor Lounge",
      capacity: "24 guests",
      price: "$65",
      description: "Unleash your creativity while sipping carefully selected wines. All materials provided, no experience necessary.",
      image: "/lovable-uploads/e35d06d6-2f7c-4043-a60a-6bc928f0b403.png",
      category: "Art"
    },
    {
      id: 5,
      title: "Brunch & Bottomless Mimosas",
      date: "Every Weekend",
      time: "11:00 AM - 3:00 PM",
      location: "Main Dining",
      capacity: "60 guests",
      price: "$45",
      description: "Indulge in our weekend brunch menu with unlimited mimosas and bloody marys. Perfect for celebrations and leisurely weekends.",
      image: "/lovable-uploads/05b8a751-a6ac-486c-9bd4-6ae70ab8a119.png",
      category: "Brunch"
    },
    {
      id: 6,
      title: "Corporate Happy Hour",
      date: "Weekdays",
      time: "5:00 PM - 7:00 PM",
      location: "Private Section",
      capacity: "40 guests",
      price: "Contact Us",
      description: "Host your team at NYC's most sophisticated rooftop. Custom packages available for corporate groups.",
      image: "/lovable-uploads/7cb26fe8-e325-48ac-9ed5-b6404609ab84.png",
      category: "Corporate"
    }
  ];

  const categories = ["All", "Music", "Workshop", "Celebration", "Art", "Brunch", "Corporate"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-rosy-navy/80 to-rosy-teal/60 z-10"></div>
        <img 
          src="/lovable-uploads/1667dc4a-2f5e-40a6-b4ad-fdc37bb0a6d9.png"
          alt="Events at Rory's Rooftop"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center text-white max-w-4xl px-4">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 animate-fade-in">
            UNFORGETTABLE
            <span className="block text-rosy-coral">EXPERIENCES</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light animate-fade-in" style={{ animationDelay: '0.2s' }}>
            From intimate gatherings to grand celebrations, discover what makes Rory's Rooftop the perfect venue
          </p>
          <Button 
            size="lg" 
            className="bg-rosy-teal hover:bg-rosy-teal/90 text-white rounded-full px-8 py-4 animate-scale-in"
            style={{ animationDelay: '0.4s' }}
          >
            VIEW ALL EVENTS
          </Button>
        </div>
      </section>

      {/* Featured Event */}
      <section className="py-20 bg-rosy-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-rosy-navy mb-4">
              FEATURED EVENT
            </h2>
          </div>
          
          <Card className="max-w-6xl mx-auto overflow-hidden shadow-2xl animate-scale-in">
            <div className="grid lg:grid-cols-2">
              <div className="relative overflow-hidden">
                <img 
                  src={featuredEvent.image}
                  alt={featuredEvent.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <Badge className="absolute top-4 left-4 bg-rosy-pink text-white">
                  {featuredEvent.category}
                </Badge>
              </div>
              <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-3xl md:text-4xl font-playfair text-rosy-navy mb-4">
                    {featuredEvent.title}
                  </CardTitle>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {featuredEvent.description}
                  </p>
                </CardHeader>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="w-5 h-5 mr-3 text-rosy-teal" />
                    <span>{featuredEvent.date}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="w-5 h-5 mr-3 text-rosy-teal" />
                    <span>{featuredEvent.time}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="w-5 h-5 mr-3 text-rosy-teal" />
                    <span>{featuredEvent.location}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Users className="w-5 h-5 mr-3 text-rosy-teal" />
                    <span>{featuredEvent.capacity}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-rosy-teal">
                    {featuredEvent.price}
                  </span>
                  <Button className="bg-rosy-teal hover:bg-rosy-teal/90 text-white">
                    RESERVE NOW
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-rosy-navy mb-8">
              UPCOMING EVENTS
            </h2>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant="outline"
                  className="rounded-full border-rosy-teal text-rosy-teal hover:bg-rosy-teal hover:text-white"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <Card 
                key={event.id} 
                className="overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <Badge className="absolute top-4 left-4 bg-rosy-pink text-white">
                    {event.category}
                  </Badge>
                  <div className="absolute top-4 right-4 bg-white/90 rounded-full p-2">
                    <span className="text-rosy-navy font-bold text-sm">{event.price}</span>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <CardTitle className="text-xl font-playfair text-rosy-navy mb-3 group-hover:text-rosy-teal transition-colors">
                    {event.title}
                  </CardTitle>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {event.description}
                  </p>
                  
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-rosy-teal" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-rosy-teal" />
                      <span>{event.time}</span>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full mt-4 bg-rosy-teal hover:bg-rosy-teal/90 text-white"
                    size="sm"
                  >
                    LEARN MORE
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
