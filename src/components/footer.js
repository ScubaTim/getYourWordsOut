import React from 'react';
import styles from './footer.module.scss';
import { Link } from 'gatsby';
import { Row, Col, Nav, NavItem } from 'reactstrap';

export default (props) => {
    return (
        <footer className={`${styles.Footer} ${"pt-3"} ${props.border ? styles.Border : " "}`}>
            <Row className="px-2">
                <Col>
                    <Nav className={styles.Nav}>
                        <NavItem>
                            <Link className={styles.Link} to="/">Home</Link>
                        </NavItem>
                        <NavItem>
                            <Link className={styles.Link} to="/services">Services</Link>
                        </NavItem>
                        <NavItem>
                            <Link className={styles.Link} to="/contact">Contact</Link>
                        </NavItem>
                    </Nav>
                </Col>
                <Col className="d-none d-lg-block">
                    <p className={`${"text-right mr-3"} ${styles.LightText}`}>Get Your Words Out 2020</p>
                </Col>
            </Row>
            <Row className="d-lg-none px-2 pt-1">
                <Col>
                    <p className={`${"text-right mr-3"} ${styles.LightText}`}>Get Your Words Out 2020</p>
                </Col>
            </Row>
        </footer>
    )
}