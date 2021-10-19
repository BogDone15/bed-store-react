import React, { Component } from 'react';
import styled from 'styled-components';
import Product from './Product';
import SubTitle from './SubTitle';
import {ProductConsumer} from '../context';

export default class ProductList extends Component {
 render() {

  return (
   <React.Fragment>
    <div className="section-title">
     <SubTitle title="Our Products" />
     </div>
     <ProductWrapper>
     <ProductConsumer>
      {(value) => {
       return value.products.map(product => {
        return <Product key={product.id} product={product} />
       })
      }}
     </ProductConsumer>
     </ProductWrapper>
   </React.Fragment>
  )
 }
}

const ProductWrapper = styled.div`
width: 90vw;
margin: 0 auto;
max-width: 1170px;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
grid-column-gap: 1.5rem;
grid-row-gap: 2rem;
`;