import { motion } from "framer-motion"; 

export default function Aboutme() {
    return (
        <section id="about" className="py-16 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    {/* Texto */}
                    <motion.div
                        initial={{ x: -30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ fontFamily: "'Russo One', sans-serif" }}>
                            Un poco sobre mí
                        </h2>

                        <p className="text-gray-700 leading-relaxed mb-4">
                            Comencé a los 7 años (2007) en el mundo del BMX racing y mi aventura con los viajes por Argentina empezó junto a mis padres, que siempre me acompañaron. 
                            Con el tiempo coseché triunfos provinciales y nacionales.
                        </p>

                        <p className="text-gray-700 leading-relaxed mb-4">
                            En 2010, con 9 años, obtuve mi primer título internacional (Challenger) en San Bernardo, Chile. 
                            Luego gané varios campeonatos argentinos — en total 7 veces campeón argentino — y en 2016 participé en mi primer Mundial (Challenger), quedando 6º del mundo. 
                            En 2017 en Estados Unidos fui 5º del mundo. Actualmente compito en la máxima categoría y en 2024 fui subcampeón argentino en Elites.
                        </p>

                        <div className="mt-6 flex flex-wrap gap-3">
                            <a href="#" className="inline-block px-4 py-2 bg-black text-white rounded-md font-medium shadow-sm">Ver fotos</a>
                            {/* <a href="#" className="inline-block px-4 py-2 border border-gray-300 rounded-md font-medium">Palmarés</a> */}
                        </div>
                    </motion.div>

                    {/* Galería de 4 fotos */}
                    <motion.div
                        initial={{ x: 30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        <div className="grid grid-cols-2 gap-4">
                            {['/img/latinochile.png', '/img/campeonatosargentinos.png', '/img/n6.png', '/img/subcampeon.png'].map((src, i) => (
                                <figure key={i} className="relative overflow-hidden rounded-xl shadow-lg">
                                    <img
                                        src={src}
                                        alt={`foto bmx ${i + 1}`}
                                        className="w-full h-48 object-cover transform transition-transform duration-500 hover:scale-105"
                                    />
                                    <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent text-white text-xs p-2">
                                        {i === 0 && 'San Bernardo, CHL (2010)'}
                                        {i === 1 && 'Campeonatos Argentinos'}
                                        {i === 2 && 'Mundial Challenger 2017'}
                                        {i === 3 && 'Subcampeón Argentina Elites 2024'}
                                    </figcaption>
                                </figure>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Separador animado */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.6 }}
                    className="origin-left mt-12 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 rounded"
                />
            </div>
        </section>
    );
}