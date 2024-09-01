import React, { useState } from 'react'
import './contact.css'
import contactimg from '../../../assets/bhagya4.png'



// import mesgicon from '../../../assets/mesg-icon.png';

// import mailicon from '../../../assets/mail-icon.png'

// import loctionicon from '../../../assets/location-icon.png';
// import phone from '../../../assets/phone-icon.png';
// import whitearrow from '../../../assets/white-arrow.png';

const Contact = () => {
  const backgroundStyle4 = {
    backgroundImage: `url(${contactimg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
   // Add blur effect
  };

  const [result, setResult] =useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ba15a23f-101a-4fe5-9f09-408ae213339c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
          
          

          <div className='contact'  >
          <div style={{
    backgroundImage: `url(${contactimg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    filter: 'blur(4px)',
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
  }}></div>
               <div className="contact-col">
                      {/* <h3>Send us a Message <img src={mesgicon} alt="" /></h3> */}
                      <p style={{fontSize:'1.8rem',fontWeight:'600',letterSpacing:'1.3px'}}>
                        Contact Me
                      </p>

                        <ul>
                          <li>prachandebhagyashri@21 </li>
                         
                          <li>323 , Keshavnagar Mundhwa Pune - 411036 </li>
                        </ul>
                        {/* <img src={mailicon} alt="" />
                        <img src={phone} alt="" />
                        <img src={loctionicon} alt="" /> */}
               </div>
               <div className="contact-col">
                    <form onSubmit={onSubmit}>
                        <label htmlFor="">Your name</label>
                        <input type="text"  name='name' placeholder='Enter your name' required/>
                        <label htmlFor="">Phone Number</label>
                        <input type="tel"  name='phone' placeholder='Enter your mobile number'/>
                        <label htmlFor="">Write your message</label>
                        <textarea name="message"  rows="6" placeholder='Enter your messaeg' required></textarea>
                        <button type='submit' className='btn dark-btn' style={{padding:'10px 30px',fontSize:'1.3rem',borderRadius:'8px'}} >send</button>
                        {/* <img src={whitearrow} alt="" /> */}
                    </form>
                    <span>
                          {result}
                    </span>
               </div>
        </div>

       
       </>
  )
}

export default Contact