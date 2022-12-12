import data from "../../../config.json";
import styled from "styled-components";
import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const imgs = data.caroulsel;

const StyledOuterCarousel = styled.div`
    width: 100%;

    .carousel-item {
        height: 500px;
        width: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    @media screen and (max-width: 600px) {
        .carousel-item {
            height: 350px;
        }
    }
`;


function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <StyledOuterCarousel>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                {imgs.map((img) => {
                    return (
                        <Carousel.Item
                            style={{ backgroundImage: `url(${img})` }}
                            key={img}
                        >
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>
                                    Nulla vitae elit libero, a pharetra augue
                                    mollis interdum.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    );
                })}
            </Carousel>
        </StyledOuterCarousel>
    );
}

export default ControlledCarousel;
