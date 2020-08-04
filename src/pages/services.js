import React from 'react';
import styles from './services.module.scss';
import Navigation from '../components/navigation';
import Footer from '../components/footer';
import {
    Card, CardTitle, CardText,
    CardBody, Container, Row, Col
} from 'reactstrap';

export default function Services() {
    return (
        <Container className={`${styles.PageContainer} ${styles.BackgroundTexture}`} fluid >
            <Navigation border />
            <Row>
                <Col className="mt-4">
                    <h1 className="text-center">Services</h1>
                    <hr />
                </Col>
            </Row>
            <Row>
                <Col lg="6" xl="4">
                    <Card className={`${styles.Card} ${"m-3"}`}>
                        <CardBody>
                            <CardTitle className="text-center"><h3>Copy Editing</h3></CardTitle>
                            <hr className="mb-4" style={{ backgroundColor: "#a2eae0" }} />
                            <CardText>
                                <ul>
                                    <li>Perfecting grammar, punctuation, syntax and spelling</li>
                                    <li>Ensuring each word provides clarity and optimal reader engagement</li>
                                    <li>Creating concise copy from scratch to meet client’s vision</li>
                                    <li>Collaborating with client</li>
                                </ul>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="6" xl="4">
                    <Card className={`${styles.Card} ${"m-3"}`}>
                        <CardBody>
                            <CardTitle className="text-center"><h3>Proofreading</h3></CardTitle>
                            <hr className="mb-4" style={{ backgroundColor: "#a2eae0" }} />
                            <CardText>
                                <ul>
                                    <li>Organizing copy flow</li>
                                    <li>Improving readability</li>
                                    <li>Fine-tuning writing style for consistency</li>
                                    <li>Rewriting copy</li>
                                    <li>Communicating needed content changes to client</li>
                                </ul>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="6" xl="4">
                    <Card className={`${styles.Card} ${"m-3"}`}>
                        <CardBody>
                            <CardTitle className="text-center"><h3>Research</h3></CardTitle>
                            <hr className="mb-4" style={{ backgroundColor: "#a2eae0" }} />
                            <CardText>
                                <ul>
                                    <li>Fact-checking all content for accuracy</li>
                                    <li>Fact-finding using online content and manual publications</li>
                                    <li>Providing qualitative, historical and descriptive data</li>
                                    <li>Investigative research and analysis</li>
                                </ul>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col className="mt-4">
                    <h1 className="text-center">Prices</h1>
                    <hr />
                </Col>
            </Row>
            <Row className={`${styles.CenteredCards} ${"text-center mb-4"}`}>
                <Col lg="6" xl="4">
                    <Card className={`${styles.Card} ${"m-3"}`}>
                        <CardBody >
                            <CardTitle><h3>Basic Copy Editing</h3></CardTitle>
                            <hr className="mb-4" style={{ backgroundColor: "#a2eae0" }} />
                            <CardText>
                                <p>$20 per Hour</p>
                                <p>6 - 10 Pages per Hour</p>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="6" xl="4">
                    <Card className={`${styles.Card} ${"m-3"}`}>
                        <CardBody >
                            <CardTitle><h3>Line Editing</h3></CardTitle>
                            <hr className="mb-4" style={{ backgroundColor: "#a2eae0" }} />
                            <CardText>
                                <p>$23 per Hour</p>
                                <p>3 - 5 Pages per Hour</p>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="6" xl="4">
                    <Card className={`${styles.Card} ${"m-3"}`}>
                        <CardBody >
                            <CardTitle><h3>Developmental Editing</h3></CardTitle>
                            <hr className="mb-4" style={{ backgroundColor: "#a2eae0" }} />
                            <CardText>
                                <p>$25 per Hour</p>
                                <p>2 - 4 Pages per Hour</p>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="6" xl="4">
                    <Card className={`${styles.Card} ${"m-3"}`}>
                        <CardBody>
                            <CardTitle><h3>Proofreading</h3></CardTitle>
                            <hr className="mb-4" style={{ backgroundColor: "#a2eae0" }} />
                            <CardText>
                                <p>$23 per Hour</p>
                                <p>4 - 8 Pages per Hour</p>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="6" xl="4">
                    <Card className={`${styles.Card} ${"m-3"}`}>
                        <CardBody>
                            <CardTitle><h3>Research</h3></CardTitle>
                            <hr className="mb-4" style={{ backgroundColor: "#a2eae0" }} />
                            <CardText>
                                <p>$23 per Hour</p>
                                <p>Includes one complimentary hour</p>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Footer border />
        </Container>
    )
}