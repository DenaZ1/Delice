import React from 'react';
import { Link, BrowserRouter } from "react-router-dom";
import { AiOutlineShopping } from 'react-icons/ai';

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <p className='logo'>
        <BrowserRouter>
          <Link to='/'>
            COOKIES
          </Link>
        </BrowserRouter>
      </p>
      <button type='button'
      className='cart-icon' onClick=''>
        <AiOutlineShopping />
        <span className='cart-item-qty'>1</span>
      </button>
    </div>
  )
}

export default Navbar