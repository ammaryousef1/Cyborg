import React from 'react'
import { AiFillCheckCircle } from 'react-icons/ai'
import './StreamersCard.css'
import { toast } from 'react-toastify'

const StreamersCard = ({ img , title  , num}) => {
  const notify = () => toast.success('Product add successfully')
  return (
    <>
    <div className='StreamersCard'> 

        <div style={{ display: 'flex' , alignItems: 'center'  , gap: '10px'  , marginBottom:'10px' }}>  
            <span>{num}</span> 
            <img src={img} alt=""   />
        </div>

        <div className='fd'>
             <AiFillCheckCircle style={{ background: 'white' , color: 'var(--color-primary)' ,  borderRadius: "50%"}} />
            <h5 style={{ color: 'var(--color-primary)'}}>{title}</h5>
        </div>

        <button className='btn' onClick={notify}>Follow</button>
        
    </div>
    <div className='line-height' style={{background: 'var(--color-dark)'}} ></div>
   </>
  )
}

export default StreamersCard