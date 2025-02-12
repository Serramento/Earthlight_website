import "./App.css";
import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const MainPage = lazy(() => import("./pages/MainPage"));
const DilarasPage = lazy(() => import("./pages/DilarasPage"));
const EarthlightPrivateConcierge = lazy(() =>
  import("./pages/EarthlightPrivateConcierge")
);
const EarthlightMICE = lazy(() => import("./pages/EarthlightMICE"));

function App() {
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
        <Routes>
          <Route exact path="/" element={<MainPage />} />

          <Route path="/dilarasRecomienda" element={<DilarasPage />} />

          <Route
            path="/earthlightPrivateConcierge"
            element={<EarthlightPrivateConcierge />}
          />

          <Route path="/earthlightMice" element={<EarthlightMICE />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
