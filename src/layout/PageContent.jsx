import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Alacati from "../images/KayanFotolar/Alacati.jpg";
import CappadociaLandscape from "../images/KayanFotolar/CappadociaLandscape.jpg";
import cappadociaReligiousHistory from "../images/KayanFotolar/cappadociaReligiousHistory.jpg";
import EphesusCelsiusLibrary from "../images/KayanFotolar/EphesusCelsiusLibrary.jpg";
import EphesusRuins from "../images/KayanFotolar/EphesusRuins.jpg";
import HouseofVirginMary from "../images/KayanFotolar/HouseofVirginMary.jpg";
import SpiceBazaar from "../images/KayanFotolar/SpiceBazaar.jpg";
import HagiaSophia from "../images/KayanFotolar/HagiaSophia.jpg";
import TurkishFood from "../images/KayanFotolar/TurkishFood.jpg";
import KariyeMuseum from "../images/KayanFotolar/KariyeMuseum.jpg";
import Gulet from "../images/KayanFotolar/Gulet.jpg";
import Marmaris from "../images/KayanFotolar/Marmaris.jpg";
import Bodrum from "../images/KayanFotolar/Bodrum.png";
import Dilara from "../images/WhoWeAre/Dilara.png";
import Ugur from "../images/WhoWeAre/Ugur.png";
import InstagramContent from "../components/InstagramContent";
import ContactForm from "../components/ContactForm";
import ImageSlider from "../components/ImageSlider";
import ImageSlider2 from "../components/ImageSlider2";
import ImageSlider3 from "../components/ImageSlider3";
import AmpliaConexionesLocales from "../images/WhatWeOffer/AmpliaConexionesLocales.jpeg";
import ApoyoenDestino from "../images/WhatWeOffer/ApoyoenDestino.jpeg";
import FacilidaddeReserva from "../images/WhatWeOffer/FacilidaddeReserva.jpeg";
import Flexibidad from "../images/WhatWeOffer/Flexibidad.jpeg";
import ImmersionLocal from "../images/WhatWeOffer/ImmersionLocal.jpeg";
import IntegraciondeTecnologia from "../images/WhatWeOffer/IntegraciondeTecnologia.jpeg";
import Personalizacion from "../images/WhatWeOffer/Personalizacion.jpeg";
import CataDeVino from "../images/Carousel/CataDeVino.jpg";
import CeramoniaDeLosDerviches from "../images/Carousel/CeramoniaDeLosDerviches.jpg";
import ClaseDeCocinaPrivada from "../images/Carousel/ClaseDeCocinaPrivada.jpg";
import DesayunaConLosGlobos from "../images/Carousel/DesayunaConLosGlobos.jpg";
import ExperienciaDeBicicletaEnCapadocia from "../images/Carousel/ExperienciaDeBicicletaEnCapadocia.jpg";
import ExperienciaDeBañoTurco from "../images/Carousel/ExperienciaDeBañoTurco.png";
import HelicopteroViajePorEncimaDeEstambul from "../images/Carousel/HelicopteroViajePorEncimaDeEstambul.jpg";
import ViajeEnGoleta from "../images/Carousel/ViajeEnGoleta.jpg";
import VisitaPrivadaDelAzoteaDeGranBazar from "../images/Carousel/VisitaPrivadaDelAzoteaDeGranBazar.jpeg";

const InstagramData = [
  {
    title: "Swissotel The Bosphorus",
    description:
      "Swissotel The Bosphorus, Istanbul is a five-star luxury hotel right in the centre of Istanbul on the European banks of the Bosphorus. Nestled within 65 acres of historical gardens with world-class shopping and vibrant nightlife nearby, it offers 566 guest rooms and suites, featuring state-of-the-art technology and exclusive amenities.",
    href: "https://www.instagram.com/p/DC6QTwjg-0S/?img_index=1",
  },
  {
    title: "Istanbul, Turkiye",
    description:
      "Anchored on the European shores of the Bosphorus strait in a historical building from the 1930’s, Shangri-La Bosphorus sits in the Beşiktaş district and is only a 15 minute walk from the iconic Dolmabahçe Palace. Guests will find solace in chandelier-accented rooms and suites accentuated by soothing cool tones, inspired by palatial...",
    href: "https://www.instagram.com/reel/DBGqTa5AMu9/",
  },
  {
    title: "Rixos Tersane Istanbul",
    description:
      "Nestled along the Haliç, Rixos Tersane Istanbul epitomises unmatched guest experiences and service excellence. Dedicated to redefining Istanbul’s lifestyle scene, the hotel is an eclectic fusion, creating an urban hotspot and lifestyle hub with panoramic views of the Haliç. Situated in Istanbul’s historic Tersane district along the Golden Horn...",
    href: "https://www.instagram.com/p/DAGe8iyoIJ0/?img_index=1",
  },
];

const imageSliderData = [
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

const ImageSliderData2 = [
  {
    title: "Helicoptero Viaje por Encima de Estambul",
    src: HelicopteroViajePorEncimaDeEstambul,
    alt: "HelicopteroViajePorEncimaDeEstambul",
  },
  {
    title: "Desayuno con Globos",
    src: DesayunaConLosGlobos,
    alt: "DesayunaConLosGlobos",
  },
  {
    title: "Ceramonia de Los Derviches",
    src: CeramoniaDeLosDerviches,
    alt: "CeramoniaDeLosDerviches",
  },
  {
    title: "Clase de Cocina Privada",
    src: ClaseDeCocinaPrivada,
    alt: "ClaseDeCocinaPrivada",
  },
  {
    title: "Experiencia de Bicicleta en Capadocia",
    src: ExperienciaDeBicicletaEnCapadocia,
    alt: "ExperienciaDeBicicletaEnCapadocia",
  },
  {
    title: "Experiencia de Baño Turco",
    src: ExperienciaDeBañoTurco,
    alt: "ExperienciaDeBañoTurco",
  },
  {
    title: "Cata de Vino",
    src: CataDeVino,
  },
  {
    title: "Viaje en Goleta",
    src: ViajeEnGoleta,
    alt: "ViajeEnGoleta",
  },
  {
    title: "Visita Privada del Azotea de Gran Bazar",
    src: VisitaPrivadaDelAzoteaDeGranBazar,
    alt: "VisitaPrivadaDelAzoteaDeGranBazar",
  },
];

export default function PageContent(props) {
  return (
    <div className="max-w-md md:max-w-7xl">
      {/* About Us */}
      <section
        className="w-screen bg-[#FAFAFA] md:bg-white"
        ref={props.aboutUsRef}
      >
        <div className="px-7 md:px-36 ">
          <div className="text-center px-4 pb-12 py-20 md:pb-24 bg-white md:bg-[#FAFAFA]">
            <h5 className="text-lg font-bold pb-3 text-[#98B8DF] md:text-center">
              SOBRE NOSOTROS
            </h5>
            <div className="vertical-line2 mb-1"></div>
            <h2 className="text-5xl mb-10 font-bold text-[#39405A] italic">
              Somos su Socia Local en Turquia
            </h2>
            <p className="mt-4 text-lg text-[#C0BABA] md:px-24">
              Contarán con nosotros para crear sus itinerarios y poder dejar
              todo en manos de nuestro equipo dedicado y profesional. ¡Le
              aseguramos que nuestro apasionado equipo estará a su disposición
              para hacer realidad sus sueños! Somos una empresa de Agencia de
              Viajes de lujo ubicada en Estambul que ofrece un servicio
              impecable a sus estimados huéspedes de todo el mundo. Creamos
              experiencias de viaje exquisitas y nos ocupamos de cada aspecto de
              sus necesidades para que su viaje sea el más memorable.
            </p>
          </div>
        </div>
      </section>

      {/* Kayan Fotolar */}
      <section className="w-screen">
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 5,
            },
          }}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          speed={5000}
          loop={true}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <img src={HagiaSophia} alt="HagiaSophia" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Alacati} alt="Alacati" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Bodrum} alt="Bodrum" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Marmaris} alt="Marmaris" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Gulet} alt="Gulet" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={TurkishFood} alt="TurkishFood" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={CappadociaLandscape} alt="CappadociaLandscape" />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={cappadociaReligiousHistory}
              alt="cappadociaReligiousHistory"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img src={EphesusCelsiusLibrary} alt="EphesusCelsiusLibrary" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={KariyeMuseum} alt="KariyeMuseum" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={EphesusRuins} alt="EphesusRuins" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={HouseofVirginMary} alt="HouseofVirginMary" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={SpiceBazaar} alt="SpiceBazaar" />
          </SwiperSlide>
        </Swiper>
      </section>

      {/* What We Offer */}
      <section className="w-screen" ref={props.servicesRef}>
        <div className="md:bg-[#FAFAFA] md:mx-36 md:py-20 px-4 sm:px-6 lg:px-8 text-center">
          <ImageSlider
            imageSliderData={imageSliderData}
            title="¿QUE OFRECEMOS?"
            css="text-lg font-bold mt-12 md:mt-0 text-[#98B8DF] mb-3"
            css2="flex flex-col h-72 md:items-left"
          />
        </div>
      </section>

      {/* Carousel */}
      <section className="">
        <ImageSlider2 imageSlider={ImageSliderData2} />
      </section>

      {/* Who we are */}
      <section className="py-20 bg-[#FAFAFA] w-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h5 className="text-lg font-bold pb-3 text-[#98B8DF] md:text-left md:ml-36">
              ¿QUIENES SOMOS?
            </h5>
            <div className="vertical-line2 mb-1 md:ml-56"></div>
            <div>
              <div className="flex flex-col mb-3 px-5 items-center justify-center md:flex-row md:mx-20">
                <img src={Dilara} alt="Dilara" className="w-60 mb-5 md:mr-10" />
                <div>
                  <h5 className="text-lg font-bold text-[#39405A] md:text-left">
                    Dilara Bayramoglu
                  </h5>
                  <p className="text-lg text-[#39405A] md:text-left italic">
                    Creativa de la Marca
                  </p>
                  <p className="mt-3 text-md text-[#C0BABA] md:text-left">
                    ¡Hola! Soy Dilara. Me gradué del Liceo Francés Sainte
                    Pulchérie y termine mis estudios en la Universidad de
                    Istanbul sobre traducción Francés y Español.  Después de
                    graduarme tuve oportunidad de empezar con el sector turismo
                    en el segmento de lujo y llevo más de 15 años trabajando con
                    las agencias de viajes más reconocidas de Sudamérica, Mexico
                    y el Caribe brindando un servicio personalizado. Participé
                    en varios eventos internacionales como Travel Week, ILTM São
                    Paulo, Virtuoso Events y Virtuoso Roadshows en Mexico y Pure
                    Life Experiences en Marruecos. Me gusta conocer las
                    diferentes culturas y expectativas de mis futuros ‘posibles’
                    viajeros. Estamos ofreciendo experiencias extraordinarias en
                    todo Turquía. Soy perfeccionista, detallista y amante de
                    explorar las últimas tendencias. Y siempre  me fascina tener
                    buenos comentarios de los huéspedes. Me consideró ser una
                    persona empática y creo firmemente que es una de las claves
                    para cumplir los sueños de los que viajarán a Turquía
                    conmigo.
                  </p>
                </div>
              </div>
              <div className="vertical-line2 mb-1 md:ml-56"></div>
              <div className="flex flex-col items-center justify-center px-5 md:flex-row md:mx-20">
                <img src={Ugur} alt="Ugur" className="w-60 mb-5 md:mr-10" />
                <div>
                  <h5 className="text-lg font-bold text-[#39405A] md:text-left">
                    Ugur Kiyici
                  </h5>
                  <p className="text-[#39405A] text-lg md:text-left italic">
                    Jefe de Operaciones
                  </p>
                  <p className="mt-3 text-md text-[#C0BABA] md:text-left">
                    ¡Hola! Soy Uğur.  Bienvenidos a mi rincón de mundo digital,
                    donde los daré una idea de quién soy y qué me motiva.Siempre
                    me ha apasionado el turismo y siempre es un camino lleno de
                    emociones. Mi camino desde el principio hasta ahora ha sido
                    una mezcla de aprendizaje, desafíos y crecimiento en el
                    sentido de superación personal. Soy curioso por aprender
                    nuevas cosas y descubrir lugares nuevos. Yo creo que
                    curiosidad es la esencia del aprendizaje continuo. Disfruto
                    explorar el mundo que nos rodea profundizando en las
                    complejidades de las temas turismo ,educación y trabajo. He
                    tenido el privilegio de trabajar en todos los campos de la
                    industria del turismo en mis 12 años de carrera. A través de
                    estas experiencias logré mantener mi determinación de
                    aprender más. El cielo es el límite! Gracias acompañarme en
                    este sección y aprender un poco sobre mí. ¡El viaje que
                    tienen por delante está lleno de curiosidad, crecimiento y
                    experiencias únicas!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Posts */}
      <section className="py-20 w-screen">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-3">
            <h2 className="text-lg font-bold mb-3 text-[#98B8DF]">
              PUBLICACIONES DESTACADAS
            </h2>
            <div className="vertical-line2 mb-1"></div>
          </div>
          <div className="md:hidden flex flex-col items-center justify-center md:flex-row">
            {InstagramData.slice(0, 2).map((post, index) => (
              <InstagramContent
                key={index}
                post={post}
                learnMore="Aprender Más"
              />
            ))}
          </div>
          <div className="hidden md:flex flex-row items-center justify-center">
            {InstagramData.slice(0, 3).map((post, index) => (
              <InstagramContent
                key={index}
                post={post}
                learnMore="Aprender Más"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Comments */}
      <section className="py-20 bg-[#FAFAFA] w-screen">
        <ImageSlider3 />
      </section>

      {/* Contact Form */}
      <section
        className="flex flex-col md:flex-row items-center justify-center w-screen"
        ref={props.contactRef}
      >
        <div className="hidden md:flex flex-col mt-40 bottom-0">
          <h2 className="text-lg font-bold text-[#98B8DF] -rotate-90">
            CONTÁCTANOS
          </h2>
          <div className="vertical-line3 mt-16"></div>
        </div>
        <ContactForm />
        <h2 className="md:hidden mb-3 text-lg font-bold text-[#98B8DF]">
          CONTÁCTANOS
        </h2>
        <div className="md:hidden vertical-line2"></div>
      </section>
    </div>
  );
}
