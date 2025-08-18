import { Star, Quote } from 'lucide-react';
import Image from 'next/image';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "CEO, TechCorp Solutions",
      content: "Ward Rihan has transformed our office environment. The arrangements are always fresh, professional, and perfectly aligned with our brand aesthetic. Our clients consistently comment on the beautiful florals.",
      rating: 5,
      image: "https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg"
    },
    {
      name: "Michael Chen",
      title: "Facilities Manager, Global Finance Inc.",
      content: "The reliability and quality of service is exceptional. They understand our corporate needs and deliver consistently. The team is professional and the arrangements always exceed expectations.",
      rating: 5,
      image: "https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg"
    },
    {
      name: "Emily Rodriguez",
      title: "Office Manager, Creative Agency",
      content: "Working with Ward Rihan has been a game-changer for our office atmosphere. The custom arrangements reflect our creative culture while maintaining the professionalism our clients expect.",
      rating: 5,
      image: "https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what corporate leaders say about our floral services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 relative">
              <Quote className="w-8 h-8 text-emerald-600 mb-4" />
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}