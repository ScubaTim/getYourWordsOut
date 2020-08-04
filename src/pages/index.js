import React from "react"
import Navigation from '../components/navigation';
import Typewriter from '../components/typewriter';
import Footer from '../components/footer';
import { Link } from 'gatsby';
import { Container, Row, Col, Jumbotron, Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import ProfilePic from '../../static/profilepic.png';
import styles from './index.module.scss';

export default function Home() {
  return (
    <Container className={styles.PageContainer} fluid>
      <Navigation />
      <Jumbotron className={styles.Jumbotron}>
        <Typewriter />
        <p>We all have an inner voice, filled with ideas, memories and stories worth telling. I will help you get your words out nimbly, to fulfill your business or personal publication goals.</p>
        <hr />
        <div >
          <p><Link to="/contact"><strong>Contact me</strong></Link> to get your project off the ground and transformed to a finished product you are proud of!</p>
        </div>
      </Jumbotron>
      <Card body className={styles.BackgroundTexture}>
        <CardBody>
          <CardTitle>
            <h1>Hello!</h1>
            <h2>My name is Paula Troina.</h2>
          </CardTitle>
          <CardText>
            <p>I can assist with researching, copy editing and proofreading practically anything!</p>
            <ul>
              <Row>
                <Col>
                  <li><span>Manuscripts</span></li>
                  <li><span>Memoirs</span></li>
                  <li><span>Press Releases</span></li>
                  <li><span>Articles</span></li>
                  <li><span>Websites and Blog content</span></li>
                </Col>
                <Col>
                  <li><span>Reports</span></li>
                  <li><span>Cover Letters</span></li>
                  <li><span>Brochures</span></li>
                  <li><span>Family and church histories</span></li>
                  <li><span>Research Projects</span></li>
                </Col>
              </Row>
            </ul>
            <p>What would you like to communicate? Who’s your audience?</p>
          </CardText>
        </CardBody>
      </Card>
      <Card body >
        <CardBody >
          <Row>
            <Col>
              <CardTitle className="mb-4">
                <h1>About</h1>
              </CardTitle>
              <Col className="pt-2 pb-5 pl-0 pr-5 d-lg-none">
                <CardImg className={`${styles.ProfileImage}`} width="100%" src={ProfilePic} alt="Card image cap" />
              </Col>
              <CardText>
                <p>Paula Troina is passionate about vividly breathing life into her clients’ ventures. She loves getting words on paper, to enhance and change lives.</p>
                <p>Paula has a Bachelor of Science in Journalism, along with 33 years of telecommunications experience.</p>
                <p>Her diverse professional background includes writing, marketing and telecommunications sales/management experience.</p>
                <p>When she's not writing, editing or at the beach, Paula can be found with her nose in a book, a cat or two on her lap, and a hand curled around a cup of tea.</p>
              </CardText>
            </Col>
            <Col className="ml-5 pl-5 my-auto d-none d-lg-block">
              <CardImg className={`${styles.ProfileImage}`} width="100%" src={ProfilePic} alt="Card image cap" />
            </Col>
          </Row>
        </CardBody>
      </Card>
      <Footer />
    </Container>
  )
}