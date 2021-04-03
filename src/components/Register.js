import React from "react";
import { NavLink } from "react-router-dom";
import "../css/register.scss";
import Navbar from "./Navbar";

function Register() {
  return (
    <div className="register-container">
      <Navbar />
      <div className="inner-box">
        <h1 className="register-login">Completa tus datos</h1>
        <form>
          <div className="box">
            <div className="box1">
              <div class="form-group">
                <label for="exampleInputEmail1" className="email-label">
                  Nombre
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Ingrese su nombre"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1" className="email-label">
                  Dirección
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Seleccione su país"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1" className="email-label">
                  Email
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Ingrese su email"
                />
              </div>
            </div>
            <div className="box2">
              <div class="form-group">
                <label for="exampleInputEmail1" className="pass-label">
                  Apellido
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Ingrese su apellido"
                />
              </div>

              <div class="form-group">
                <label for="exampleInputEmail1" className="pass-label">
                  Región
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Seleccione su región"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1" className="pass-label">
                  Dirección
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Ingrese su contraseña"
                />
              </div>
            </div>
          </div>
          <div className="d-flex mainbox">
            <input type="checkbox" className="check"></input>
            <label className="lable">
              Acepto los términos y condiciones y autorizo el uso de mis datos
              de acuerdo a la Declaración de Privacidad
            </label>
          </div>
          <div>
            <NavLink to="#" className="form-link">
              CONTINUAR
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
