import React from 'react'
import FeaturedGames from './Featured Games/FeaturedGames'
import LiveStream from './LiveStream/LiveStream'

import MostPopularStream from './MostPopularStream/MostPopularStream'
import { Link } from 'react-router-dom'

const Browse = () => {
  return (
    <div className='Browse' >
        <FeaturedGames />
        <LiveStream />
          <button className='btn Hero-btn' style={{display: 'block' ,margin: 'auto'}}>
            <Link to= '/Profile' >go to Profile</Link>
          </button>
          <MostPopularStream />
    </div>
  )
}

export default Browse
