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
import Media from "react-media";

const HighProducts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getcat());
  }, []);

  const Card = () => {
    return (
      <Media query="(max-width:767px)">
        {(matches) => {
          return matches ? (
            <NavLink to="/shop">
              <div style={{ padding: "0px" }} className="ipad">
                <img
                  src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1617738245/desk_urbkuu.png"
                  style={{ width: "372px", height: "478px" }}
                ></img>
                <div
                  style={{
                    marginTop: "-280px",
                    marginLeft: "10px",
                    zIndex: 10,
                    position: "fixed",
                    backgroundColor: "white",
                    opacity: 0.9,
                    width: "180px",
                    height: "100px",
                  }}
                  className="d-flex"
                ></div>
                <div className="d-flex xor">
                  <div className="ninos ninos2">
                    <p
                      style={{
                        fontSize: "21px",
                        opacity: 0.7,
                        marginTop: "-270px",
                        position: "absolute",
                        zIndex: 12,
                        marginLeft: "35px",
                        color: "black",
                      }}
                    >
                      Categoria
                    </p>
                    <p
                      style={{
                        fontSize: "35px",
                        opacity: 1,
                        marginTop: "-240px",
                        position: "absolute",
                        zIndex: 12,
                        marginLeft: "35px",
                        color: "black",
                      }}
                    >
                      Mascotas
                    </p>
                  </div>
                  <Link
                    style={{
                      marginTop: "-226px",
                      marginLeft: "760px",
                      padding: "10px",
                      backgroundColor: "#ff6606",
                      paddingRight: "12px",
                      color: "white",
                      zIndex: 100,
                      position: "relative",
                    }}
                  >
                    <ArrowForwardIcon></ArrowForwardIcon>
                  </Link>
                </div>
              </div>
            </NavLink>
          ) : (
            <NavLink to="/shop">
              <div style={{ padding: "0px" }} className="ipad">
                <img
                  src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1617738245/desk_urbkuu.png"
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
                  <div className="ninos ninos2">
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
                      Mascotas
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
        }}
      </Media>
    );
  };
  const settings2 = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    centerPadding: 1,
    centerMode: false,
  };
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
      {
        breakpoint: 320,
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
      <Media query="(min-width:1300px)">
        {(matches) => {
          return matches ? (
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
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                  </Slider>
                </div>
                <div>
                  <Link className="btn">IR A LA TIENDA</Link>
                </div>
              </div>
            </div>
          ) : null;
        }}
      </Media>
      <Media query="(min-width:768px) and (max-width:1299px)">
        {(matches) => {
          return matches ? (
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
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                  </Slider>
                </div>
                <div>
                  <Link className="btn">IR A LA TIENDA</Link>
                </div>
              </div>
            </div>
          ) : null;
        }}
      </Media>
      <Media query="(max-width:767px)">
        {(matches) => {
          return matches ? (
            <div className="highProduct">
              <div className="top">
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
                <div className="slidd">
                  <Slider {...settings2}>
                    <Card />
                    <Card />
                    <Card />
                  </Slider>
                </div>
                <div>
                  <Link className="btn">IR A LA TIENDA</Link>
                </div>
              </div>
            </div>
          ) : null;
        }}
      </Media>
    </div>
  );
};

export default HighProducts;
