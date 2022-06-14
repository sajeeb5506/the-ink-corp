import React from 'react';
import './Banner.css';
import Typical from 'react-typical'

const Banner = () => {
    return (
    <div className="bannerimg-container " id='home'>
     <div className="bg-img flex justify-center items-center ">

      <div className="first-div">

      </div>
      <div className="">
      <p className='text-3xl lg:text-6xl  text-gray-400 font-bold banner-heding '>
        
         <Typical
        steps={[
        
        '"Regain YOUR Strength', 2000,

        'the INK corp"', 2000,
 

        ]}
        loop={Infinity}
       
      />
         
         </p>
      </div>
     
     </div>
      
      
    </div>
    );
};

export default Banner;  