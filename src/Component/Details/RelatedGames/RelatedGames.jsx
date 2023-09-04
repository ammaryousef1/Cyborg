import React from 'react'
import './RelatedGames.css'
import Title from '../../Multiple/Title/Title'
import { FaDownload, FaStar } from 'react-icons/fa'
import moreGames from '../../../assits/images/feature-left.jpg'
import NameGame from '../NameGame/NameGame'
import games1 from '../../../assits/images/game-01.jpg'
import games2 from '../../../assits/images/game-02.jpg'
import games3 from '../../../assits/images/game-03.jpg'
const RelatedGames = () => {
  return (
    <div className='RelatedGames wraper'>
      <Title><h2><a>Other Related </a><span> Games</span></h2></Title>
    
     
     <div className='all-NameGame'>
           <div  className='one-NameGame'>
              <img src={games1} alt='' />
              <NameGame title='Dota2' subtitle='Steam-X' />
            </div>

            <div  className='one-NameGame'>
              <img src={games2} alt='' />
              <NameGame title='PubG' subtitle='Battle S' />
            </div>

            <div  className='one-NameGame'>
              <img src={games3} alt='' />
              <NameGame  title='Mini Craft' subtitle='Matrix Games' />
            </div>
     </div>
    
     
    
    </div>
   
  )
}

export default RelatedGames