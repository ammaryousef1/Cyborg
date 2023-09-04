import React from 'react'
import './NameGame.css'
import { FaDownload, FaStar } from 'react-icons/fa'
const NameGame = ({title , subtitle }) => {
  return (
    <div className='name-games'>
    <div className='title-games'>
        <h6>{title}</h6>
        <span>{subtitle}</span>
    </div>
    <div className='icon-games'>
        <span><FaStar style={{color: 'yellow' }} /><span>4.8</span></span>
        <span><FaDownload style={{color: 'var(--color-primary)' , padding: '0 5px ' }} /><span>2.3M</span></span>
    </div>
</div>

  )
}

export default NameGame