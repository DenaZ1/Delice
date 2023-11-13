import React, { useState, useEffect}  from 'react';
import { Link, BrowserRouter} from "react-router-dom";

import { urlFor, client } from '../../client';
import './Product.scss';

const Product = ({ product: { image, name,
slug, price }}) => {
  return (
    <div>
      <BrowserRouter>
   
        <Link to={`/product/${slug.current}`} style={{ textDecoration: 'none' }}>
          <div className='product-card'>
            <img 
              src={ urlFor(image && image[0])}
              alt={name} 
              width={250}
              height={250}
              className='product-image'
            />
            <p className='product-name'>{name}</p>
            <p className='product-price'>${price}</p>
          </div>
        </Link>
       
      </BrowserRouter>
    </div>
  )
}

export default Product