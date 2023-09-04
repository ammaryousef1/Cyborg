import React from 'react'
import './MostPopularStreamCard.css'
import { AiFillCheckCircle } from "react-icons/ai";
const MostPopularStreamCard = ({ img1 , img2 , title , subtitle}) => {
  return (
    <div className='MostPopularStreamCard'>
      <div  className='MostPopularStreamCard-img'>
        <img src={img1} alt='' />
      </div>

         <div className='MostPopularStreamCard-title'>
            <img src={img2} alt='' />
            <div>
                <span  style={{display : 'flex' , alignitems: 'center' , gap: '10px' , marginBottom: '10px' , color: 'var(--color-primary)' , fontSize: '18px'}}>
                    <AiFillCheckCircle style={{ background: 'white' , borderRadius: "50%"}} />
                    <h6 >{title}</h6>
                </span>
                <h6 style={{fontSize: '20px' , color: 'white' , width: '200px' , lineHeight: '1.5rem'}}>
                  {subtitle}
                </h6>
            </div>
        </div> 

    </div>
  )
}

export default MostPopularStreamCard