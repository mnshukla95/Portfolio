import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Particle from "./Particle";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // replace with call to backend here
    console.log("Form submitted:", formData);
    
    // Show success message and reset form
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <Container fluid className="contact-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Contact Me</strong>
        </h1>
        <p style={{ color: "white" }}>
          Feel free to reach out to me for any questions or opportunities!
        </p>
        
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Col md={8} className="contact-form">
            {isSubmitted ? (
              <div className="success-message">
                <h4 style={{ color: "#00ff95", textAlign: "center", margin: "50px 0" }}>
                  Thank you for your message! I'll get back to you soon.
                </h4>
              </div>
            ) : (
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label style={{ color: "white" }}>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    style={{ background: "rgba(255, 255, 255, 0.1)", color: "white" }}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label style={{ color: "white" }}>Email Address</Form.Label>
                  <Form.Control
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    style={{ background: "rgba(255, 255, 255, 0.1)", color: "white" }}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label style={{ color: "white" }}>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your message"
                    rows={6}
                    style={{ background: "rgba(255, 255, 255, 0.1)", color: "white" }}
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  style={{ marginTop: "15px", width: "180px" }}
                >
                  Send Message
                </Button>
              </Form>
            )}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;