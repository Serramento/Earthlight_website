import "./App.css";
import React from "react";
import DilarasPage from "./pages/DilarasPage";
import { Routes, Route } from "react-router-dom";
import EarthlightPrivateConcierge from "./pages/EarthlightPrivateConcierge";
import MainPage from "./pages/MainPage";
import EarthlightMICE from "./pages/EarthlightMICE";

function App() {
  return (
    <div className="font-lato">
      <Routes>
        <Route exact path="/" element={<MainPage />} />

        <Route path="/dilarasRecomienda" element={<DilarasPage />} />

        <Route
          path="/earthlightPrivateConcierge"
          element={<EarthlightPrivateConcierge />}
        />

        <Route path="/earthlightMice" element={<EarthlightMICE />} />
      </Routes>
    </div>
  );
}

export default App;
