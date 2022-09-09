import React from "react";
import { Component } from "react";
import { Container } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import Nav from './../component/Nav';

import raportStage from './../ext/rendu-stage-1.md';


export default class Stage1 extends Component {


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
                    todo stage du 31/05/2022 au 02/07/2022 en details
                </p>
                <div>
                    <ReactMarkdown>{raportStage}</ReactMarkdown>
                </div>
            </Container>
        );
    }



}