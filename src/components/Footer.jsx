export const Footer = () => {
  return (
    <div className="relative mt-16 bg-deep-purple-accent-400 bg-black">
      <svg
        className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-deep-purple-accent-400"
        preserveAspectRatio="none"
        viewBox="0 0 1440 54"
      >
        <path
          fill="black"
          d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
        />
      </svg>
      <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
          <div className="md:max-w-md lg:col-span-2">
            <a
              href="/"
              aria-label="Go home"
              title="Company"
              className="inline-flex items-center"
            >
              <img
                src="/img/logodavidramirez.png"
                alt="logo"
                className="ml-2 w-35 h-12 font-bold tracking-wide text-gray-100 uppercase rounded-lg"
              />
            </a>
            <div className="mt-4 lg:max-w-sm">
              <p className="text-sm text-deep-purple-50">
                Sitio Web deportivo David Ramirez, dedicado a contar un poco de
                BMX y mi vida deportiva.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 row-gap-12 lg:col-span-4 md:grid-cols-4">
            {/* Navegación */}
            <div className="mb-6 text-center lg:text-left">
              <p className="font-semibold tracking-wide text-teal-accent-400">
                Inicio
              </p>
              <ul className="mt-4 space-y-4">
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    Sobre mí
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    Historial
                  </a>
                </li>
                <li>
                  <a
                    href="/projects"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    Paises
                  </a>
                </li>
                <li>
                  <a
                    href="/projects"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    Youtube
                  </a>
                </li>
              </ul>
            </div>

            {/* Contacto */}
            <div className="text-center lg:text-left">
              <p className="font-semibold tracking-wide text-teal-accent-400">
                Contacto
              </p>
              <ul className="mt-4 space-y-2">
                <li>
                  <span className="text-gray-100">Teléfono: </span>
                  <a
                    href="tel:3804201334"
                    className="transition-colors duration-300 text-gray-100 hover:text-teal-accent-400"
                  >
                    3804201334
                  </a>
                </li>
                <li>
                  <span className="text-gray-100">Correo: </span>
                  <a
                    href="mailto:Davidramirezw6@gmail.com"
                    className="transition-colors duration-300 text-gray-100 hover:text-teal-accent-400"
                  >
                    Davidramirezw6@gmail.com
                  </a>
                </li>
                <li>
                  <span className="text-gray-100">Instagram: </span>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-300 text-gray-100 hover:text-teal-accent-400"
                  >
                    @Davidramirez651
                  </a>
                </li>
                <li>
                  <span className="text-gray-100">Facebook: </span>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-300 text-gray-100 hover:text-teal-accent-400"
                  >
                    David Ramirez
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
