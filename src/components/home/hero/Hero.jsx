import React from "react"
import Heading from "../../common/Heading"
import "./hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <Heading title='Discover The Ideal Property Here ' subtitle='We are committed to building strong, sustainable, proactive and long term relationships with both corporate and private clients.' />

          <form className='flex'>
            <div className='box'>
              <input type='text' placeholder='Location' />
            </div>
            <div className='box'>
              <input type='text' placeholder='Property Type' />
            </div>
            <div className='box'>
              <input type='text' placeholder='Price Range' />
            </div>
            <button className='btn1'>
              <i className='fa fa-search'></i>
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Hero
