import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">ASMAR Mohamed </span>
            from <span className="purple"> Laayoune, Maroc.</span>
            <br />
            I am a student in Computer Systems Engineering and Web Technologies at <span className="purple">ISITW</span>.
            <br />
            I also hold a Specialized Technician Diploma (DTS) in Digital Development from <span className="purple">OFPPT</span>.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Football
            </li>
            <li className="about-activity">
              <ImPointRight /> E-sport
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">asmar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
