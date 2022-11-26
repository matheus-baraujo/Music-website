import styled from "styled-components";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import CardPost from "./CardsPosts";
import CardPlaylist from "./CardsPlaylists";

const StyledSection = styled.div`
    background-color: black;
    color: white;
    padding: 50px 0px;

    p,
    h4 {
        font-style: italic;
    }
`;

const imgs = [
    "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1504704911898-68304a7d2807?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
];

const imgs2 = [
    "https://images.unsplash.com/photo-1477233534935-f5e6fe7c1159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1499415479124-43c32433a620?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
    "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    "https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
];

function CardsHome() {
    return (
        <StyledSection>
            <Container>
                <Row className="mb-3 mb-md-5">
                    <div className="mb-3">
                        <h2>Posts</h2>
                        <h4>Texto subtitulo</h4>
                    </div>

                    {imgs.map((img) => {
                        return <CardPost img={img} />;
                    })}
                </Row>

                <Row className="mb-3 mb-md-5">
                    <div className="mb-3">
                        <h2>Playlists</h2>
                        <h4>Texto subtitulo</h4>
                    </div>

                    {imgs2.map((img) => {
                        return <CardPlaylist img={img} />;
                    })}
                </Row>
            </Container>
        </StyledSection>
    );
}

export default CardsHome;
