import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Products from "./pages/Products";


const App = () => {

  
  return (
    <div>
      <h1>hello world</h1>
      <BrowserRouter>
       
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="product-category/:id"
            element={<Product />}
          />
           <Route
            path="product/:id"
            element={<Products />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
