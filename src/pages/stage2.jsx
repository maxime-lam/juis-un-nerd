import React from "react";
import { Component } from "react";
import { Container } from "react-bootstrap";


import Nav from './../component/Nav';


export default class Stage2 extends Component {

    constructor(props) {
        super(props);
        this.title = props.title;

    }



    render(){
        return(
            <Container fluid>
                <Nav />
                <h1>{this.title}</h1>
                <p>
                    sera disponible en mars 2023
                </p>
            </Container>
        );
    }



}