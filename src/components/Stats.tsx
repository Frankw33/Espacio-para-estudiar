
export const Stats = () => {
  const stats = [
    {
      number: "15,000+",
      label: "Estudiantes activos",
      icon: "👥",
      color: "from-blue-500 to-cyan-500"
    },
    {
      number: "2,500+",
      label: "Espacios verificados",
      icon: "📍",
      color: "from-purple-500 to-pink-500"
    },
    {
      number: "50+",
      label: "Ciudades disponibles",
      icon: "🏙️",
      color: "from-orange-500 to-red-500"
    },
    {
      number: "98%",
      label: "Satisfacción garantizada",
      icon: "⭐",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            StudySpace en números
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Una comunidad creciente de jóvenes que estudian y trabajan mejor
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
