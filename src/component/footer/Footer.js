import { Facebook, Instagram, Twitter } from '@mui/icons-material'
import React from 'react'
import "./footer.css"
const Footer = () => {
  return (
    <div className='footer container-fluid border'>
        <div className='wrapper row col-12 d-flex mt-2 p-2'>

            <div className='logo col-lg-3 col-md-4 col-4'>
                <h1 className='logo1  text-center'>
                    Logo
                </h1>
                <div><p>1901 Thornridge Cir.<br/> Shiloh, Hawaii <br/>81063</p></div>
            </div>
            <div className="company col-lg-2 col-md-4 col-4">
                <h3>Company</h3>
                <p>About us</p>
                <p>Career</p>
                <p>team</p>
                <p>Contact</p>
            </div>
            <div className='product col-lg-2 col-md-4 col-4'>
                <h3>Product</h3>
                <p>service</p>
                <p>FreeLancer</p>
                <p>Features</p>
                <p>Development</p>
            </div>
            <div className='link col-lg-2 col-md-4 col-4'>
                <h3>Link</h3>
                <p>Privacy</p>
                <p>term & condition</p>
                <p>FAQ</p>

            </div>
            <div className='social col-lg-2 col-md-4 col-4'>
                <h3>Follow Us</h3>
                <Twitter />
                <Facebook />
                <Instagram />
            </div>

        </div>
      
    </div>
  )
}

export default Footer
