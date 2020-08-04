import React, { useState } from 'react';
import { Link } from 'gatsby';
import styles from './navigation.module.scss';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';

export default (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar className={`${styles.Navbar} ${props.border ? styles.Border : " "}`} light expand="md">
            <NavbarBrand>
                <Link className={styles.Link} to="/">Get Your Words Out</Link>
            </NavbarBrand>
            <NavbarToggler className={styles.Toggler} onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className={`${styles.Nav} ${"mr-auto"}`} navbar>
                    <Link className={styles.Link} to="/">
                        <NavItem>
                            Home
                        </NavItem>
                    </Link>
                    <Link className={styles.Link} to="/services">
                        <NavItem>
                            Services
                        </NavItem>
                    </Link>
                    <Link className={styles.Link} to="/contact">
                        <NavItem>
                            Contact
                        </NavItem>
                    </Link>
                </Nav>
            </Collapse>
        </Navbar>
    );
};