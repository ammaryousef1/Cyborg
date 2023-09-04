import React from 'react'
import './CardGamingLibrary.css'

const CardGamingLibrary = (props) => {
  return (
    <div className='cyborg-CardGamingLibrary'>

    <div className='cyborg-CardGamingLibrary-imge'>
      <img src={props.img} alt='' />
    </div>

   <div className='cyborg-CardGamingLibrary-box'>

   <div className='cyborg-CardGamingLibrary-game'>
      <h6>{props.title}</h6> <span>Sandbox</span> 
    </div>

    <div className='cyborg-CardGamingLibrary-game'>
      <h6>{props.dateAdd}</h6> <span>{props.date}</span> 
    </div>

    <div className='cyborg-CardGamingLibrary-game'>
      <h6>Hours Played</h6> <span>{props.hours}</span> 
    </div>

    <div className='cyborg-CardGamingLibrary-game'>
      <h6>Currently</h6> <span>Downloaded</span> 
    </div>

   </div>
   
    <button className='btn Hero-btn' ><a  href='https://store.epicgames.com/en-US/p/fortnite' target='__black'>Download</a></button >

    
    </div>
  )
}

export default CardGamingLibrary