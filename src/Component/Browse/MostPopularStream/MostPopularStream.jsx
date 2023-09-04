import React from 'react'
import './MostPopularStream.css'
import Title from '../../Multiple/Title/Title'
import MostPopularStreamCard from './MostPopularStreamCard/MostPopularStreamCard'
import stream1 from '../../../assits/images/stream-01.jpg'
import stream2 from '../../../assits/images/stream-02.jpg'
import stream3 from '../../../assits/images/stream-03.jpg'
import stream4 from '../../../assits/images/stream-04.jpg'
import person from '../../../assits/images/avatar-02.jpg'
import person1 from '../../../assits/images/avatar-03.jpg'
const MostPopularStream = () => {
  return (
   <>
    <div className='MostPopularStream'>
        <div className='MostPopularStream-Title'>
            <Title><h2>Most Popular <span>Live Stream</span></h2></Title>
            <div className='MostPopularStream-card'>
                <MostPopularStreamCard img1={stream1} img2={person}  title='KenganC' subtitle="Just Talking With Fans" />
                <MostPopularStreamCard img1={stream2} img2={person1}  title='LunaMa' subtitle="CS-GO 36 Hours Live Stream" />
                <MostPopularStreamCard img1={stream3} img2={person}  title='Areluwa' subtitle="Maybe Nathej Allnight Chillin'" />
                <MostPopularStreamCard img1={stream4} img2={person1}  title='GangTm' subtitle="Live Streaming Till Morning" />
            </div>
           
        </div>
    </div>
     <button className='btn Hero-btn' style={{width: '200px' , display: 'block' , margin: 'auto' , position: 'relative' , bottom: '80px' }}><a href=''>Discover all streams</a></button> 
  </>
  )
}

export default MostPopularStream