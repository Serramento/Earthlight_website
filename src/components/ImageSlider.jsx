import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import AmpliaConexionesLocales from "../images/WhatWeOffer/AmpliaConexionesLocales.jpeg";
import ApoyoenDestino from "../images/WhatWeOffer/ApoyoenDestino.jpeg";
import FacilidaddeReserva from "../images/WhatWeOffer/FacilidaddeReserva.jpeg";
import Flexibidad from "../images/WhatWeOffer/Flexibidad.jpeg";
import ImmersionLocal from "../images/WhatWeOffer/ImmersionLocal.jpeg";
import IntegraciondeTecnologia from "../images/WhatWeOffer/IntegraciondeTecnologia.jpeg";
import Personalizacion from "../images/WhatWeOffer/Personalizacion.jpeg";

const ImageSliderData = [
  {
    title: "Flexibilidad",
    description:
      "Creamos que ser flexible es el clave para retener y atraer talento humano aumentar la productividad. somos amantes de lo que hacemos y diseñamos su itinerario de forma flexible.",
    src: Flexibidad,
  },
  {
    title: "Personalización",
    description:
      "Trabajamos en base a sus gustos, preferencias y necesidades, asegurándose de que el viaje sea personalizado para ustedes.",
    src: Personalizacion,
  },
  {
    title: "Immersión Local",
    description: "Ofrecemos ofertas exclusivas y descuentos.",
    src: ImmersionLocal,
  },
  {
    title: "Facilidad de Reserva",
    description: "Somos accesibles.",
    src: FacilidaddeReserva,
  },
  {
    title: "Apoyo en Destino (24_7)",
    description:
      "Brindamos asistencia y apoyo durante todo el viaje, esperando que esto los brinda tranquilidad y seguridad durante su estancia en Turquía. Estamos pendientes para cualquier cosa cuando están en destino.",
    src: ApoyoenDestino,
  },
  {
    title: "Integración de Tecnología",
    description:
      "Usamos el plataforma Axus y nuestros itinerarios siempre son en español, portugués o ingles. Creamos código de barras según preferencia.",
    src: IntegraciondeTecnologia,
  },
  {
    title: "Amplia Conexiones Locales (guia en Español, experiencias etc.)",
    description: "Contamos con experiencia y conocimiento en la industria.",
    src: AmpliaConexionesLocales,
  },
];

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const length = ImageSliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(ImageSliderData) || ImageSliderData.length <= 0) {
    return null;
  }

  const ArrowButton = ({ direction, handleClick }) => (
    <FontAwesomeIcon
      icon={direction === "left" ? faChevronLeft : faChevronRight}
      size="xl"
      className="text-[#737373] hover:text-white bg-[#98B8DF] p-6 rounded-full mr-5"
      onClick={handleClick}
    />
  );

  return (
    <section className="flex justify-center items-center">
      {ImageSliderData.map((slide, index) => {
        return (
          <div key={index}>
            {index === current && (
              <div className="flex flex-col justify-center items-center md:flex-row index-0">
                <div className="hidden md:flex index-0 ml-5 mt-24 md:mt-0 md:ml-0 md:-rotate-90">
                  <ArrowButton direction="left" handleClick={prevSlide} />
                  <ArrowButton direction="right" handleClick={nextSlide} />
                </div>
                <div className="w-72 mt-5 md:w-[26rem] md:mr-10 md:text-left md:mt-10 index-0">
                  <h5 className="text-lg font-bold mt-12 md:mt-0 text-[#98B8DF] mb-3">
                    ¿QUE OFRECEMOS?
                  </h5>
                  <div className="vertical-line2 md:ml-20 mb-1"></div>
                  <div className="flex flex-col h-72 md:items-left">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#39405A] italic">
                      {slide.title}
                    </h2>
                    <h4 className="mt-4 text-lg text-[#C0BABA] index-0">
                      {slide.description}
                    </h4>
                  </div>
                </div>
                <div className="md:hidden index-0 ml-5 mb-3">
                  <ArrowButton direction="left" handleClick={prevSlide} />
                  <ArrowButton direction="right" handleClick={nextSlide} />
                </div>
                <div className="h-[15rem] w-[15rem] md:h-[20rem] md:w-[20rem] mb-20 md:mb-10 index-0 md:mt-20">
                  <img
                    src={slide.src}
                    alt="travel image"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
