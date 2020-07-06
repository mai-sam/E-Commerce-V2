import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';
import {ButtonContainer} from './Button';

export default class Navbar extends Component{
    render (){
     return (
      <NavWrapper className="navbar navbar-expand-sm  navbar-dark px-sm-5">
          {/* https://static.wixstatic.com/media/a21e98_efe8f2ea350f44c0a0f21dfe6c133e1c~mv2.png/v1/fill/w_174,h_174,al_c,q_85,usm_0.66_1.00_0.01/a21e98_efe8f2ea350f44c0a0f21dfe6c133e1c~mv2.webp*/}
          <Link to="/">
          <img src={logo} alt="store" className="navbar-brand"/>
          </Link>
          <ul className="navbar-nav align-items-center">
              <li className="nav-item ml-5"></li>
         <Link to ="/" className="nav-link">
             Products
         </Link>
          </ul>
          <Link to='/cart' className="ml-auto">
              <ButtonContainer>
                  <span className="mr-2"> 
                  <i className="fas fa-cart-plus"/>
                  </span>
                  My Cart
              </ButtonContainer>
          </Link>
      </NavWrapper>
    )
 }
}

const NavWrapper = styled.nav`
background: var(--mainBlue);
.nav-link{
    color:var(--mainDark)!important;
    font-size:2rem;
}
`;
