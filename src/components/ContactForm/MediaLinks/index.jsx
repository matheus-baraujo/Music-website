import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInstagram,
    faYoutube,
    faSpotify,
    faTiktok,
    faDeezer,
} from "@fortawesome/free-brands-svg-icons";

import Col from "react-bootstrap/Col";

const StyledCard = styled.div`
    border-right: 1px solid white;

    li {
        list-style: none;
    }

    a {
        color: #ff71a2;
        font-size: 2rem;
    }

    .svg-inline--fa {
        width: 50px;
    }

    @media screen and (max-width: 600px) {
        border-right: none;
        border-bottom: 1px solid white;

        ul{
            padding-left: 30%;
        }

        a {
            font-size: 1rem;
        }

        .svg-inline--fa {
            width: 20px;
        }
    }
`;

function SocialMedias(props) {
    return (
        <Col xs={10} md={true} className="mb-3 mx-auto">
            <StyledCard>
                <ul>
                    <li>
                        <a href="">
                            <FontAwesomeIcon icon={faInstagram} /> @instagram
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <FontAwesomeIcon icon={faYoutube} /> @youtube
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <FontAwesomeIcon icon={faSpotify} /> @spotify
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <FontAwesomeIcon icon={faTiktok} /> @tiktok
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <FontAwesomeIcon icon={faDeezer} /> @deezer
                        </a>
                    </li>
                </ul>
            </StyledCard>
        </Col>
    );
}

export default SocialMedias;
