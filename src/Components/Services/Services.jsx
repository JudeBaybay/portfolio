import React from 'react'
import './Services.css'
import Services_Data from '../../assets/services_data'
const Services = () => {
  return (
    <div id='services' className='services'>
        <div className="servicesTitle">
            <h1>My Services</h1>
        </div>

        <div className="servicesContainer"> 
            {Services_Data.map((service,index)=>{
                return <div key={index}className="servicesFormat">
                    <h3>{service.s_no}</h3>
                    <h2>{service.s_name}</h2>
                    
                </div>
            })}
        </div>
    </div>
  )
}

export default Services