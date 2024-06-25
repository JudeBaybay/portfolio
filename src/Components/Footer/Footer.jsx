import React from 'react'
import './Footer.css'
import logo from '../../assets/logo_web.png'

const Footer = () => {
  return (
    <div className='footer'>
      <hr />
        <div className="footerTop">
            <div className="footerTopLeft">
                <img src={logo} alt="" />
                <p>@ 2024 Jude Baybay</p>
            </div>
            <div className="footerTopRight">
                <div className="footerSubscribe">Website created using : ReactJs, Html, and Css</div>
            </div>
        </div>
    </div>
  )
}

export default Footer