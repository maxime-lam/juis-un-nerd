import React, {Component} from "react";
import { Container } from "react-bootstrap";

import "./banner.css";
import App from "../App";
import Home from "../pages/Home";

export default class Main extends Component{


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
                    <h1>{this.title}</h1>
                    <p>
                        Depuis jeune je suis passioné par l'informatique, et plus précisement
                        la programmation je souhaite devenir developpeur. pour faire cela
                        j'ai effectuer un Baccalauréat STI2D option SIN et je suis actuellement
                        sur la preparation d'un BTS SIO option SLAM. Mes etudes ne sont pas mon
                        seul point fort car je suis auto-didacte, motivé par l'envie d'en
                        apprendre toujours plus dans ce domaine.
                        Bien évidement j'ai effectuer des projets et pour cela
                        je vous laisse allez regarde sur la rubrique "mes projets"
                    </p>
                </div>
            </Container>
        );
    }
}