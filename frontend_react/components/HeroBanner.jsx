import Link from 'next/link'
import React from 'react'

const HeroBanner = () => {
  return (
    <div className='hero-banner-container'>
      <div>
        <p className='pastries'>Pastry</p>
        <h3>mid text</h3>
        <img src='' alt='pastries' className='hero-banner-image' />
        <div>
          <Link href='/product/ID'>
            <button type='button'>Button Text</button>
          </Link>
          <div className='desc'>
            <h5>Description</h5>
            <p>Description</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner