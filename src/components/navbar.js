import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const Navbar = () => {
    const item = useSelector((state)=> state.cartreducer.value)
    let quanlity = 0;
    item.forEach((itam) => quanlity += itam.quantity)
  return (
    <div>
        <h1>ShopCart</h1>
        <Link to={"/cart"}><p>{`Cart ${quanlity}`}</p></Link>
       
        
    </div>
  )
}

export default Navbar