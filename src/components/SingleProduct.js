import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addtocart } from '../slice/cartSlice'
import { removeformcart } from '../slice/cartSlice'

const SingleProduct = ({product}) => {
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cartreducer.value)
const curtitem = cart.find((item)=> item.id == product.id)
const curquantily = curtitem ? curtitem.quantity : 0;
  return (
    <div className='singleproduct'>
        <img  src={product.images} alt="" srcset="" />
        <p className='title'>{product.title}</p>
        <p className='price'>{product.price}</p>
  
      <div className="lower">
        <button onClick={()=> dispatch(addtocart(product.id))} >+</button>
    <span >{curquantily}</span>
    <button onClick={()=> dispatch(removeformcart(product.id))}>-</button>
      </div>
    </div>
  )
}

export default SingleProduct