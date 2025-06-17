
import { Button } from "@/components/ui/button";

export const CTA = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 to-blue-600/20"></div>
        <div className="absolute top-10 right-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            ¿Listo para estudiar
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              en grande?
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Únete a miles de estudiantes que ya transformaron su productividad. 
            Tu espacio perfecto te está esperando.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-2xl">
              Empezar ahora gratis
            </Button>
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-xl text-lg font-semibold backdrop-blur-sm">
              Ver demo
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-gray-400 text-sm">
            <span className="flex items-center">
              ✓ Registro gratuito
            </span>
            <span className="flex items-center">
              ✓ Sin compromiso
            </span>
            <span className="flex items-center">
              ✓ Cancela cuando quieras
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
