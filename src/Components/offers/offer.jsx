import React from 'react'
import exclusive_image from '../../assets/exclusive_image.png'
import './offer.css'

export const Offer = () => {
  return (
    <div className='offer'>
        <div className="offer-left">
            <h1>Excludive</h1>
            <h1>Offfers for you</h1>
            <p>Only On Best Sellers Products</p>
            <button>Cheak now</button>
        </div>
        <div className="offer-right">
            <img src={exclusive_image} alt="exclusive_image" />
        </div>

    </div>
  )
}
