import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import logo from "../assets/images/1.jpg";
import logo1 from "../assets/images/nav-icon1.svg";
import logo2 from "../assets/images/git.svg";
import logo3 from "../assets/images/tik1.png";

function NavBar() {
    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        function onScroll() {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        return () => { window.removeEventListener("scroll", onScroll) }
    }, []);

    function onUpdateActiveLink(value) {
        setActiveLink(value);
    }
    return (
        <Navbar className={scrolled === true ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home"><img className="loGo" src={logo} alt="logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === "home" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("home")}>Home</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === "projects" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("projects")}>Projects</Nav.Link>
                        <Nav.Link href="#profile" className={activeLink === "profile" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("profile")}>Profile</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://github.com/RickardGS4991"><img className="logos" src={logo1} /></a>
                            <a href="https://www.youtube.com/channel/UCv5pJG9FLA_OqCaHCl9oJmw"><img className="logos" src={logo2} /></a>
                            <a href=""><img className="logos" src={logo3} /></a>
                        </div>
                        <button className="vdd" onClick={() => console.log("Conected!")}><span>Let's Connect!</span></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;