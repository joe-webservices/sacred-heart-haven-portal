
import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Image } from "lucide-react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?auto=format&fit=crop&w=700&q=80",
    alt: "Sacred Heart Cathedral interior"
  },
  {
    src: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?auto=format&fit=crop&w=700&q=80",
    alt: "Institute Building"
  },
  {
    src: "https://images.unsplash.com/photo-1551038247-3d9af20df552?auto=format&fit=crop&w=700&q=80",
    alt: "College Building"
  },
  {
    src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=700&q=80",
    alt: "Nature Around Institute"
  },
  {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=700&q=80",
    alt: "Scenic Campus"
  }
];

const Gallery = () => {
  return (
    <Layout>
      <div className="py-16 bg-gradient-to-b from-white to-slate-50 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-primary mb-4 font-playfair">Gallery</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">A glimpse into the beauty, tradition, and spirit of Sacred Heart Hostel and St. Joseph's College.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {images.map((img, idx) => (
              <Card key={idx} className="overflow-hidden shadow-lg group">
                <CardContent className="p-0">
                  <img 
                    src={img.src}
                    alt={img.alt}
                    className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="p-4 bg-white">
                    <div className="flex items-center gap-2 text-primary font-semibold">
                      <Image className="w-5 h-5" />
                      <span>{img.alt}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Gallery;
