import React, { useState } from "react";
import "../css/product.scss";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import StarRatings from "react-star-ratings";
import { NavLink } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import ReactPlayer from "react-player";
import { Modal, Button } from "react-bootstrap";
import Nav from "../components/Nav";
import Checkoutmodal from "./Checkout";
import Footer from "./Footer";
import Media from "react-media";

function Product() {
  const [bulla, setbulla] = useState(0);
  const [show, setShow] = useState(0);
  const [formstates, setformstates] = useState(0);
  const [checkout, setcheckout] = useState(0);
  const [productdetailmodel, setproductdetailmodel] = useState(false);
  const [productdetail, setproductdetail] = useState({
    image:
      "https://res.cloudinary.com/dd77cqt5fs/image/upload/v1616986969/bigimage_vjjqmb.png",
    name: "Escritorio Montesorri",
    color: "black",
    price: "1299",
    quantity: "1",
  });
  const images = [
    "https://res.cloudinary.com/dd77cqt5fs/image/upload/v1616986969/bigimage_vjjqmb.png",
    "https://res.cloudinary.com/dd77cqt5fs/image/upload/v1617090025/henjtable_yglavn.png",
    "https://res.cloudinary.com/dd77cqt5fs/image/upload/v1616985583/slider3_mmyxsz.png",
    "https://res.cloudinary.com/dd77cqt5fs/image/upload/v1616985583/slider3_mmyxsz.png",
  ];
  const card = [
    {
      image:
        "https://res.cloudinary.com/dd77cqt5fs/image/upload/v1617011248/chair_hmv0h2.png",
      name: "Escritorio Montessori",
      price: 999,
    },
    {
      image:
        "https://res.cloudinary.com/dd77cqt5fs/image/upload/v1617011248/chair_hmv0h2.png",
      name: "Escritorio Montessori",
      price: 999,
    },
    {
      image:
        "https://res.cloudinary.com/dd77cqt5fs/image/upload/v1617011248/chair_hmv0h2.png",
      name: "Escritorio Montessori",
      price: 999,
    },
    {
      image:
        "https://res.cloudinary.com/dd77cqt5fs/image/upload/v1617011248/chair_hmv0h2.png",
      name: "Escritorio Montessori",
      price: 999,
    },
  ];
  const handlemodal = () => {
    setproductdetailmodel(false);
  };
  const handlecheckout = () => {
    setproductdetailmodel(false);
    setcheckout(1);
  };
  const renderModal = () => {
    return (
      <Modal show={productdetailmodel} onHide={handlemodal}>
        <Modal.Body>
          <div className="modal__centre">
            <img
              src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1616986969/bigimage_vjjqmb.png"
              className="modal__image"
            ></img>
            <div>
              <p className="modal__name">{productdetail.name}</p>
              <p
                className="modal__color"
                style={{ backgroundColor: `${productdetail.color}` }}
              ></p>
              <p>
                <span className="modal__price">${productdetail.price}</span> X{" "}
                {productdetail.quantity}
              </p>
            </div>
            <p className="El">Eliminar</p>
          </div>
          <div className="d-flex">
            <p className="total">Total:$999</p>
            <Media query="(max-width:767px)">
              {(matches) => {
                return matches ? (
                  <NavLink to="/Checkout" className="modal__link">
                    IR A LA CAJA
                  </NavLink>
                ) : (
                  <p className="modal__link" onClick={handlecheckout}>
                    IR A LA CAJA
                  </p>
                );
              }}
            </Media>
          </div>
        </Modal.Body>
      </Modal>
    );
  };

  const handleopening = () => {
    setproductdetailmodel(true);
  };
  const handleinc = () => {
    if (bulla < 3) {
      setbulla(bulla + 1);
    }
  };
  const handledec = () => {
    if (bulla > 0) {
      setbulla(bulla - 1);
    }
  };
  return (
    <div style={{ overflow: "hidden" }}>
      <div
        className={
          checkout == 0
            ? "container-fluid m-0 p-0"
            : "container-fluid m-0 p-0 civic"
        }
        style={{ overflow: "hidden" }}
      >
        <Nav />
        <div className="product__container">
          <div className="header_container">
            <h3 className="header_text">
              Casa para gato Mod.
              <span className="inner__span">
                Tavolo actualmente se encuentra en una oferta especial de 12% de
                descuento
                <br />
              </span>
              la oferta termina en: 0 dias, 12 horas, 4 minutos
            </h3>
          </div>
          <div className="d-flex justify-content-center product__upper">
            <div className="d-flex">
              <div className="ProductImage_slider">
                <NavLink to="/shop">
                  <p className="sliderabove__text">Regresar a la Tienda</p>
                </NavLink>
                <div className="d-flex">
                  <Media query="(min-width:1300px)">
                    {(matches) => {
                      return matches ? (
                        <div className="small_images">
                          {images.map((ima, index) => {
                            return (
                              <div className="slider__image">
                                <img
                                  src={ima}
                                  onClick={() => setbulla(index)}
                                  className="imga"
                                ></img>
                              </div>
                            );
                          })}
                        </div>
                      ) : null;
                    }}
                  </Media>
                  <Media query="(min-width:768px) and (max-width:1299px)">
                    {(matches) => {
                      return matches ? (
                        <div className="small_images">
                          {images.map((ima, index) => {
                            return (
                              <div className="slider__image">
                                <img
                                  src={ima}
                                  onClick={() => setbulla(index)}
                                  className="imga"
                                ></img>
                              </div>
                            );
                          })}
                        </div>
                      ) : null;
                    }}
                  </Media>

                  <div className="big__image">
                    <div className="arrow__border">
                      <p className="left__arrow" onClick={handledec}>
                        <MdKeyboardArrowLeft />
                      </p>
                    </div>
                    {images.map((im, index) => {
                      if (index == bulla) {
                        return (
                          <img src={im} className="BIGIMAGE toggleIn"></img>
                        );
                      }
                    })}
                    <div className="arrow__border2">
                      <p className="left__arrow2" onClick={handleinc}>
                        <MdKeyboardArrowRight />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="description__container">
                <p className="header">Casa para gato Mod. Tavolo</p>
                <div className="d-flex">
                  <Media query="(max-width:767px)">
                    {(matches) => {
                      return matches ? (
                        <p className="star">
                          <StarRatings
                            starRatedColor="#ff6606"
                            rating={5}
                            starDimension="7px"
                            starSpacing="0px"
                          />
                        </p>
                      ) : (
                        <p className="star">
                          <StarRatings
                            starRatedColor="#ff6606"
                            rating={5}
                            starDimension="15px"
                            starSpacing="5px"
                          />
                        </p>
                      );
                    }}
                  </Media>
                  <p className="openions">10 openions</p>
                </div>
                <div className="d-flex">
                  <p className="cutprice">$1488</p>
                  <p className="offer">Ahorras 12% con esta oferta</p>
                </div>
                <h2 className="new__price">$1299</h2>
                <div className="d-flex">
                  <p className="co"></p>
                  <p className="co1"></p>
                  <p className="co2"></p>
                  <p className="co3"></p>
                  <div className="d-flex">
                    <p className="lef">
                      <MdKeyboardArrowLeft />
                    </p>
                    <p className="quantity">1 unidad</p>
                    <p className="lef2">
                      <MdKeyboardArrowRight />
                    </p>
                  </div>
                </div>
                <p className="desc">Descripción</p>
                <p className="des">
                  La casa para gatitos Tavolino tiene un diseño minimalista y
                  está disponible en una variedad de colores para que la puedas
                  combinar con cualquier espacio.
                </p>
                <div className="d-flex">
                  <p className="COMPRAR" onClick={handleopening}>
                    COMPRAR
                  </p>
                  <NavLink to="#" className="ELIMINAR">
                    ELIMINAR
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="d-flex bara justify-content-center combo__review">
              <div className="combo__container">
                <h3 className="combos">ArmeaCombos</h3>
                <div>
                  <div className="d-flex">
                    <div className="combo__Image">
                      <div className="inner">
                        <img
                          src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1616997221/table_zuilkb.png"
                          className="imgss"
                        ></img>
                        <Media query="(min-width:768px) and (max-width:1299px)">
                          {(matches) => {
                            return matches ? (
                              <p className="combo__rating">
                                <StarRatings
                                  starRatedColor="#ff6606"
                                  rating={5}
                                  starDimension="8px"
                                  starSpacing="2px"
                                />
                              </p>
                            ) : null;
                          }}
                        </Media>
                        <Media query="(min-width:1300px)">
                          {(matches) => {
                            return matches ? (
                              <p className="combo__rating">
                                <StarRatings
                                  starRatedColor="#ff6606"
                                  rating={5}
                                  starDimension="7px"
                                  starSpacing="2px"
                                />
                              </p>
                            ) : null;
                          }}
                        </Media>
                        <Media query="(max-width:767px)">
                          {(matches) => {
                            return matches ? (
                              <p className="combo__rating">
                                <StarRatings
                                  starRatedColor="#ff6606"
                                  rating={5}
                                  starDimension="7px"
                                  starSpacing="0px"
                                />
                              </p>
                            ) : null;
                          }}
                        </Media>

                        <p className="combo__text">Escritorio Montessori</p>
                      </div>
                    </div>
                    <p className="plus">
                      <AiOutlinePlus />
                    </p>
                    <div className="combo__Image2">
                      <div className="inner">
                        <img
                          src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1616997221/table_zuilkb.png"
                          className="imgss"
                        ></img>
                        <Media query="(min-width:768px) and (max-width:1299px)">
                          {(matches) => {
                            return matches ? (
                              <p className="combo__rating">
                                <StarRatings
                                  starRatedColor="#ff6606"
                                  rating={5}
                                  starDimension="8px"
                                  starSpacing="2px"
                                />
                              </p>
                            ) : null;
                          }}
                        </Media>
                        <Media query="(min-width:1300px)">
                          {(matches) => {
                            return matches ? (
                              <p className="combo__rating">
                                <StarRatings
                                  starRatedColor="#ff6606"
                                  rating={5}
                                  starDimension="7px"
                                  starSpacing="2px"
                                />
                              </p>
                            ) : null;
                          }}
                        </Media>
                        <Media query="(max-width:767px)">
                          {(matches) => {
                            return matches ? (
                              <p className="combo__rating">
                                <StarRatings
                                  starRatedColor="#ff6606"
                                  rating={5}
                                  starDimension="7px"
                                  starSpacing="0px"
                                />
                              </p>
                            ) : null;
                          }}
                        </Media>
                        <p className="combo__text">Escritorio Montessori</p>
                      </div>
                    </div>
                    <div>
                      <p className="discount">
                        Precio: <span className="combo__price">1997$</span>
                        <span className="combo__discount">-30%</span>
                      </p>
                      <div>
                        <NavLink to="#" className="combo__link">
                          COMPRAR
                        </NavLink>
                      </div>
                      <div>
                        <NavLink to="#" className="combo__links">
                          AÑADIR
                        </NavLink>
                      </div>
                    </div>
                  </div>
                  <div className="below__combo">
                    <h2 className="below_header">Estructura y armado</h2>
                    <p className="below__text">
                      Esta casita no necesita clavos ni pegamento y consta de
                      tan solo 8 piezas, se puede armar en 5 minutos y es muy
                      resistente, está hecha de material laminado lo cual la
                      hacen durable ante cualquier derrame de líquidos.
                    </p>
                    <Media query="(max-width:767px)">
                      {(matches) => {
                        return matches ? (
                          <div className="d-flex" style={{ width: "100%" }}>
                            <div className="video1">
                              <ReactPlayer
                                url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                                width="100%"
                                height="120px"
                              />
                            </div>
                          </div>
                        ) : (
                          <div className="d-flex" style={{ width: "100%" }}>
                            <div className="video1">
                              <ReactPlayer
                                url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                                width="100%"
                                height="120px"
                              />
                            </div>
                            <div className="video2">
                              <ReactPlayer
                                url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                                width="100%"
                                height="120px"
                              />
                            </div>
                          </div>
                        );
                      }}
                    </Media>
                    <h2 className="Beneficios">Beneficios</h2>
                    <p className="text2">
                      Además de ser bonita y cómoda para tu gatito, funciona
                      también como mesa o decoración y combina con cualquier
                      espacio.
                    </p>
                    <div className="d-flex">
                      <h2 className="Preguntas">Preguntas frecuentes</h2>
                      <p className="text3">Ver preguntas</p>
                    </div>
                    <p className="Información">Información de envío</p>
                    <p className="text4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Pellentesque a pellentesque tellus. Vestibulum eu pharetra
                      lacus, in vehicula nisi
                    </p>
                    <p className="Información">¿Dónde fabrican los muebles?</p>
                    <p className="text4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Pellentesque a pellentesque tellus. Vestibulum eu pharetra
                      lacus, in vehicula nisi
                    </p>
                    <p className="Información">¿Cuánto cuesta el envío?</p>
                    <p className="text4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Pellentesque a pellentesque tellus. Vestibulum eu pharetra
                      lacus, in vehicula nisi
                    </p>
                  </div>
                </div>
              </div>
              <div className="reviews__container">
                <h2 className="reviews__header">
                  Calificación de este producto
                </h2>
                <Media query="(max-width:767px)">
                  {(matches) => {
                    return matches ? (
                      <div>
                        <div className="d-flex">
                          <div>
                            <p className="orignal__rating">5.0</p>
                            <p className="reviews__rating">
                              <Media query="(max-width:767px)">
                                {(matches) => {
                                  return matches ? (
                                    <StarRatings
                                      starRatedColor="#ff6606"
                                      rating={5}
                                      starDimension="7px"
                                      starSpacing="0px"
                                    />
                                  ) : (
                                    <StarRatings
                                      starRatedColor="#ff6606"
                                      rating={5}
                                      starDimension="15px"
                                      starSpacing="1px"
                                    />
                                  );
                                }}
                              </Media>
                            </p>
                          </div>
                        </div>
                        <div
                          style={{ marginLeft: "-40px", marginTop: "-30px" }}
                        >
                          <div className="d-flex">
                            <p className="estrellas">5 estrellas </p>
                            <p className="review__bar"></p>
                          </div>
                          <div className="d-flex">
                            <p className="estrellas2">5 estrellas </p>
                            <p className="review__bar2"></p>
                          </div>
                          <div className="d-flex">
                            <p className="estrellas2">5 estrellas </p>
                            <p className="review__bar2"></p>
                          </div>
                          <div className="d-flex">
                            <p className="estrellas2">5 estrellas </p>
                            <p className="review__bar2"></p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="d-flex">
                        <div>
                          <p className="orignal__rating">5.0</p>
                          <p className="reviews__rating">
                            <Media query="(max-width:767px)">
                              {(matches) => {
                                return matches ? (
                                  <StarRatings
                                    starRatedColor="#ff6606"
                                    rating={5}
                                    starDimension="7px"
                                    starSpacing="0px"
                                  />
                                ) : (
                                  <StarRatings
                                    starRatedColor="#ff6606"
                                    rating={5}
                                    starDimension="15px"
                                    starSpacing="1px"
                                  />
                                );
                              }}
                            </Media>
                          </p>
                        </div>
                        <div style={{ marginLeft: "-10px" }}>
                          <div className="d-flex">
                            <p className="estrellas">5 estrellas </p>
                            <p className="review__bar"></p>
                          </div>
                          <div className="d-flex">
                            <p className="estrellas2">5 estrellas </p>
                            <p className="review__bar2"></p>
                          </div>
                          <div className="d-flex">
                            <p className="estrellas2">5 estrellas </p>
                            <p className="review__bar2"></p>
                          </div>
                          <div className="d-flex">
                            <p className="estrellas2">5 estrellas </p>
                            <p className="review__bar2"></p>
                          </div>
                        </div>
                      </div>
                    );
                  }}
                </Media>

                <h2 className="Reseñas">Reseñas de clientes</h2>
                <div className="d-flex">
                  <h4 className="Hermoso">Hermoso!</h4>
                  <Media query="(max-width:767px)">
                    {(matches) => {
                      return matches ? (
                        <p className="rat">
                          <StarRatings
                            starRatedColor="#ff6606"
                            rating={5}
                            starDimension="7px"
                            starSpacing="0px"
                          />
                        </p>
                      ) : (
                        <p className="rat">
                          <StarRatings
                            starRatedColor="#ff6606"
                            rating={5}
                            starDimension="15px"
                            starSpacing="2px"
                          />
                        </p>
                      );
                    }}
                  </Media>
                </div>
                <p className="text7">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  eget scelerisque enim, at faucibus lectus. In hac habitasse
                  platea dictumst
                </p>
                <div className="d-flex">
                  <h4 className="Hermoso">Excelente</h4>
                  <Media query="(max-width:767px)">
                    {(matches) => {
                      return matches ? (
                        <p className="rat">
                          <StarRatings
                            starRatedColor="#ff6606"
                            rating={5}
                            starDimension="7px"
                            starSpacing="0px"
                          />
                        </p>
                      ) : (
                        <p className="rat">
                          <StarRatings
                            starRatedColor="#ff6606"
                            rating={5}
                            starDimension="15px"
                            starSpacing="2px"
                          />
                        </p>
                      );
                    }}
                  </Media>
                </div>
                <p className="text7">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  eget scelerisque enim, at faucibus lectus. In hac habitasse
                  platea dictumst
                </p>
              </div>
            </div>
          </div>
          <div className="similar">
            <div className="d-flex justify-content-center">
              <h1 className="similares">
                Productos<span className="sim"> similares</span>
              </h1>
            </div>
            <Media query="(min-width:1300px)">
              {(matches) => {
                return matches ? (
                  <div className="d-flex justify-content-center">
                    <div className="row">
                      {card.map((car) => {
                        return (
                          <div className="col-3 mt-5">
                            <div className="cards">
                              <img
                                src={car.image}
                                className="card__image"
                              ></img>
                              <p className="card__rating">
                                <StarRatings
                                  starRatedColor="#ff6606"
                                  rating={5}
                                  starDimension="15px"
                                  starSpacing="2px"
                                />
                              </p>
                              <p className="card__name">{car.name}</p>
                              <p className="card__price">${car.price}</p>
                              <NavLink to="#" className="DETALLES">
                                DETALLES
                              </NavLink>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ) : null;
              }}
            </Media>

            <Media query="(min-width:768px) and (max-width:1299px)">
              {(matches) => {
                return matches ? (
                  <div className="row justify-content-center">
                    {card.map((car) => {
                      return (
                        <div className="d-flex">
                          <div className="col-6 mt-5">
                            <div className="cards">
                              <img
                                src={car.image}
                                className="card__image"
                              ></img>
                              <p className="card__rating">
                                <StarRatings
                                  starRatedColor="#ff6606"
                                  rating={5}
                                  starDimension="15px"
                                  starSpacing="2px"
                                />
                              </p>
                              <p className="card__name">{car.name}</p>
                              <p className="card__price">${car.price}</p>
                              <NavLink to="#" className="DETALLES">
                                DETALLES
                              </NavLink>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : null;
              }}
            </Media>
            <Media query="(max-width:767px)">
              {(matches) => {
                return matches ? (
                  <div className="row justify-content-center">
                    {card.map((car) => {
                      return (
                        <div className="d-flex">
                          <div className="col-6 mt-5">
                            <div className="cards">
                              <img
                                src={car.image}
                                className="card__image"
                              ></img>
                              <p className="card__rating">
                                <StarRatings
                                  starRatedColor="#ff6606"
                                  rating={5}
                                  starDimension="15px"
                                  starSpacing="2px"
                                />
                              </p>
                              <p className="card__name">{car.name}</p>
                              <p className="card__price">${car.price}</p>
                              <NavLink to="#" className="DETALLES">
                                DETALLES
                              </NavLink>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : null;
              }}
            </Media>
          </div>
        </div>
        {renderModal()}
      </div>
      <Media query="(max-width:767px)">
        {(matches) => {
          return matches ? null : (
            <Checkoutmodal classstate={checkout} numberState={formstates} />
          );
        }}
      </Media>

      <Footer />
    </div>
  );
}

export default Product;
