import React from "react";
import {Row, Col, Container} from "react-bootstrap";
import logo1 from "../assets/images/nav-icon1.svg";
import logo2 from "../assets/images/logo2.png";
import logo3 from "../assets/images/logo3.png"

function Footer() {
    const time = new Date();
    const year = time.getFullYear();
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col sm={6}>
                        <img src="" alt="" />
                        <Col className="text-center text-sm-end">
                            <div className="social-icon">
                                <a href=""><img src={logo1} /></a>
                                <a href=""><img src={logo2} /></a>
                                <a href=""><img src={logo3} className="logoY"/></a>
                            </div>
                            <p>Copyright {year}. All right reserved</p>
                        </Col>
                    </Col></Row>
            </Container>
        </footer>
    );
}

export default Footer;