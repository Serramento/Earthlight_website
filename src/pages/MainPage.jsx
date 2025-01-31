import React from "react";
import { Link } from "react-router-dom";

function MainPage() {
  return (
    <div className="font-lato">
      <Link to="/earthlightPrivateConcierge">EarthlightPrivateConcierge</Link>
      <Link to="/earthlightMice">EarthlightMICE</Link>
      <Link to="/dilarasRecomienda">Dilaras</Link>
    </div>
  );
}

export default MainPage;
