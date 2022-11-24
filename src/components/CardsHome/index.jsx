import styled from "styled-components";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import CardPost from "./CardsPosts";

const StyledSection = styled.div`
    background-color: black;
    color: white;
    padding: 50px 0px;
`;


const imgs = [
    "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1504704911898-68304a7d2807?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
];

function ContainerExample() {
    return (
        <StyledSection>
            <Container>
                <Row className="mb-3 mb-md-5">
                    <h3>Titulo Sessao</h3>
                    <h4>Texto subtitulo</h4>

                    {imgs.map((img) => {
                        return (
                            <CardPost img={img}/>
                        );
                    })}
                </Row>

                <Row className="mb-3 mb-md-5">
                    <h3>Titulo Sessao</h3>
                    <h4>Texto subtitulo</h4>

                    {imgs.map((img) => {
                        return (
                            <CardPost img={img}/>
                        );
                    })}
                </Row>
            </Container>
        </StyledSection>
    );
}

export default ContainerExample;
