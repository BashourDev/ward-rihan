import Image from 'next/image';

export default function PortfolioSection() {
  const portfolioItems = [
    {
      title: "Executive Office Suite",
      description: "Sophisticated arrangements for C-level offices",
      image: "https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg",
      category: "Executive"
    },
    {
      title: "Reception Area Design",
      description: "Welcoming displays that make lasting first impressions",
      image: "https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg",
      category: "Reception"
    },
    {
      title: "Conference Room Centerpieces",
      description: "Professional arrangements for important meetings",
      image: "https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg",
      category: "Conference"
    },
    {
      title: "Corporate Event Florals",
      description: "Stunning displays for company celebrations",
      image: "https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg",
      category: "Events"
    },
    {
      title: "Lobby Installations",
      description: "Grand arrangements for corporate lobbies",
      image: "https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg",
      category: "Lobby"
    },
    {
      title: "Seasonal Collections",
      description: "Rotating displays that celebrate each season",
      image: "https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg",
      category: "Seasonal"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we've transformed corporate spaces with our premium floral designs and installations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors">
            View Full Portfolio
          </button>
        </div>
      </div>
    </section>
  );
}