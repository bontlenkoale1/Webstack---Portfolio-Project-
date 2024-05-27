import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png' 
import whatsapp_icon from '../Assets/whatsapp_icon.png'


const Footer = () => {
  return (
    <div className='footer'>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="footer-logo">
        <img src={footer_logo} alt=""/>
        <p>NOVASHOP</p>
      </div>
      <ul className="footer-links">
        <li>Terms & Conditions</li>
        <li>Privacy Policy</li>
        <li>Returns</li>
        <li>Shipping</li>
        <li>Help</li>
        <li>Gift Cards</li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icons-container">
            <img src={instagram_icon} alt=""/>
        </div>
        </div>
        <div className="footer-social-icons">
        <div className="footer-icons-container">
            <img src={pintester_icon} alt=""/>
        </div>
        </div>
        <div className="footer-social-icons">
        <div className="footer-icons-container">
            <img src={whatsapp_icon} alt=""/>
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>© 2024 Novashop. All rights reserved.</p>
        </div>
      </div>
  )
}
export default Footer
