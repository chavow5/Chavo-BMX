export default function Home() {
return (
    <section
        className="relative h-screen bg-cover bg-center flex items-center justify-center text-center px-4"
        style={{ backgroundImage: "url('/img/curvapro.jpg')" }} // tu imagen en public
    >
        {/* Capa oscura para contraste */}
        <div className="bg-black-400 absolute inset-0 bg-opacity-50"></div>

        {/* Contenido */}
        <div className="relative z-10 max-w-3xl">
            <h1
                className="text-white text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-wider"
                style={{
                    fontFamily: "'Russo One', sans-serif",
                    textShadow: "2px 2px 8px rgba(0,0,0,0.9)",
                }}
            >
                David "Chavo" Ramirez
            </h1>
            <p
                className="mt-4 text-white text-base sm:text-lg md:text-xl max-w-2xl mx-auto"
                style={{
                    textShadow: "1px 1px 6px rgba(0,0,0,0.9)",
                }}
            >
                Bienvenido a mi pagina Web Deportiva, donde encontraras un poco sobre mi carrera deportiva en BMX Racing
            </p>

            {/* Botón de llamada a la acción */}
            <div className="mt-6">
                <a
                    href="#about"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300"
                >
                    Conoce más sobre mí
                </a>
            </div>
        </div>
    </section>
);
}
