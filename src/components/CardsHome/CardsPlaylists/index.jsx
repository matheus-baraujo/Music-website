import styled from "styled-components";

import Col from "react-bootstrap/Col";

const StyledCard = styled.div`
    background-color: #202020;
    padding: 2px;
    transition: ease-in-out 0.5s;

    &:hover{
        background-color: #5f2064;
        transform: translate(-5px , -5px);
    }

    img {
        width: 100%;
        height: 300px;
        transition: ease-in-out 0.2s;

        &:hover {
            opacity: 0.6;
            
            box-shadow: 10px 10px #ff71a2;
        }
    }

    .cardInfo {
        padding: 5px;
    }

    a {
        color: #ff71a2;
    }

    @media screen and (max-width: 600px) {
        img {
            height: 120px;
        }
    }
`;

function CardPlaylist(props) {
    return (
        <Col xs={6} md={true} className="mb-3 mx-auto">
            <StyledCard>
                <img src={props.img} alt="" />
            </StyledCard>
        </Col>
    );
}

export default CardPlaylist;
