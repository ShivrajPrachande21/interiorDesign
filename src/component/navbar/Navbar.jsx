import React, { useEffect, useState } from 'react'
import './navbar.css'
import { Link } from 'react-scroll';
const Navbar = () => {
     const [color,setBgColor]=useState('#7a665e9d')

    

      


  return (
    <>
      <div className='navbar' style={{width:'100%',height:'10vh',background:`${color}`}}>
        <div className="logo"> <h2>Design Portfolio</h2></div>
        <div className="Links">
          <ul>
            <li><Link to='home' smooth={true} offset={0} duration={500}>Home</Link> </li>
            <li><Link to='about' smooth={true} offset={0} duration={500}>About me</Link></li>
            <li> <Link to='mywork' smooth={true} offset={0} duration={500}>My Work</Link></li>
            <li><Link to='contact' smooth={true} offset={0} duration={500}>Contact</Link></li>
          </ul>
        </div>
      </div>
    </>
  
  )
}

export default Navbar