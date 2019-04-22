import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

class DemoCarousel extends Component {
    render() {
        return (
            <div>
              <Carousel style={{ height: "100vh"/*, position: "absolute"*/, width: "100%", zIndex: "0" }}>
                <Carousel.Item style={{ height: "100vh" }}>
                  <img
                    className="d-block w-100"
                    src="https://www.thoughtco.com/thmb/ZE93UVJ2eVYbr_v5HUiyo7sRsl4=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/smooth-curve-and-water-jets-of-swimming-pool--641703906-5ade28fa43a1030036997d1a.jpg"
                  />
                </Carousel.Item>
                <Carousel.Item style={{ height: "100vh" }}>
                  <img
                    className="d-block w-100"
                    src="https://water.arlingtonva.us/wp-content/uploads/sites/4/2016/03/Blue-Buoy-on-swimming-pool-000063897223_Large.jpg"
                  />
                </Carousel.Item>
                <Carousel.Item style={{ height: "100vh" }}>
                  <img
                    className="d-block w-100"
                    src="https://www.stonybrook.edu/commcms/studentaffairs/rec/images/pool-2018.jpg"
                  />
                </Carousel.Item>
                <Carousel.Item style={{ height: "100vh" }}>
                  <img
                    className="d-block w-100"
                    src="https://previews.123rf.com/images/epicstockmedia/epicstockmedia1507/epicstockmedia150700009/42845648-beautiful-luxury-home-with-swimming-pool-at-sunset.jpg"
                  />
                </Carousel.Item>                
              </Carousel>
            </div>
        );
    }
}

export default DemoCarousel;