import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import DilarasLogo from "../images/DilarasLogo.png";
import { Link } from "react-router-dom";
import EarthLightLogo2 from "../images/EarthLightLogo2.png";
import AutoPlaySilentVideo from "../components/AutoplaySilentVideo";
import Egeo from "../images/Egeo.mp4";

export default function Header(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-md md:max-w-7xl" ref={props.homeRef}>
      {/* Navbar */}
      <section className="w-screen">
        <nav className="fixed w-full top-0 left-0 bg-black/10 backdrop-blur-md z-50">
          <div className="px-4 md:px-20">
            <div className="flex justify-between h-28">
              <div className="flex items-center">
                <button
                  className="w-44"
                  onClick={() =>
                    window.scrollTo({
                      top: props.homeRef.current.offsetTop,
                      behavior: "smooth",
                    })
                  }
                >
                  <img src={DilarasLogo} alt="DilarasLogo" />
                </button>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-4">
                <div>
                  <ul className="flex flex-row">
                    <li>
                      <button
                        onClick={() =>
                          window.scrollTo({
                            top: props.homeRef.current.offsetTop,
                            behavior: "smooth",
                          })
                        }
                      >
                        <div className="group inline-flex rounded-md h-10 w-max items-center justify-center text-[#FFFFFF] px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                          HOGAR
                        </div>
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() =>
                          window.scrollTo({
                            top: props.aboutUsRef.current.offsetTop,
                            behavior: "smooth",
                          })
                        }
                      >
                        <div className="group inline-flex rounded-md h-10 w-max items-center justify-center text-[#FFFFFF] px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                          SOBRE NOSOTROS
                        </div>
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() =>
                          window.scrollTo({
                            top: props.servicesRef.current.offsetTop,
                            behavior: "smooth",
                          })
                        }
                      >
                        <div className="group inline-flex rounded-md h-10 w-max items-center justify-center text-[#FFFFFF] px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                          SERVICIOS
                        </div>
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() =>
                          window.scrollTo({
                            top: props.contactRef.current.offsetTop,
                            behavior: "smooth",
                          })
                        }
                      >
                        <div className="group inline-flex rounded-md h-10 w-max items-center justify-center text-[#FFFFFF] px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                          CONTACTO
                        </div>
                      </button>
                    </li>
                    <li>
                      <Link to="https://www.earthlighttravel.com/">
                        <img
                          className="w-20 ml-5"
                          src={EarthLightLogo2}
                          alt="EarthLightLogo2"
                        />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                >
                  <span className="sr-only">Open main menu</span>
                  {isOpen ? (
                    <X className="block h-6 w-6" />
                  ) : (
                    <Menu className="block h-6 w-6" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          {isOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <button
                  className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-[#98B8DF] hover:bg-gray-50"
                  onClick={() =>
                    window.scrollTo({
                      top: props.homeRef.current.offsetTop,
                      behavior: "smooth",
                    })
                  }
                >
                  HOGAR
                </button>
                <button
                  className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-[#98B8DF] hover:bg-gray-50"
                  onClick={() =>
                    window.scrollTo({
                      top: props.aboutUsRef.current.offsetTop,
                      behavior: "smooth",
                    })
                  }
                >
                  SOBRE NOSOTROS
                </button>
                <button
                  className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-[#98B8DF] hover:bg-gray-50"
                  onClick={() =>
                    window.scrollTo({
                      top: props.servicesRef.current.offsetTop,
                      behavior: "smooth",
                    })
                  }
                >
                  SERVICIOS
                </button>
                <button
                  className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-[#98B8DF] hover:bg-gray-50"
                  onClick={() =>
                    window.scrollTo({
                      top: props.contactRef.current.offsetTop,
                      behavior: "smooth",
                    })
                  }
                >
                  CONTACTO
                </button>
                <Link
                  className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-[#98B8DF] hover:bg-gray-50"
                  to="https://www.earthlighttravel.com/"
                >
                  <img
                    className="w-24"
                    src={EarthLightLogo2}
                    alt="EarthLightLogo2"
                  />
                </Link>
              </div>
            </div>
          )}
        </nav>
      </section>

      {/* Video */}
      <section className="relative w-screen h-screen md:h-[46rem]">
        <AutoPlaySilentVideo video={Egeo} />
        {/*<video
          src={Goleta}
          id="bannerVideo"
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full"
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
        ></video>*/}
        <div className="absolute inset-0 bg-black/10" />{" "}
        {/* Reduced overlay opacity for better video visibility */}
        <div className="absolute bottom-0 flex items-center justify-center">
          <div className="flex flex-row justify-between text-center text-white space-y-6 max-w-7xl">
            {/*<div className="hidden md:flex md:flex-col ml-64 bottom-0">
              <p className="-rotate-90 ">VOLUTA</p>
              <div className="vertical-line mb-1"></div>
            </div>*/}
            <div className="relative mx-12 md:ml-48 bottom-20 md:bottom-40">
              <h1 className="text-4xl text-left md:text-right md:text-6xl opacity-90 italic leading-normal">
                Más Allá De Los Sueños
              </h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
