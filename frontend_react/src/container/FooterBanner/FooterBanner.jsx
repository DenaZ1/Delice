import React, { useState, useEffect}  from 'react';
import { Link, BrowserRouter} from "react-router-dom";

import { urlFor, client } from '../../client';
import './FooterBanner.scss'; 

const FooterBanner = () => {

  const[footerBanner, setFooterBanner] = useState([]); 

  useEffect(() => {
    const query = '*[_type == "banner"]';

    client.fetch(query).then((data) => setFooterBanner(data))

  }, []);

  return (
    <div className='footer-banner-container'>
      { footerBanner.map((footerBanner) => ( 
        <div className='banner-desc'>
          <div className='left'>
            <p>{footerBanner.discount}</p>
            <h3>{footerBanner.largeText1}</h3>
            <h3>{footerBanner.largeText2}</h3>
            <p>{footerBanner.saleTime}</p>
          </div>
          <div className='right'>
            <p>{footerBanner.smallText}</p>
            <h3>{footerBanner.midText}</h3>
            <p>{footerBanner.desc}</p>

            <BrowserRouter>
              <Link to={`/product/${footerBanner.product}`}>
                <button type='button'>{footerBanner.buttonText}</button>
              </Link>
            </BrowserRouter>
          </div>

          <img 
            src={ urlFor(footerBanner.image)} 
            alt={footerBanner.product} 
            className='footer-banner-image' 
          />
        </div>
      ))}
    </div>
  )
}

export default FooterBanner