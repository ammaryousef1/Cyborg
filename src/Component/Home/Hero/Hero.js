import React from 'react'
import './Hero.css'
import { Link } from 'react-router-dom'
// import Button from '../Button/Button'
let Hero = () => {
  return (
    <div className='cyborg-hero'>
    <div className='cyborg-hero-imge' >
      <div className='cyborg-hero-content'>
      <h5>Welcome To Cyborg</h5>
      <p><span>BROWSE</span> OUR POPULAR GAMES HERE</p>
       <button className='btn Hero-btn'><Link to='/Browse'>Browse Now</Link></button> 
      </div>
    </div>
    </div>
  )
}

export default Hero
