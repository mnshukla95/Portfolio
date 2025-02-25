import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
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
              A LITTLE <span className="purple"> ABOUT </span> ME
            </h1>
            <p className="home-about-body">
            hi there 👋 my name is abhay. i am currently a deployed engineer at 
            <b className="purple"> codeium</b>, and graduated from 
            <b className="purple"> uc berkeley </b> in may 2022 with a degree in cs & a minor in city planning.
            <br />
            <br />
            i am passionate about 
            <i>
              <b className="purple"> public transportation & planning 🏙, using and improving data 📊, and maps 🗺 </b>
            </i> 
            (amongst many other interests).
            <br />
            <br />
            i was previously a solution engineer at 
            <b className="purple"> c3 ai </b> for over two years, working on building enterprise ai applications in 
            <i>
              <b className="purple"> energy & manufacturing</b>
            </i>
            . alongside my work in college, i have had the opportunity to intern at 
            <i>
              <b className="purple"> accenture labs, appdynamics, and american express</b>
            </i>
            .
            <br />
            <br />
            if you have any questions about any of my projects or want to reach out, my email is 
            <b className="purple"> [abhaykaggarwal] @ [gmail] . [com] </b>. my pronouns are 
            <i>
              <b className="purple"> he/him</b>
            </i>
            !
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
                  href="https://github.com/abhaykaggarwal"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/abhaykaggarwal"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/abhayka/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://www.instagram.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li> */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
