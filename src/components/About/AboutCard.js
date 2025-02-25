import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
        <p style={{ textAlign: "justify" }}>
          Hi Everyone,<br /><br />
          I am <span className="purple">Abhay Aggarwal</span> from <span className="purple">UC Berkeley</span>.<br /><br />
          I studied at UC Berkeley's Division of Computing, Data Science, and Society.<br /><br />
          My background spans research in humanitarian data, urban displacement, and renewable energy.
        </p>
          <p style={{ textAlign: "justify", marginTop: "20px" }}>
            My research experience includes:
          </p>
          
          <ul style={{ marginBottom: "20px" }}>
            <li className="about-activity">
              <ImPointRight /> United Nations Humanitarian Data Exchange - predicting HXL tags for datasets<br />
            </li>
            <li className="about-activity">
              <ImPointRight /> Urban Displacement Project - developing ML models to predict gentrification<br />
            </li>
            <li className="about-activity">
              <ImPointRight /> East Bay Community Energy - optimizing battery deployments and analyzing carbon emissions<br />
            </li>
          </ul>
          
          <p style={{ textAlign: "justify" }}>
            I've been actively involved in campus organizations:
          </p>
          
          <ul style={{ marginBottom: "20px" }}>
            <li className="about-activity">
              <ImPointRight /> The Berkeley Forum - Vice President of Moderating Committee<br />
            </li>
            <li className="about-activity">
              <ImPointRight /> BEACN - Project Manager and VP of Operations<br />
            </li>
          </ul>
          
          <p style={{ textAlign: "justify" }}>
            Some of the tools and languages I'm comfortable with:
          </p>
          
          <ul style={{ marginBottom: "20px" }}>
            <li className="about-activity">
              <ImPointRight /> Languages: Python, JavaScript, Java, C, SQL, HTML+CSS, Go<br />
            </li>
            <li className="about-activity">
              <ImPointRight /> Tools: Tableau, Figma, Google BigQuery, G-Power<br />
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)", marginTop: "30px", fontStyle: "italic" }}>
            "Using technology and data science to drive positive social impact"
          </p>
          <footer className="blockquote-footer">Abhay</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;