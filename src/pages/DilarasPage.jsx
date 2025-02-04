import React, { useRef } from "react";
import Header from "../layout/Header";
import PageContent from "../layout/PageContent";
import Footer from "../layout/Footer";
import DilarasLogo from "../images/DilarasLogo.png";
import Egeo from "../images/Egeo.mp4";

function DilarasPage() {
  const homeRef = useRef(null);
  const aboutUsRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);
  const info = {
    logo: DilarasLogo,
    home: "HOGAR",
    aboutUs: "SOBRE NOSOTROS",
    services: "SERVICIOS",
    contact: "CONTACTO",
    video: Egeo,
    videoText: "Más Allá De Los Sueños",
    contactInfo: "Ponte en Contacto con Nosotros",
    mailtoHref:
      "mailto:dilara@earthlighttravel.com?subject=SendMail&body=Description",
    mailtoHref2:
      "mailto:ugur@earthlighttravel.com?subject=SendMail&body=Description",
    mail1: "dilara@earthlighttravel.com",
    mail2: "ugur@earthlighttravel.com",
    turkiye: "TURQUIA",
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
      <PageContent
        aboutUsRef={aboutUsRef}
        servicesRef={servicesRef}
        contactRef={contactRef}
      />
      <Footer homeRef={homeRef} info={info} />
    </div>
  );
}

export default DilarasPage;
