import React from "react";
import '../styles/Footer.scss'

const Footer = () => {
  return (
    <footer>
      <div>
        <h1>TechyStar</h1>
        <p>@all right reserved</p>
      </div>

      <div>
        <h5>Follow Me</h5>
        <div>
          <a href="https://www.instagram.com/?hl=en" target={"blank"}>
            Instagram
          </a>
          <a href="https://github.com/" target={"blank"}>
            Github
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;