import React, { useState } from 'react'
import Profileimg from '../../../assits/images/profile-header.jpg'
import { RiMenu3Line , RiCloseLine } from "react-icons/ri";
import './Navbar.css'
import logo from '../../../assits/images/logo.png'
import { NavLink } from 'react-router-dom';
let Menu = () => {

    return <>
    <NavLink className='navlink' to='/'>Home</NavLink>
    <NavLink className='navlink' to='/Browse'>Browse</NavLink>
    <NavLink className='navlink' to='/Details'>Details</NavLink>
    <NavLink className='navlink' to='/Stream'>Strems</NavLink> 
    <NavLink className='navlink' to='/Profile'><div className='profile-img'>Profile <img src={Profileimg} alt='' /></div></NavLink> 
    </>
}
const Navbar = () => {
    let [toggleMenu , settoggleMenu] = useState(false)
  return (
    <div className='Navbar'>
        
        <div className='Navbar-img'>
           <a href='/#'> <img src={logo} alt=""  /></a>
        </div>

        <div className='Navbar-menu'>
            <Menu />
        </div>
        <div className='Navbar-dropdown'>
            { toggleMenu 
            ? <RiCloseLine  color='#ffff' size={27} onClick={() => settoggleMenu(false)} />
            : <RiMenu3Line  color='#ffff' size={27} onClick={() => settoggleMenu(true)} />
            } { toggleMenu && (
                <div className='Navbar-dropdown-content'>
                    < Menu  />
                </div>
            )
            }
        </div>
    </div>
  )
}

export default Navbar