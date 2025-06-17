
import { Search, Calendar, User } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: "Busca",
      description: "Encuentra el espacio perfecto cerca de ti con nuestros filtros inteligentes",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Calendar,
      title: "Reserva",
      description: "Reserva por horas, días o semanas. Pago seguro en 30 segundos",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: User,
      title: "Estudia",
      description: "Llega, preséntate y comienza a ser más productivo que nunca",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            ¿Cómo funciona?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tres pasos simples para encontrar tu espacio ideal y aumentar tu productividad
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} p-4 mb-6 mx-auto shadow-lg`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-gray-300 to-gray-200 z-10"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
