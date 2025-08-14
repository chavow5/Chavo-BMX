// cv de competencias titulos y carreras importantes
import { motion } from "framer-motion";

export const Historial = () => {
  const timeline = [
    {
      year: "2007",
      title: "Comienzo en BMX Racing",
      description:
        "A los 7 años inicié mi camino en el BMX racing, acompañado por mis padres en cada viaje por Argentina.",
    },
    {
      year: "2010",
      title: "Primer Título Internacional",
      description:
        "Campeón Challenger categoría Boys 9 en San Bernardo, Chile.",
    },
    {
      year: "2010 - 2016",
      title: "7 veces Campeón Argentino",
      description:
        "Sumé múltiples campeonatos provinciales y nacionales, consolidándome como referente.",
    },
    {
      year: "2016",
      title: "Mundial Challenger",
      description:
        "Representé a Argentina y obtuve el puesto #6 del mundo en mi categoría.",
    },
    {
      year: "2017",
      title: "Mundial en Estados Unidos",
      description: "Me ubiqué #5 del mundo en la máxima competencia internacional.",
    },
    {
      year: "2024",
      title: "Subcampeón Argentino Elites",
      description:
        "En la máxima categoría del BMX Racing argentino, logré el subcampeonato nacional.",
    },
  ];

  return (
    <section className="px-4 py-16 mx-auto max-w-6xl" id="historial">
      <div className="max-w-2xl mb-12 text-center mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold"
          style={{ fontFamily: "'Russo One', sans-serif" }}
        >
          Mi Historial Deportivo
        </motion.h2>
        <p className="mt-4 text-gray-600">
          Un recorrido lleno de pasión, esfuerzo y dedicación sobre dos ruedas.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 lg:divide-x">
        {timeline.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 px-4"
          >
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-indigo-100 text-indigo-600 font-bold text-lg shadow-md">
              {item.year}
            </div>
            <div>
              <h6 className="text-xl font-semibold">{item.title}</h6>
              <p className="text-gray-700 text-sm">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
export default Historial;
