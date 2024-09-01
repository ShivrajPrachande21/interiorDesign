import React, { useState } from 'react'

import './mywork.css'
import card1 from '../../../assets/card1.jpg'
import card2 from '../../../assets/card2.jpg'
import card3 from '../../../assets/card3.jpg'
import card4 from '../../../assets/card4.jpg'
import card5 from '../../../assets/card5.jpg'


import { Link } from 'react-router-dom'


const Mywork = () => {
  const [showPdf, setShowPdf] = useState(false);
 // Replace with the path to your PDF
  const backgroundStyle = {
    backgroundImage: `linear-gradient(183deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3585083691679797) 84%, rgba(255,255,255,0.5013655120251226) 100%), url(${card1})`,

  
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  const backgroundStyle1 = {
    backgroundImage: `linear-gradient(183deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3585083691679797) 84%, rgba(255,255,255,0.5013655120251226) 100%), url(${card2})`,

  
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  const backgroundStyle2 = {
    backgroundImage: `linear-gradient(183deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3585083691679797) 84%, rgba(255,255,255,0.5013655120251226) 100%), url(${card3})`,

  
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const backgroundStyle3 = {
    backgroundImage: `linear-gradient(183deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3585083691679797) 84%, rgba(255,255,255,0.5013655120251226) 100%), url(${card4})`,

  
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const backgroundStyle4 = {
    backgroundImage: `linear-gradient(183deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3585083691679797) 84%, rgba(255,255,255,0.5013655120251226) 100%), url(${card5})`,

  
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  return (
    <div className='mywork'>
    <p> Content </p>
    <div className="top"></div>
    <div className="bottom"></div>
    <div className="card">
      <div className="Imgcard" style={backgroundStyle}>
        <a href='https://drive.google.com/file/d/1iWAu28bvHMflvWyzxQ_iVfTEab2PyWZQ/view?usp=drive_link ' target="_blank" rel="noopener noreferrer"><button>View PDF 1</button></a>
        <p>Internship Experience</p>
      </div>
      <div className="Imgcard" style={backgroundStyle1}>
        <a href='https://drive.google.com/file/d/1duEeiNXSOA28Q_idV_1t5k7oFJl7_RXn/view?usp=drive_link ' target="_blank" rel="noopener noreferrer"><button>View PDF 2</button></a>
        <p style={{fontSize:'1rem'}}>Architectural Drawings</p>
      </div>
      <div className="Imgcard" style={backgroundStyle2}>
        <a href='https://drive.google.com/file/d/14HGI5JKxDKMvImVXyPLFpv5RlvWNSNfQ/view?usp=drive_link ' target="_blank" rel="noopener noreferrer"><button>View PDF 3</button></a>
        <p style={{fontSize:'1rem'}}>Dissertation Drawings</p>
      </div>
      <div className="Imgcard" style={backgroundStyle3}>
        <a href='https://drive.google.com/file/d/1PhOXBfnM_924L3R85pvUVeT3_7VqJFXP/view?usp=drive_link ' target="_blank" rel="noopener noreferrer"><button>View PDF 4</button></a>
        <p style={{fontSize:'1rem'}}>Personal Projects</p>
      </div>
      <div className="Imgcard" style={backgroundStyle4}>
        <a href='https://drive.google.com/file/d/1GPfLPnm4S-8lqwmu0LWq5a3AfopRwcpf/view?usp=drive_link ' target="_blank" rel="noopener noreferrer"><button>View PDF 5</button></a>
        <p style={{fontSize:'1rem'}}>Academic Project</p>
      </div>
    </div>
  </div>
  )
}

export default Mywork