import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Prashant Kumar </span>
            from <span className="purple"> Noida, India.</span>
            <br />
            I have completed my BTech in Computer Science & Engineering.
            <br />
            I am currently focusing on building projects in Full Stack Development, working with technologies like Python, Django, MySQL, and React.
            <br />
            <br />
            Apart from coding, here are a few activities that I enjoy!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring New Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Working on Personal Projects
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Tech & Biography Books & Articles
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Building solutions that make an impact!"{" "}
          </p>
          <footer className="blockquote-footer">Prashant Kumar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
