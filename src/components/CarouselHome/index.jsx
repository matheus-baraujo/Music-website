const imgs = [
    "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1504704911898-68304a7d2807?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
];

import styled from "styled-components";
import $ from "jquery";

const StyledOuterCarousel = styled.div`
    width: 100%;

    .carousel-item{
        height: 500px;
        width: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    @media screen and (max-width: 600px){
        .carousel-item{
            height: 350px;
        }
    }
`;


import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

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
                    <Carousel.Item style={{backgroundImage: `url(${img})`}} key={img}>
                        {/* <img
                            className="d-block w-100"
                            src={img}
                            key={img}
                            alt="First slide"
                        /> */}
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>
                                Nulla vitae elit libero, a pharetra augue mollis
                                interdum.
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
