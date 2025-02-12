import React, { useRef, lazy, Suspense } from "react";
import DilarasLogo from "../images/DilarasLogo.png";
import Egeo from "../images/Egeo.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Header = lazy(() => import("../layout/Header"));
const Footer = lazy(() => import("../layout/Footer"));
const PageContent = lazy(() => import("../layout/PageContent"));

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
        <PageContent
          aboutUsRef={aboutUsRef}
          servicesRef={servicesRef}
          contactRef={contactRef}
        />
        <Footer homeRef={homeRef} info={info} />
      </Suspense>
    </div>
  );
}

export default DilarasPage;
