import React from 'react';
import Navigation from '../components/navigation';
import Footer from '../components/footer';
import styles from './contact.module.scss';
import { Button, Container, Row, Col, Card, Form, FormGroup, Label, Input } from 'reactstrap';

export default function Contact() {
    return (
        <Container className={`${styles.PageContainer} ${styles.BackgroundTexture}`} fluid>
            <Navigation border />
            <Row>
                <Col>
                    <h1 className="text-center mt-4">Get In Touch</h1>
                    <hr className="mb-4" />
                    <h5 className="m-5 text-center">Email me and let's make something happen together!</h5>
                </Col>
            </Row>
            <Card className={`${styles.FormCard} ${"mb-5 p-4"}`}>
                <form
                    name="contact"
                    method="POST"
                    data-netlify="true"
                >
                    <h3 className={`${"text-center"}`}>Enter Your Info</h3>
                    <hr className="mb-4" style={{ backgroundColor: "#a2eae0" }} />
                    <FormGroup>
                        <label for="exampleEmail">Name</label>
                        <input type="text" name="fullname" placeholder="Enter your full name" />
                    </FormGroup>
                    <FormGroup>
                        <label for="exampleEmail">Email</label>
                        <input type="email" name="email" placeholder="Enter your email address" />
                    </FormGroup>
                    <FormGroup>
                        <label for="exampleText">Message</label>
                        <input type="textarea" name="message" rows="8" placeholder="Please provide a brief description of your needs." />
                    </FormGroup>
                    <Row>
                        <Col className={styles.ButtonRow}>
                            <button size="lg" color="info" className={styles.SubmitButton} type="submit">Submit</button>
                        </Col>
                    </Row>
                </form>
            </Card>
            <Footer border />
        </Container>
    )
}