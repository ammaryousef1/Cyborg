import React from 'react'
import './LiveStream.css'
import Title from '../../Multiple/Title/Title'
import CardLiveStream from './CardLiveStream/CardLiveStream'
import service1 from '../../../assits/images/service-01.jpg'
import service2 from '../../../assits/images/service-02.jpg'
import service3 from '../../../assits/images/service-03.jpg'
const LiveStream = () => {
  return (
    <div className='LiveStream'>
        <div className='LiveStream-titles'>
                <Title><h2>How To Start Your <span>Live Stream</span></h2></Title>
            </div>
            <div className='LiveStream-Cards'>
            <CardLiveStream img={service1} title="Go To Your Profile" p="Cyborg Gaming is free HTML CSS website template provided by TemplateMo. This is Bootstrap v5.2.0 layout." />
            <CardLiveStream img={service2} title="Live Stream Button" p="If you wish to support us, you can make a small contribution via PayPal to info [at] templatemo.com" />
            <CardLiveStream img={service3} title="You Are Live" p="You are not allowed to redistribute this template's downloadable ZIP file on any other template collection website." />
            </div>
    </div>
  )
}

export default LiveStream