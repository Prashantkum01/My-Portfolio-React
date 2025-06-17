import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiVisualstudiocode, SiPostman, SiSlack, SiVercel, SiMacos } from "react-icons/si";
import { DiGit } from "react-icons/di";  // Git icon
import { SiAmazonaws } from "react-icons/si";  // AWS icon
import { SiMongodb } from "react-icons/si";  // MongoDB Atlas icon
import {
  SiDocker,
  SiJenkins,
  SiJupyter
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: "center" }}>
        <SiMacos />
        <p style={{ fontSize: "0.3em" }}>Mac</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: "center" }}>
        <SiVisualstudiocode />
        <p style={{ fontSize: "0.3em" }}>VS Code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: "center" }}>
        <DiGit />
        <p style={{ fontSize: "0.3em" }}>Git/GitHub</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: "center" }}>
        <SiPostman />
        <p style={{ fontSize: "0.3em" }}>Postman</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: "center" }}>
        <SiAmazonaws />
        <p style={{ fontSize: "0.3em" }}>AWS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: "center" }}>
        <SiDocker />
        <p style={{ fontSize: "0.3em" }}>Docker</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: "center" }}>
        <SiSlack />
        <p style={{ fontSize: "0.3em" }}>Jenkins</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: "center" }}>
        <SiVercel />
        <p style={{ fontSize: "0.3em" }}>Jupyter Notebook</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
