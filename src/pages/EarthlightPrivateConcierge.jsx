import React, { useRef } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import EartlightPrivateConciergeLogo from "../images/EartlightPrivateConciergeLogo.png";
import PrivateVideo from "../images/PrivateVideo.mp4";
import PageContentPrivateConcierge from "../layout/PageContentPrivateConcierge";

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
    </div>
  );
}

export default EarthlightPrivateConcierge;
