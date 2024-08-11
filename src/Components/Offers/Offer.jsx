import React from 'react'
import './Offer.css'
import exclucive_image from '../Assets/exclusive_image.png' 
const Offer = () => {
  return (
    <div className='offers'>
        <div className="Offer-left">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p><h4>Only On Best Sellers Products</h4></p>
            <button>Check Now</button>
        </div>
        <div className="Offers-right">
            <img src={exclucive_image} alt="" />
        </div>
    </div>
  )
}

export default Offer