import React, { useState } from 'react'
import './OurPartners.css'

export default function OurPartners() {

    const OurPartnersData = [
        {
            id: 1,
            PartnerName: "State Partner",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ea vitae ratione unde nemo. Nam ad doloribus ducimus, provident sunt magnam. Veritatis aperiam alias, accusantium sint hic eius voluptatem? Temporibus?",
            active: true
        },
        {
            id: 2,
            PartnerName: "District Partner",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ea vitae ratione unde nemo. Nam ad doloribus ducimus, provident sunt magnam. Veritatis aperiam alias, accusantium sint hic eius voluptatem? Temporibus?",
            active: false
        },
        {
            id: 3,
            PartnerName: "Store Partner",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ea vitae ratione unde nemo. Nam ad doloribus ducimus, provident sunt magnam. Veritatis aperiam alias, accusantium sint hic eius voluptatem? Temporibus?",
            active: false
        },
    ];
    const [data, setData] = useState(OurPartnersData);

    const partnerButtonFunction = (id) => {
        const updatedData = OurPartnersData.map((partner) => {
            if (partner.id === id) {
                return { ...partner, active: true };
            } else {
                return { ...partner, active: false };
            }
        });
        setData(updatedData)
    }

  return (
    <div>
        <h1 className='heading'>Our partners</h1>
        <div className='button-container'>
            {
                data.map((partner) => {
                    return (
                        <button 
                        key={partner.PartnerName} 
                        className='partner-button'
                        style={{ backgroundColor: partner.active ? 'orange' : 'grey', color: partner.active ? 'white' : "black" }}
                        onClick={() => partnerButtonFunction(partner.id)}
                        >
                            {partner.PartnerName}
                        </button>
                    )
                })
            }
        </div>
        <div className='content-container'>
        {
            data.map((partner) => {
                return (
                            <>
                                {
                                    partner.active && 
                                    <div className='content-inner-conatiner'>
                                        <div className='color-container' />
                                        <div>
                                            <h2 className='partner-name'>{partner.PartnerName}</h2>
                                            <p className='partner-description'>{partner.description}</p>
                                        </div>
                                    </div>
                                }
                            </>
                )
            })
        }
         </div>
    </div>
  )
}
