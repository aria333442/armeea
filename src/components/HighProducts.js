import React, { useEffect } from "react";
import grid1 from "../images/grid1.png";
import grid2 from "../images/grid2.png";
import grid3 from "../images/grid3.png";
import grid4 from "../images/grid4.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, NavLink } from "react-router-dom";
import "../css/higproduct.scss";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { useDispatch, useSelector } from "react-redux";
import { getcat } from "../actions";

const HighProducts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getcat());
  }, []);

  const getcategory = useSelector((state) => state.getcategory);

  const settings = {
    dots: false,
    focusOnSelect: true,
    infinite: true,
    autoplay: true,
    centerMode: true,
    centerPadding: 8,
    swipe: false,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          centerMode: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div className="highProduct">
        <div className="highProduct__top">
          <div>
            <img src={grid1} alt="" />
            <div>
              <h3>Creamos</h3>
              <p>Disenamos nuestros muebles</p>
            </div>
          </div>
          <div>
            <img src={grid2} alt="" />
            <div>
              <h3>Fabricamos</h3>
              <p>Directo desde la fabrica</p>
            </div>
          </div>
          <div>
            <img src={grid3} alt="" />
            <div>
              <h3>Te ayudamos</h3>
              <p>Consultenos</p>
            </div>
          </div>
          <div>
            <img src={grid4} alt="" />
            <div>
              <h3>Enviamos</h3>
              <p>2/5 Dias de entrega</p>
            </div>
          </div>
        </div>
        <div className="highProduct__slider">
          <div>
            <h2>Productos de alta</h2>
          </div>
          <div className="swiper__box">
            <Slider {...settings} onChange={() => alert()}>
              {getcategory.category.map((cat) => {
                return (
                  <NavLink to="/shop">
                    <div style={{ padding: "0px" }}>
                      <img
                        src={cat.image}
                        style={{ width: "372px", height: "478px" }}
                      ></img>
                      <div
                        style={{
                          marginTop: "-160px",
                          marginLeft: "20px",
                          zIndex: 10,
                          position: "fixed",
                          backgroundColor: "white",
                          opacity: 0.9,
                          width: "250px",
                          height: "140px",
                        }}
                        className="d-flex"
                      ></div>
                      <div className="d-flex xor">
                        <div className="ninos">
                          <p
                            style={{
                              fontSize: "21px",
                              opacity: 0.7,
                              marginTop: "-130px",
                              position: "absolute",
                              zIndex: 12,
                              marginLeft: "55px",
                              color: "black",
                            }}
                          >
                            Categoria
                          </p>
                          <p
                            style={{
                              fontSize: "35px",
                              opacity: 1,
                              marginTop: "-110px",
                              position: "absolute",
                              zIndex: 12,
                              marginLeft: "55px",
                              color: "black",
                            }}
                          >
                            {cat.name}
                          </p>
                        </div>
                        <Link
                          style={{
                            marginTop: "-66px",
                            marginLeft: "270px",
                            padding: "10px",
                            position: "absolute",
                            backgroundColor: "#ff6606",
                            paddingRight: "12px",
                            color: "white",
                          }}
                        >
                          <ArrowForwardIcon></ArrowForwardIcon>
                        </Link>
                      </div>
                    </div>
                  </NavLink>
                );
              })}
            </Slider>
          </div>
          <div>
            <Link className="btn">IR A LA TIENDA</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighProducts;
