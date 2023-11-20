import React from 'react';
import { Link } from "react-router-dom";
import { AiOutlineShopping } from 'react-icons/ai';

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <p className='logo'>
          <Link to='/'>
            COOKIES
          </Link>
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