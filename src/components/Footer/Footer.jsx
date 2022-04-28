import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <p>Crafting quality since 1945</p>
      <div className="footer-social">
        <i className="fab fa-instagram" />
        <i className="fab fa-twitter" />
        <i className="fab fa-facebook" />
        <i className="fab fa-tiktok" />
      </div>
    </footer>
  );
};
export default Footer;
