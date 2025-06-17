import React from "react";
import ContactMeCard from "./ContactMeCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ConnectMePage() {
  return (
    <Container>
      <Row>
        <Col >
          <ContactMeCard />
        </Col>
      </Row>
    </Container>
  );
}

export default ConnectMePage;

