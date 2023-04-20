import React from "react";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import ProjectCards from "./ProjectCards";
import img1 from "../assets/images/arduino.jpg"
import img2 from "../assets/images/Tlapacoyan.jpg"
import img3 from "../assets/images/far.jpg"
import img4 from "../assets/images/c.jpg"

function Project() {
    const projects = [
        {
            title: "Business StarUP",
            description: "Design & Development",
            imgURL: img3,
        },
        {
            title: "Tlapacoyan",
            description: "Design & Development",
            imgURL: img2,
        },
        {
            title: "Spotify 2.0",
            description: "Design & Development",
            imgURL: img1,
        },
        {
            title: "Arduino - Projects",
            description: "Design & Development",
            imgURL: img1,
        },
        {
            title: "Compiler developer in C",
            description: "Design & Development",
            imgURL: img4,
        },
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Next part shows the most important project i developed</p>
                        <Tab.Container id="project-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab One</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab Two</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">
                                        Tab Three
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {projects.map((project, index) => {
                                            return(
                                                <ProjectCards key={index} {...project} />
                                        );
                                        })}
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">sdfsdf</Tab.Pane>
                                <Tab.Pane eventKey="third">ssdfsdf</Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Project;