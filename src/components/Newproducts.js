import React from "react";
import { NavLink } from "react-router-dom";
import StarRatings from "react-star-ratings";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import childern from "../images/children.png";
import Media from "react-media";

import "../css/higproduct.scss";

function Newproducts() {
  const settings = {
    dots: true,
    focusOnSelect: true,
    infinite: true,
    autoplay: true,
    centerMode: false,
    centerPadding: 11,
    swipe: false,
    autoplaySpeed: 3000,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: 10,
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: 10,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Media query="(min-width:1300px)">
        {(matches) => {
          return matches ? (
            <div
              className="container-fluid ml-0 mr-0 p-0"
              style={{ marginTop: "70px" }}
            >
              <div className="d-flex justify-content-center">
                <h1 className="new">
                  Productos{" "}
                  <p className="d-inline-block" style={{ color: "#ff6606" }}>
                    nuevos
                  </p>
                </h1>
              </div>
              <div className="d-flex new__container">
                <div className="pro">
                  <div>
                    <h1 className="pro__title">
                      Escritorio <br></br>Montessori
                    </h1>
                    <p className="pro__desc">
                      Simple y real. Todo tiene su razón de ser.
                    </p>
                    <StarRatings
                      rating={5}
                      starDimension="22px"
                      starSpacing="6px"
                      starRatedColor="#ff6606"
                    />
                    <div className="d-flex">
                      <NavLink to="#" className="pro__but1">
                        COMPRAR
                      </NavLink>
                      <NavLink to="#" className="pro__but2">
                        ANADIR
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className="sli">
                  <Slider {...settings}>
                    <div>
                      <img
                        src={childern}
                        style={{ width: "95%", height: "590px" }}
                      ></img>
                    </div>
                    <div>
                      <img
                        src={childern}
                        style={{ width: "95%", height: "590px" }}
                      ></img>
                    </div>
                    <div>
                      <img
                        src={childern}
                        style={{ width: "95%", height: "590px" }}
                      ></img>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          ) : null;
        }}
      </Media>
      <Media query="(min-width:768px) and (max-width:1299px)">
        {(matches) => {
          return matches ? (
            <div
              className="container-fluid ml-0 mr-0 p-0"
              style={{ marginTop: "70px" }}
            >
              <div className="d-flex justify-content-center">
                <h1 className="new">
                  Productos{" "}
                  <p className="d-inline-block" style={{ color: "#ff6606" }}>
                    nuevos
                  </p>
                </h1>
              </div>
              <div className="d-flex new__container">
                <div className="pro">
                  <div>
                    <h1 className="pro__title">
                      Escritorio <br></br>Montessori
                    </h1>
                    <p className="pro__desc">
                      Simple y real. Todo tiene su razón de ser.
                    </p>
                    <StarRatings
                      rating={5}
                      starDimension="22px"
                      starSpacing="6px"
                      starRatedColor="#ff6606"
                    />
                    <div className="d-flex">
                      <NavLink to="#" className="pro__but1">
                        COMPRAR
                      </NavLink>
                      <NavLink to="#" className="pro__but2">
                        ANADIR
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className="sli">
                  <Slider {...settings}>
                    <div>
                      <img
                        src={childern}
                        style={{ width: "100%", height: "590px" }}
                      ></img>
                    </div>
                    <div>
                      <img
                        src={childern}
                        style={{ width: "100%", height: "590px" }}
                      ></img>
                    </div>
                    <div>
                      <img
                        src={childern}
                        style={{ width: "100%", height: "590px" }}
                      ></img>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          ) : null;
        }}
      </Media>
      <Media query="(max-width:767px)">
        {(matches) => {
          return matches ? (
            <div
              className="container-fluid ml-0 mr-0 p-0"
              style={{ marginTop: "70px" }}
            >
              <div className="d-flex justify-content-center">
                <h1 className="new">
                  Productos{" "}
                  <p className="d-inline-block" style={{ color: "#ff6606" }}>
                    nuevos
                  </p>
                </h1>
              </div>
              <div className="d-flex new__container">
                <div className="pro">
                  <div>
                    <h1 className="pro__title">
                      Escritorio <br></br>Montessori
                    </h1>
                    <p className="pro__desc">
                      Simple y real. Todo tiene su razón de ser.
                    </p>
                    <p style={{ marginLeft: "10px", marginTop: "-20px" }}>
                      <StarRatings
                        rating={5}
                        starDimension="15px"
                        starSpacing="2px"
                        starRatedColor="#ff6606"
                      />
                    </p>
                    <div className="d-flex" style={{ marginTop: "-50px" }}>
                      <NavLink to="#" className="pro__but1">
                        COMPRAR
                      </NavLink>
                      <NavLink to="#" className="pro__but2">
                        ANADIR
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className="sli">
                  <Slider {...settings}>
                    <div>
                      <img
                        src={childern}
                        style={{ width: "100%", height: "250px" }}
                      ></img>
                    </div>
                    <div>
                      <img
                        src={childern}
                        style={{ width: "100%", height: "250px" }}
                      ></img>
                    </div>
                    <div>
                      <img
                        src={childern}
                        style={{ width: "100%", height: "250px" }}
                      ></img>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          ) : null;
        }}
      </Media>
    </div>
  );
}

export default Newproducts;
