import React, { useRef } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import EarthlightMiceLogo from "../images/EarthlightMiceLogo.png";
import Event2 from "../images/Event2.mp4";
import PageContentMICE from "../layout/PageContentMICE";

function EarthlightMICE() {
  const homeRef = useRef(null);
  const aboutUsRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);
  const info = {
    logo: EarthlightMiceLogo,
    home: "HOME",
    aboutUs: "ABOUT US",
    services: "SERVICES",
    contact: "CONTACT",
    video: Event2,
    videoText: "Más Allá De Los Sueños",
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
      <PageContentMICE
        aboutUsRef={aboutUsRef}
        servicesRef={servicesRef}
        contactRef={contactRef}
      />
      <Footer homeRef={homeRef} info={info} />
    </div>
  );
}

export default EarthlightMICE;
