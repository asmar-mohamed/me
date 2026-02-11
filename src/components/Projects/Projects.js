import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Transport Presence Management"
              description="Web platform for managing presence in urban transport using PHP and MySQL. Allows real-time registration of passenger presence via QR Code, consultation of presence lists, and real-time bus tracking by the administrator."
            ghLink="https://github.com/asmar-mohamed/bus_tracking_system_project"
            // demoLink="https://..."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Course Recommendation Platform"
              description="Intelligent course recommendation platform using React, TypeScript, and Redux. Full-stack web application for personalized learner orientation. Design and development of an innovative AI-based web solution recommending courses adapted to user skills and objectives."
            ghLink="https://github.com/asmar-mohamed/AI-Course-Recommendation"
            // demoLink="https://..."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}  // ضع هنا الصورة المناسبة
              isBlog={false}
              title="Gestion Mission Parking"
              description="A web application to manage parking missions efficiently. 
    Users can create, update, and monitor missions, track vehicles, filter by status or date, and visualize active and completed missions on a dashboard. Built with React and Bootstrap for a responsive and user-friendly interface."
              ghLink="https://github.com/Mahmoudlammadni/Gestion_mission_parking"
              // demoLink="#" // ضع رابط Live Demo بعد deploy
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
