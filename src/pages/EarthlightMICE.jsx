import React, { useRef, lazy, Suspense } from "react";
import EarthlightMiceLogo from "../images/EarthlightMiceLogo.png";
import Event2 from "../images/Event2.mp4";

const Header = lazy(() => import("../layout/Header"));
const Footer = lazy(() => import("../layout/Footer"));
const PageContentMICE = lazy(() => import("../layout/PageContentMICE"));

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
    videoText: "Memorable and Unique Experiences",
    contactInfo: "Contact Info",
    mailtoHref:
      "mailto:info@earthlighttravel.com?subject=SendMail&body=Description",
    mail1: "info@earthlighttravel.com",
    turkiye: "TURKIYE",
  };
  return (
    <div className="font-lato">
      <Suspense fallback={<div>Loading...</div>}>
        <Header
          homeRef={homeRef}
          aboutUsRef={aboutUsRef}
          servicesRef={servicesRef}
          contactRef={contactRef}
          info={info}
        />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <PageContentMICE
          aboutUsRef={aboutUsRef}
          servicesRef={servicesRef}
          contactRef={contactRef}
        />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Footer homeRef={homeRef} info={info} />
      </Suspense>
    </div>
  );
}

export default EarthlightMICE;
