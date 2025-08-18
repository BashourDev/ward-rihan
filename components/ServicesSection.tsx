import { Leaf, Building2, Crown, CheckCircle, Flower } from 'lucide-react';

interface ServicesSectionProps {
  onCustomBouquetClick: () => void;
}

export default function ServicesSection({ onCustomBouquetClick }: ServicesSectionProps) {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Premium Service Packages</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our carefully crafted service packages designed to meet the unique needs of your business environment.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Essential Package */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Essential</h3>
              <p className="text-gray-600 mb-6">Perfect for small offices and reception areas</p>
              <div className="text-4xl font-bold text-gray-900 mb-6">$299<span className="text-lg font-normal text-gray-500">/month</span></div>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Weekly fresh arrangements</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">2-3 locations covered</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Seasonal variety</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Basic maintenance</span>
                </li>
              </ul>
              <button className="w-full bg-emerald-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-emerald-700 transition-colors">
                Get Started
              </button>
            </div>
          </div>

          {/* Professional Package */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-emerald-500 hover:shadow-2xl transition-all duration-300 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold">Most Popular</span>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building2 className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Professional</h3>
              <p className="text-gray-600 mb-6">Ideal for corporate offices and client-facing spaces</p>
              <div className="text-4xl font-bold text-gray-900 mb-6">$599<span className="text-lg font-normal text-gray-500">/month</span></div>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Bi-weekly premium arrangements</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">5-8 locations covered</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Custom color schemes</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Full maintenance included</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Event arrangements</span>
                </li>
              </ul>
              <button className="w-full bg-emerald-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-emerald-700 transition-colors">
                Get Started
              </button>
            </div>
          </div>

          {/* Enterprise Package */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Crown className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
              <p className="text-gray-600 mb-6">Comprehensive solution for large corporations</p>
              <div className="text-4xl font-bold text-gray-900 mb-6">$1,299<span className="text-lg font-normal text-gray-500">/month</span></div>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Weekly luxury arrangements</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Unlimited locations</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Dedicated account manager</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">24/7 support</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Custom installations</span>
                </li>
              </ul>
              <button className="w-full bg-emerald-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-emerald-700 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>

        {/* Custom Bouquet CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-2xl p-8 border border-rose-200">
            <div className="max-w-2xl mx-auto">
              <div className="w-20 h-20 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Flower className="w-10 h-10 text-rose-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Create Your Perfect Bouquet</h3>
              <p className="text-lg text-gray-600 mb-8">
                Design a custom arrangement with our interactive bouquet builder. Choose from premium flowers, 
                colors, and containers to create something truly unique for your special occasion.
              </p>
              <button 
                onClick={onCustomBouquetClick}
                className="bg-rose-600 text-white py-4 px-8 rounded-lg font-semibold hover:bg-rose-700 transition-colors flex items-center justify-center gap-3 mx-auto text-lg"
              >
                <Flower className="w-6 h-6" />
                Start Creating Your Bouquet
              </button>
              <p className="text-sm text-gray-500 mt-4">Starting from $89 • Real-time pricing • No commitment required</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}