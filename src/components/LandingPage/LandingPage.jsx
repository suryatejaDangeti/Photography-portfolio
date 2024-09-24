

import React from 'react'
import '../../App.css';
import Header from '../Header/Header';

export default function LandingPage() {
  return (
    <div>
      <img
        className="md:h-screen h-[90vh] object-cover" src='https://static.wixstatic.com/media/3513c2_1038f4e778fe43ba8ca1e7e4483d1d26~mv2.jpg/v1/fill/w_3100,h_1096,fp_0.51_0.50,q_90,enc_auto/3513c2_1038f4e778fe43ba8ca1e7e4483d1d26~mv2.jpg' 
        alt='' 
      />
      <div 
        className="image-fill bg-[url('https://static.wixstatic.com/media/3513c2_09b6270fa52946e8a8c8fe34f0dda0cd~mv2.jpg/v1/fill/w_1728,h_1209,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/3513c2_09b6270fa52946e8a8c8fe34f0dda0cd~mv2.jpg')] h-screen bg-fixed flex flex-col justify-center items-center"
      >
        <h1 className='text-white font-bold md:text-5xl text-2xl font-sans leading-[50px] text-center'>CRAFTING VISUAL NARRATIVES</h1>
        <h1 className='text-white md:text-xl text-base font-sans leading-[50px] text-center'>THAT IGNITE IMAGINATION AND EMOTIONS</h1>
        <button className='text-white text-sm font-sans border-2 w-40 h-10 text-center rounded-sm hover:bg-white hover:text-black hover:border-none font-bold'>DISCOVER</button>
        <div>
            <img className='md:w-[700px] w-[250px] mt-24' src='https://static.wixstatic.com/media/3513c2_bb53c9b5c2d747a5bbbd46ad1a096409~mv2.jpg/v1/fill/w_1724,h_1260,fp_0.55_0.50,q_90,usm_0.66_1.00_0.01,enc_auto/New-Profile-Picwide-web.jpg' alt='' />
        </div>
      </div>
    </div>
  )
}
