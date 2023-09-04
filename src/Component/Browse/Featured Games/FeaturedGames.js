import React from 'react'
import Title from '../../Multiple/Title/Title'
import './FeaturedGames.css'
import DownloadedCard from './DownloadedCard/DownloadedCard';
import DownloadedCard1 from '../../../assits/images/clip-04.jpg'
import DownloadedCard2 from '../../../assits/images/clip-03.jpg'
import DownloadedCard3 from '../../../assits/images/popular-01.jpg'
import DownloadedCard4 from '../../../assits/images/popular-02.jpg'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import MostpoplurBox from '../../Home/MostpoplurBox/MostpoplurBox'
import clip1 from '../../../assits/images/clip-01.jpg'
import clip2 from '../../../assits/images/clip-02.jpg'
import clip3 from '../../../assits/images/clip-03.jpg'
import clip4 from '../../../assits/images/clip-04.jpg'
const FeaturedGames = ({ title , subtitle}) => {
  
  return (
    <div className='section'>
   <div className='FeaturedGames'>
    <div className='Games-titles'>
        <Title><h2>Featured <span>Games</span></h2></Title>

    </div>
    <div className='Games'>
       <div className='gamesCard'><MostpoplurBox img={clip1} title="CS-GO"  subtitle="249K Downloads" /></div>
       <div className='gamesCard'><MostpoplurBox img={clip2} title="CS-GO"  subtitle="249K Downloads" /></div>
       <div className='gamesCard'><MostpoplurBox img={clip3} title="CS-GO"  subtitle="249K Downloads" /></div>
       <div className='gamesCard'><MostpoplurBox img={clip4} title="CS-GO"  subtitle="249K Downloads" /></div>
       <div className='gamesCard'><MostpoplurBox img={DownloadedCard1} title="CS-GO"  subtitle="249K Downloads" /></div>
       <div className='gamesCard'><MostpoplurBox img={DownloadedCard2} title="CS-GO"  subtitle="249K Downloads" /></div>
    </div>
  </div>
        <div className='Top-Downloaded'>
            <div className='title-Downloaded'>
          <Title><h2>Top <span>Downloaded</span></h2></Title>
          </div>

          <div className='Downloaded-card'>
          <DownloadedCard  img={DownloadedCard1} title="Fortnite" subtitle='Sandbox' /> 
          <DownloadedCard  img={DownloadedCard2} title="Fortnite" subtitle='Sandbox' />
          <DownloadedCard  img={DownloadedCard3} title="Fortnite" subtitle='Sandbox' />
          <DownloadedCard  img={DownloadedCard4} title="Fortnite" subtitle='Sandbox' />
          </div>

          <footer className='footer'>View All Games</footer> 
       </div>
    </div>
  )
}

export default FeaturedGames

