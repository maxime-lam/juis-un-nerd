import React from "react";
import { Component } from "react";
import { Container } from "react-bootstrap";


import NavHome from './../component/NavHome';
import Main from './../component/Main'
import Competences from './../component/Competences';
import Project from './../component/Project';
import MesExperiences from "../component/MesExperiences";



export default class Home extends Component {


    constructor(props) {
        super(props);
        this.titleMain = props.titleMain;
        this.titleSkill = props.titleSkill;
        this.titleProject = props.titleProject;
        this.titleExperience = props.titleExperience;

    }


    render(){
        return(
            <Container fluid>
                <NavHome />
                <Main title={this.titleMain}/>
                <Competences title={this.titleSkill} />
                <Project title={this.titleProject}/>
                <MesExperiences title={this.titleExperience} />
            </Container>
        );
    }



}