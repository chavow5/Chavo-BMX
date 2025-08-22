import { motion } from "framer-motion";

export const Paises = () => {
  const countries = [
    {
      name: "Argentina",
      flag: "/flags/argentina.png",
      result: "7 veces Campeón Argentino y Subcampeón Elites 2024.",
    },
    {
      name: "Chile",
      flag: "/flags/chile.png",
      result: "1er Título Internacional (Challenger Boys 9, 2010).",
    },
    {
      name: "Estados Unidos",
      flag: "/flags/eeuu.png",
      result: "5º puesto en el Mundial 2017.",
    },
    {
      name: "Colombia",
      flag: "/flags/colombia.png",
      result: "6º puesto en el Mundial 2016.",
    },
    {
      name: "Brasil",
      flag: "/flags/brasil.png",
      result: "Medalla de Plata Panamericano Brasil",
    },
    {
      name: "Suiza",
      flag: "/flags/suiza.png",
      result: "Participación en el Centro de Alto Rendimiento UCI BMX Racing",
    },
    {
      name: "Peru",
      flag: "/flags/peru.png",
      result: "Sub Campeon Copa LatinoAmericana 2016",
    },
    {
      name: "Azerbaiyan",
      flag: "/flags/azerbaiyan.png",
      result: "Mundial de Junios men 1/4 de finales 5to puesto",
    },
    {
      name: "Belgica",
      flag: "/flags/Belgica.png",
      result: "Entrenamientos y carreras en Europa.",
    },
    {
      name: "Francia",
      flag: "/flags/francia.png",
      result: "Competencias internacionales en pistas de alto nivel.",
    },
    {
      name: "Países Bajos",
      flag: "/flags/holanda.png",
      result: "Experiencia en competencias europeas.",
    },
    {
      name: "Bélgica",
      flag: "/flags/belgica.png",
      result: "Carreras en circuitos técnicos europeos.",
    },
    {
      name: "Reino Unido",
      flag: "/flags/uk.png",
      result: "Competencia internacional en BMX Racing.",
    },
    {
      name: "Italia",
      flag: "/flags/italia.png",
      result: "Participación en torneos europeos de BMX.",
    },
  ];

  return (
    <section id="paises" className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold mb-8 text-black"
          style={{ fontFamily: "'Russo One', sans-serif" }}
        >
          Países que visité
        </motion.h2>

        <p className="text-gray-600 mb-12">
          Gracias al BMX tuve la oportunidad de recorrer el mundo y competir en
          diferentes pistas. Hasta ahora visité 14 países.
        </p>

        {/* GRID de países */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {countries.map((c, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <img
                src={c.flag}
                alt={c.name}
                className="w-50 h-16 object-contain mx-auto mb-4"
              />
              <h3 className="text-lg font-bold">{c.name}</h3>
              <p className="text-sm text-gray-600 mt-2">{c.result}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Paises;