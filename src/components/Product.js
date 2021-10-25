import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';
import PropTypes from 'prop-types';

export default class Product extends Component {
 render() {
  const {id, title, image, price, inCart} = this.props.product;
  return (
    <ProductConsumer>
      {(value) => (
        <article className="product"
        onClick={() => {
          value.handleDetail(id);
        }}
        >
        <Link to="/details">
         <div className="img-container">
          <img src={image} alt="product" className="product-img" />
         </div>
        </Link>
        <button className="bag-btn" 
          disabled={inCart ? true : false}
          onClick={() => {
            value.addToCart(id);
            value.openModal(id);
            }}>
           <i className="fas fa-shopping-cart"></i> 
           {inCart ? "in cart" : 'add to cart'}
          </button>
          <h3>{title}</h3>
          <h4>${price}</h4>
       </article>
      )}
      
    </ProductConsumer>
  );
 }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  })
}