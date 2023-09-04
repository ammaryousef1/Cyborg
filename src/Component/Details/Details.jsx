import React from 'react'
import { MdNotStarted } from "react-icons/md";
import featureleft from '../../assits/images/feature-left.jpg'
import featureRight from '../../assits/images/feature-right.jpg'
import { BsController } from "react-icons/bs";
import { IoLogoGameControllerA } from "react-icons/io";
import games1 from '../../assits/images/details-01.jpg'
import games2 from '../../assits/images/details-02.jpg'
import games3 from '../../assits/images/details-01.jpg'
import './Details.css'
import { FaDownload, FaStar } from 'react-icons/fa';
import RelatedGames from './RelatedGames/RelatedGames';
import NameGame from './NameGame/NameGame';
const Details = () => {
  return (
    <div className='details'>
        <div className='imgs'>
            <img src={featureleft} alt="" />
            <div className='details-video'>
                <img src={featureRight} alt='' />
            </div>
        </div>

        <h1>FORTNITE DETAILS</h1>

        <div className='wraper'>
            <div className='details-games'>
             <NameGame title='Fortnite' subtitle="Sandbox" />
                <div className='games-icons'>
                   <span><FaStar style={{color: 'yellow' }} /><span>4.8</span></span>
                    <span><FaDownload style={{color: 'var(--color-primary)' , padding: '0 5px ' }} /><span>2.3M</span></span>
                    <span><BsController /><span>36GB</span></span>
                    <span><IoLogoGameControllerA /><span>Action</span></span>
                </div>
            </div>

            <div className='view-games'>
                    <img src={games1} alt='' />
                    <img src={games2} alt='' />
                    <img src={games3} alt='' />
            </div>

            <p style={{ padding: '50px 0'}}>
                  Cyborg Gaming is free HTML CSS website template provided by TemplateMo. This is Bootstrap v5.2.0 layout. You can make a small contribution via PayPal to info [at] templatemo.com and thank you for supporting. If you want to get the PSD source files, please contact us. Lorem ipsum dolor sit consectetur es dispic dipiscingei elit, sed doers eiusmod lisum hored tempor.
            </p>

            <button className='btn'  ><a href='https://store.epicgames.com/en-US/p/fortnite' target='__block'>Download Fortnite Now!</a></button>
        </div>

        <div>
            <RelatedGames />
        </div>
    </div>
  )
}

export default Details