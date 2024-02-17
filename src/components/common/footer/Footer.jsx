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
          <div className='box'>
            <div className='logo'>
              <img src="https://i.ibb.co/TtDBg0b/acmen1.jpg"  alt='Acmen Company Logo' className="acmen-company-logo"/>
              
              <p className="acmen-company-font-small">
                Our Location
                Head Office: ABC Lagos, Nigeria.
                <br/>
                <br/>
                Mainland Cooperate Office: ABC Lagos, Nigeria.
                <br/>
                <br/>
                RC: 1966277
              </p>

              <br/>
              <br/>
              
              <h2>Do You Need Help With Anything?</h2>
              <p>Receive updates, hot deals, tutorials, discounts sent straignt in your inbox every month</p>

              <div className='input flex'>
                <input type='text' placeholder='Email Address' />
                <button className="subscribebutton-desktop">Subscribe</button>
                <button className="subscribebutton-mobile"><i className='fa-solid fa-magnifying-glass'></i></button>
                
              </div>
            </div>
          </div>

          {footer.map((val) => (
            <div className='box'>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li className="acmen-company-font-small"> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className='legal'>
        <span>© 2024 Acmen. Designd By wayden.</span>
      </div>
    </>
  )
}

export default Footer
