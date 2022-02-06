import React from "react";
import { Carousel } from "react-bootstrap";


const CarouselContainer = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/dPrB31p/achievement1.jpg" 
                    alt=""
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/vVZywtc/achievement2.jpg" 
                    alt=""
                />
            </Carousel.Item>
           
        </Carousel>
    );
};
export default CarouselContainer;
