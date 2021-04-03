import React from "react";
import "../css/nav.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { NavLink } from "react-router-dom";
import image from "../images/logo.png";

function Navbar() {
  return (
    <div className="container-fluid m-0 p-0 lll">
      <div
        style={{
          width: "100%",
          height: "100px",
          backgroundColor: "#ff6606",
        }}
      >
        <div
          className="d-flex"
          style={{
            width: "85%",
            marginLeft: "100.5px",
          }}
        >
          <img src={image} alt="logo" className="logo"></img>
          <NavLink
            to="/"
            className="nav-links"
            style={{ color: "white", marginLeft: "30px", marginTop: "37px" }}
          >
            Inicio
          </NavLink>
          <NavLink
            className="nav-links"
            style={{ color: "white", marginLeft: "50px", marginTop: "37px" }}
            to="/shop"
          >
            Tienda
          </NavLink>
          <NavLink
            to="/about"
            className="nav-links"
            style={{ color: "white", marginLeft: "50px", marginTop: "37px" }}
          >
            Nostoros
          </NavLink>
          <NavLink
            to="/contact"
            className="nav-links"
            style={{ color: "white", marginLeft: "50px", marginTop: "37px" }}
          >
            Contacto
          </NavLink>
          <NavLink
            to="/blog"
            className="nav-links"
            style={{ color: "white", marginLeft: "50px", marginTop: "37px" }}
          >
            Blog
          </NavLink>
          <div
            className="d-flex justify-content-center"
            style={{ marginLeft: "200px" }}
          >
            <NavLink
              to="/login"
              className="nav-links"
              style={{ color: "white", marginTop: "37px" }}
            >
              Ingresar
            </NavLink>
            <NavLink
              className="nav-links"
              style={{ color: "white", marginLeft: "40px", marginTop: "37px" }}
              to="/register"
            >
              Registrarse
            </NavLink>
          </div>
          <h5
            className="nav-links"
            style={{ color: "white", marginLeft: "auto", marginTop: "37px" }}
          >
            <SearchIcon />
          </h5>
          <h5
            className="nav-links"
            style={{ color: "white", marginLeft: "20px", marginTop: "37px" }}
          >
            <ShoppingBasketIcon />
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
