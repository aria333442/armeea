import React, { useEffect } from "react";
import grid1 from "../images/grid1.png";
import grid2 from "../images/grid2.png";
import grid3 from "../images/grid3.png";
import grid4 from "../images/grid4.png";
import "../css/nostro.scss";
import Nav from "./Nav";
import Footer from "./Footer";

function Nosotros() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="nostro" style={{ overflow: "hidden" }}>
      <Nav />
      <div className="d-flex justify-content-center">
        <div>
          <div className="nosupperpara">
            <p className="nostrofirstpara">
              Bienvenidos a <span className="clrchangenostr">ARMEA</span>, los
              mejores muebles para ti, tu familia y tu mascota. todo en un solo
              lugar con
              <span className="clrchangenostr">muebles que hacen click</span>
            </p>
          </div>
          <div className="nososecmain">
            <div className="nososecleft">
              <div className="nossecleftpara">
                <h4 className="nostrohead">- Misión</h4>
                <p className="nosoleftpara">
                  Brindar soluciones innovadoras al cliente en cuanto a
                  mobiliario, por medio dela experiencia “ármelo usted mismo”,
                  que cumplan satisfacer sus necesidades tanto funcionales como
                  decorativas; a precios bajos, confiando en las habilidades y
                  capacidades de nuestro personal para así garantizar la
                  durabilidad y calidad de nuestro mobiliario.
                </p>
              </div>
            </div>
            <div className="nososecright">
              <img
                src="https://content3.jdmagicbox.com/comp/goa/r5/0832px832.x832.170320224246.p4r5/catalogue/v-k-carpentar-margao-goa-carpenters-4a2wa7a.jpg"
                className="jpg"
                alt="bawa"
              ></img>
            </div>
          </div>
          <div className="nosicondiv">
            <div className="nosiconsub">
              <p className="nosicons">
                <img src={grid1}></img>
              </p>
              <div>
                <p className="iconparanoshead">Creamos</p>
                <p className="iconparanosheadsm">Diseñamos nuestros muebles</p>
              </div>
            </div>
            <div className="nosiconsub">
              <p className="nosicons">
                <img src={grid2}></img>
              </p>
              <div>
                <p className="iconparanoshead">Fabricamos</p>
                <p className="iconparanosheadsm">Directo desde la fabrica</p>
              </div>
            </div>
            <div className="nosiconsub">
              <p className="nosicons">
                <img src={grid3}></img>
              </p>
              <div>
                <p className="iconparanoshead">Te ayudamos</p>
                <p className="iconparanosheadsm">Consultenos</p>
              </div>
            </div>
            <div className="nosiconsub">
              <p className="nosicons">
                <img src={grid4}></img>
              </p>
              <div>
                <p className="iconparanoshead">Enviamos</p>
                <p className="iconparanosheadsm">2/5 Dias de entrega</p>
              </div>
            </div>
          </div>
          <div className="nososecmain">
            <div className="nosothirdleft">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7faXJOoJVDJE50R8qEMTaWVPPQk-7Lp9x6w&usqp=CAU"
                className="jpg"
                alt="bawa"
              ></img>
            </div>

            <div className="nothirdrightpara">
              <h3>- Vision</h3>
              <p>
                Ser el líder en el mercado nacional de muebles bajo el concepto
                “ármelo usted mismo”, conceptualizando diseños innovadores de
                alta calidad y al mismo tiempo funcionales, con precios
                accesibles, apoyándonos en nuestro equipo de trabajo y en la más
                alta tecnología que se encuentre a nuestro alcance.
              </p>
              <h2>
                En <span className="clrchangenostr">ARMEA</span> encontrarás
              </h2>
              <ul>
                <li>Innovación</li>
                <li>Compromiso</li>
                <li>Trabajo en equipo</li>
                <li>Integridad</li>
                <li>Atención al servicio</li>
              </ul>
            </div>
          </div>
          <div className="nostrolastdiv">
            <div className="nostrolastdivleft">
              <img
                src="https://i.pinimg.com/originals/67/69/79/676979b48cfed26c36e046bb173e7eef.png"
                className="jpg"
                alt="bawa"
              ></img>
            </div>
            <div className="nostrolastdivright">
              <img
                src="data:image/jpeg;base64,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"
                className="jpg"
                alt="bawa"
              ></img>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Nosotros;
