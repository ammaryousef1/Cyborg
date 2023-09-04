import React from 'react'
import './PopularLiveStream.css'
import Title from '../../Multiple/Title/Title'
import MostPopularSteamCard from '../../Browse/MostPopularStream/MostPopularStreamCard/MostPopularStreamCard'

import Stream5 from '../../../assits/images/stream-05.jpg'
import Stream6 from '../../../assits/images/stream-06.jpg'
import Stream7 from '../../../assits/images/stream-07.jpg'
import Stream8 from '../../../assits/images/stream-08.jpg'
import person1 from '../../../assits/images/profile.jpg'
import person2 from '../../../assits/images/avatar-02.jpg'
import person3 from '../../../assits/images/avatar-03.jpg'
import person4 from '../../../assits/images/profile-header.jpg'

const PopularLiveStream = () => {
  return (
    <div className='PopularLiveStream'>
        <Title><h2>Most Popular <span>Live Stream</span></h2></Title>

        <div className='PopularLiveStream-cards'>
            <div className='PopularLiveStream-card'>
               <MostPopularSteamCard img1={Stream8} img2={person1}  title='KenganC' subtitle="Just Talking With Fans" />
            </div>
            <div className='PopularLiveStream-card'>
               <MostPopularSteamCard img1={Stream5} img2={person2}  title='KenganC' subtitle="Just Talking With Fans" />
            </div>
            <div className='PopularLiveStream-card'>
                <MostPopularSteamCard  img1={Stream6} img2={person3}  title='KenganC' subtitle="Just Talking With Fans" />
            </div>
            <div className='PopularLiveStream-card'>
               <MostPopularSteamCard img1={Stream7} img2={person4}  title='KenganC' subtitle="Just Talking With Fans" />
            </div>
            <div className='PopularLiveStream-card'>
                <MostPopularSteamCard img1={Stream5} img2={person2}  title='KenganC' subtitle="Just Talking With Fans" />
            </div>
            <div className='PopularLiveStream-card'>
                <MostPopularSteamCard img1={Stream6} img2={person1}  title='KenganC' subtitle="Just Talking With Fans" />
             </div>
             <div className='PopularLiveStream-card'>
                <MostPopularSteamCard img1={Stream7} img2={person3}  title='KenganC' subtitle="Just Talking With Fans" />
             </div>
             <div className='PopularLiveStream-card'>
                <MostPopularSteamCard img1={Stream8} img2={person1}  title='KenganC' subtitle="Just Talking With Fans" />
             </div>
        </div>
    </div>
  )
}

export default PopularLiveStream