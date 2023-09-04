import React from 'react'
import Hero from './Hero/Hero'
import GamingLibrary from './GamingLibrary/GamingLibrary'
import Mostpoplur from './Mostpoplur/Mostpoplur'
const Home = () => {
  return (
    <div>
        <Hero />
        <Mostpoplur />
        <GamingLibrary />
    </div>
  )
}

export default Home