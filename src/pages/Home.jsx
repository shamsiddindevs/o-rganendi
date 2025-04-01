import React from "react";
import {product} from "../mock/products";
import {Link} from "react-router-dom";
import CountUp from "react-countup";


const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <h2><CountUp end={100} duration={2}/></h2> 
      <h2><CountUp end={50} duration={2}/></h2> 
      <h2><CountUp end={10} duration={2}/></h2> 
      <header>
        <ul>
          {Object.keys(product).map((v) => (
            <li key={v}>
              <Link to={`product-category/${v}`}>{v.toUpperCase()}</Link>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
};

export default Home;
