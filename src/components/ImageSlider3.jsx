import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import Feedback1 from "../images/Feedback/Feedback1.png";
import Feedback2 from "../images/Feedback/Feedback2.jpg";
import Feedback3 from "../images/Feedback/Feedback3.png";
import Feedback4 from "../images/Feedback/Feedback4.png";
import Feedback5 from "../images/Feedback/Feedback5.png";
import Feedback6 from "../images/Feedback/Feedback6.png";
import Feedback7 from "../images/Feedback/Feedback7.png";
import Feedback8 from "../images/Feedback/Feedback8.png";
import Feedback9 from "../images/Feedback/Feedback9.png";
import Feedback10 from "../images/Feedback/Feedback10.png";
import Feedback11 from "../images/Feedback/Feedback11.png";
import Feedback12 from "../images/Feedback/Feedback12.png";
import Feedback13 from "../images/Feedback/Feedback13.png";

const ImageSliderData3 = [
  {
    comment:
      "El dia fue excelente. Mine es super interesante & Muy atendido. Muy buena experiencia para todos. Muchas gracias.",
    date: "Octubre 2026",
    name: "Gordon Schwabacher",
    src: Feedback10,
  },
  {
    comment:
      "Hola Dilara, muchas gracias por todo y la ayuda en el aeropuerto fue genial, no lo hubiéramos podido hacer sin Nyl. Saludos",
    date: "Octubre 2026",
    name: "Miriam Jeanette Walter Ramirez",
    src: Feedback13,
  },
  {
    comment:
      "Juan es un gran guía; culto y ameno. La pasamos sensacional. Nuestro chofer excelente también. Disfrutamos y aprendimos mucho. De verdad tienes un servicio extraordinario. Gracias por el apoyo y todas las atenciones tuyas y de tu equipo! Muchas gracias por los presentes; están hermosos!",
    date: "Octubre 2026",
    name: "Veronica Maite Santos Jacob",
    src: Feedback7,
  },
  {
    comment:
      "We end our trip today with a smile on our faces, thank you. Sila was a jewel , a perfect match for us three.",
    date: "Septiembre 2026",
    name: "Alonso Carral Cuevas",
    src: Feedback10,
  },
  {
    comment:
      "Todo de maravilla! Muchas gracias por todos sus atenciones.",
    date: "Septiembre 2026",
    name: "Pedro Roncero",
    src: Feedback7,
  },
  {
    comment:
      "Tuvimos una experiencia maravillosa con el servicio de Dilara y su equipo, nos ayudaron en todo momento , a cualquier hora , siempre con una actitud de servicio muy bonita y muy eficiente, Dilara siempre pendiente en toda nuestra estancia una persona muy amable y linda. Los guías , conductores , y acompañantes de traslados muy lindas personas , serviciales y amables. Infinitamente agradecidos por hacer de este viaje en Capadocia y Estambul , un viaje muy especial. Muchísimas gracias! Los recomiendo muchísimo 😀 Bendiciones! ",
    date: "Septiembre 2026",
    name: "Ma Eugenia Martínez de G",
    src: Feedback7,
  },
  {
    comment:
      "Muchas gracias. Excelente servicio del guía, felicidades.",
    date: "Julio 2026",
    name: "Daniel Morales",
    src: Feedback13,
  },
  {
    comment:
      "Todo excelente. Súper excelente. El hotel de hoy no nos encantó tanto.",
    date: "Abril 2026",
    name: "Lorena Garcia Corral",
    src: Feedback7,
  },
  {
    comment:
      "Muchas gracias por sus atenciones en nuestra recepción en Estambul, está muy bonito el hotel y en un lugar céntrico como lo deseábamos. Todo excelente, Fortuna mucho conocimiento, tranquilidad y paciencia en sus exposiciones en cada lugar que visitamos  (de lo mejor) y Mustafa muy profesional y puntual es su labor de driver. Mil gracias Dilara por estar al pendiente de nuestro viaje.",
    date: "Marzo 2026",
    name: "Luis Contreras y Josefina Andrade",
    src: Feedback7,
  },
  {
    comment:
      "Hola Dilara todo muy bien, muy agradable y con conocimientos de Murat. Muchas gracias todo muy bien en Capadocia tanto el guía Muko como el chófer muy agradables",
    date: "Marzo 2026",
    name: "Jose antonio Escandon",
    src: Feedback13,
  },
  {
    comment:
      "Solo para comunicarte que ya terminamos los tours y paseos con Nurten.  Déjame te doy una felicitación a ti y a Nurten por el buen servicio y la cordialidad en toda la visita. Ampliamente recomendado.",
    date: "Enero 2026",
    name: "Jose Luis Sierra Villarreal",
    src: Feedback10,
  },
  {
    comment:
      "Todo estuvo muy bien organizado y la pasamos súper en Turquía. Viajar con jóvenes siempre implica un poco de paciencia porque a veces se desesperan con los tours, pero entendemos que es la única forma de conocer realmente los lugares, y valió totalmente la pena. Todos regresamos muy felices con la experiencia. Capadocia nos dejó impresionados, es un lugar verdaderamente espectacular. Los guías fueron muy buenos en todo momento, al igual que los pilotos de los buses. Éfeso también nos encantó, fue una visita muy especial. En realidad todo lo que conocimos nos encantó. Sin duda, un viaje que recordaremos con mucho cariño",
    date: "Diciembre 2025",
    name: "Maria Alejos",
    src: Feedback13,
  },
  {
    comment:
      "Muchas gracias por todas sus atenciones durante nuestra estancia en Istambul. La pasamos de maravilla. El transporte, el guía, el apoyo en aeropuerto todo excelente. Todos sus servicios fueron de un nivel de excelencia!!",
    date: "Diciembre 2025",
    name: "René Bortoni",
    src: Feedback10,
  },
  {
    comment:
      "¡Mil gracias por regalarnos un viaje que siempre recordaremos con una sonrisa! Todo impecable. Maravilloso todo el equipo. Todo el tiempo súper al pendiente de nosotras, encantadores y excelentes profesionales.Quedamos invitadas a volver a Turquía.",
    date: "Junio 2025",
    name: "Jessica Perez Flores",
    src: Feedback8,
  },
  {
    comment:
      "Antes que nada te quería dar las gracias por todas tus atenciones por los guías que nos pusiste por los chóferes, de verdad que encantadoras personas son. Te felicito por el equipo que tienes. Querida Dilara, muchas gracias también a ti; fue un verdadero placer conocerte. ¡Te envío un abrazo enorme! Gracias.",
    date: "Octubre 2025",
    name: "Lala Saucedo",
    src: Feedback5,
  },
  {
    comment:
      "Unas palabras de agradecimiento y al mismo tiempo reconocimiento tanto portus obsequios como por el servicio y atención que recibimos. Todo salió de maravilla. Palomba la guía, un encanto ademas de profesional y conocedora de los diversos temas. Bayram (creo que asi se escribe) el chofer un joven muy atento y servicial sobre todo para ayudarnos a bajar de la camioneta sobre todo a mi mujer pues traia un dolor en una rodilla. Gracias nuevamente por todo y Consuelo tuvo toda la razon sobre la calidad de tu servicio. Gracias y quedamos invitadosa regresar a Estambul. Gracias nuevamente. Chema y Ale",
    date: "Octubre 2024",
    name: "Jose Maria Muñiz",
    src: Feedback1,
  },
    {
    comment:
      "Todo súper excelente desde el primer día que llegamos la atención para el pickup del aeropuerto, ¡¡todos los tours todos los guías todos los traslados en tiempo y Super bien atendidos!!Te agradezco muchísimo, y te felicito por el trabajo, quedamos Super contentos y realmente fue un Super viaje para nosotros.",
    date: "Septiembre 2025",
    name: "Joaquin Eugenio Guzman Arroyo",
    src: Feedback10,
  },
  {
    comment:
      "Aprovecho para agradecer en nombre de mi familia y el mío LOS HERMOSOS REGALOS que nos entregaron a nuestra llegada a Turquía.",
    date: "Julio 2025",
    name: "Rosa H. Abascal",
    src: Feedback12,
  },
  {
    comment:
      "El tour de hoy estuvo espectacular el guía muy completo y su español muy claro.",
    date: "Mayo 2025",
    name: "Norma C. J. Lopez",
    src: Feedback13,
  },
  {
    comment:
      "Agradecemos mucho los detalles que mandaron. Todo estuvo excelente. El guía y el chofer muy profesionales.",
    date: "Mayo 2025",
    name: "S.M. Cohen",
    src: Feedback6,
  },
  {
    comment:
      "Muchas gracias por todas sus atenciones, excelente servicio.",
    date: "Mayo 2025",
    name: "Federico Alcalá",
    src: Feedback7,
  },
  {
    comment:
      "Muchas gracias por la nota de bienvenida a la habitación del Mett, super linda y cariñosa. Amamos a Turquia, y ha sido una extraordinaria experiencia.  No le dimos las gracias por los regalos del primer dia ♥️🙏🏻, super lindos y útiles.  Gracias por cuidarnos tanto.",
    date: "Octubre 2024",
    name: "Carolina Aragon",
    src: Feedback2,
  },
  {
    comment:
      "Todo fue espectacular y Juan y Josef nos trataron excelente. Juan hasta hizo el check in con nosotros. Todos los hoteles muy buenos en especial Museo. Las actividades de Goleta y Globo fueron fantásticas. En general una experiencia extraordinaria y los vamos a recomendar mucho. Saludos.",
    date: "Octubre 2024",
    name: "Alfredo Granai",
    src: Feedback3,
  },
  {
    comment: "Todo estuvo muy bien! Muchas gracias por todo!",
    date: "Octubre 2024",
    name: "Claudia Edurne Suarez Vergara",
    src: Feedback4,
  },
  {
    comment:
      "Queremos agradecerte  todas tus atenciones y comentarte que estuvimos muy contentos con Murat, es un guía muy profesional y muy flexible en ara nuestros tiempos y espacios, muy educado, amable, con muy buen español , en fin excelente experiencia!!!",
    date: "Septiembre 2024",
    name: "Gabriela Martinez",
    src: Feedback5,
  },
  {
    comment:
      "Juan el guía y Yusef el driver - excelentes ambos en especial Juan - realmente un profesional con empatía y conocimiento altamente recomendable.",
    date: "Octubre 2024",
    name: "Jose Rodolfo Santos",
    src: Feedback6,
  },
  {
    comment:
      "A viagem foi incrível! A Turquia é muito especial. Tivemos um excelente serviço tanto em Estambul como na Capadócia. Muito obrigada por todo o suporte. Voltamos encantados.",
    date: "Maio 2024",
    name: "Karina Alonso Maimone",
    src: Feedback7,
  },
  {
    comment:
      "Te quiero agradecer todas tus atenciones y felicitarte... Tienes un gran equipo de gente. ¡Gracias por todo!",
    date: "Septiembre 2024",
    name: "Lilia Delgado de Solorzano",
    src: Feedback8,
  },
  {
    comment:
      "¡Todos los servicios han sido excelente al igual que los tours, guías y choferes! La pasamos muy bien. Muy recomendables sus servicios. Gracias.",
    date: "Junio 2024",
    name: "Ana María Fernández",
    src: Feedback9,
  },
  {
    comment:
      "¡Nos gusto mucho todo! El guía y el chofer muy amables, el vehículo muy lindo.",
    date: "Junio 2024",
    name: "Elisa Guadalupe Hernández Romo",
    src: Feedback10,
  },
  {
    comment:
      "Pasamos las mejores dos semanas en familia!!  Que belleza de país.. sabemos que no conocimos mucho, pero de lo que conocimos quedamos encantados. La atención en cada hotel y toda recomendación de Dilara fue lo mejor. Los tours privados llenaron todas nuestras expectativas. Todo salió a la perfección. Gracias de nuevo por todo! Esperamos volvernos a ver.",
    date: "Junio 2024",
    name: "Jessica Marie Hodgsdon Aycinena",
    src: Feedback11,
  },
  {
    comment:
      "Todo excelente desde recibimiento de Ugur a nuestra llegada Guía Paloma y el conductor, hicieron su trabajo de manera formidable Felicidades a todo el equipo.",
    date: "Julio 2024",
    name: "Alfonso Jiménez O’Farrill",
    src: Feedback12,
  },
  {
    comment:
      "Muchas gracias por todo en realidad estuvo excelente el viaje gracias a su servicio espero contar con ustedes de nuevo pronto!",
    date: "Diciembre 2024",
    name: "Jose Luis Nassar Daw",
    src: Feedback13,
  },
];

const ImageSlider3 = () => {
  const [current, setCurrent] = useState(0);
  const length = ImageSliderData3.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(ImageSliderData3) || ImageSliderData3.length <= 0) {
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
    <section className="flex flex-col md:flex-row justify-center items-center">
      <div className="flex flex-col items-center justify-center md:items-start">
        <h2 className="text-lg font-bold text-[#98B8DF] mb-3">
          COMENTARIOS DE CLIENTES
        </h2>
        <div className="vertical-line2 mb-1 md:ml-20"></div>
        <h2 className="text-5xl font-bold mx-5 mt-1 text-[#39405A] mb-12 md:w-64 md:mx-0 md:text-left">
          Viajeros Satisfechos
        </h2>
        <div className="ml-5 mb-3 md:m-0">
          <ArrowButton direction="left" handleClick={prevSlide} />
          <ArrowButton direction="right" handleClick={nextSlide} />
        </div>
      </div>

      {ImageSliderData3.map((slide, index) => {
        return (
          <div key={index}>
            {index === current && (
              <div className="flex flex-row md:ml-10">
                <div className="shadow-md sm:w-96 w-72 md:w-[40rem] bg-[#FAFAFA]">
                  <div className="h-48 md:h-64 relative">
                    <img
                      src={slide.src}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="m-7 text-left sm:h-[20rem] h-[27rem] md:h-48 flex flex-col justify-between">
                    <p className="text-[#C0BABA] text-sm font-semibold text-left mt-3">
                      {slide.comment}
                    </p>
                    <div className="flex flex-row justify-between mt-7">
                      <div className="flex flex-row text-bluex">
                        <FontAwesomeIcon
                          icon={faClock}
                          className="text-[#98B8DF]"
                        />
                        <p className="text-[#C0BABA] text-xs font-semibold pl-1">
                          {slide.date}
                        </p>
                      </div>
                      <div className="flex flex-row text-[#98B8DF]">
                        <i className="fa-solid fa-chart-line"></i>
                        <p className="text-[#C0BABA] text-xs font-semibold pl-1 text-right">
                          {slide.name}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider3;
