import React from 'react'
import './CardLiveStream.css'
import service from '../../../../assits/images/service-01.jpg'
const CardLiveStream = ({ img , title , p }) => {
  return (
    <div className='CardLiveStream'>
        <img src={img} alt='' />
        <h3>{title}</h3>
        <p>{p}</p>
    </div>
  )
}

export default CardLiveStream