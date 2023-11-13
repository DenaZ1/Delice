import React, { useState, useEffect} from 'react'
import { urlFor, client } from '../../client';

import {Product} from '../index';
import './Home.scss';

const Home = () => {
    const[products, setProducts] = useState([]); 
    const[image, setImages] = useState([]); 

    useEffect(() => {

      const query = '*[_type == "product"]';
  
      client.fetch(query).then((data) => setProducts(data))

      const queryImg = `*[_type == 'product']{
        set_name,
       'setProducts' : set_images[0].asset->{_id,url}}`;

       client.fetch(queryImg).then((data) => setImages(data))
    }, []);

  return (
    <>
    <div className='products-heading'>
        <h2>Best Selling Pastries</h2>
        <p>Speakers of many variations</p>
    </div>
    
    <div className='products-container'>
    { products.map((product) => <Product key=
      {product._id} product={product} /> )}
     {/* <div>
        <img src={ urlFor(product.imgUrl)} alt={product.title} />
        <h2 className='bold-text' style={{marginTop: 20 }} >{product.name}</h2>
        <p className='p-text' style={{marginTop: 20 }} >{product.details}</p>
    </div>*/}
      
    </div>
  </>
  )
}

export default Home