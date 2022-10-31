import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="primaryTextColor x-small-font font-weight-400">
        © 2023 by Populencer
      </div>
      <div>
        <span className="secondaryTextColor x-small-font font-weight-400">
          Proudly created in India
        </span>{" "}
        🇮🇳
      </div>
    </div>
  );
};

export default Footer;
