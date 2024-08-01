import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Whatsapp from '@iconscout/react-unicons/icons/uil-whatsapp';
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>peerjadebilal@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.instagram.com/bilalpeerzade?utm_source=qr&igsh=MWR1aTVjeWtzYWN2Ng=="><Insta color="white" size={"3rem"} /></a>
          <a href="https://wa.link/ks8i8l"><Whatsapp color="white" size={"3rem"} /></a>
          <a href="https://github.com/faizhussaini"><Gitub color="white" size={"3rem"} /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
