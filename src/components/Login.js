import React from "react";
import { NavLink } from "react-router-dom";
import "../css/login.scss";

function Register() {
  return (
    <div className="register">
      <div className="form-box">
        <h1 className="form-title">
          Para seguir, ingresa tu e-mail y contraseña
        </h1>
        <div className="form-container">
          <form>
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
            <div class="form-group">
              <label for="exampleInputPassword1" className="pass-label">
                Contraseña
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Ingrese su contraseña"
              />
            </div>
            <button type="submit" className="form-button">
              Ingresar
            </button>
          </form>
          <NavLink to="/register" className="register-link">
            CREAR CUENTA
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Register;
