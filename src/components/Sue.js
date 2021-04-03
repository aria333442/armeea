import React from "react";
import {HiShoppingBag} from "react-icons/hi";
import {AiOutlineUser } from"react-icons/ai"

function Sue() {
  return (
    <div className="mainsue">
      <div className="suefirst">
        <div className="photowala">
        <p className="paraiconn"><AiOutlineUser/></p>
          <h3 className="para">Jhon Doe</h3>
          <h4 className="paraa">Jhondoe@armea.com</h4>
        </div>
        
        <div className="khalidiv">
        <div className="tag">
          <p className="iconpara" > <HiShoppingBag/></p>
          <button className="suebutt">Compras</button>
        </div>
        <div className="tagwala">
          <p className="iconpara"><AiOutlineUser/></p>
          <button className="suebuttt">Editar datos</button>
        </div>
        </div>
      </div>
      <div className="suesec">
        <div>
          <h2 className="suemiss">Mis Datos</h2>
        </div>
        <div className="cuenta">
          <h3 className="he"> Mis datos de cuenta </h3>
          <a href="google.com" className="editlink">
            editar
          </a>
        </div>
        <div className="usuar">
          <h3 className="us">Usuario</h3>
          <h3 className="e">E mail</h3>
        </div>
        <div className="sueinput">
          <input placeholder="Jhon Doe" className="suein"></input>
          <input placeholder="Jhondoe@correo.com" className="sueinn"></input>
        </div>
        <div>
          {" "}
          <h3 className="contra"> Contracena </h3>
          <input placeholder="********" className="coin"></input>
        </div>
        <div className="pers">
          {" "}
          <h3 className="he"> Mis datos Personales</h3>
          <a href="google.com" className="editlink">
            editar
          </a> </div>
          <div>
            <div className="usuar">
              <h3 className="nom"> Nombre</h3>
              <h3 className="ape">Apellido</h3>
            </div>
            <div className="sueinput">
              <input placeholder="Ingrese su nombre" className="suein"></input>
              <input
                placeholder="Ingrese su Apellido"
                className="sueinn"
              ></input>
            </div>
            <div>
              {" "}
              <h3 className="contra"> Telephono </h3>
              <input placeholder="Ingrese su numero" className="coin"></input>
            </div>
          </div>
          <div className="last">
            {" "}
            <h3 className="lasth"> Pais </h3>
            <h3 className="lastth"> Region </h3>
          </div>
          <div>
            {" "}
            <input placeholder="seleccione su pais" className="supa"></input>
            <input placeholder="seleccione su region" className="sure"></input>
          </div>
          <div className="envio">
          <h2 className="envy"> Direcciones de envio</h2>
          </div>
          <div className="subenvy">
          <a href="google.com" className="agri">Agregar Direccion</a>
          </div>
        
      </div>
    </div>
  );
}

export default Sue;
