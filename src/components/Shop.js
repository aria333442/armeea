import React, { useState, useEffect } from "react";
import AllProduct from "./AllProduct";
import { background } from "./Background";
import SideBox from "./SideBox";
import "../css/_shop.scss";
import Navbar from "../components/Navbar";
import Footer from "./Footer";
const Shop = () => {
  const [count, setCount] = useState(0);
  setTimeout(() => {
    if (count === 2) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  }, 5000);

  return (
    <div className="shop">
      <Navbar />
      <div
        className="shop__banner"
        style={{ backgroundImage: `url(${background[count].img})` }}
      >
        <div>
          <h2>{background[count].text}</h2>
        </div>
      </div>
      <div className="shop__head">
        <h2>Tienda de</h2>
      </div>
      <div className="d-flex">
        <div style={{ marginLeft: "50px" }}>
          <SideBox></SideBox>
        </div>
        <div>
          <AllProduct></AllProduct>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
