
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const ImageSlider2 = (props) => {
  const [current, setCurrent] = useState(0);

  if (!Array.isArray(props.imageSlider) || props.imageSlider.length === 0) {
    return null;
  }

  const length = props.imageSlider.length;

  const nextSlide = () => {
    setCurrent((previous) => (previous === length - 1 ? 0 : previous + 1));
  };

  const prevSlide = () => {
    setCurrent((previous) => (previous === 0 ? length - 1 : previous - 1));
  };

  const ArrowButton = ({ direction, handleClick }) => (
    <button
      type="button"
      aria-label={direction === "left" ? "Önceki görsel" : "Sonraki görsel"}
      onClick={handleClick}
      className="text-[#737373] hover:text-[#98B8DF] bg-white opacity-75 p-6 rounded-full"
    >
      <FontAwesomeIcon
        icon={direction === "left" ? faChevronLeft : faChevronRight}
        size="xl"
      />
    </button>
  );

  return (
    <section>
      {props.imageSlider.map((slide, index) => (
        <div key={index}>
          {index === current && (
            <div className="flex items-center justify-center w-screen relative h-screen md:h-[46rem] index-0">
              <div className="flex flex-col absolute sm:w-[23rem] w-[18rem] md:w-[70rem] md:text-left md:mt-10 index-0">
                <div className="flex justify-between index-0">
                  <ArrowButton direction="left" handleClick={prevSlide} />
                  <ArrowButton direction="right" handleClick={nextSlide} />
                </div>

                <div>
                  <h2 className="font-bold text-4xl italic text-[#FFFFFF] mt-64 md:text-5xl md:mt-48">
                    {slide.title}
                  </h2>
                </div>
              </div>

              <img
                src={slide.src}
                alt={slide.alt || slide.title || "Earthlight seyahat deneyimi"}
                className="w-full h-full object-cover"
                loading={current === 0 ? "eager" : "lazy"}
                decoding="async"
                fetchPriority={current === 0 ? "high" : "auto"}
              />
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default ImageSlider2;
