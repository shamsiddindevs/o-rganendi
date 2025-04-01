import React from "react";
import {Link, useParams} from "react-router-dom";
import {product} from "../mock/products";

const Product = () => {
  let {id} = useParams();
  if (!product[id]) {
    return <h1>No data</h1>;
  }

  return (
    <div>
      <h1>{id}</h1>
      <div className="flex flex-col gap-3">
        {product[id]?.map((v) => (
          <Link
            to={`/product/${v.link}`}
            key={v.id}>
            {v.id}.{v.name} - {v.des}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Product;
