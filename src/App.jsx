import "./App.css";
import React, { useRef } from "react";
import Header from "./layout/Header";
import PageContent from "./layout/PageContent";
import Footer from "./layout/Footer";

function App() {
  const homeRef = useRef(null);
  const aboutUsRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <div className="font-lato">
      <Header
        homeRef={homeRef}
        aboutUsRef={aboutUsRef}
        servicesRef={servicesRef}
        contactRef={contactRef}
      />
      <PageContent
        aboutUsRef={aboutUsRef}
        servicesRef={servicesRef}
        contactRef={contactRef}
      />
      <Footer homeRef={homeRef} />
    </div>
  );
}

export default App;
