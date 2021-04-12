import { Pagination } from "@material-ui/lab";
import React from "react";
import { fakeData } from "./fakeData";
import ProductCard from "./ProductCard";
import "../css/_allProduct.scss";
import Media from "react-media";

const AllProduct = (props) => {
  return (
    <div>
      <Media query="(min-width:1300px)">
        {(matches) => {
          return matches ? (
            <div className="allProduct">
              <div className="allProduct__container">
                {fakeData.slice(0, 6).map((x) => {
                  if (!props.upperlimit && props.lowerlimit) {
                    if (x.price >= props.lowerlimit) {
                      return (
                        <ProductCard
                          x={x}
                          lower={props.lowerlimit}
                          upper={props.upperlimit}
                        ></ProductCard>
                      );
                    }
                  } else if (props.upperlimit && !props.lowerlimit) {
                    if (x.price <= props.upperlimit) {
                      return (
                        <ProductCard
                          x={x}
                          lower={props.lowerlimit}
                          upper={props.upperlimit}
                        ></ProductCard>
                      );
                    }
                  } else if (props.upperlimit && props.lowerlimit) {
                    if (
                      x.price >= props.lowerlimit &&
                      x.price <= props.upperlimit
                    ) {
                      return (
                        <ProductCard
                          x={x}
                          lower={props.lowerlimit}
                          upper={props.upperlimit}
                        ></ProductCard>
                      );
                    }
                  } else {
                    return (
                      <ProductCard
                        x={x}
                        lower={props.lowerlimit}
                        upper={props.upperlimit}
                      ></ProductCard>
                    );
                  }
                })}
              </div>
              <div className="allProduct__pagination">
                <Pagination count={4} />
              </div>
            </div>
          ) : null;
        }}
      </Media>
      <Media query="(max-width:767px)">
        {(matches) => {
          return matches ? (
            <div className="allProduct">
              <div className="allProduct__container">
                <div className="row">
                  {fakeData.slice(0, 3).map((x) => {
                    if (!props.upperlimit && props.lowerlimit) {
                      if (x.price >= props.lowerlimit) {
                        return (
                          <div className="col-12">
                            <ProductCard
                              x={x}
                              lower={props.lowerlimit}
                              upper={props.upperlimit}
                            ></ProductCard>
                          </div>
                        );
                      }
                    } else if (props.upperlimit && !props.lowerlimit) {
                      if (x.price <= props.upperlimit) {
                        return (
                          <div className="col-12">
                            <ProductCard
                              x={x}
                              lower={props.lowerlimit}
                              upper={props.upperlimit}
                            ></ProductCard>
                          </div>
                        );
                      }
                    } else if (props.upperlimit && props.lowerlimit) {
                      if (
                        x.price >= props.lowerlimit &&
                        x.price <= props.upperlimit
                      ) {
                        return (
                          <div className="col-12">
                            <ProductCard
                              x={x}
                              lower={props.lowerlimit}
                              upper={props.upperlimit}
                            ></ProductCard>
                          </div>
                        );
                      }
                    } else {
                      return (
                        <div className="col-12">
                          <ProductCard
                            x={x}
                            lower={props.lowerlimit}
                            upper={props.upperlimit}
                          ></ProductCard>
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
              <div className="allProduct__pagination">
                <Pagination count={2} />
              </div>
            </div>
          ) : null;
        }}
      </Media>
      <Media query="(min-width:768px) and (max-width:1299px)">
        {(matches) => {
          return matches ? (
            <div className="allProduct">
              <div className="allProduct__container">
                <div className="row">
                  {fakeData.slice(0, 6).map((x) => {
                    if (!props.upperlimit && props.lowerlimit) {
                      if (x.price >= props.lowerlimit) {
                        return (
                          <div className="col-6">
                            <ProductCard
                              x={x}
                              lower={props.lowerlimit}
                              upper={props.upperlimit}
                            ></ProductCard>
                          </div>
                        );
                      }
                    } else if (props.upperlimit && !props.lowerlimit) {
                      if (x.price <= props.upperlimit) {
                        return (
                          <div className="col-6">
                            <ProductCard
                              x={x}
                              lower={props.lowerlimit}
                              upper={props.upperlimit}
                            ></ProductCard>
                          </div>
                        );
                      }
                    } else if (props.upperlimit && props.lowerlimit) {
                      if (
                        x.price >= props.lowerlimit &&
                        x.price <= props.upperlimit
                      ) {
                        return (
                          <div className="col-6">
                            <ProductCard
                              x={x}
                              lower={props.lowerlimit}
                              upper={props.upperlimit}
                            ></ProductCard>
                          </div>
                        );
                      }
                    } else {
                      return (
                        <div className="col-6">
                          <ProductCard
                            x={x}
                            lower={props.lowerlimit}
                            upper={props.upperlimit}
                          ></ProductCard>
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
              <div className="allProduct__pagination">
                <Pagination count={4} />
              </div>
            </div>
          ) : null;
        }}
      </Media>
    </div>
  );
};

export default AllProduct;
