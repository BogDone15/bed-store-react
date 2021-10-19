import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 


export default class Navbar extends Component {
 render() {
  return (
   <div>
    <nav className="navbar">
     <div className="navbar-center">
      <div className="logo">
       <Link to="/">Comfort<span className="color-logo">Home</span>
       </Link>
      </div>
      <Link to="/cart">
      <div className="cart-btn">
       <span className="nav-icon">
        <i className="fas fa-cart-plus"></i>
       </span>
       <div className="cart-items">0</div>
      </div>
      </Link>
     </div>
    </nav>
   </div>
  )
 }
}
