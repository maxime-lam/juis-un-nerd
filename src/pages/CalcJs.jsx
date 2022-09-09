import React from "react";
import { Component } from "react";
import { Container, Button} from "react-bootstrap";
import Nav from './../component/Nav'
import {findAllByTitle} from "@testing-library/react";



export default class CalcJs extends Component {

    constructor(props) {
        super(props);
            this.title = props.title;

    }






    render(){
        return(
            <Container fluid>
                <Nav  />
                <h1>{this.title}</h1>
                <p>
                    Cette calculatrice fonctionne grace a un pop-up qui va 
                    s'afficher et qui nous propose de faire soit une addition,
                    une soustraction, une multiplication ou une division
                    apres il nous demande de rentrer les deux chiffres. et intègre 
                    aussi la capacité de detecter si le calcule est possible ou non 
                    par exemple: il est impossible de divisé par 0
                </p>
                <br />
                <br />
                <br />
                <a href="https://try-calc-js-redirect.herokuapp.com/" target="_blank" rel="noopener noreferrer">tester</a>
            </Container>
        );
    }
    //


}