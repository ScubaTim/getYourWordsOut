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
            <Card className={`${styles.FormCard} ${"mb-5 pt-4 pl-5 pr-5 pb-5"}`}>
                <Form name="contact" method="POST" data-netlify="true">
                    <h3 className={`${"text-center"}`}>Enter Your Info</h3>
                    <hr className="mb-5" style={{ backgroundColor: "#a2eae0" }} />
                    <input type="hidden" name="form-name" value="contact" />
                    <FormGroup>
                        <Label>Your Name:</Label>
                        <Input type="text" name="name" />
                    </FormGroup>
                    <FormGroup>
                        <Label>Your Email:</Label>
                        <Input type="email" name="email" />
                    </FormGroup>
                    <FormGroup>
                        <Label>Message:</Label>
                        <Input type="textarea" name="message" />
                    </FormGroup>
                    <Button size="lg" className="mt-3" color="info" type="submit">Send</Button>
                </Form>
            </Card>
            <Footer border />
        </Container>
    )
}