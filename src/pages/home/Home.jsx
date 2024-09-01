import React from 'react'
import './home.css'
import backgroundimg from '../../assets/background.jpg'

const Home = () => {

    const backgroundStyle = {
        backgroundImage: `linear-gradient(131deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.9159313383556548) 84%, rgba(255,255,255,0.5013655120251226) 100%), url(${backgroundimg})`,

        height: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      };
  return (
    <div className='home' style={backgroundStyle}>
        {/* <h1>Home</h1> */}
        <div className="portfolio">
            <h1 className='port1'>Port</h1>
            <h1 className='port2'>Fo</h1>
            <h1 className='port3'>Lio</h1>
        </div>
        <div className="Name">
            <p>Bhagyashri Prachande</p>
            <p>Interior Designer</p>
        </div>
    </div>
  )
}

export default Home