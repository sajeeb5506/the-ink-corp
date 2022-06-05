import React from 'react';
import './Contact.css'
import phone from '../../asseats/call.png'
import email from '../../asseats/email.png'
import location from '../../asseats/map.png'

const Contact = () => {
    return (
<div class="hero min-h-screen bg-base-200  about-hero ">
  <div class="hero-content flex-col lg:flex-row-reverse  ">
     
      <div className="contact-box ">

          <h1 className='about-text'>CONTACT </h1>
          <h1 className='about-text'>US<span className='span'>!</span></h1>

      </div>
   
    <div className='contact-detialss'>
    <div className='flex items-center'><img className='icone' src={phone} alt="" />    <samp  className='icone-text' > +0375893068                </samp></div>
    <div className='flex items-center'><img className='icone' src={email} alt="" />    <samp  className='icone-text'>   shjbdhzb.dfnji@njxd      </samp> </div>
    <div className='flex items-center'><img className='icone' src={location} alt="" /> <samp  className='icone-text'> Cjriui isegri /ornil grnosi</samp> </div>
  
   
    </div>
  </div>

</div>
    );
};


export default Contact;