import React from "react";
import { Container } from "react-bootstrap";



import lnkd from './img/linkedin-icon.png'
import JSONpackage from './../../package.json';


function Footer() {
  return ( 
    <Container fluid>
      <br/>
      <br/>
      <div className="footer">
        <p>Mes liens: </p>
        <br />
        <div>
            <a href="http://www.linkedin.com/in/maxime-lameirinhas-4532a9208"><img className="footerImg" src={lnkd} alt="linkedin"/></a>
        </div>
        <p> &copy; 2022  --   Copyrigth : Maxime LAMEIRINHAS </p>
        <p>version : {JSONpackage.version}</p>
      </div>
    </Container> 

  );
}

export default Footer;
