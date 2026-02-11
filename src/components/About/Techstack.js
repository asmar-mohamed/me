import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiNextdotjs,
  SiPhp,
  SiLaravel,
  SiSpringboot,
  SiMysql,
  SiAngular,
  SiBootstrap,
  SiTypescript,
  SiGnubash,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiNpm,
  SiWordpress,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 size="50px" color="#E34F26" />
        <div className="tech-icons-text">HTML</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 size="50px" color="#1572B6" />
        <div className="tech-icons-text">CSS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 size="50px" color="#F7DF1E" />
        <div className="tech-icons-text">JavaScript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript size="50px" color="#3178C6" />
        <div className="tech-icons-text">TypeScript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython size="50px" color="#3776AB" />
        <div className="tech-icons-text">Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava size="50px" color="#007396" />
        <div className="tech-icons-text">Java</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGnubash size="50px" color="#4EAA25" />
        <div className="tech-icons-text">Bash</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLaravel size="50px" color="#FF2D20" />
        <div className="tech-icons-text">Laravel</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpringboot size="50px" color="#6DB33F" />
        <div className="tech-icons-text">Spring Boot</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs size="50px" color="#339933" />
        <div className="tech-icons-text">Node.js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact size="50px" color="#61DAFB" />
        <div className="tech-icons-text">React.js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAngular size="50px" color="#DD0031" />
        <div className="tech-icons-text">Angular</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap size="50px" color="#7952B3" />
        <div className="tech-icons-text">Bootstrap</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss size="50px" color="#06B6D4" />
        <div className="tech-icons-text">Tailwind CSS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNpm size="50px" color="#CB3837" />
        <div className="tech-icons-text">NPM</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWordpress size="50px" color="#21759B" />
        <div className="tech-icons-text">WordPress</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql size="50px" color="#4479A1" />
        <div className="tech-icons-text">MySQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb size="50px" color="#47A248" />
        <div className="tech-icons-text">MongoDB</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs size="50px" color="white" />
        <div className="tech-icons-text">Next.js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit size="50px" color="#F05032" />
        <div className="tech-icons-text">Git</div>
      </Col>
    </Row>
  );
}

export default Techstack;
