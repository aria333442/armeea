import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import "../css/_nav.scss";
import Drarwer from "./Drarwer";
import Media from "react-media";

const Navigation = () => {
  const [search, setSearch] = useState(false);

  return (
    <div>
      <Media query="(max-width:767px)">
        {(matches) => {
          return matches ? (
            <nav className="nav">
              <NavLink to="/">
                <img src={logo} alt="logo" className="imgray" />
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
                    <NavLink to="/login" className="loginss">
                      Ingresar
                    </NavLink>
                    <NavLink to="/register" className="registers">
                      Registrarse
                    </NavLink>
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
              <div>
                <Drarwer />
              </div>
            </nav>
          ) : (
            <nav className="nav">
              <NavLink to="/">
                <img src={logo} alt="logo" className="imgray" />
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
                    <NavLink to="/login" className="loginss">
                      Ingresar
                    </NavLink>
                    <NavLink to="/register" className="registers">
                      Registrarse
                    </NavLink>
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
              <div>
                <Drarwer />
              </div>
            </nav>
          );
        }}
      </Media>
    </div>
  );
};

export default Navigation;
