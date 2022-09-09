import React, {Component} from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";

import calcJs from './img/calc-js.png'



export default class Project extends Component {

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
                <br/>
                <div>
                    <h1 id="projets">{this.title}</h1>
                    <br/>
                    <br/>
                    <br/>
                    <div className="allProjectCards">
                        <Row xs={1} md={2} className="g-4">
                            <Col>
                                <Card>
                                    <Card.Img style={{width: '20rem'}} variant="top" src={calcJs}/>
                                    <Card.Body>
                                        <Card.Title>Calculatrice en JS</Card.Title>
                                        <Card.Text>
                                            Ceci est une calculatrice codé en JavaScript, ce projets a été éffectuer
                                            afin de de pouvoir s'ammélioré et ce "challengé" dans ce même langauge
                                        </Card.Text>
                                        <Button href="/calcjs" variant="primary">Voir plus</Button>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small>poster le 06/09/2022</small>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>

        );
    }
}
