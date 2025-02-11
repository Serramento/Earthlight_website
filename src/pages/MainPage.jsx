import React from "react";
import { Link } from "react-router-dom";
import AutoPlaySilentVideo from "../components/AutoplaySilentVideo";
import MainVideo from "../images/MainVideo.mp4";
import EartlightPrivateConciergeLogo from "../images/EartlightPrivateConciergeLogo.png";
import EarthlightMiceLogo from "../images/EarthlightMiceLogo.png";
import DilarasLogo from "../images/DilarasLogo.png";

function MainPage() {
  return (
    <div>
      {/* Video */}
      <section className="relative w-screen h-screen flex justify-center items-center">
        <AutoPlaySilentVideo video={MainVideo} />
        <div className="absolute md:mb-48">
          <p className="text-[#FFFFFF] text-2xl font-montserrat mb-16 md:mb-36 md:text-2xl">
            #waytogo
          </p>
          <div className="flex flex-col md:flex-row ">
            <Link to="/earthlightPrivateConcierge">
              <img
                src={EartlightPrivateConciergeLogo}
                alt="EartlightPrivateConciergeLogo"
                className="w-48 sm:w-60 mb-10 md:mr-36 mainPage"
              />
            </Link>
            <Link to="/earthlightMice">
              <img
                src={EarthlightMiceLogo}
                alt="EarthlightMiceLogo"
                className="w-48 sm:w-60 mainPage"
              />
            </Link>
            <Link to="/dilarasRecomienda">
              <img
                src={DilarasLogo}
                alt="DilarasLogo"
                className="w-48 sm:w-60 mt-16 md:ml-36 md:mt-10 mainPage"
              />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MainPage;
