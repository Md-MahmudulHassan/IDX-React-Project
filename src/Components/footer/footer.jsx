import React from 'react'
import './footer.css'
import fotter_logo from '../../assets/logo_big.png'
import insta_icom from '../../assets/instagram_icon.png'
import pintester from '../../assets/pintester_icon.png'
import whatsapp from '../../assets/whatsapp_icon.png'

export const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={fotter_logo}/>
            <p>Shop_name</p>
        </div>
        <div className="footer_links">
            <ul>
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contacts</li>
            </ul>
        </div>
        <div className="footer-social-icon">
            <div className="icon-container">
                <img src={insta_icom}/>
            </div>
            <div className="icon-container">
                <img src={pintester}/>
            </div>
            <div className="icon-container">
                <img src={whatsapp}/>
            </div>
            <div className="footer-copyright">
                <hr/>
                <p>© 2023 - All right reserved</p>
            </div>
        </div>


    </div>
  )
}
