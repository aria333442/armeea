import React, { useEffect } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import Navbar from "./Navbar";
import "../css/blog.scss";
import Footer from "./Footer";

function Presentacios() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const Card = () => {
    return (
      <div className="presfirst">
        <div className="presphsub">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC4WzhVsykF9MMs7GW3rw0ZvTOqG-fhZPvTw&usqp=CAU"
            className="image"
            alt="bawa"
          ></img>
        </div>
        <h3 className="presehead">Tu mascota y tu</h3>
        <p className="presehead2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          pulvinar massa
        </p>
        <div className="presicon">
          <p className="presparaico">
            <FaRegCalendarAlt />
          </p>
          <p className="presparaicoo">10-12-2020</p>
          <p className="presparaus">
            <AiOutlineUser />
          </p>
          <p className="presparauss">John Doe</p>
        </div>
        <button className="presentbutt">LEER MAS</button>
      </div>
    );
  };
  return (
    <div>
      <Navbar />
      <div className="dd">
        <div className="prsabove">
          <img
            src="https://i.pinimg.com/236x/c8/ec/80/c8ec8006f4d713be3b9297aa65d2f5b2.jpg"
            className="aboveimg"
            alt="bawa"
          ></img>
          <div className="absldiv">
            <p className="ablsdivpara">
              Bienvenido al <span className="abslparadiv">blog</span> de
              <span className="abslparadiv">Armea</span>
            </p>
          </div>
        </div>
        <div className="presbtdiv">
          <button className="presbut">Todos</button>
          <button className="presbutt">Muebles</button>
          <button className="presbuttt">Decoración</button>
          <button className="presbutttt">Mascotas</button>
          <button className="presbuttttt">Niños</button>
        </div>
        <div className="bahir_div">
          <div className="row m-0 p-0">
            <div className="col-4 xx mb-4 pr-3  p-0">
              <Card />
            </div>
            <div className="col-4 xx mb-4 pr-3 p-0">
              <Card />
            </div>
            <div className="col-4 xx mb-4 pr-3 p-0">
              <Card />
            </div>
            <div className="col-4 xx mb-4 pr-3 p-0">
              <Card />
            </div>
            <div className="col-4 xx mb-4 pr-3 p-0">
              <Card />
            </div>
            <div className="col-4 xx mb-4 pr-3 p-0">
              <Card />
            </div>
            <div className="col-4 xx mb-4 pr-3 p-0">
              <Card />
            </div>
            <div className="col-4 xx mb-4 pr-3 p-0">
              <Card />
            </div>
            <div className="col-4 xx mb-4 pr-3 p-0">
              <Card />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Presentacios;
