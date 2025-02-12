import React, { useState, lazy, Suspense } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import EarthlightLogo2 from "../images/EarthLightLogo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const AutoPlaySilentVideo = lazy(() =>
  import("../components/AutoplaySilentVideo")
);

export default function Header(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="" ref={props.homeRef}>
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
                  <img src={props.info.logo} alt="DilarasLogo" />
                </button>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-4">
                <div>
                  <ul className="flex flex-row justify-between w-[32rem]">
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
                          {props.info.home}
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
                          {props.info.aboutUs}
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
                          {props.info.services}
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
                          {props.info.contact}
                        </div>
                      </button>
                    </li>
                    <li>
                      <Link to="/">
                        <img className="w-20" src={EarthlightLogo2} />
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
                  {props.info.home}
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
                  {props.info.aboutUs}
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
                  {props.info.services}
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
                  {props.info.contact}
                </button>
                <Link
                  className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-[#98B8DF] hover:bg-gray-50"
                  to="/"
                >
                  <img className="w-24" src={EarthlightLogo2} />
                </Link>
              </div>
            </div>
          )}
        </nav>
      </section>

      {/* Video */}
      <section className="relative w-screen h-screen md:h-[46rem]">
        <Suspense
          fallback={
            <div className="bg-[#98B8DF] w-screen h-screen flex justify-center items-center text-[#FFFFFF] font-montserrat text-3xl">
              <FontAwesomeIcon icon={faSpinner} className="animate-spin mr-3" />
              Loading...
            </div>
          }
        >
          <AutoPlaySilentVideo video={props.info.video} />
        </Suspense>
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
                {props.info.videoText}
              </h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
