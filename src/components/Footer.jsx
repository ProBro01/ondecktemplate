import React from 'react'
import netfilx from "../Assets/Netflix Logo.svg"
import Shopify from "../Assets/Shopify Logo.svg"
import Spotify from "../Assets/Spotify Logo.svg"
import Walmart from "../Assets/Walmart Logo.svg" 
import "../stylesheets/footer.css"

export const Footer = () => {
  return (
    <div className='footer__container'>
      <div className='footer__quote'>
        Trusted by 3+ million people at companies like
      </div>
      <div className='footer__image-cont'>
        <img src={netfilx} className="footer__image"/>
        <img src={Shopify} className="footer__image"/>
        <img src={Spotify} className="footer__image"/>
        <img src={Walmart} className="footer__image"/>
      </div>
    </div>
  )
}
