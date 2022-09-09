import React from "react";
import { Container } from "react-bootstrap";

import "./banner.css";

function Banner() {
  return ( 
    <Container fluid>
      <div className="banner">
        <br />
        <br />
        <br />
        <br />
        <h1 className="bannerText">Maxime LAMEIRINHAS</h1>
        <h3 className="bannerSubText">
          Etudiant en programmation informatique
        </h3>
        <br />
      </div>
    </Container> 

  );
}

export default Banner;
