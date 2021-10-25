import React from 'react'

export default function CartItem({ item, value }) {
 const { id, title, image, price, total, count } = item;
 const { increment, decrement, removeItem } = value;
 return (
  <div className="row my-1 text-capitalize text-center">
   <div className="col-10 mx-auto col-lg-2">
    <img src={image} style={{width: '7rem', height: "7rem"}} className="img-fluid" alt="product" />
   </div>
  </div>
 )
}
