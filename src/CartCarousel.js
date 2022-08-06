import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export class CartCarousel extends Component {
  render() {
    return (
      <Carousel>
        <div>
          <img src="../carousel4.webp" />
        </div>
        <div>
          <img src="../carousel4.webp" />
        </div>
        <div>
          <img src="../carousel4.webp" />
        </div>
      </Carousel>
    );
  }
}
