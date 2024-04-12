import styled from "styled-components";
import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInstagram,
    faYoutube,
    faSpotify,
    faTiktok,
    faDeezer,
} from "@fortawesome/free-brands-svg-icons";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const StyledMenu = styled.div`
    background-color: black;

    a {
        color: white;
        font-size: 2rem;
        transition: ease-in-out 0.3s;

        &:hover {
            color: white;
            opacity: 1;
            transform: translate(-3px, -3px);
            text-shadow: 3px 3px 3px #ff71a2;
        }

        @media screen and (max-width: 600px) {
            font-size: 1.5rem;
        }
    }

    .navbar-toggler {
        background-color: white;
        opacity: 0.6;
    }

    #inner-page-nav {
        gap: 16px;
    }

    #social-nav {
        a {
            color: #ff71a2;

            &:hover{
                color: white;
            }
        }
    }
`;

function Menu() {
    return (
        <StyledMenu>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse
                        id="pages-nav"
                        className="order-3 order-lg-2"
                    >
                        <Nav className="me-auto" id="inner-page-nav">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/">Playlists</Nav.Link>
                            <Nav.Link href="/">Blog</Nav.Link>
                            <Nav.Link href="/">About</Nav.Link>
                            <Nav.Link href="/">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                    <Navbar id="social-nav" className="order-2 order-lg-3">
                        <Nav className="ms-auto">
                            <Nav.Link href="#">
                                <FontAwesomeIcon icon={faInstagram} />
                            </Nav.Link>
                            <Nav.Link href="#">
                                <FontAwesomeIcon icon={faYoutube} />
                            </Nav.Link>
                            <Nav.Link href="#">
                                <FontAwesomeIcon icon={faDeezer} />
                            </Nav.Link>
                            <Nav.Link href="#">
                                <FontAwesomeIcon icon={faSpotify} />
                            </Nav.Link>
                            <Nav.Link href="#">
                                <FontAwesomeIcon icon={faTiktok} />
                            </Nav.Link>
                        </Nav>
                    </Navbar>
                </Container>
            </Navbar>
        </StyledMenu>
    );
}

export default Menu;
