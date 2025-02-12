import React, { useRef, lazy, Suspense } from "react";
import EartlightPrivateConciergeLogo from "../images/EartlightPrivateConciergeLogo.png";
import PrivateVideo from "../images/PrivateVideo.mp4";

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
        <PageContentPrivateConcierge
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

export default EarthlightPrivateConcierge;
