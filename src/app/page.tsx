'use client';

import React, { useState, useEffect } from 'react';
import { Button } from './components/ui/button';
import { Card } from './components/ui/card';
import { 
  Sparkles, 
  Brain,
  Code,
  Palette,
  ArrowRight,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const services = [
    {
      icon: Brain,
      title: "AI Implementation",
      description: "Strategic AI solutions to improve your business operations with measurable ROI",
      price: "$597",
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Create stunning, high-performance digital experiences that transform your online presence",
      price: "$997",
    },
    {
      icon: Palette,
      title: "Enterprise Solutions",
      description: "Comprehensive AI strategy with multi-department implementation",
      price: "$2,497",
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div 
        className="fixed inset-0 opacity-20"
        style={{
          background: `
            radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgb(255, 0, 128) 0%, transparent 40%),
            radial-gradient(circle at ${mousePosition.x - 400}px ${mousePosition.y + 100}px, rgb(0, 255, 128) 0%, transparent 40%),
            radial-gradient(circle at ${mousePosition.x + 200}px ${mousePosition.y - 300}px, rgb(112, 0, 255) 0%, transparent 40%)
          `
        }}
      />

      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black bg-opacity-50 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-8 w-8 text-pink-500" />
              <span className="text-2xl font-bold">Next Logic Design and AI</span>
            </div>
            <div className="flex space-x-8">
              <Button variant="ghost" className="text-white hover:text-pink-500">Services</Button>
              <Button variant="ghost" className="text-white hover:text-pink-500">Portfolio</Button>
              <Button variant="ghost" className="text-white hover:text-pink-500">About</Button>
              <Button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white">
                Let's Talk
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 pt-20">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-bold leading-tight">
              <span className="block">Transform Your</span>
              <span className="block text-pink-500">Business with</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-500">
                Next-Gen AI
              </span>
            </h1>
            <p className="mt-8 text-xl text-gray-300 leading-relaxed">
              We blend cutting-edge AI with explosive creativity to transform your business into a digital powerhouse.
            </p>
            <div className="mt-12 flex space-x-6">
              <Button 
                className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-6 text-lg"
              >
                <span className="flex items-center">
                  Get Started
                  <ArrowRight className="ml-2" />
                </span>
              </Button>
              <Button 
                variant="outline" 
                className="border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white px-8 py-6 text-lg"
              >
                See Our Work
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.title}
                className="p-8 bg-black bg-opacity-50 backdrop-blur border-gray-800 hover:border-pink-500"
              >
                <service.icon className="h-12 w-12 text-pink-500 mb-6" />
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                  {service.price}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center">
              <Phone className="h-6 w-6 mr-3 text-pink-500" />
              <p>403-909-5123</p>
            </div>
            <div className="flex items-center">
              <Mail className="h-6 w-6 mr-3 text-pink-500" />
              <p>calgary@cyber-services.com</p>
            </div>
            <div className="flex items-center">
              <MapPin className="h-6 w-6 mr-3 text-pink-500" />
              <p>311 Candle Place SW, Calgary</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 bg-black bg-opacity-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p>&copy; 2025 Next Logic Design and AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}