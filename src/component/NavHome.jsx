import React from "react";
import { Container, Button} from "react-bootstrap";


function NavHome() {
  return ( 
    <Container fluid>
      <br/>
      <div>
      <Button href="#mescompetences">Mes Compétences</Button>
      <Button className="btnPlus" href="#projets">Mes Projets</Button>
      <Button className="btnPlus" href="#mesexperiences">Mes Experiences</Button>

      </div>
    </Container> 

  );
}

export default NavHome;
