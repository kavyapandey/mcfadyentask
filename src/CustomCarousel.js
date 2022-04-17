import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

export const CustomCarousel = () => {
  const imgData = [
    {
      src: "./1.png",
    },
    {
      src: "./2.png",
    },
    {
      src: "./3.png",
    },
    {
      src: "./4.png",
    },
    {
      src: "./5.png",
    },
  ];
  const [selectedSize, setSelectedSize] = useState("M");

  const setSize = (e) => {
    setSelectedSize(e.target.name);
  };
  return (
    <div className="cart fixed-cart">
      <div className="mobile-carousel">
        <div>
          <Carousel controls={false} interval={null}>
            {imgData.map((img) => (
              <Carousel.Item>
                <img className="d-block w-100" src={img.src} alt="Image One" />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
      <div className="row">
        <span className="cart-heading">JONATHAN SIMKHAI</span>
      </div>
      <div className="row">
        {" "}
        <span className="cart-text">
          Lurex Linen Viscose Jacket in Conchiglia
        </span>
      </div>
      <div className="row">
        {" "}
        <span className="cart-price">$225</span>
      </div>
      <div style={{ marginTop: "50px" }}>
        <div className="row" style={{ display: "block" }}>
          <span className="cart-color">Color Conchiglia</span>
        </div>
        <div className="row" style={{ display: "block" }}>
          <span className="size-selected" style={{ float: "left" }}>
            SIZE {selectedSize}
          </span>
          <span className="size-guide" style={{ float: "right" }}>
            SIZE GUIDE
          </span>
        </div>
      </div>
      <div className="row" style={{ marginTop: "30px" }}>
        <button name="XS" className="size-button" onClick={(e) => setSize(e)}>
          XS
        </button>
        <button name="S" className="size-button" onClick={(e) => setSize(e)}>
          S
        </button>
        <button name="M" className="size-button" onClick={(e) => setSize(e)}>
          M
        </button>
        <button name="L" className="size-button" onClick={(e) => setSize(e)}>
          L
        </button>
        <button name="XXL" className="size-button" onClick={(e) => setSize(e)}>
          XXL
        </button>
      </div>
      <div className="row">
        <button className="btn btn-dark add-to-bag">ADD TO BAG</button>
      </div>
      <div className="row">
        <span className="cart-text">
          Get 4 interest-free payments of $196.25 with Klarna LEARN MORE
        </span>
        <span className="cart-text" style={{ marginTop: "25px" }}>
          Speak to a Personal Stylist CHAT NOW
        </span>
      </div>
    </div>
  );
};
