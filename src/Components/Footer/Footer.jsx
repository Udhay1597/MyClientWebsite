import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer'>
        <h2>Get In Touch for Quotation and Enquiry</h2>
        <div className="footer-content">
            <div className="footer-content-left">
                
                  <img src={assets.logo} alt="" id='footer-logo'/>
                  <p>Shree Gajanan Traders: Where quality meets affordability, every purchase tells a story!</p>
                  <div className="footer-social-icon">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                  </div>
            </div>
            <div className="footer-content-centre">
                
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Enquiry for quotation</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                
                <ul>
                    <li>Phone no: +91 &nbsp;9064043651</li>
                    <li>Address : Gajanan Traders (Paints), near State Bank of India, Udaynagar (Undri), Tal: Chikhali, Dist: Buldhana</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">
            Copyright 2024@Sarvatra Tech Solutions,Pune -All Rights Reserved. 
        </p>
    </div>
  )
}

export default Footer
