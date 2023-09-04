import React from 'react'
import './GamingLibrary.css'
import img2 from '../../../assits/images/popular-01.jpg'
import img4 from '../../../assits/images/popular-02.jpg'
import img3 from '../../../assits/images/popular-03.jpg'
import CardGamingLibrary from '../CardGamingLibrary/CardGamingLibrary';
import Title from '../../Multiple/Title/Title';

const GamingLibrary = () => {
  return (
    <div id='Library' className='cyborg-GamingLibrary '>
    <div className='cyborg-GamingLibrary-title'>
        <Title><h2>Your Gaming <span>Library</span></h2></Title>
    </div>
      <div className='cyborg-GamingLibrary-box'>
        <CardGamingLibrary img={img2}  title="Data 2"  dateAdd="Date Add" date="22/08/2034" hours="634 H 22 Mins"  />
        <div className='line-height' style={{ background: 'var(--color-dark)'}}></div>
        <CardGamingLibrary img={img4}  title="Fortnite "  dateAdd="Date Add" date="29/01/2004" hours="594 H 12 Mins" />
        <div className='line-height' style={{ background: 'var(--color-dark)'}}></div>
        <CardGamingLibrary img={img3}  title="CS-GO"  dateAdd="Date Add" date="13/12/1994" hours="744 H 92 Mins"  />
      </div>
    </div>
  )
}

export default GamingLibrary