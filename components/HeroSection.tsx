import { ArrowRight, Star } from 'lucide-react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-emerald-50 via-white to-rose-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center mb-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="ml-2 text-gray-600">Trusted by 500+ businesses worldwide</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Elevate Your
              <span className="text-emerald-600 block">Corporate Space</span>
              with Premium Florals
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Transform your business environment with our sophisticated floral arrangements. 
              From executive offices to reception areas, we create lasting impressions that reflect your brand's excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-colors flex items-center justify-center">
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-emerald-600 hover:text-emerald-600 transition-colors">
                View Portfolio
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">500+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">15+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">24/7</div>
                <div className="text-gray-600">Support</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <Image
                src="https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg"
                alt="Elegant corporate floral arrangement"
                width={600}
                height={700}
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-full h-full bg-emerald-100 rounded-2xl -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-full h-full bg-rose-100 rounded-2xl -z-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}