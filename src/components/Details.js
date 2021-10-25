import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import {ButtonContainer} from './Button';


export default class Details extends Component {
 render() {
  return (
   <ProductConsumer>
    {(value) => {
     const {id, title, price, image, inCart, info} = value.detailProduct;

     return (
      <div className="container py-5">
       {/* title */}
       <div className="row">
        <div className="col-10 mx-auto text-center text-capitalize text-slanted text-blue my-5">
         <h1>{title}</h1>
        </div>
       </div>
       {/* product info */}
       <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
       <img src={image} className="img-fluid" alt="product" />
        </div>
        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
         <h1>model: {title}</h1>
       
         <h4 className="text-blue">
          <strong>
           price: <span>$</span>{price}
          </strong>
         </h4>
         <p className="text-capitalize font-weight-bold mt-3 mb-0">
          some info about product
         </p>
         <p className="text-muted lead">{info}</p>
         {/* buttons */}
         <div>
          <Link to="/">
           <ButtonContainer className="mr-1 mb-2">
            back to products
           </ButtonContainer>
          </Link>
          <ButtonContainer 
          disabled={inCart ? true : false}
          onClick={() => {
           value.addToCart(id);
           value.openModal(id);
          }}
          >
           {inCart ? 'in cart' : 'add to cart'}
          </ButtonContainer>
         </div>
        </div>
       </div>
      </div>
     )
    }}
   </ProductConsumer>
  )
 }
}
