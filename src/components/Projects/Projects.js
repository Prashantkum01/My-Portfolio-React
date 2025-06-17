import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import mentalHealthTracker from "../../Assets/Projects/mentalHealthTracker.png";
import ventureLink from "../../Assets/Projects/ventureLink.png";
import aiTripNavigator from "../../Assets/Projects/aiTripNavigator.png";
import expenseTracker from "../../Assets/Projects/expenseTracker.png";
import hospitalManagement from "../../Assets/Projects/hospitalManagement.png";
import soldierHealthMonitoring from "../../Assets/Projects/soldierHealthMonitoring.png"; // Add image path for Soldier Health Monitoring

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>


          {/* VentureLink */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ventureLink}
              isBlog={false}
              title="VentureLink (Multi-Functional Listing)"
              description="A scalable platform for shop and tourist place listings with review functionality. Implemented using Node.js, Express, and MongoDB, with Mapbox integration for mapping, Cloudinary for media uploads, and Passport.js for user authentication."
              ghLink=""
              demoLink=""
            />
          </Col>
          
          {/* AI-Powered Mental Health Tracker */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mentalHealthTracker}
              isBlog={false}
              title="AI-Powered Mental Health Tracker"
              description="A user-friendly platform for tracking mental well-being using AI sentiment analysis. Features an interactive dashboard with mood history and trends visualized via Chart.js, and RESTful APIs for frontend-backend communication."
              ghLink=""
              demoLink=""
            />
          </Col>

          

          {/* AI Trip Navigator */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aiTripNavigator}
              isBlog={false}
              title="AI Trip Navigator"
              description="An AI-driven web application that generates personalized trip itineraries using Google Gemini API. Includes hotel and restaurant recommendations, Google OAuth for authentication, and Google Maps integration for detailed location info."
              ghLink=""
              demoLink=""
            />
          </Col>

          {/* Soldier Health Monitoring and Position Tracking System */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={soldierHealthMonitoring}
              isBlog={false}
              title="Soldier Health Monitoring and Position Tracking System"
              description="An IoT-based system to monitor soldier health and track positions. Integrated health monitoring with LM35 and RC-A-4015 sensors, GPS tracking with Neo-6M GPS, and wireless data transmission with SX-1278 LoRa modules. A Blynk app was developed to visualize live data."
              ghLink=""
              demoLink=""
            />
          </Col>

          {/* Personal Expense Tracker */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={expenseTracker}
              isBlog={false}
              title="Personal Expense Tracker"
              description="A web application to manage and track personal expenses using Spring Boot, React, MySQL, and JWT for secure user authentication. Features include expense categorization, dynamic dashboard, report generation in PDF/CSV, and responsive design."
              ghLink=""
              demoLink=""
            />
          </Col>

          {/* Hospital Management System */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hospitalManagement}
              isBlog={false}
              title="Hospital Management System"
              description="A hospital management system with role-based login (Manager, Employee, Customer), product catalog access, personal purchase history, and sales processing. Built using Java, Swing, and MySQL."
              ghLink=""
              demoLink=""
            />
          </Col>

          {/* Additional Projects */}
          {/* Add more projects as needed */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
