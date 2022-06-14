import React from 'react';
import aboutimg from '../../asseats/5.png'
import  './About.css'
const About = () => {
    return (
<div class="hero min-h-screen bg-base-200  about-hero " id='about'>
  <div class="hero-content flex-col lg:flex-row-reverse">
      <div className="about-box ">

          <h1 className='about-text'>ABOUT </h1>
          <h1 className='about-text'>US<span className='span'>!</span></h1>

      </div>
   
    <div className='about-detialss'>
     
      <p class="py-6 ml-2 text-xl font-bold">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. 
      In deleniti eaque aut repudiandae et a id nisi.
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto autem placeat quibusdam, expedita voluptas eos adipisci officiis excepturi animi minima earum non explicabo tempore ab iusto nisi eaque a nam!
      </p>
      
    </div>
  </div>
</div>
  );
};

export default About;