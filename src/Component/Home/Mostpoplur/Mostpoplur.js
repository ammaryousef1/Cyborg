import React from 'react'
import './Mostpoplur.css'
import img1 from '../../../assits/images/popular-01.jpg'
import img2 from '../../../assits/images/popular-02.jpg'
import img3 from '../../../assits/images/popular-03.jpg'
import img4 from '../../../assits/images/popular-04.jpg'
import Title from '../../Multiple/Title/Title'
import MostpoplurBox from '../MostpoplurBox/MostpoplurBox'
const Mostpoplur = () => {
  return (
    <div id='Mostpoplur' className='cyborg-mostpopular '>

        <Title ><h2 className="cyborg-mostpopular-title">Most Popular <span>Right Now</span> </h2></Title>

      <div className='cyborg-mostpopular-div'>
        <MostpoplurBox  img = {img1} title = "Fortnite" subtitle = "Warface" />
        <MostpoplurBox  img = {img2} title = "PubG" subtitle = "Battle S" />
        <MostpoplurBox  img = {img3} title = "Data2" subtitle = "Steam-X" />
        <MostpoplurBox  img = {img4} title = "CS-GO" subtitle = "Legendary" />
        <MostpoplurBox  img = {img4} title = "Mini Craft" subtitle = "Legedary" />
        <MostpoplurBox  img = {img3} title = "Eagles Fly" subtitle = "Matrix Games" />
        <MostpoplurBox  img = {img2} title = "Warface" subtitle = 'Max 3D' />
        <MostpoplurBox  img = {img1} title = "Warface" subtitle = 'Max 3D' />

      </div>

    </div>
  )
}

export default Mostpoplur