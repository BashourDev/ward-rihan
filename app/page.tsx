'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, Calendar, Users, Building, Gift, Truck, Star, ArrowRight, Check, ChevronDown, ChevronUp, Search, ShoppingBag, User, Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      id: 1,
      title: "Corporate Elegance",
      subtitle: "Sophisticated floral arrangements designed exclusively for the corporate world",
      image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1200",
      cta: "Explore Collections",
      promotion: "New Client Special",
      offer: "20% OFF First Order"
    },
    {
      id: 2,
      title: "Office Subscriptions",
      subtitle: "Transform your workspace with weekly fresh flower deliveries",
      image: "https://rosaholics.com/cdn/shop/articles/1_Top_Flower_Arrangements_for_Offices_900x.jpg?v=1715759991",
      cta: "Start Subscription",
      promotion: "Limited Time",
      offer: "First Month FREE"
    },
    {
      id: 3,
      title: "Event Excellence",
      subtitle: "Memorable floral designs for your corporate events and galas",
      image: "https://i0.wp.com/gardenpartyflowers.com/wp-content/uploads/2017/08/corporate-8-seattle-u.jpg?ssl=1",
      cta: "Plan Your Event",
      promotion: "Spring Special",
      offer: "Complimentary Consultation"
    },
    {
      id: 4,
      title: "Custom Branding",
      subtitle: "Bespoke arrangements that reflect your corporate identity",
      image: "https://images.pexels.com/photos/931162/pexels-photo-931162.jpeg?auto=compress&cs=tinysrgb&w=1200",
      cta: "Get Custom Quote",
      promotion: "Enterprise Package",
      offer: "Free Brand Integration"
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const services = [
    {
      id: 'events',
      title: 'Corporate Events',
      description: 'Elegant floral arrangements for conferences, galas, and corporate celebrations',
      icon: Calendar,
      image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Custom centerpieces', 'Stage decorations', 'Welcome arrangements', 'Branded installations']
    },
    {
      id: 'subscriptions',
      title: 'Office Subscriptions',
      description: 'Regular fresh flower deliveries to enhance your workspace environment',
      icon: Building,
      image: 'https://www.planteriagroup.com/wp-content/smush-webp/2021/01/office-flowers-iStock_000020868467_Small-1.jpg.webp',
      features: ['Weekly/Monthly delivery', 'Seasonal arrangements', 'Multiple locations', 'Flexible scheduling']
    },
    {
      id: 'custom',
      title: 'Custom Branded',
      description: 'Bespoke arrangements incorporating your brand colors and corporate identity',
      icon: Users,
      image: 'https://images.pexels.com/photos/931162/pexels-photo-931162.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Brand color matching', 'Logo integration', 'Custom containers', 'Photography rights']
    },
    {
      id: 'gifting',
      title: 'Corporate Gifting',
      description: 'Professional gift solutions for clients, partners, and employees',
      icon: Gift,
      image: 'https://images.pexels.com/photos/264787/pexels-photo-264787.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Bulk ordering', 'Personalized cards', 'Scheduled delivery', 'Gift tracking']
    }
  ];

  const featuredArrangements = [
    {
      name: 'Executive Elegance',
      description: 'Premium white roses and eucalyptus',
      image: 'https://cdn.shopify.com/s/files/1/2776/7900/files/incorporating-office-flowers-into-your-workspace.jpg?v=1689671440',
      category: 'Office Collection'
    },
    {
      name: 'Corporate Sophistication',
      description: 'Mixed seasonal blooms in neutral tones',
      image: 'https://media.istockphoto.com/id/926025628/photo/floral-shop-assistant-using-laptop.jpg?s=612x612&w=0&k=20&c=fFj7NZCN2RvWjYldNgaaHqtcR0MTPIww1CjatNtvJwg=',
      category: 'Event Collection'
    },
    {
      name: 'Boardroom Brilliance',
      description: 'Minimalist orchid arrangements',
      image: 'https://www.shutterstock.com/image-photo/meeting-room-600nw-594880235.jpg',
      category: 'Signature Collection'
    },
    {
      name: 'Client Appreciation',
      description: 'Luxurious mixed bouquet',
      image: 'https://images.pexels.com/photos/264787/pexels-photo-264787.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Gifting Collection'
    }
  ];

  const corporateEvents = [
    {
      name: 'Annual Galas',
      description: 'Elegant centerpieces and grand installations',
      image: 'https://i0.wp.com/gardenpartyflowers.com/wp-content/uploads/2017/08/corporate-8-seattle-u.jpg?ssl=1'
    },
    {
      name: 'Board Meetings',
      description: 'Sophisticated arrangements for executive spaces',
      image: 'https://www.shutterstock.com/image-photo/meeting-room-600nw-594880235.jpg'
    },
    {
      name: 'Product Launches',
      description: 'Brand-aligned floral displays',
      image: 'https://images.pexels.com/photos/931162/pexels-photo-931162.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Conferences',
      description: 'Professional stage and lobby decorations',
      image: 'https://images.pexels.com/photos/169190/pexels-photo-169190.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Award Ceremonies',
      description: 'Prestigious floral arrangements',
      image: 'https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Client Dinners',
      description: 'Intimate dining table centerpieces',
      image: 'https://images.pexels.com/photos/264787/pexels-photo-264787.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Trade Shows',
      description: 'Eye-catching booth displays',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjI0MYJzuUlmBgD6A_K4IX6KUsMaDNYku6BQ&s'
    },
    {
      name: 'Office Openings',
      description: 'Grand opening celebrations',
      image: 'https://images.pexels.com/photos/1181307/pexels-photo-1181307.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const collections = [
    {
      title: 'Office Essentials',
      subtitle: 'Elevate your workspace',
      arrangements: [
        { name: 'Desk Delight', image: 'https://www.planteriagroup.com/wp-content/smush-webp/2021/01/office-flowers-iStock_000020868467_Small-1.jpg.webp' },
        { name: 'Reception Ready', image: 'https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=300' },
        { name: 'Conference Centerpiece', image: 'https://theperfectgift.ae/cdn/shop/products/51096a0b-8f60-448d-a2ac-a221f45dc38a.jpg?v=1654114546' },
        { name: 'Executive Suite', image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=300' }
      ]
    },
    {
      title: 'Event Grandeur',
      subtitle: 'Make every occasion memorable',
      arrangements: [
        { name: 'Gala Glamour', image: 'https://i0.wp.com/gardenpartyflowers.com/wp-content/uploads/2017/08/corporate-8-seattle-u.jpg?ssl=1' },
        { name: 'Conference Classic', image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=300' },
        { name: 'Launch Luxury', image: 'https://images.pexels.com/photos/931162/pexels-photo-931162.jpeg?auto=compress&cs=tinysrgb&w=300' },
        { name: 'Awards Elegance', image: 'https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=300' }
      ]
    },
    {
      title: 'Seasonal Selections',
      subtitle: 'Fresh blooms for every season',
      arrangements: [
        { name: 'Spring Awakening', image: 'https://images.pexels.com/photos/1181307/pexels-photo-1181307.jpeg?auto=compress&cs=tinysrgb&w=300' },
        { name: 'Summer Sophistication', image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=300' },
        { name: 'Autumn Ambiance', image: 'https://images.pexels.com/photos/931162/pexels-photo-931162.jpeg?auto=compress&cs=tinysrgb&w=300' },
        { name: 'Winter Wonderland', image: 'https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=300' }
      ]
    }
  ];

  const packages = [
    {
      name: 'Essential',
      description: 'Perfect for small to medium businesses',
      features: [
        'Monthly office arrangements',
        'Basic event florals',
        'Standard consultation',
        'Email support',
        'Flexible delivery scheduling'
      ],
      ideal: 'Small offices, startups, local businesses',
      popular: false
    },
    {
      name: 'Professional',
      description: 'Comprehensive solution for growing companies',
      features: [
        'Weekly office subscriptions',
        'Corporate event packages',
        'Dedicated account manager',
        'Priority support & consultation',
        'Custom branding options',
        'Multi-location delivery'
      ],
      ideal: 'Mid-size companies, regional offices',
      popular: true
    },
    {
      name: 'Enterprise',
      description: 'Full-service solution for large corporations',
      features: [
        'Unlimited arrangements',
        'Full event management',
        '24/7 dedicated support',
        'Global delivery network',
        'Custom contracts & SLAs',
        'Volume pricing benefits',
        'Quarterly business reviews'
      ],
      ideal: 'Fortune 500, multinational corporations',
      popular: false
    }
  ];

  const faqs = [
    {
      question: 'How does the package request process work?',
      answer: 'After submitting a package request, our team will contact you within 24 hours to discuss your specific needs and create a customized proposal with pricing tailored to your requirements.'
    },
    {
      question: 'What is your minimum order quantity?',
      answer: 'We accommodate orders starting from 5 arrangements for corporate events and 2 arrangements for office subscriptions.'
    },
    {
      question: 'Do you offer same-day delivery?',
      answer: 'Yes, we provide same-day delivery for orders placed before 2 PM, subject to availability and location.'
    },
    {
      question: 'Can you match our brand colors?',
      answer: 'Absolutely! Our design team specializes in creating arrangements that perfectly complement your corporate branding.'
    },
    {
      question: 'What payment terms do you offer?',
      answer: 'We offer flexible payment terms including NET 30 for established corporate accounts and various payment methods.'
    }
  ];

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-2xl font-light text-gray-900 tracking-wide">WARD RIHAN</span>
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-600 hover:text-gray-900 text-sm font-light transition-colors">Corporate Services</a>
              <a href="#collections" className="text-gray-600 hover:text-gray-900 text-sm font-light transition-colors">Collections</a>
              <a href="#packages" className="text-gray-600 hover:text-gray-900 text-sm font-light transition-colors">Packages</a>
              <a href="#about" className="text-gray-600 hover:text-gray-900 text-sm font-light transition-colors">About</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 text-sm font-light transition-colors">Contact</a>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <Search className="text-gray-600 hover:text-gray-900 cursor-pointer" size={20} />
              <User className="text-gray-600 hover:text-gray-900 cursor-pointer" size={20} />
              <ShoppingBag className="text-gray-600 hover:text-gray-900 cursor-pointer" size={20} />
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gray-900 p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#services" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Corporate Services</a>
              <a href="#collections" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Collections</a>
              <a href="#packages" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Packages</a>
              <a href="#about" className="block px-3 py-2 text-gray-600 hover:text-gray-900">About</a>
              <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Contact</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Carousel Section */}
      <section className="relative bg-gradient-to-r from-purple-900 to-purple-800 text-white overflow-hidden">
        <div className="relative h-[600px] lg:h-[700px]">
          {/* Carousel Slides */}
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="absolute inset-0">
                <Image 
                  src={slide.image} 
                  alt={slide.title} 
                  fill
                  className="object-cover opacity-30"
                  priority={index === 0}
                />
              </div>
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
                <div className="max-w-3xl">
                  {/* Promotion Badge */}
                  <div className="mb-6">
                    <span className="bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 text-sm font-light border border-white border-opacity-30 rounded-md">
                      {slide.promotion}
                    </span>
                  </div>
                  
                  {/* Offer */}
                  <div className="mb-4">
                    <span className="text-2xl lg:text-3xl font-light text-purple-200">
                      {slide.offer}
                    </span>
                  </div>

                  {/* Main Title */}
                  <h1 className="text-5xl lg:text-7xl font-light mb-6 leading-tight">
                    {slide.title.split(' ')[0]}
                    <span className="block font-normal">{slide.title.split(' ').slice(1).join(' ')}</span>
                  </h1>
                  
                  {/* Subtitle */}
                  <p className="text-xl lg:text-2xl font-light mb-8 opacity-90 leading-relaxed">
                    {slide.subtitle}
                  </p>
                  
                  {/* CTA Button */}
                  <button className="bg-white text-purple-900 px-8 py-4 text-lg font-light hover:bg-gray-100 transition-colors rounded-md">
                    {slide.cta}
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 backdrop-blur-sm p-3 hover:bg-opacity-30 transition-all duration-200 border border-white border-opacity-30 rounded-md"
          >
            <ChevronLeft className="text-white" size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 backdrop-blur-sm p-3 hover:bg-opacity-30 transition-all duration-200 border border-white border-opacity-30 rounded-md"
          >
            <ChevronRight className="text-white" size={24} />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 border border-white transition-all duration-200 rounded-full ${
                  index === currentSlide 
                    ? 'bg-white' 
                    : 'bg-transparent hover:bg-white hover:bg-opacity-50'
                }`}
              />
            ))}
          </div>

          {/* Slide Counter */}
          <div className="absolute bottom-8 right-8 text-white text-sm font-light">
            {String(currentSlide + 1).padStart(2, '0')} / {String(heroSlides.length).padStart(2, '0')}
          </div>
        </div>
      </section>

      {/* Featured Arrangements */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-4">Featured for Corporate</h2>
            <p className="text-gray-600 font-light">Curated selections for the modern workplace</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredArrangements.map((arrangement, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden bg-gray-50 mb-4 rounded-lg">
                  <Image 
                    src={arrangement.image} 
                    alt={arrangement.name} 
                    width={400}
                    height={320}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white px-3 py-1 text-xs font-light text-gray-700 rounded-md">
                      {arrangement.category}
                    </span>
                  </div>
                </div>
                <h3 className="text-lg font-light text-gray-900 mb-1">{arrangement.name}</h3>
                <p className="text-sm text-gray-600 font-light">{arrangement.description}</p>
                <button className="mt-3 text-sm text-purple-800 font-light hover:text-purple-900">
                  Request Quote
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Every Event Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-4">For Every Event</h2>
            <p className="text-gray-600 font-light max-w-2xl mx-auto">
              From intimate board meetings to grand corporate galas, we create stunning floral arrangements for every corporate occasion
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {corporateEvents.map((event, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="relative mb-6">
                  <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden bg-gray-100 group-hover:shadow-lg transition-shadow duration-300">
                    <Image 
                      src={event.image} 
                      alt={event.name} 
                      width={160}
                      height={160}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
                <h3 className="text-lg font-light text-gray-900 mb-2">{event.name}</h3>
                <p className="text-sm text-gray-600 font-light leading-relaxed">{event.description}</p>
                <button className="mt-3 text-sm text-purple-800 font-light hover:text-purple-900 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  View Options
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-purple-900 text-white px-8 py-3 font-light hover:bg-purple-800 transition-colors rounded-md">
              Plan Your Event
            </button>
          </div>
        </div>
      </section>

      {/* Collections */}
      <section id="collections" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {collections.map((collection, collectionIndex) => (
            <div key={collectionIndex} className="mb-20 last:mb-0">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h2 className="text-3xl font-light text-gray-900 mb-2">{collection.title}</h2>
                  <p className="text-gray-600 font-light">{collection.subtitle}</p>
                </div>
                <button className="text-purple-800 font-light hover:text-purple-900 flex items-center">
                  View All <ArrowRight className="ml-2" size={16} />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {collection.arrangements.map((arrangement, index) => (
                  <div key={index} className="group cursor-pointer">
                    <div className="relative overflow-hidden bg-white mb-4 shadow-sm rounded-lg">
                      <Image 
                        src={arrangement.image} 
                        alt={arrangement.name} 
                        width={300}
                        height={256}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-base font-light text-gray-900">{arrangement.name}</h3>
                    <button className="mt-2 text-sm text-purple-800 font-light hover:text-purple-900">
                      Request Quote
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-4">Corporate Services</h2>
            <p className="text-gray-600 font-light max-w-2xl mx-auto">
              Comprehensive floral solutions designed for the unique needs of modern businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={service.id} className="flex space-x-6">
                <div className="flex-shrink-0">
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    width={128}
                    height={128}
                    className="w-32 h-32 object-cover rounded-lg"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-light text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 font-light mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600 font-light">
                        <Check className="text-purple-600 mr-2" size={14} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-4 text-purple-800 font-light hover:text-purple-900 text-sm">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-4">Service Packages</h2>
            <p className="text-gray-600 font-light max-w-3xl mx-auto">
              Choose the package that best fits your business needs. Our team will create a custom proposal with pricing tailored to your requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`p-8 rounded-lg ${pkg.popular ? 'bg-purple-900 text-white' : 'bg-white border border-gray-200'}`}>
                {pkg.popular && (
                  <div className="bg-white text-purple-900 px-3 py-1 text-sm font-light mb-6 inline-block rounded-md">
                    Most Popular
                  </div>
                )}
                <h3 className={`text-2xl font-light mb-2 ${pkg.popular ? 'text-white' : 'text-gray-900'}`}>
                  {pkg.name}
                </h3>
                <p className={`mb-6 font-light ${pkg.popular ? 'text-purple-100' : 'text-gray-600'}`}>
                  {pkg.description}
                </p>
                <div className={`mb-6 p-4 rounded-md ${pkg.popular ? 'bg-purple-800' : 'bg-gray-50'}`}>
                  <p className={`text-sm font-light ${pkg.popular ? 'text-purple-100' : 'text-gray-700'}`}>
                    Ideal for: {pkg.ideal}
                  </p>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center font-light">
                      <Check className={`mr-3 ${pkg.popular ? 'text-purple-200' : 'text-purple-600'}`} size={16} />
                      <span className={pkg.popular ? 'text-purple-100' : 'text-gray-600'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 font-light transition-colors rounded-md ${
                  pkg.popular 
                    ? 'bg-white text-purple-900 hover:bg-gray-100' 
                    : 'bg-purple-900 text-white hover:bg-purple-800'
                }`}>
                  Request {pkg.name} Package
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Package Request Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-4">Request Your Custom Package</h2>
            <p className="text-gray-600 font-light">
              Tell us about your needs and we'll create a tailored proposal with competitive pricing for your business
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-light text-gray-700 mb-2">Company Name *</label>
                <input 
                  type="text" 
                  required
                  className="w-full px-4 py-3 border border-gray-200 focus:ring-1 focus:ring-purple-500 focus:border-purple-500 font-light rounded-md"
                  placeholder="Enter your company name"
                />
              </div>
              <div>
                <label className="block text-sm font-light text-gray-700 mb-2">Contact Person *</label>
                <input 
                  type="text" 
                  required
                  className="w-full px-4 py-3 border border-gray-200 focus:ring-1 focus:ring-purple-500 focus:border-purple-500 font-light rounded-md"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-light text-gray-700 mb-2">Email Address *</label>
                <input 
                  type="email" 
                  required
                  className="w-full px-4 py-3 border border-gray-200 focus:ring-1 focus:ring-purple-500 focus:border-purple-500 font-light rounded-md"
                  placeholder="your@company.com"
                />
              </div>
              <div>
                <label className="block text-sm font-light text-gray-700 mb-2">Phone Number *</label>
                <input 
                  type="tel" 
                  required
                  className="w-full px-4 py-3 border border-gray-200 focus:ring-1 focus:ring-purple-500 focus:border-purple-500 font-light rounded-md"
                  placeholder="(555) 123-4567"
                />
              </div>
              <div>
                <label className="block text-sm font-light text-gray-700 mb-2">Preferred Package *</label>
                <select required className="w-full px-4 py-3 border border-gray-200 focus:ring-1 focus:ring-purple-500 focus:border-purple-500 font-light rounded-md">
                  <option value="">Select a package</option>
                  <option value="essential">Essential Package</option>
                  <option value="professional">Professional Package</option>
                  <option value="enterprise">Enterprise Package</option>
                  <option value="custom">Custom Solution</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-light text-gray-700 mb-2">Company Size</label>
                <select className="w-full px-4 py-3 border border-gray-200 focus:ring-1 focus:ring-purple-500 focus:border-purple-500 font-light rounded-md">
                  <option value="">Select company size</option>
                  <option value="1-50">1-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="201-1000">201-1000 employees</option>
                  <option value="1000+">1000+ employees</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-light text-gray-700 mb-2">Services Needed</label>
                <div className="grid grid-cols-2 gap-4">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-purple-600 focus:ring-purple-500" />
                    <span className="ml-2 text-sm text-gray-700 font-light">Office Subscriptions</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-purple-600 focus:ring-purple-500" />
                    <span className="ml-2 text-sm text-gray-700 font-light">Corporate Events</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-purple-600 focus:ring-purple-500" />
                    <span className="ml-2 text-sm text-gray-700 font-light">Custom Branded</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-purple-600 focus:ring-purple-500" />
                    <span className="ml-2 text-sm text-gray-700 font-light">Corporate Gifting</span>
                  </label>
                </div>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-light text-gray-700 mb-2">Additional Requirements</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 focus:ring-1 focus:ring-purple-500 focus:border-purple-500 font-light rounded-md"
                  placeholder="Tell us about your specific needs, timeline, locations, budget considerations, and any other requirements..."
                />
              </div>
              <div className="md:col-span-2">
                <button 
                  type="submit"
                  className="w-full bg-purple-900 text-white py-4 px-6 font-light hover:bg-purple-800 transition-colors rounded-md"
                >
                  Submit Package Request
                </button>
                <p className="text-sm text-gray-600 font-light mt-3 text-center">
                  Our team will contact you within 24 hours to discuss your custom proposal
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 font-light">
              Quick answers to common questions about our corporate floral services
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 bg-white rounded-lg">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors rounded-lg"
                >
                  <span className="font-light text-gray-900">{faq.question}</span>
                  {expandedFaq === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-4 text-gray-600 font-light">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="mb-6">
                <span className="text-2xl font-light tracking-wide">WARD RIHAN</span>
              </div>
              <p className="text-gray-400 font-light mb-6">
                Premium corporate floral services for businesses worldwide.
              </p>
              <div className="flex space-x-4">
                <Phone size={20} className="text-gray-400" />
                <Mail size={20} className="text-gray-400" />
                <MapPin size={20} className="text-gray-400" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-light mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400 font-light">
                <li><a href="#" className="hover:text-white transition-colors">Corporate Events</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Office Subscriptions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Custom Branded</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Corporate Gifting</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-light mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400 font-light">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Collections</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-light mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400 font-light">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Account Portal</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Order Tracking</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 font-light">
            <p>&copy; 2025 WARD RIHAN. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}