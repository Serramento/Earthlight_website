import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { InstagramEmbed } from "react-social-media-embed";

const InstagramContent = (props) => {
  return (
    <div className="shadow-md mb-10 md:mb-0 md:mx-5 w-72 sm:w-80 md:w-65 bg-[#FAFAFA]">
      <div>
        <div className="h-70 md:h-65 relative">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <InstagramEmbed
              url={props.post.href}
              width={328}
              height={230}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="m-7 text-left">
          <h4 className="text-xl font-semibold mt-3 text-[#98B8DF]">
            {props.post.title}
          </h4>
          <p className="text-[#C0BABA] text-sm font-semibold text-left mt-3">
            {props.post.description}
          </p>
          <div className="text-bluex pt-5">
            <Link
              to={props.post.href}
              className="text-[#39405A] font-bold text-sm mt-7 pr-1 mb-10 lg:mb-3"
            >
              Aprender Más
            </Link>
            <FontAwesomeIcon
              icon={faChevronRight}
              size="sm"
              className="text-[#98B8DF] z-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstagramContent;
