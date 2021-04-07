import { Pagination } from "@material-ui/lab";
import React from "react";
import { fakeData } from "./fakeData";
import ProductCard from "./ProductCard";
import "../css/_allProduct.scss";

const AllProduct = (props) => {
  return (
    <div className="allProduct">
      <div className="allProduct__container">
        {fakeData.slice(0, 6).map((x) => {
          if (props.upperlimit || props.lowerlimit) {
            if (x.price > props.lowerlimit && x.price < props.upperlimit) {
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
  );
};

export default AllProduct;
