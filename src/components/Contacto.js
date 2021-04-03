import React, { useEffect } from "react";
import { FiMail } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import "../css/contacto.scss";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";
function Contacto() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
      <Navbar />
      <div className="contacto">
        <div className="picdiv">
          <img
            src="https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            className="divpic"
            alt="bawa"
          ></img>
        </div>
        <div className="consub">
          <div className="conleft">
            <div className="conleftinup">
              <h1 className="conleftin">Contacto</h1>
              <p className="conleftin2">
                Atenderemos cualquier problema o comentario que tengas
              </p>
              <div className="concontact">
                <p className="coninicon">
                  <FiMail />
                </p>
                <p className="coninpara">VENTAS@ARMEAMUEBLES.COM</p>
              </div>
              <div className="concontact">
                <p className="coninicon">
                  <FiPhone />
                </p>
                <p className="coninpara">(81) 8245 4321</p>
              </div>
              <div className="concontact">
                <p className="coninicon">
                  <HiOutlineLocationMarker />
                </p>
                <p className="coninpara">
                  Mariano Escobedo 2631 col. Victoria Monterrey N.L.
                </p>
              </div>
            </div>
            <div className="conleftindown">
              <div className="d-flex">
                <div class="form-group">
                  <label for="exampleInputEmail1" className="lavel">
                    Nombre*
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Ingrese su nombre"
                  />
                </div>
                <div className="form-group ">
                  <div className="sss">
                    <label for="exampleInputPassword1" className="lavel">
                      Apellido*
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Ingrese su apellido"
                    />
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1" className="lavel2">
                  Email*
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Ingrese su email"
                />
              </div>
              <div className="message__container">
                <div class="form-group">
                  <label for="exampleInputEmail1" className="lavel2">
                    Mensaje*
                  </label>
                  <textarea
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Escriba su mensaje"
                  />
                </div>
              </div>
              <NavLink to="#" className="contact__button">
                ENVIAR
              </NavLink>
            </div>
          </div>
          <div className="conright">
            <h2 className="conen">
              ¿En qué podemos <span className="wordclr">ayudarte?</span>
            </h2>
            <p className="conrightsubhead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque a pellentesque tellus. Vestibulum eu pharetra lacus,
              in vehicula nisi. Phasellus tempus magna semper nunc mattis
              cursus. Praesent rutrum imperdiet semper. Aenean mollis eros
              massa, eget aliquet dolor pharetra eu. Etiam vel arcu mi.
            </p>
            <p className="conrighthead">Información de envío</p>
            <p className="conrightsubhead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque a pellentesque tellus. Vestibulum eu pharetra lacus,
              in vehicula nisi
            </p>
            <p className="conrighthead">¿Dónde fabrican los muebles?</p>
            <p className="conrightsubhead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque a pellentesque tellus. Vestibulum eu pharetra lacus,
              in vehicula nisi
            </p>
            <p className="conrighthead">¿Cuánto cuesta el envío?</p>
            <p className="conrightsubhead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque a pellentesque tellus. Vestibulum eu pharetra lacus,
              in vehicula nisi
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contacto;
