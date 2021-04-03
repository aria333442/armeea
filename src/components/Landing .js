import React from "react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Button } from "@material-ui/core";
import "../css/landing.scss";
import HighProducts from "./HighProducts";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Newproducts from "./Newproducts";
import Landingblog from "./Landingblog";
import Furniture from "./Furniture";
import Messenger from "./Messenger";
import Footer from "./Footer";
import Navbar from "../components/Navbar";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

function Landing() {
  const images = [
    {
      image1:
        "https://res.cloudinary.com/dd77cqt5fs/image/upload/v1615743996/bg_1_n1oidj.png",
      image2:
        "https://res.cloudinary.com/dd77cqt5fs/image/upload/v1615744015/bg_3_lnmdll.png",
    },
    {
      image1:
        "https://res.cloudinary.com/dd77cqt5fs/image/upload/v1613521847/black-clothing-girl-k7-1920x1080_lyau3n.jpg",
      image2:
        "https://res.cloudinary.com/dd77cqt5fs/image/upload/v1613603809/download_1_brxzrr.jpg",
    },
  ];

  return (
    <div
      className="container-fluid ml-0 mr-0 p-0"
      style={{ marginTop: "100px", overflow: "hidden" }}
    >
      <Navbar />
      <div className="landing">
        <div className="landing__slider">
          <Swiper
            spaceBetween={100}
            slidesPerView={1}
            navigation
            pagination
            autoplay
            delay={5000}
          >
            {images.map((img, index) => {
              return (
                <SwiperSlide className="slide">
                  <div className="d-flex">
                    <img
                      src={img.image1}
                      style={{ width: "350px", height: "557px" }}
                    ></img>
                    <img
                      src={img.image2}
                      style={{
                        width: "1000px",
                        height: "557px",
                        marginLeft: "50px",
                      }}
                    ></img>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <div className="blurred-box">
        <div>
          <h2>Muebles que hacen</h2>
          <h2>click</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            deserunt cumque temporibus fugit
          </p>
          <Button>Comprar ahora</Button>
        </div>
      </div>
      <div className="blurred-container">
        <div className="blurred-box-2">
          <div>
            <h3>Escritorio Montessori</h3>
            <p>Para tus ninos</p>
            <div>
              <h3>$ 1990</h3>
              <Link>
                <ArrowForwardIcon></ArrowForwardIcon>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <HighProducts />
      <Newproducts />
      <Landingblog />
      <Furniture />
      <Messenger />
      <Footer />
    </div>
  );
}

export default Landing;
