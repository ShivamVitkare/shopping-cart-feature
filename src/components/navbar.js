import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'



const Navbar = () => {
    const item = useSelector((state)=> state.cartreducer.value)
    let quanlity = 0;
    item.forEach((itam) => quanlity += itam.quantity)
  return (
    <div className='navbar'>
   
        <h1>ShopCart</h1>
        <Link className='link' to={"/cart"}><p><i class="fa-solid fa-cart-shopping"></i> {`${quanlity}`}</p></Link>
       
        
    </div>
  )
}

export default Navbar