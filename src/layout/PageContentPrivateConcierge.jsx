import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Kayan1 from "../images/KayanFotolar/Kayan1.jpeg";
import Kayan2 from "../images/KayanFotolar/Kayan2.jpeg";
import Kayan3 from "../images/KayanFotolar/Kayan3.jpeg";
import Kayan4 from "../images/KayanFotolar/Kayan4.jpeg";
import Kayan5 from "../images/KayanFotolar/Kayan5.jpeg";
import Kayan7 from "../images/KayanFotolar/Kayan7.jpeg";
import Kayan8 from "../images/KayanFotolar/Kayan8.jpeg";
import Kayan9 from "../images/KayanFotolar/Kayan9.jpeg";
import Kayan10 from "../images/KayanFotolar/Kayan10.jpeg";
import Kayan11 from "../images/KayanFotolar/Kayan11.jpeg";
import InstagramContent from "../components/InstagramContent";
import ImageSlider from "../components/ImageSlider";
import ImageSlider4 from "../components/ImageSlider4";
import FamilyVacation from "../images/WhatWeOffer/FamilyVacation.jpeg";
import ArtCulture from "../images/WhatWeOffer/ArtCulture.jpeg";
import ConciergeServices from "../images/WhatWeOffer/ConciergeServices.jpeg";
import ContactForm2 from "../components/ContactForm2";
import FotoMehmetGuray from "../images/WhoWeAre/FotoMehmetGuray.jpeg";
import FotoMehmet from "../images/WhoWeAre/FotoMehmet.png";
import FotoGuray from "../images/WhoWeAre/FotoGuray.png";

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
    title: "Family Vacations",
    description:
      "Family vacations are ideal to get together and spend some quality of time together with the other family members. We would like you to leave your family traveling arrangements to hands of our experienced team members who will create extraordinary travel experiences will exceed everyone’s expectations.",
    src: FamilyVacation,
  },
  {
    title: "Concierge Services",
    description:
      "Our luxury concierge services is operated by huge network of trusted global suppliers in order to provide you the best solutions as well as bespoke travel experiences. Arranging a restaurant reservation, luxurious car service or even a helicopter tour&transfer is only a phone call or text away.",
    src: ConciergeServices,
  },
  {
    title: "Arts& Culture& History",
    description:
      "Our approach to historic and cultural places is private custom tours. All of these tours are individually guided with small groups of people. All our unique itineraries are handcrafted by our professional team and you will have a memorable experience from the moment your are greeted by your guide until you return to your hotel.",
    src: ArtCulture,
  },
];

export default function PageContentPrivateConcierge(props) {
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
              Private Concierge
            </h2>
            <p className="mt-4 text-lg text-[#C0BABA] md:px-24">
              Count on us for your all travel arrangements and leave your travel
              needs in the hands of our dedicated and professional team. We
              ensure you that our passionate team will be at your disposal to
              make your travel dreams come true! <br />​ Earthlight Travel
              Services is a luxury travel management company based in Istanbul
              which provides an impeccable service to its esteemed guests all
              over the world. We create exquisite travel experiences and take
              care of every aspect of your travel needs to make your journey the
              most memorable one!
              <br />​ Our aim is to inspire you to change your live through
              unforgettable travel experiences and we strongly believe that
              luxury travel is about the pursuit of unique experiences and
              creating lifetime memories through excellent services.
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
            <img src={Kayan1} alt="Kayan1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Kayan2} alt="Kayan2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Kayan3} alt="Kayan3" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Kayan4} alt="Kayan4" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Kayan5} alt="Kayan5" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Kayan7} alt="Kayan7" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Kayan8} alt="Kayan8" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Kayan9} alt="Kayan9" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Kayan10} alt="Kayan10" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Kayan11} alt="Kayan11" />
          </SwiperSlide>
        </Swiper>
      </section>

      {/* What We Offer */}
      <section className="w-screen" ref={props.servicesRef}>
        <div className="md:bg-[#FAFAFA] md:flex md:justify-center md:items-center md:mx-auto md:w-[70rem] md:py-20 px-4 sm:px-6 text-center">
          <ImageSlider
            imageSliderData={imageSliderData}
            title="SERVICES"
            css="text-lg font-bold mt-12 md:mt-0 text-[#98B8DF] mb-3 md:ml-10"
            css2="flex flex-col h-96 md:items-left"
          />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#98B8DF] w-screen">
        <div className="md:flex md:flex-row md:items-center md:justify-center">
          <img
            src={FotoMehmetGuray}
            alt="MehmetGuray"
            className="md:h-[34rem] object-contain"
          />
          <div className="md:mr-20">
            <h5 className="text-lg font-bold pb-3 text-[#FFFFFF] pt-10">
              WHY CHOOSE US?
            </h5>
            <div className="vertical-line4 mb-1"></div>
            <div className="text-md font-semibold md:mx-10 text-[#FFFFFF] md:mt-2 px-5 sm:px-8 pb-10 sm:pb-16 md:px-0 text-left">
              • Professional, dedicated and passionate travel advisors have an
              extensive background in luxury hotel industry
              <br />
              ​• Personalised and exclusive service
              <br />
              • 7/24 reachable and flexible team
              <br />
              • Great connections with luxury hotel chains worldwide
              <br />• Attention to each and every single details
            </div>
          </div>
        </div>
      </section>

      {/* Who we are */}
      <section className="py-20 bg-[#FAFAFA] w-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h5 className="text-lg font-bold pb-3 text-[#98B8DF] md:text-left md:ml-[11rem]">
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

      {/* Instagram Posts */}
      <section className="py-20 flex w-screen">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-3">
            <h2 className="text-lg font-bold mb-3 text-[#98B8DF]">FOLLOW US</h2>
            <div className="vertical-line2 mb-1"></div>
          </div>
          <div className="md:hidden flex flex-col items-center justify-center md:flex-row">
            {InstagramData.slice(0, 2).map((post, index) => (
              <InstagramContent
                key={index}
                post={post}
                learnMore="Learn More"
              />
            ))}
          </div>
          <div className="hidden md:flex flex-row items-center justify-center">
            {InstagramData.slice(0, 3).map((post, index) => (
              <InstagramContent
                key={index}
                post={post}
                learnMore="Learn More"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Comments */}
      <section className="py-20 bg-[#FAFAFA] w-screen">
        <ImageSlider4 />
      </section>

      {/* Contact Form */}
      <section
        className="flex flex-col md:flex-row items-center justify-center w-screen md:ml-0.5"
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
