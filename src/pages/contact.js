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
                <Form name="contact" method="POST" data-netlify="true">
                    <input type="hidden" name="form-name" value="contact" />
                    <FormGroup>
                        <Label>Your Name: <Input type="text" name="name" /></Label>
                    </FormGroup>
                    <FormGroup>
                        <Label>Your Email: <Input type="email" name="email" /></Label>
                    </FormGroup>
                    <FormGroup>
                        <Label>Message: <Input type="textarea" name="message"></Input></Label>
                    </FormGroup>
                    <Button type="submit">Send</Button>
                </Form>
            </Card>
            <Footer border />
        </Container>
    )
}