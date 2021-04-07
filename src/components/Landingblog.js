import React from "react";
import "../css/higproduct.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/_blog.scss";
import { MdDateRange } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

function Landingblog() {
  const settings = {
    dots: false,
    focusOnSelect: true,
    infinite: true,
    autoplay: false,
    centerMode: false,
    swipe: false,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="container-fluid m-0 p-0">
      <div style={{ marginTop: "80px" }}>
        <div className="d-flex justify-content-center">
          <h1 className="new">
            Nuestro{" "}
            <p className="d-inline-block" style={{ color: "#ff6606" }}>
              blog
            </p>
          </h1>
        </div>
      </div>
      <div
        style={{ width: "95%", marginLeft: "50px", marginTop: "10px" }}
        className="topa"
      >
        <Slider {...settings}>
          <div>
            <img src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1615938010/img1_uggyig.png"></img>
            <h4>Muebles para tu felicidad</h4>
            <div className="d-flex">
              <p
                style={{ fontSize: "25px", color: "gray", marginLeft: "25px" }}
              >
                <MdDateRange />
              </p>
              <p style={{ marginTop: "10px", fontSize: "17px" }}>12-10-2021</p>
              <p
                style={{ fontSize: "25px", color: "gray", marginLeft: "25px" }}
              >
                <CgProfile />
              </p>
              <p
                style={{
                  marginTop: "10px",
                  fontSize: "17px",
                  marginLeft: "5px",
                }}
              >
                John Doe
              </p>
            </div>
          </div>
          <div>
            <img src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1615938025/img2_w2w27a.png"></img>
            <h4>Muebles para tu felicidad</h4>
            <div className="d-flex">
              <p
                style={{ fontSize: "25px", color: "gray", marginLeft: "25px" }}
              >
                <MdDateRange />
              </p>
              <p style={{ marginTop: "10px", fontSize: "17px" }}>12-10-2021</p>
              <p
                style={{ fontSize: "25px", color: "gray", marginLeft: "25px" }}
              >
                <CgProfile />
              </p>
              <p
                style={{
                  marginTop: "10px",
                  fontSize: "17px",
                  marginLeft: "5px",
                }}
              >
                John Doe
              </p>
            </div>
          </div>
          <div>
            <img src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1615938033/img3_jiessv.png"></img>
            <h4>Muebles para tu felicidad</h4>
            <div className="d-flex">
              <p
                style={{ fontSize: "25px", color: "gray", marginLeft: "25px" }}
              >
                <MdDateRange />
              </p>
              <p style={{ marginTop: "10px", fontSize: "17px" }}>12-10-2021</p>
              <p
                style={{ fontSize: "25px", color: "gray", marginLeft: "25px" }}
              >
                <CgProfile />
              </p>
              <p
                style={{
                  marginTop: "10px",
                  fontSize: "17px",
                  marginLeft: "5px",
                }}
              >
                John Doe
              </p>
            </div>
          </div>
          <div>
            <img src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1615938033/img3_jiessv.png"></img>
            <h4>Muebles para tu felicidad</h4>
            <div className="d-flex">
              <p
                style={{ fontSize: "25px", color: "gray", marginLeft: "25px" }}
              >
                <MdDateRange />
              </p>
              <p style={{ marginTop: "10px", fontSize: "17px" }}>12-10-2021</p>
              <p
                style={{ fontSize: "25px", color: "gray", marginLeft: "25px" }}
              >
                <CgProfile />
              </p>
              <p
                style={{
                  marginTop: "10px",
                  fontSize: "17px",
                  marginLeft: "5px",
                }}
              >
                John Doe
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Landingblog;
