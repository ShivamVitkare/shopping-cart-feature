import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProduct } from "./slice/productSlice";
import ProductList from "./components/productlist";
import Navbar from "./components/navbar";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <Navbar />
      
      \
      {/* <ProductList /> */}
      <Routes>
        <Route path="/" element={<ProductList/>} />
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;
