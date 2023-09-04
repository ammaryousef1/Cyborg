import React from 'react'
import './DownloadedCard.css'
import img1 from '../../../../assits/images/avatar-02.jpg'
import { FaDownload, FaStar } from 'react-icons/fa'
const DownloadedCard = ({ img , subtitle , title}) => {
  return (
  <>
    <div className='DownloadedCard'>
        <img src={img} alt='' />
            <div className="download-title">
              <div>
                <h5>{title}</h5>
                <span className='subtitle'>{subtitle}</span>
                <div className='icons'>
                    <span><FaStar style={{color: 'yellow' }} /><span>4.8</span></span>
                    <span><FaDownload style={{color: 'var(--color-primary)' , padding: '0 5px ' }} /><span>2.3M</span></span>
                </div>
               
              </div>
              <button><a href="https://store.epicgames.com/en-US/p/fortnite" target='__block' style={{ color: 'white'}}><FaDownload /></a></button>
            </div>
          
    </div>
    <div className='line-height'></div>
    </>
  )
}

export default DownloadedCard