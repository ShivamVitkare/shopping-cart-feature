import { castDraft } from 'immer'
import React from 'react'
import { Dispatch } from 'react'
import { removeitem } from '../slice/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
const Cart = () => {
const dispatch = useDispatch();
  const  cartvalue= useSelector((state)=> state.cartreducer.value)
const products = useSelector((state)=> state.productReducer.products)
let listproduct =[]
// console.log(cartvalue);
// console.log(products);
// cartvalue.forEach((item) => listproduct= [...listproduct,{1:item.id+1}]

// )
cartvalue.forEach((item) => listproduct.push(products.find((product)=>product.id == item.id)))

// let productlist = cartvalue.map((item) => {

// });
// let productlist = products.filter((item)=> cartvalue.forEach((value) => (return value.id)== item) 
// console.log(productlist);
let itemprice = 0;
listproduct.forEach((item) => itemprice += item.price)
let totalprice =0
cartvalue.forEach((item) => totalprice +=products.find((product)=>product.id == item.id).price * item.quantity)


    

console.log(listproduct);
  return (
    <div>
    <p>{itemprice}</p>
    <p>{totalprice}</p>
        {listproduct.map((item)=>{
          return(
            <div className="cart">
            <img  src={item.images} alt="" srcset="" />

            <p>{item.title}</p>
            <p>{cartvalue.find((product)=> product.id == item.id).quantity}</p>
<p>{item.price}</p>
<p>{item.price * cartvalue.find((product)=> product.id == item.id).quantity}</p>

<button onClick={()=>dispatch(removeitem(item.id))}>delect this item</button>
            </div> 





          )
        })}
    </div>
  )
}

export default Cart