import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import "../css/_nav.scss";

const Navigation = () => {
  const [search, setSearch] = useState(false);
  const handleBurger = () => {
    document.querySelector(".hamburger-menu").classList.toggle("animate");
  };
  return (
    <nav className="nav">
      <NavLink to="/">
        <img src={logo} alt="logo" />
      </NavLink>
      <div className="nav__left">
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/shop">Tienda</NavLink>
        <NavLink to="/about">Nosotros</NavLink>
        <NavLink to="/contact">Contacto</NavLink>
      </div>
      <div className="nav__right">
        {!search && (
          <div>
            <NavLink to="/login">Ingresar</NavLink>
            <NavLink to="/register">Registrarse</NavLink>
          </div>
        )}
        {search && <input type="text" placeholder="Buscar" />}
        <div>
          <NavLink onClick={() => setSearch(!search)} to="#">
            <SearchIcon></SearchIcon>
          </NavLink>
          <NavLink to="#">
            <ShoppingBasketIcon></ShoppingBasketIcon>
          </NavLink>
        </div>
      </div>
      <div class="menu-wrapper" onClick={handleBurger}>
        <div class="hamburger-menu"></div>
      </div>
    </nav>
  );
};

export default Navigation;
