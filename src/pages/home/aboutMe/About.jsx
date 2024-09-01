import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './about.css'
import Resume from '../../../assets/Resume.jpg'
 const About = () => {
  
  return (
    <>
    <div className='about'>
        <p>About Me</p>
        <div className="resume">
        <img src={Resume} alt="" />
        </div>
       
    </div>
    </>
    
  )
}
export default About;
