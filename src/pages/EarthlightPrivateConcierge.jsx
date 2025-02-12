import React, { useRef, lazy, Suspense } from "react";
import EartlightPrivateConciergeLogo from "../images/EartlightPrivateConciergeLogo.png";
import PrivateVideo from "../images/PrivateVideo.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Header = lazy(() => import("../layout/Header"));
const Footer = lazy(() => import("../layout/Footer"));
const PageContentPrivateConcierge = lazy(() =>
  import("../layout/PageContentPrivateConcierge")
);

function EarthlightPrivateConcierge() {
  const homeRef = useRef(null);
  const aboutUsRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);
  const info = {
    logo: EartlightPrivateConciergeLogo,
    home: "HOME",
    aboutUs: "ABOUT US",
    services: "SERVICES",
    contact: "CONTACT",
    video: PrivateVideo,
    videoText: "Travel Dreams Come True",
    contactInfo: "Contact Info",
    mailtoHref:
      "mailto:info@earthlighttravel.com?subject=SendMail&body=Description",
    mail1: "info@earthlighttravel.com",
    turkiye: "TURKIYE",
  };
  return (
    <div className="font-lato">
      <Suspense
        fallback={
          <div className="bg-[#98B8DF] w-screen h-screen flex justify-center items-center text-[#FFFFFF] font-montserrat text-3xl">
            <FontAwesomeIcon icon={faSpinner} className="animate-spin mr-3" />
            Loading...
          </div>
        }
      >
        <Header
          homeRef={homeRef}
          aboutUsRef={aboutUsRef}
          servicesRef={servicesRef}
          contactRef={contactRef}
          info={info}
        />
        <PageContentPrivateConcierge
          aboutUsRef={aboutUsRef}
          servicesRef={servicesRef}
          contactRef={contactRef}
        />
        <Footer homeRef={homeRef} info={info} />
      </Suspense>
    </div>
  );
}

export default EarthlightPrivateConcierge;
