import React from "react"
import { footer } from "../../data/Data"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <section className='footerContact'>
        <div className='container'>
          <div className='send flex'>
            <div className='text'>
              <h1>Do You Have Questions ?</h1>
              <p>We'll help you to grow your career and growth.</p>
            </div>
            <button className='btn5'>Contact Us Today</button>
          </div>
        </div>
      </section>

      <footer>


        <div className='container'>

        <div className='box' id='box'>

          <div className='logo'>
            <img src="https://i.ibb.co/TtDBg0b/acmen1.jpg"  alt='Acmen Company Logo' className="acmen-company-logo"/>
            <br/>
            RC: 1966277
            <br/>
            <p className="acmen-company-font-small acmen-company-footer-listings acmen-company-footer-listings-first">
              Our Location
              Head Office: ABC Lagos, Nigeria.
              <br/>
              <br/>
              Mainland Cooperate Office: ABC Lagos, Nigeria.
              <br/>
              <br/>
              Phone: +234 806 475 4537
              <br/>
              <br/>
              Email: info@acmenhomes.ng
            </p>

            <br/>
            <br/>
            
          </div>

          <br/>
          <br/>

        </div>

          {footer.map((val) => (
            <div className='box acmen-company-footer-listings-box'>
              <h3 className="footer-title-value">{val.title}</h3>
              <ul className="acmen-company-footer-listings">
                {val.text.map((items) => (
                  <li className="acmen-company-font-small"> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}

        </div>


        <div className="subscribe-container">


          <h2>Do You Need Help With Anything?</h2>
          <p className="subscibenow-animate">Subscribe Now</p>
          <p>Receive updates, hot deals, Real Estate Investment, sent straignt in your inbox daily</p>

          <div className='input flex'>
            <input type='text' placeholder='Email Address' />
            <button className="subscribebutton-desktop">Subscribe</button>
            <button className="subscribebutton-mobile"><i className='fa-solid fa-magnifying-glass'></i></button>
            
          </div>

        </div>

      </footer>


      <div className='legal'>
        <span>© 2024 Acmen. Residence and Real Estate Company.</span>
      </div>
    </>
  )
}

export default Footer
