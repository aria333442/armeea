import React from "react";
import "../css/footer.scss";
import image from "../images/logo.png";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { BiPhone } from "react-icons/bi";
import { TiLocationArrow } from "react-icons/ti";
import Media from "react-media";

function Footer() {
  return (
    <div>
      <Media query="(min-width:1300px)">
        {(matches) => {
          return matches ? (
            <div className="container-fluid m-0 p-0">
              <div className="footer">
                <div className="footer__logo">
                  <img src={image}></img>
                </div>
                <div className="footer__information">
                  <h3 className="footer__header">Información</h3>
                  <p className="below__header">Zonas de envío</p>
                  <p className="below__header2">Política de cookies</p>
                  <p className="below__header2">Condiciones de uso y compra </p>
                  <p className="below__header2">Cómo hacer un pedido</p>
                  <p className="below__header2">Métodos de pago</p>
                </div>
                <div className="footer__information">
                  <h3 className="footer__header">Cuenta</h3>
                  <p className="below__header">Mis compras</p>
                  <p className="below__header2">MIs direcciones</p>
                  <p className="below__header2">Mis datos personales </p>
                  <div className="d-flex">
                    <p className="footer__visa">
                      <FaCcVisa />
                    </p>
                    <p className="footer__master">
                      <FaCcMastercard />
                    </p>
                  </div>
                </div>
                <div className="footer__information">
                  <h3 className="footer__header">Contacto</h3>
                  <p className="below__header">
                    Mariano Escobedo 2631 col. Victoria Monterrey N.L.
                  </p>
                  <div className="d-flex">
                    <p className="footer__location">
                      <HiLocationMarker />
                    </p>
                    <p className="below__header2">Mexico</p>
                  </div>
                  <div className="d-flex">
                    <p className="footer__location">
                      <BiPhone />
                    </p>
                    <p className="below__header2">(81) 8245 4321</p>
                  </div>
                  <p className="below__header2">VENTAS@ARMEAMUEBLES.COM </p>
                  <p className="below__header2">ARMEAMUEBLES.COM</p>
                </div>
                <div className="footer__information2">
                  <h3 className="footer__header">Suscríbete</h3>
                  <div className="d-flex">
                    <input
                      className="Footer__input"
                      placeholder="Ingresa email"
                    ></input>
                    <button className="footer__button">
                      <p className="button__icon">
                        <TiLocationArrow />
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : null;
        }}
      </Media>
      <Media query="(min-width:768px) and (max-width:1299px)">
        {(matches) => {
          return matches ? (
            <div className="container-fluid m-0 p-0">
              <div className="footer">
                <div className="footer__logo">
                  <img src={image}></img>
                </div>
                <div className="footer__information">
                  <h3 className="footer__header">Información</h3>
                  <p className="below__header">Zonas de envío</p>
                  <p className="below__header2">Política de cookies</p>
                  <p className="below__header2">Condiciones de uso y compra </p>
                  <p className="below__header2">Cómo hacer un pedido</p>
                  <p className="below__header2">Métodos de pago</p>
                </div>
                <div className="footer__information">
                  <h3 className="footer__header">Cuenta</h3>
                  <p className="below__header">Mis compras</p>
                  <p className="below__header2">MIs direcciones</p>
                  <p className="below__header2">Mis datos personales </p>
                  <div className="d-flex">
                    <p className="footer__visa">
                      <FaCcVisa />
                    </p>
                    <p className="footer__master">
                      <FaCcMastercard />
                    </p>
                  </div>
                </div>
                <div className="footer__information">
                  <h3 className="footer__header">Contacto</h3>
                  <p className="below__header">
                    Mariano Escobedo 2631 col. Victoria Monterrey N.L.
                  </p>
                  <div className="d-flex">
                    <p className="footer__location">
                      <HiLocationMarker />
                    </p>
                    <p className="below__header2">Mexico</p>
                  </div>
                  <div className="d-flex">
                    <p className="footer__location">
                      <BiPhone />
                    </p>
                    <p className="below__header2">(81) 8245 4321</p>
                  </div>
                  <p className="below__header2">VENTAS@ARMEAMUEBLES.COM </p>
                  <p className="below__header2">ARMEAMUEBLES.COM</p>
                </div>
                <div className="footer__information2">
                  <h3 className="footer__header">Suscríbete</h3>
                  <div className="d-flex">
                    <input
                      className="Footer__input"
                      placeholder="Ingresa email"
                    ></input>
                    <button className="footer__button">
                      <p className="button__icon">
                        <TiLocationArrow />
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : null;
        }}
      </Media>
    </div>
  );
}

export default Footer;
