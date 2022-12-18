import { castDraft } from "immer";
import React from "react";
import { Dispatch } from "react";
import { removeitem } from "../slice/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const cartvalue = useSelector((state) => state.cartreducer.value);
  const products = useSelector((state) => state.productReducer.products);
  let listproduct = [];
  // console.log(cartvalue);
  // console.log(products);
  // cartvalue.forEach((item) => listproduct= [...listproduct,{1:item.id+1}]

  // )
  cartvalue.forEach((item) =>
    listproduct.push(products.find((product) => product.id == item.id))
  );

  // let productlist = cartvalue.map((item) => {

  // });start
  // let productlist = products.filter((item)=> cartvalue.forEach((value) => (return value.id)== item)
  // console.log(productlist);
  let itemprice = 0;
  listproduct.forEach((item) => (itemprice += item.price));
  let totalprice = 0;
  cartvalue.forEach(
    (item) =>
      (totalprice +=
        products.find((product) => product.id == item.id).price * item.quantity)
  );

  console.log(listproduct);
  return (
    <div className="cart-list">
    <div className="back"  onClick={()=> navigate(-1)}><i class="fa-solid fa-arrow-left"></i></div>
    
      {listproduct.map((item) => {
        return (
          <div className="cart">
            <img src={item.images} alt="" srcset="" />

            <p>{item.title}</p>
            <p className="qty">Qty: {cartvalue.find((product) => product.id == item.id).quantity}</p>
            <p className="price">Price: {item.price}</p>
            <p className="total">total: 
              {item.price *
                cartvalue.find((product) => product.id == item.id).quantity}
            </p>

            <button onClick={() => dispatch(removeitem(item.id))}>
            <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
        );
      })}
      <div className="cart-lower">
           <p>Subtotal: {totalprice}</p>
      <button>Placeorder</button>
      </div>
    </div>
  );
};

export default Cart;
