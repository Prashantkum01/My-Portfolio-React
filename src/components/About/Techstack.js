import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJava, DiJavascript1, DiReact, DiNodejs, DiGit, DiPython } from "react-icons/di";
import { SiPostgresql, SiRedux, SiNextdotjs, SiSolidity, SiFirebase, SiAmazonaws } from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";
// import { FaPostman } from "react-icons/fa";
import { BsFillBootstrapFill } from "react-icons/bs";
import { FaHtml5 } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiExpress } from "react-icons/si";  // Added Express.js icon

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <p style={{ fontSize: "0.3em" }}>Django</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p style={{ fontSize: "0.3em" }}>JavaScript (ES6+)</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <p style={{ fontSize: "0.3em" }}>Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandGolang />
        <p style={{ fontSize: "0.3em" }}>Go</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <p style={{ fontSize: "0.3em" }}>Node.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
        <p style={{ fontSize: "0.3em" }}>Express.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p style={{ fontSize: "0.3em" }}>React</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
        <p style={{ fontSize: "0.3em" }}>Next.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSolidity />
        <p style={{ fontSize: "0.3em" }}>Solidity</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <p style={{ fontSize: "0.3em" }}>PostgreSQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <p style={{ fontSize: "0.3em" }}>Firebase</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
        <p style={{ fontSize: "0.3em" }}>Redis</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <p style={{ fontSize: "0.3em" }}>Git</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
        <p style={{ fontSize: "0.3em" }}>AWS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BsFillBootstrapFill />
        <p style={{ fontSize: "0.3em" }}>Bootstrap</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaHtml5 />
        <p style={{ fontSize: "0.3em" }}>HTML5</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
        <p style={{ fontSize: "0.3em" }}>Tailwind CSS</p>
      </Col>
    </Row>
  );
}

export default Techstack;
