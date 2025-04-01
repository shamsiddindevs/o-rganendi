import React, { useState } from "react";
import {useParams} from "react-router-dom";
import { product } from "../mock/products";

const Products = () => {
  let {id} = useParams();
  const [data] = useState(product);
  let base = Object.values(data).flat(Infinity);
  console.log(base);
  let item = base.find(v=>v.link == id );
 
  

  return (
    <div className="flex flex-col gap-5">
      <h1>{item.name}</h1>
      <img src={item.img} alt="" />
      <p>{item.des}</p>
    </div>
  );
};

export default Products;
