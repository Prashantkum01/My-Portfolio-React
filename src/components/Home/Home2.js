import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import myImg from "../../Assets/prashantimage.png";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
            <span className="purple"> PROFESSIONAL </span> SUMMARY
            </h1>
            <p className="home-about-body">
              I am passionate about programming and technology, with a strong foundation in 
              <i>
                <b className="purple"> Python, JavaScript and SQL. </b>
              </i>
              <br />
              <br />
              My areas of interest include creating innovative 
              <i>
                <b className="purple"> Web Applications and Software Products </b>
              </i>
               and exploring fields like
              <i>
                <b className="purple">AI, Machine Learning and IoT. </b>
              </i>
              <br />
              <br />
              I enjoy building solutions using 
              <b className="purple"> Django</b> and
              <i>
                <b className="purple"> Modern JavaScript Frameworks </b>
              </i>
              such as
              <i>
                <b className="purple"> React.js.  </b>
              </i>
              Additionally, I am enthusiastic about learning and working with 
              <b className="purple"> databases</b> like MySQL and PostgreSQL.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Prashantkum01"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="prashantkum01"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/prashant-kumar-20b7851b4/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
