import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import emailjs from "emailjs-com";
import { AiOutlineMail } from "react-icons/ai";

function ContactMeCard() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_esyvn0i", // Your EmailJS service ID
        "template_o369j4f", // Your EmailJS template ID
        e.target,
        "alIVm1w8wRTSY970M" // Your EmailJS Global User API Key (not private key)
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
        },
        (error) => {
          alert("Error sending message, try again later.");
        }
      );
  };

  return (
    <Card className="contact-card-view">
      <Card.Body>
        <Card.Title className="text-center">
          <AiOutlineMail /> Contact Me
        </Card.Title>
        <Form onSubmit={sendEmail}>
          <Form.Group controlId="formName">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="formMessage">
            <Form.Label>Your Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Write your message here"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100 mt-3">
            Send Message
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default ContactMeCard;
