import styled from "styled-components";

import Col from "react-bootstrap/Col";

const StyledCard = styled.div`
    background-color: #202020;
    border-radius: 25px;
    padding: 2px;

    img {
        width: 100%;
        height: 200px;
        border-radius: 25px 25px 0px 0px;
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

                <div className="cardInfo">
                    <h4>Teste</h4>
                    <a href="">Saiba mais!</a>
                </div>
            </StyledCard>
        </Col>
    );
}

export default CardPlaylist;
