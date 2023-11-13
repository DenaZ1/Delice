import React, { useState, useEffect}  from 'react';
import { Link, BrowserRouter} from "react-router-dom";

import { urlFor, client } from '../../client';
import './HeroBanner.scss';

const HeroBanner = () => {
  const[heroBanner, setHeroBanner] = useState([]); 

    useEffect(() => {
      const query = '*[_type == "banner"]';
  
      client.fetch(query).then((data) => setHeroBanner(data))
  
    }, []);

  return (
    
    <div className='hero-banner-container'>
      <BrowserRouter>
        { heroBanner.map((banner) => (
        <div>
          <p className='pastries'>{banner.smallText}</p>
          <h3>{banner.midText}</h3>
          <h1>{banner.largeText1}</h1>
          <img src={ urlFor(banner.image)} alt={banner.product} className='hero-banner-image' />

          <div>
            <Link to={`/product/${banner.product}`}>
              <button type='button'>{banner.buttonText}</button>
            </Link>
            
            <div className='desc'>
              <h5>Description</h5>
              <p>{banner.desc}</p>
            </div>
          </div>
        </div>
      ))}
      </BrowserRouter>
    </div>

    
  )
}

export default HeroBanner