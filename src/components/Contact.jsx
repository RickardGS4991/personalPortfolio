import React, { useState } from "react";
import {Row, Container, Col} from "react-bootstrap";

function Contact() {
    const formInitialDetails = {
        firstName:"",
        lastName:"",
        email:"",
        phone:"",
        messages:""
    }

    const { formDetails, setFormDetails } = useState(formInitialDetails);
    const { buttonText, setButtonText } = useState("send");
    const { status, setStatus } = useState({});

    function onFormUpdate(categories, value) {
        setFormDetails({
            ...formDetails,
            [categories]: value
        });
    }

    async function handleSubmit(e){
        e.preventDefault();
        setButtonText("Sending...");
        let reponse = await fetch("http:localhost:5000/contact",{
            method:"POST",
            headers: {
                "Content-Type":"Application/json;charset=utf-8",
            },
            body: JSON.stringify(formDetails),
        });

        setButtonText("Send");
        let result = reponse.json();
        setFormDetails(formInitialDetails);
        if(result.code===200){
            setStatus({success:true,message:"Message sent successfully"});
        } else {
            setStatus({success:false,message:"Something went wrong"});
        }
    }

    return (
        <section className="contact" id="contact">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src="" alt="Contact Us" />
                    </Col>
                    <Col md={6}>
                        <h2>Get it touch</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate("firstName", e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate("lastName", e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.email} placeholder="Email" onChange={(e) => onFormUpdate("email", e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.phone} placeholder="Phone Number" onChange={(e) => onFormUpdate("phone", e.target.value)} />
                                </Col>
                                <Col>
                                <textarea rows={6} value={formDetails.messages} placeholder="Message" onChange={(e)=>onFormUpdate("messages",e.target)} />
                                <button type="submit"><span>{buttonText}</span></button>
                                </Col>
                                {
                                    status.message && <Col>
                                    <p className={status.message === false ? "danger" : "success"}>{status.messages}</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Contact;