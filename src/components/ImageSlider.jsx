import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const ImageSlider = (props) => {
  const [current, setCurrent] = useState(0);
  const length = props.imageSliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (
    !Array.isArray(props.imageSliderData) ||
    props.imageSliderData.length <= 0
  ) {
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
    <section className="">
      {props.imageSliderData.map((slide, index) => {
        return (
          <div key={index}>
            {index === current && (
              <div className="flex flex-col justify-center items-center md:flex-row">
                <div className="hidden md:flex ml-5 mt-24 md:mt-0 md:ml-0 md:-rotate-90">
                  <ArrowButton direction="left" handleClick={prevSlide} />
                  <ArrowButton direction="right" handleClick={nextSlide} />
                </div>
                <div className="w-72 mt-5 md:w-[26rem] md:mr-10 md:text-left md:mt-10">
                  <h5 className={props.css}>{props.title}</h5>
                  <div className="vertical-line2 md:ml-20 mb-1"></div>
                  <div className={props.css2}>
                    <h2 className="text-3xl md:text-5xl font-bold text-[#39405A] italic">
                      {slide.title}
                    </h2>
                    <h4 className="mt-4 text-lg text-[#C0BABA]">
                      {slide.description}
                    </h4>
                  </div>
                </div>
                <div className="md:hidden ml-5 mb-3">
                  <ArrowButton direction="left" handleClick={prevSlide} />
                  <ArrowButton direction="right" handleClick={nextSlide} />
                </div>
                <div className="h-[15rem] w-[15rem] md:h-[18rem] md:w-[18rem] mb-20 md:mb-10 md:mt-20">
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
