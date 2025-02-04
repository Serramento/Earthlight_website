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
import ImageSlider from "../components/ImageSlider";
import ImageSlider2 from "../components/ImageSlider2";
import Flexibidad from "../images/WhatWeOffer/Flexibidad.jpeg";
import Personalizacion from "../images/WhatWeOffer/Personalizacion.jpeg";
import ContactForm2 from "../components/ContactForm2";
import Kalyon from "../images/Feedback/Kalyon.png";
import Malaysia from "../images/Feedback/Malaysia.png";
import FotoMehmet from "../images/WhoWeAre/FotoMehmet.jpg";
import FotoGuray from "../images/WhoWeAre/FotoGuray.jpg";

const imageSliderData = [
  {
    title: "Corporate Travel",
    description:
      "Planning a business travel is always very complicated, time-consuming and overwhelming therefore our specialised team is here to assist you for making your corporate travel experience simpler, faster and easier.",
    src: Flexibidad,
  },
  {
    title: "MICE& Social Events",
    description:
      "Our experienced team provides full-service Meetings, Incentives and Social Events solutions, including the finding the most convenient venue options as well as arranging the all decoration and technical equipment need for your event. Earthlight Travel Services is dedicated to understand your needs and provide tailor made service. With our creativity and huge experience, Earthlight Travel Services will go beyond the ordinary and bring you a fantastic and memorable event .",
    src: Personalizacion,
  },
];

export default function PageContentMICE(props) {
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
              ABOUT US
            </h5>
            <div className="vertical-line2 mb-1"></div>
            <h2 className="text-5xl mb-10 font-bold text-[#39405A] italic">
              M.I.C.E.
            </h2>
            <p className="mt-4 text-lg text-[#C0BABA] md:px-24">
              Our well-experienced team creates unique and unforgettable events
              regarding to your needs. <br />
              We will be there to assist venue selection, event logistics,
              budget management and on-site support. <br />
              20+ years experience in the events management sector would be the
              main reason to select our team. <br />
              Successfully completed 25+ events within previous years and happy
              guests are our references.
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
            <img src={Bodrum} alt="Bodrum" />
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
          <ImageSlider imageSliderData={imageSliderData} title="SERVICES" />
        </div>
      </section>

      {/* Carousel */}
      <section className="">
        <ImageSlider2 />
      </section>

      {/* Who we are */}
      <section className="py-20 bg-[#FAFAFA] w-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h5 className="text-lg font-bold pb-3 text-[#98B8DF] md:text-left md:ml-36">
              OUR FAMILY
            </h5>
            <div className="vertical-line2 mb-1 md:ml-56"></div>
            <div>
              <div className="flex flex-col mb-3 px-5 items-center justify-center md:flex-row md:mx-20">
                <img
                  src={FotoGuray}
                  alt="Guray"
                  className="w-60 rounded-full mb-5 md:mr-10"
                />
                <div>
                  <h5 className="text-lg font-bold text-[#39405A] md:text-left">
                    Güray Can
                  </h5>
                  <p className="text-lg text-[#39405A] md:text-left italic">
                    Managing Partner
                  </p>
                  <p className="mt-3 text-md text-[#C0BABA] md:text-left">
                    Güray has been part of the Travel industry for over 20 years
                    and worked in wide range of luxury hotel groups including
                    Kempinski,Shangri-La,Sofitel and Mandarin Oriental Hotel
                    Group where he has built a wealth of knowledge about
                    leisure,MICE and corporate sides of the industry.
                  </p>
                </div>
              </div>
              <div className="vertical-line2 mb-1 md:ml-56"></div>
              <div className="flex flex-col items-center justify-center px-5 md:flex-row md:mx-20">
                <img
                  src={FotoMehmet}
                  alt="Mehmet"
                  className="w-60 rounded-full mb-5 md:mr-10"
                />
                <div>
                  <h5 className="text-lg font-bold text-[#39405A] md:text-left">
                    Mehmet Sarıhasan
                  </h5>
                  <p className="text-[#39405A] text-lg md:text-left italic">
                    Managing Partner
                  </p>
                  <p className="mt-3 text-md text-[#C0BABA] md:text-left">
                    Mehmet has been working in the travel industry almost 10
                    years.He has worked in different positions in luxury hotel
                    sales departments and lastly worked in Shangri-La Hotel
                    Group where he has gained extensive experience about the
                    luxury segment and MICE.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section>
        <div className="flex flex-col items-center justify-center md:items-start">
          <h2 className="text-lg font-bold text-[#98B8DF] mb-3">
            OUR HAPPY CLIENTS
          </h2>
          <div className="vertical-line2 mb-1 md:ml-20"></div>
          <img src={Kalyon} alt="Kalyon" className="w-60 mb-5 md:mr-10" />
          <img src={Malaysia} alt="Malaysia" className="w-60 mb-5 md:mr-10" />
        </div>
      </section>

      {/* Contact Form */}
      <section
        className="flex flex-col md:flex-row items-center justify-center w-screen"
        ref={props.contactRef}
      >
        <div className="hidden md:flex flex-col mt-40 bottom-0">
          <h2 className="text-lg font-bold text-[#98B8DF] -rotate-90">
            CONTACT US
          </h2>
          <div className="vertical-line3 mt-16"></div>
        </div>
        <ContactForm2 />
        <h2 className="md:hidden mb-3 text-lg font-bold text-[#98B8DF]">
          CONTACT US
        </h2>
        <div className="md:hidden vertical-line2"></div>
      </section>
    </div>
  );
}
