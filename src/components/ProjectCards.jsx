import React from "react";
import { Col } from "react-bootstrap";

function ProjectCards({imgURL,title,description}) {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgURL} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    );

}

export default ProjectCards;