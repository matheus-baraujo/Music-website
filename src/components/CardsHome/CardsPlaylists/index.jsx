import styled from "styled-components";

import Col from "react-bootstrap/Col";

const StyledCard = styled.div`
    background-color: #202020;
    border-radius: 25px;
    padding: 2px;

    img {
        width: 100%;
        height: 300px;
        border-radius: 25px;
        transition: ease-in-out 0.2s;
    }

    img:hover{
        opacity: 0.6;
    }

    .cardInfo {
        padding: 5px;
    }

    a{
        color: #FF71A2;
    }

    @media screen and (max-width: 600px){
        img{
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
