import { Clock, Users, Shield, Award } from 'lucide-react';

export default function CorporateFeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Corporate Leaders Choose Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We understand the unique demands of corporate environments and deliver exceptional service that exceeds expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-200 transition-colors">
              <Clock className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Reliable Scheduling</h3>
            <p className="text-gray-600">
              Consistent, on-time delivery and maintenance schedules that align with your business operations.
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-200 transition-colors">
              <Users className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Professional Team</h3>
            <p className="text-gray-600">
              Certified florists and trained staff who understand corporate etiquette and professionalism.
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-200 transition-colors">
              <Shield className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Guarantee</h3>
            <p className="text-gray-600">
              100% satisfaction guarantee with immediate replacement for any arrangements that don't meet standards.
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-200 transition-colors">
              <Award className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Award-Winning Service</h3>
            <p className="text-gray-600">
              Recognized industry leader with multiple awards for excellence in corporate floral services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}