import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import "./Contact.css";
import { AiOutlineSend } from "react-icons/ai";
import emailjs from '@emailjs/browser';

function Contact() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        message: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        // EmailJS configuration
        // Replace these with your actual EmailJS credentials
        const serviceID = 'service_xl1k6eo'; // You'll get this from EmailJS
        const templateID = 'template_chty52k'; // You'll get this from EmailJS
        const publicKey = 'T-8gIuM7FnZG5Rn1G'; // You'll get this from EmailJS

        // Template parameters that will be sent to your email
        const templateParams = {
            from_name: formData.fullName,
            from_email: formData.email,
            message: formData.message,
            to_email: 'mohamed3asmar222@gmail.com'
        };

        emailjs.send(serviceID, templateID, templateParams, publicKey)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setSubmitStatus('success');
                setFormData({ fullName: "", email: "", message: "" });
                setIsSubmitting(false);
            })
            .catch((error) => {
                console.error('FAILED...', error);
                setSubmitStatus('error');
                setIsSubmitting(false);
            });
    };

    return (
        <Container fluid className="contact-section">
            <Particle />
            <Container>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={12} className="contact-header">
                        <h1 className="contact-heading">
                            Get In <strong className="purple">Touch</strong>
                        </h1>
                        <p style={{ color: "white", textAlign: "center" }}>
                            Feel free to reach out to me for any questions or opportunities!
                        </p>
                    </Col>
                </Row>

                <Row style={{ justifyContent: "center", paddingTop: "30px" }}>
                    <Col md={6} className="contact-form-container">
                        <div className="contact-form-card">
                            {submitStatus === 'success' && (
                                <div className="alert alert-success" style={{ marginBottom: "20px", textAlign: "center" }}>
                                    ✅ Message sent successfully! I'll get back to you soon.
                                </div>
                            )}
                            {submitStatus === 'error' && (
                                <div className="alert alert-danger" style={{ marginBottom: "20px", textAlign: "center" }}>
                                    ❌ Failed to send message. Please try again or email me directly at mohamed3asmar222@gmail.com
                                </div>
                            )}

                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="fullName">Full Name</label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        className="form-control contact-input"
                                        placeholder="Enter your full name"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        required
                                        disabled={isSubmitting}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="form-control contact-input"
                                        placeholder="your.email@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        disabled={isSubmitting}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Your Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        className="form-control contact-textarea"
                                        placeholder="Tell me about your project, timeline, and any specific requirements..."
                                        rows="6"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        disabled={isSubmitting}
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="contact-submit-btn"
                                    disabled={isSubmitting}
                                >
                                    <AiOutlineSend style={{ marginRight: "8px" }} />
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Contact;
