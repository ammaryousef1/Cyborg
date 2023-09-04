import React from 'react'
import './Stream.css'

import Title from '../Multiple/Title/Title'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import MostpoplurBox from '../Home/MostpoplurBox/MostpoplurBox'
import clip1 from '../../assits/images/clip-01.jpg'
import clip2 from '../../assits/images/clip-02.jpg'
import clip3 from '../../assits/images/clip-03.jpg'
import clip4 from '../../assits/images/clip-04.jpg'
import clip5 from '../../assits/images/popular-02.jpg'
import clip6 from '../../assits/images/popular-03.jpg'
import StreamersCard from './StreamersCard/StreamersCard'
import PopularLiveStream from './Most PopularLiveStream/PopularLiveStream'
const Stream = () => {
  return (
     <div className='Streams'>
      <div className='s-all-streams'>
        <div className='live-stream-new'>
           <Title><h2>Live <span>Streams</span></h2></Title>
           
           <div className='live-stream'>
              <div className='live-stream-card'><MostpoplurBox img={clip1} title="CS-GO"  subtitle="249K Downloads" /></div>
              <div className='live-stream-card'><MostpoplurBox img={clip2} title="CS-GO"  subtitle="249K Downloads" /></div>
              <div className='live-stream-card'><MostpoplurBox img={clip3} title="CS-GO"  subtitle="249K Downloads" /></div>
              <div className='live-stream-card'><MostpoplurBox img={clip4} title="CS-GO"  subtitle="249K Downloads" /></div>
              <div className='live-stream-card'><MostpoplurBox img={clip5} title="CS-GO"  subtitle="249K Downloads" /></div>
              <div className='live-stream-card'><MostpoplurBox img={clip6} title="CS-GO"  subtitle="249K Downloads" /></div>
          </div>
        </div>

        <div className='top-streamers'>
            <Title><h2>Top <span>Streamers</span></h2></Title>
            <div className='all-streamerscard'>
            <StreamersCard img={clip1} title="LahutaM" num='01'  />
            <StreamersCard img={clip2} title="Kengan"  num='02' />
            <StreamersCard img={clip3} title="Areluwa" num='03' />
            <StreamersCard img={clip4} title="Omeg" num='04'  />
            <StreamersCard img={clip5} title="GangTeam" num='05' /> 
            </div>
     </div>

        </div>
        <div>
          <PopularLiveStream />
        </div>
      </div>
  )
  
}

export default Stream