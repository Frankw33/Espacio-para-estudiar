
export const Testimonials = () => {
  const testimonials = [
    {
      name: "María González",
      age: 22,
      role: "Estudiante de Derecho",
      content: "StudySpace cambió mi forma de estudiar. Encontré cafés increíbles cerca de la uni donde puedo concentrarme 100%. ¡Y son súper baratos!",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
      rating: 5
    },
    {
      name: "Carlos Ruiz",
      age: 24,
      role: "Freelancer",
      content: "Como freelancer necesito cambiar de ambiente. Con StudySpace puedo trabajar desde coworkings diferentes cada día sin comprometerme a mensualidades.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
      rating: 5
    },
    {
      name: "Ana Martín",
      age: 20,
      role: "Estudiante de Medicina",
      content: "Los espacios verificados me dan confianza total. Siempre encuentro lugares perfectos para mis sesiones de estudio largas. ¡Recomendadísimo!",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      rating: 5
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Lo que dicen nuestros estudiantes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Miles de jóvenes ya transformaron su forma de estudiar y trabajar
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-800 text-lg">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  <p className="text-gray-500 text-xs">{testimonial.age} años</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">⭐</span>
                ))}
              </div>
              
              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
