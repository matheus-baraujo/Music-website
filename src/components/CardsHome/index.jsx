import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import CardPost from "./CardsPosts";
import CardPlaylist from "./CardsPlaylists";

import data from "../../../config.json"

const StyledSection = styled.div`
    background-color: black;
    color: white;
    padding: 50px 0px;

    p, h4 {
        font-style: italic;
    }

    @media screen and (max-width: 600px){
        h4{
            font-size: 1rem;
        }       
    }
`;

const imgs = data.posts;
const imgs2 = data.playlists;

function CardsHome() {
    return (
        <StyledSection>
            <Container>
                <Row className="mb-3 mb-md-5">
                    <div className="mb-3">
                        <h2>Posts</h2>
                        <h4>Veja aqui nossas postagens mais recentes!</h4>
                    </div>

                    {imgs.map((img) => {
                        return <CardPost img={img} key={img+1}/>;
                    })}
                </Row>

                <Row className="mb-3 mb-md-5">
                    <div className="mb-3">
                        <h2>Playlists</h2>
                        <h4>Veja aqui nossas playlists mais recentes!</h4>
                    </div>

                    {imgs2.map((img) => {
                        return <CardPlaylist img={img} key={img+2}/>;
                    })}
                </Row>
            </Container>
        </StyledSection>
    );
}

export default CardsHome;
