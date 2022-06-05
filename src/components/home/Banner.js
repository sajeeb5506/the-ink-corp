import React from 'react';
import banner from '../../asseats/banner.png'
const Banner = () => {
    return (
      <div class="hero min-h-screen "  style={{ backgroundImage: `url(${banner})` }}>

       <h1 className='text-4xl lg:text-7xl  text-gray-400 font-bold '> "Regain YOUR Strength"</h1>

      
    </div>
    );
};

export default Banner;  