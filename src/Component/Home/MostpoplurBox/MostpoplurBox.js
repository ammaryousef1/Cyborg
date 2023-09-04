import React from 'react'
import './MostpoplurBox.css'
import { FaDownload , FaStar } from "react-icons/fa";
const MostpoplurBox = (props) => {
   
  return (
    <div className='cyborg-Mostpoplur-box'>
        <div className='cyborg-Mostpoplur-box-imge'>
            <img src={props.img} alt="" />
        </div>
        <div className='cyborg-Mostpoplur-box-content'>
        <div className='cyborg-Mostpoplur-box-content-game'>
                <h4>{props.title}</h4>
                <p> <span><FaStar /></span>4.8</p>
            </div>
            <div className='cyborg-Mostpoplur-box-content-legend'>
                <p>{props.subtitle}</p>
                <p><a href='https://store.epicgames.com/en-US/p/fortnite' target='__block'> <span><FaDownload /> </span>2.3M</a></p>
            </div>
        </div>
    </div>
  )
}

export default MostpoplurBox