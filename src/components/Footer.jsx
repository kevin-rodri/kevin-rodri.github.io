import React from "react";
import { Image } from 'react-bootstrap';
import whiteGithub from '../photos/white-github.png';
import whiteLinkedin from '../photos/white-linkedin.png';
import whiteResume from '../photos/white-resume.png';
import whiteEmail from '../photos/white-email.png';
import whiteCert from '../photos/white-cert.png';


const Footer = () => {
  return (
    <footer className="custom-footer">
      <div className="social-icons">
        <a href="https://github.com/kevin-rodri/" target="_blank">
          <Image src={whiteGithub} className="icon" alt="Github" />
        </a>
        <a href="https://www.linkedin.com/in/kevin-rodri/" target="_blank">
          <Image src={whiteLinkedin} className="icon" alt="LinkedIn" />
        </a>
        <a href="Rodriguez_Kevin_Resume-12_29_22.pdf" target="_blank">
          <Image src={whiteResume} className="icon" alt="Resume" />
        </a>
        <a href="mailto: krodriguezg203@gmail.com">
          <Image src={whiteEmail} className="icon" alt="Email" />
        </a>
        <a href="https://drive.google.com/drive/u/0/folders/1XjnuMHXN1-y1ywJ-j9jTJWnYsNHT-2pO" target="_blank">
          <Image src={whiteCert} className="icon" alt="Certificates" />
        </a>
      </div>
      <div className="copy">
        <p>&copy; {new Date().getFullYear().toPrecision()} Kevin Rodriguez</p>
      </div>
    </footer>
  );
};

export default Footer;
