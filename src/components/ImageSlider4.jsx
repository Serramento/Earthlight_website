import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Karakoy from "../images/Feedback/Karakoy.jpeg";
import Arnavutkoy from "../images/Feedback/Arnavutkoy.jpeg";
import Dolmabahce from "../images/Feedback/Dolmabahce.jpeg";

const ImageSliderData3 = [
  {
    comment:
      "Excellent from everyone with whom i deal for my first experience with Earthlight Travel Services. Insightful, responsive, patient, professional & helpful. I highly recommend their services.",
    name: "Syafi Naz",
    src: Arnavutkoy,
  },
  {
    comment:
      "Took their service to make last minute booking in Istanbul and Mr Mehmet was really helpful to help and the charge was quite reasonable (as compared online). Good advice given and visit was superb throughout!",
    name: "Ahmad Hashim Mahmood",
    src: Karakoy,
  },
  {
    comment:
      "The service was perfect, Mrs. Mehmet was so patient and helpful, He helped us with a lot of things, it will not be the last time to deal with this company, Thank you for your service ☺️.",
    name: "Alanood Alkuwari",
    src: Dolmabahce,
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
          OUR HAPPY CLIENTS
        </h2>
        <div className="vertical-line2 mb-1 md:ml-20"></div>
        <h2 className="text-5xl font-bold mx-5 mt-1 text-[#39405A] mb-12 md:w-64 md:mx-0 md:text-left">
          Travelers Notes
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
