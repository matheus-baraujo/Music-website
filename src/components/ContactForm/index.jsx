import styled from "styled-components";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import SocialMedias from "./MediaLinks";
import Formulario from "./Formulario";

const StyledSection = styled.div`
    background-color: #66186e;
    color: white;
    padding: 50px 0px;
    position: relative;

    p,
    h4 {
        font-style: italic;
    }

    h2{
        text-align: center;
    }

    .wave1,
    .wave2 {
        position: absolute;
        bottom: 0%;
        left: 0%;
        opacity: 0.6;
    }

    .wave1 {
        fill: #b16ab9;
    }

    .wave2 {
        fill: #341338;
        transform: scaleX(-1);
    }
`;

function ContactForm() {
    return (
        <StyledSection>
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="wave1">
                <path
                    
                    fill-opacity="1"
                    d="M0,128L80,154.7C160,181,320,235,480,250.7C640,267,
                    800,245,960,213.3C1120,181,1280,139,1360,117.3L1440,
                    96L1440,320L1360,320C1280,320,1120,320,960,320C800,
                    320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                ></path>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="wave2">
                <path
                    
                    fill-opacity="1"
                    d="M0,128L80,154.7C160,181,320,235,480,250.7C640,
                    267,800,245,960,213.3C1120,181,1280,139,1360,117.3L1440,
                    96L1440,320L1360,320C1280,320,1120,320,960,320C800,
                    320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                ></path>
            </svg> */}
            
            <Container>
                <Row className="mb-3 mb-md-5">
                    <SocialMedias />
                    <Formulario />
                </Row>
            </Container>
        </StyledSection>
    );
}

export default ContactForm;
