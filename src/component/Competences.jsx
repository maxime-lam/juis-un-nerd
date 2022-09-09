import React, {Component} from "react";
import { Container } from "react-bootstrap";



import { SiJavascript, SiHtml5, SiCss3, SiReact, SiBootstrap, SiPhp, SiPhpmyadmin, SiMysql } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { AiOutlineGitlab } from "react-icons/ai";



export default class Competences extends Component {

    constructor(props) {
        super(props);
        this.title = props.title;
    }

    render() {

        return (
            <Container fluid>
                <br/>
                <br/>
                <div>
                    <h1 id="mescompetences">{this.title}</h1>
                    <div className="skills">
                        <br/>
                        <br/>
                        <div>
                            <a href="https://fr.wikipedia.org/wiki/Hypertext_Markup_Language" target="_blank"><SiHtml5 size={160} style={{color: "#F06529"}} className="logo"/></a>
                            <a href="https://fr.wikipedia.org/wiki/Feuilles_de_style_en_cascade" target="_blank"><SiCss3 size={160} style={{color: "#0F5298"}} className="logo"/></a>
                            <a href="https://fr.wikipedia.org/wiki/JavaScript" target="_blank"><SiJavascript size={160} style={{color: "#F0DB4F"}}/></a>
                            <a href="https://fr.wikipedia.org/wiki/React" target="_blank"><SiReact size={160} style={{color: "#61DBFB"}} className="logo"/></a>
                            <a href="https://fr.wikipedia.org/wiki/Bootstrap_(framework)" target="_blank"><SiBootstrap size={160} style={{color: "#553c7b"}} className="logo"/></a>
                            <a href="https://fr.wikipedia.org/wiki/PHP" target="_blank"><SiPhp size={160} style={{color: "#474A8A"}} className="logo"/></a>
                            <a href="https://fr.wikipedia.org/wiki/PhpMyAdmin" target="_blank"><SiPhpmyadmin size={160} style={{color: "#F89C0E"}} className="logo"/></a>
                            <a href="https://fr.wikipedia.org/wiki/MySQL" target="_blank"><GrMysql size={160} style={{color: "#00758F"}} className="logo"/></a>
                            <a href="https://fr.wikipedia.org/wiki/GitLab" target="_blank"><AiOutlineGitlab size={160} style={{color: "#FC6D27"}} className="logo"/></a>
                        </div>
                        <br/>
                        <br/>
                    </div>
                </div>
            </Container>

        );
    }
}