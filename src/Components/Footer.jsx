import React from "react";
import "./Footer.css";
import {FaGithub , FaLinkedin , FaInstagram , FaTwitter ,FaEnvelope} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer-faded-text">Shashank Gulati</div>
          <div className="link-wrapper">
            <div>
              <a href="#projects">Projects</a>
            </div>
            <div>
              <a href="#skills">Skills</a>
            </div>
            <div>
              <a href="#contactme">Contact Me</a>
            </div>
          </div>
          <div className="icon-wrapper">
            <a href="https://www.linkedin.com/in/shashank-gulati-1a262b213" target="_blank" rel="noreferrer">
              <i className=" icon">
                <FaLinkedin/>
              </i>
            </a>
            <a href="https://github.com/SHASHANK2405" target="_blank" rel="noreferrer">
              <i className=" icon">
                <FaGithub/>
              </i>
            </a>
            <a href="https://twitter.com/Shashankgulati0987" target="_blank" rel="noreferrer">
              <i className=" icon">
                <FaTwitter/>
              </i>
            </a>
            <a href="https://www.instagram.com/shashankgulati_/" target="_blank" rel="noreferrer">
              <i className=" icon">
                <FaInstagram/>
              </i>
            </a>
            <a href="https://www.instagram.com/shashankgulati_/" rel="noreferrer" target="_blank">
              <i className=" icon">
                <FaEnvelope/>
              </i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
