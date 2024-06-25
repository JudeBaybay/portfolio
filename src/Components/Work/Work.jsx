import React from 'react'
import '../Work/Work.css'

import mywork_data from '../../assets/mywork_data'
const Work = () => {
  return (
    <div id='work' className='work'>
        <div className="workTitle">
            <h1>My Work</h1>
        </div>

        <div className="myWorkContainer">
            {mywork_data.map((work,index)=>{
                return <div key={index} className="myWork">
                    <h1>{work.w_no}</h1>
                    <h1>{work.w_name}</h1>
                    <h3>{work.w_desc}</h3>
                    <h3 className='admin' onClick={()=> window.open("https://github.com/JudeBaybay/OrgConnectAdmin")}>{work.w_admin}</h3>
                    <h3 className='user' onClick={()=> window.open("https://github.com/JudeBaybay/OrgConnectUser")}>{work.w_user}</h3>
                </div>
            })}
        </div>
    </div>
  )
}

export default Work