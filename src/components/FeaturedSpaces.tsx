
import { MapPin, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FeaturedSpaces = () => {
  const spaces = [
    {
      id: 1,
      name: "Café Central Study",
      location: "Centro, Madrid",
      price: "5€/hora",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      amenities: ["WiFi", "Café", "Silencioso"],
      type: "Café"
    },
    {
      id: 2,
      name: "Hub Universitario",
      location: "Moncloa, Madrid",
      price: "3€/hora",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      amenities: ["WiFi", "Enchufes", "Grupos"],
      type: "Coworking"
    },
    {
      id: 3,
      name: "Biblioteca Moderna",
      location: "Salamanca, Madrid",
      price: "2€/hora",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      amenities: ["Silencio", "Libros", "Escritorio"],
      type: "Biblioteca"
    },
    {
      id: 4,
      name: "Espacio Creativo Loft",
      location: "Malasaña, Madrid",
      price: "8€/hora",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
      amenities: ["Natural", "Inspirador", "Flexible"],
      type: "Loft"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Espacios destacados
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubre los lugares favoritos de nuestra comunidad de estudiantes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {spaces.map((space) => (
            <div key={space.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="relative overflow-hidden">
                <img 
                  src={space.image} 
                  alt={space.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-800">
                    {space.type}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    ⭐ {space.rating}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{space.name}</h3>
                
                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{space.location}</span>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {space.amenities.map((amenity, index) => (
                    <span key={index} className="bg-blue-50 text-blue-700 px-2 py-1 rounded-lg text-xs font-medium">
                      {amenity}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-purple-600">
                    {space.price}
                  </div>
                  <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-xl px-6">
                    Reservar
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-xl text-lg font-semibold">
            Ver todos los espacios
          </Button>
        </div>
      </div>
    </section>
  );
};
