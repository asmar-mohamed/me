import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiDocker,
  SiPostman,
  SiJira,
  SiGitlab,
  SiGithub,
  SiVisualstudiocode,
  SiPowershell,
} from "react-icons/si";
import { FaTerminal } from "react-icons/fa";
import { DiGit } from "react-icons/di";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker size="50px" color="#2496ED" />
        <div className="tech-icons-text">Docker</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman size="50px" color="#FF6C37" />
        <div className="tech-icons-text">Postman</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJira size="50px" color="#0052CC" />
        <div className="tech-icons-text">Jira</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGitlab size="50px" color="#FC6D26" />
        <div className="tech-icons-text">GitLab</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit size="50px" color="#F05032" />
        <div className="tech-icons-text">Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub size="50px" color="white" />
        <div className="tech-icons-text">GitHub</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode size="50px" color="#007ACC" />
        <div className="tech-icons-text">VS Code</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaTerminal size="50px" color="white" />
        <div className="tech-icons-text">Terminal</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPowershell size="50px" color="#5391FE" />
        <div className="tech-icons-text">PowerShell</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
