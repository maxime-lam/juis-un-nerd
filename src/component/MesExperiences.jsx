import React, {Component} from "react";
import { Container, Card, Button, CardGroup, Row, Col } from "react-bootstrap";


import noimg from './img/noimg.jpg';
import comingsoon from './img/coming-soon.jpg';

export default class MesExperiences extends Component {

    constructor(props) {
        super(props);
        this.title = props.title;
    }


    render() {
        return (
            <Container fluid>
                <br/>
                <br/>
                <br/>
                <h1 id="mesexperiences">{this.title}</h1>
                <br/>
                <br/>
                <br/>
                <p>Dans cette rubrique je vais vous présenté mes experiences professionnelle que
                    j'ai pu avoir la chances d'avoir
                </p>
                <br/>
                <br/>
                <div className="allProjectCards">
                    <div>
                        <Row xs={1} md={2} className="g-4">
                            <Col>
                                <Card>
                                    <Card.Img src={noimg} style={{width: '20rem'}}/>
                                    <Card.Body>
                                        <Card.Title>Stage de première année de BTS</Card.Title>
                                        <Card.Text>
                                            J'ai effectuer ce stage du 31/05/2022 au 02/07/2022 afin de valider ma
                                            première année de BTS
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small>poster le 06/09/2022</small>
                                    </Card.Footer>
                                    <br/>
                                    <Button href="/stage1">Voir en détails</Button>
                                </Card>
                            </Col>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <Col>
                                <Card>
                                    <Card.Img src={comingsoon} style={{width: '20rem'}}/>
                                    <Card.Body>
                                        <Card.Title>Stage de deuxième année de BTS</Card.Title>
                                        <Card.Text>
                                            Ce stage sera effectuer du 11/01/2023 au 11/02/2030
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small>sera poster en mars 2023
                                        </small>
                                    </Card.Footer>
                                    <br/>
                                    <Button href="/stage2">Voir en détails</Button>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>
        );
    }
}
