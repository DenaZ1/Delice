import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2023 Delice Bakery All rights reserverd</p>
      <p className='icons'>
        <AiFillInstagram />
        <FaXTwitter  />
      </p>
    </div>
  )
}

export default Footer