import React from 'react'
import './Title.css'
const Title = (props) => {
  return (
    <div className='cyborg-main-title'>
              {props.children}
    </div>
  )
}

export default Title