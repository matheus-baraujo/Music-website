import styled from "styled-components";

import Col from "react-bootstrap/Col";
import { Button, Form } from "react-bootstrap";

const StyledDiv = styled.div`
    a {
        color: #ff71a2;
        font-size: 2rem;
    }

    @media screen and (max-width: 600px) {
    }
`;

function Formulario(props) {
    return (
        <Col xs={10} md={true} className="mb-3 mx-auto">
            <StyledDiv>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Button type="submit">Submit</Button>
                </Form>
            </StyledDiv>
        </Col>
    );
}

export default Formulario;
