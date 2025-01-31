import React from "react";
import { Link } from "react-router-dom";
import DilarasLogo from "../images/DilarasLogo.png";
import { Instagram, Linkedin } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelopeOpen,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer(props) {
  const mailtoHref =
    "mailto:dilara@earthlighttravel.com?subject=SendMail&body=Description";
  const mailtoHref2 =
    "mailto:ugur@earthlighttravel.com?subject=SendMail&body=Description";

  return (
    <div className="max-w-md md:max-w-7xl">
      {/* Contact Info */}
      <section className="pb-20 md:pt-0 md:pb-5 text-white bg-[#98B8DF] w-screen">
        <div className="max-w-7xl flex flex-col items-center justify-center md:flex-row mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="flex flex-col items-center justify-center md:pl-11">
            <div className="vertical-line mt-0 md:mr-64"></div>
            <Link
              href="/"
              className="w-44 mt-5 mb-16 md:mb-36 md:mr-24"
              onClick={() =>
                window.scrollTo({
                  top: props.homeRef.current.offsetTop,
                  behavior: "smooth",
                })
              }
            >
              <img src={DilarasLogo} alt="DilarasLogo" />
            </Link>
          </div>

          <div className="space-y-4 mb-16 md:mr-24 md:space-y-6 md:mb-0">
            <h3 className="text-lg font-semibold text-center md:text-left">
              Ponte en Contacto con Nosotros
            </h3>
            <ul className="space-y-2 text-white md:space-y-4">
              <div className="flex flex-row w-64">
                <FontAwesomeIcon icon={faPhone} className="h-6 mt-1 mr-2" />
                <li>+90 216 326 58 56</li>
              </div>
              <div className="flex flex-row w-64">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="h-6 mt-1 mr-2"
                />
                <li>
                  Kosuyolu Mah. Imar Limited Sk. Laila Apt. No:24 D:1
                  Kadikoy/Istanbul TURQUIA
                </li>
              </div>
              <div className="flex flex-row w-64">
                <FontAwesomeIcon
                  icon={faEnvelopeOpen}
                  className="h-6 mt-1 mr-2"
                />
                <li>
                  <a href={mailtoHref} className="text-white underline">
                    dilara@earthlighttravel.com
                  </a>
                  <br />{" "}
                  <a href={mailtoHref2} className="text-white underline">
                    ugur@earthlighttravel.com
                  </a>
                </li>
              </div>
            </ul>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.803237059692!2d29.03705507589835!3d41.007679671350616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab95eb3e9ca39%3A0xed1b02ec1b80dfaa!2sEarthlight%20Travel%20Services!5e0!3m2!1str!2str!4v1736174244800!5m2!1str!2str"
            className="w-60 h-48 sm:w-80 sm:h-60 md:w-96 md:h-72"
          ></iframe>
        </div>
      </section>

      {/* Footer */}
      <section>
        <div className="bg-[#39405A] py-6 pl-8 md:px-20 w-screen">
          <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between gap-2">
            <p className="text-white text-left">
              © {new Date().getFullYear()} Earthlight Travel. All rights
              reserved.
            </p>
            <div className="flex space-x-4">
              <Link
                to="https://www.instagram.com/earthlighttravel?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                className="text-[#98B8DF] hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                to="https://tr.linkedin.com/company/earthlight-travel-services"
                className="text-[#98B8DF] hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
