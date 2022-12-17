import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import SingleProduct from "./SingleProduct";
import { fetchProduct } from "../slice/productSlice";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducer.products);
  useEffect(() => {
    dispatch(fetchProduct());
  }, []);
  return (
    <div className="productlist">
      {products.map((item) =><SingleProduct key={item.id} product={item}/>
      )}
    </div>
  );
};

export default ProductList;
