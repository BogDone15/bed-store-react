import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Title from './Title';
import { ButtonContainer } from './Button';

export default class Main extends Component {
 render() {
  return (
   <div>
    <main className="hero">
     <div className="row">
     <div className="col-lg-12 text-center">
      <div className="banner">
       <Title title="bed collection" />
       <Link to="/" className="link__btn"> 
       <ButtonContainer>
        shop now
       </ButtonContainer>
       </Link>
      </div>
     </div>
     </div>
    </main>
   </div>
  )
 }
}
