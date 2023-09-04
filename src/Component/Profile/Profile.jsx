import React from 'react'
import './Profile.css'
import Profileimg from '../../assits/images/profile.jpg'
import Title from '../Multiple/Title/Title'

import GamingLibrary from '../Home/GamingLibrary/GamingLibrary'
const Profile = () => {
  return (
    <div className='profile'>
       <div className='profile-data'>
       <div className='profile-data-img'>
          <img src={Profileimg} alt='' />
        </div>

        <div className='profile-data-box'>
          <button className='btn Hero-btn' style={{color: 'white' , width: '100px' }}>offline</button>
          <h3>Alan Smithee</h3>
          <p>You Haven't Gone Live yet. Go Live By Touching The Button Below.</p>
          <button className='btn'>Start Live Stream</button>
        </div>

        <div className='profile-data-in-data'>
          <span>
            <h5>Games Downloaded</h5>
            <span>3</span>
          </span>
          <div style={{background: 'var(--color-primary)' , padding: '1px' , margin: ' 0 20px ' }}></div>
          <span>
            <h5>Friends Online</h5>
            <span>16</span>
          </span>
          <div style={{background: 'var(--color-primary)' , padding: '1px' , margin: ' 0 20px ' }}></div>
          <span>
            <h5>Live Streams</h5>
            <span>none</span>
          </span>
          <div style={{background: 'var(--color-primary)' , padding: '1px' , margin: ' 0 20px ' }}></div>
          <span>
            <h5>Clips</h5>
            <span>29</span>
          </span>
        </div>
       
      </div>
      <div className='YourGamingLibrary'>
        <GamingLibrary />
      </div>
    </div>
  )
}

export default Profile