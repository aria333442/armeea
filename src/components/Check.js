import React, { useEffect, useState } from "react";
import Select from "react-select";
import { AiOutlineMinus } from "react-icons/ai";
import { BsPlus } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";
function Check() {
  const [number, setnumber] = useState(0);
  const incnumber = () => {
    setnumber(number + 1);
  };
  const colourStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "white",
      border: "none",
      color: "red",
    }),

    dropdownIndicator: (base) => ({
      ...base,
      color: "#ff6606", // Custom colour
    }),
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const Condition = () => {
    if (number == 0) {
      return (
        <div>
          <div className="form__container">
            <div>
              <div className="d-flex justify-content-between">
                <h2 className="form__title">Ingresa tus datos personales</h2>
                <p className="form_ok" onClick={incnumber}>
                  INGRESAR
                </p>
              </div>
              <div className="d-flex">
                <div className="actual__form">
                  <form>
                    <div class="form-group">
                      <label for="exampleInputEmail1" className="lablee">
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
                      <label for="exampleInputPassword1" className="lablee">
                        Dirección
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder="Seleccione su Direcció"
                      />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPassword1" className="lablee">
                        Código postal
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder="Codigo postal"
                      />
                    </div>
                  </form>
                </div>
                <div className="actual__form">
                  <form>
                    <div class="form-group">
                      <label for="exampleInputEmail1" className="lablee">
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
                      <label for="exampleInputPassword1" className="lablee">
                        Región
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder="Seleccione su región"
                      />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPassword1" className="lablee">
                        Teléfono
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder="Teléfono"
                      />
                    </div>
                  </form>
                </div>
              </div>
              <div className="emailo">
                <div class="form-group">
                  <label for="exampleInputPassword1" className="lablee">
                    Email
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Ingrese su email"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="below__buttons">
            <p className="REGISTRARME">REGISTRARME</p>
            <p className="REGISTRARME2">INVITADO</p>
          </div>
        </div>
      );
    } else if (number == 1) {
      return (
        <div>
          <div className="form__container2">
            <div className="second">
              <h2 className="gateway__title">Ingresa tus datos de pago</h2>
              <div className="d-flex justify-content-center icc">
                <img src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1617186328/dd_orrufu.png"></img>
              </div>
              <div className="d-flex justify-content-center">
                <h3 className="pays">Mercado pago</h3>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1" className="lableee">
                  Numero de tarjeta
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Ingrese su email"
                />
              </div>
              <div className="">
                <div>
                  <div class="form-group">
                    <label for="exampleInputPassword1" className="lableeee">
                      Documento
                    </label>
                  </div>
                  <div className="d-flex">
                    <div className="d-flex qas">
                      <div className="select">
                        <Select
                          options={document}
                          placeholder="CURP"
                          styles={colourStyles}
                        />
                      </div>
                      <input
                        type="text"
                        class="form-controls"
                        id="exampleInputPassword1"
                        placeholder="Seleccione su documento"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1" className="lableeee">
                      Fecha de vencimeinto
                    </label>
                  </div>
                  <div className="">
                    <div className="d-flex qas">
                      <input
                        type="text"
                        class="form-controlss"
                        id="exampleInputPassword1"
                        placeholder="MM/AA"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div class="form-group">
                    <label for="exampleInputPassword1" className="lableeee">
                      Titular
                    </label>
                  </div>
                  <div className="">
                    <div className="d-flex qas">
                      <input
                        type="text"
                        class="form-controlS"
                        id="exampleInputPassword1"
                        placeholder="Ingrese su nombre"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1" className="lableeee">
                      Codigo de seguridad
                    </label>
                  </div>
                  <div className="">
                    <div className=" qas">
                      <input
                        type="text"
                        class="form-controlS"
                        id="exampleInputPassword1"
                        placeholder="CVV"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="below__buttons">
            <p className="REGISTRARME3" onClick={incnumber}>
              CONTINUAR
            </p>
          </div>
        </div>
      );
    } else if (number === 2) {
      return (
        <div>
          <div className="form__container3">
            <h2 className="direction">Resumen de pedido</h2>
            <div className="d-flex">
              <div className="product_in_cart">
                <img
                  src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1616997221/table_zuilkb.png"
                  className="cart__image"
                ></img>
                <div>
                  <h3 className="cart__title">Escritorio Montesorri</h3>
                  <p className="cart__desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec pulvinar massa et diam posuere
                  </p>
                  <div className="d-flex">
                    <p className="color__title">Color</p>
                    <p className="cart__color"></p>
                  </div>
                  <div className="d-flex">
                    <p className="cart__quantity">Cantidad</p>
                    <p className="minus">
                      <AiOutlineMinus />
                    </p>
                    <p className="quantityaa">1</p>
                    <p className="minus2">
                      <BsPlus />
                    </p>
                    <h2 className="total">Monto</h2>
                    <p className="total--price">$999</p>
                  </div>
                </div>
                <p className="del">
                  <RiDeleteBin6Line />
                </p>
              </div>
            </div>
            <p className="Monto__total">Monto total</p>
            <p className="prr">$999</p>
          </div>
          <div className="below__buttons">
            <NavLink to="/shop" className="REGISTRARME3">
              COMPRAR
            </NavLink>
          </div>
        </div>
      );
    }
  };
  return (
    <div className="container-fluid m-0 p-0">
      <div className="laoro">
        <div className="checkout_modal ">
          <div className="d-flex justify-content-center">
            <h2 className="checout__title">Checkout</h2>
          </div>
          <div className="contAINE">
            <div className="d-flex justify-content-around">
              <div className="d-flex numberinng__div justify-content-around">
                <p className={number >= 0 ? "numbering activa2" : "numbering "}>
                  1
                </p>
                <h2 className={number >= 0 ? "number1 activa" : "number1 "}>
                  Datos personales
                </h2>
              </div>
              <div className="lines"></div>
              <div className="d-flex numberinng__div2">
                <p className={number >= 1 ? "numbering activa2" : "numbering "}>
                  2
                </p>
                <h2 className={number >= 1 ? "number1 activa" : "number1"}>
                  Método de pago
                </h2>
              </div>
              <div className="lines"></div>
              <div className="d-flex numberinng__div2">
                <p className={number >= 2 ? "numbering activa2" : "numbering "}>
                  3
                </p>
                <h2 className={number >= 2 ? "number1 activa" : "number1"}>
                  Dirección
                </h2>
              </div>
            </div>
          </div>
          <Condition />
        </div>
      </div>
    </div>
  );
}

export default Check;
