import React from 'react'

export default function Header(props) {
  return (
    <div 
        className={`w-full flex justify-between items-center fixed h-16 bg-[]`}>
        <div className='w-[13%] md:flex justify-around items-center hidden'>
        <img 
                className='w-6'
                src = "https://static.wixstatic.com/media/11062b_ca1d837ce7194421b781ee7384061a8e~mv2.png/v1/fill/w_52,h_52,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_ca1d837ce7194421b781ee7384061a8e~mv2.png" 
                alt = "instagram" 
            />
            <img 
                className='w-6'
                src = "https://static.wixstatic.com/media/11062b_30de4e7217e64dfdadc3ea03beea7b94~mv2.png/v1/fill/w_52,h_52,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_30de4e7217e64dfdadc3ea03beea7b94~mv2.png" 
                alt = "youtube" 
            />
            <img 
                className='w-6'
                src = "https://static.wixstatic.com/media/11062b_362ef89dec51403eb0ee59a21bde967c~mv2.png/v1/fill/w_52,h_52,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_362ef89dec51403eb0ee59a21bde967c~mv2.png" 
                alt = "facebook" 
            />
            <img 
                className='w-6'
                src = "https://static.wixstatic.com/media/11062b_72c275822d4344358ee379f14e7e115f~mv2.png/v1/fill/w_52,h_52,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_72c275822d4344358ee379f14e7e115f~mv2.png" 
                alt = "linkdin" 
            />
        </div>
        <img 
            className='w-16 ml-5 md:ml-0'
            src = "https://static.wixstatic.com/media/3513c2_627e50e52f774438bff8ddf2b891f051~mv2.png/v1/fill/w_120,h_94,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3513c2_627e50e52f774438bff8ddf2b891f051~mv2.png" 
            alt = "logo" 
        />
        <div className='md:w-[13%] mr-5 md:mr-0'>
            <h1>Menu</h1>

        </div>
    </div>
  )
}
