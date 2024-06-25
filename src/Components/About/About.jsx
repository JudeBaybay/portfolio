import React from 'react'
import './About.css'
import profile_img from '../../assets/about_profile.png'
const About = () => {
  return (
    <div id='about' className='about'>
        <div className="aboutTitle">
            <h1>About Me</h1>
        </div>
        <div className="aboutSection">

            <div className="aboutLeft">
                <img src={profile_img} alt="" />
            </div>
            
            <div className="aboutRight">
                <div className="aboutPara">
                    <p>I have one and a half year of programming experience, and is still learning to improve my skills in programming languages.</p>
                    <p>I accomplished achievements in programming such as being a champion in Tagisan ng Talino Locals of STI College Alabang's CodeFest.</p>
                </div>
                <div className="aboutSkills">
                    <div className="aboutSkill"><p>HTML & CSS</p><hr style={{width:"60%"}}/></div>
                    <div className="aboutSkill"><p>Java</p><hr style={{width:"45%"}}/></div>
                    <div className="aboutSkill"><p>MySql</p><hr style={{width:"55%"}}/></div>
                    <div className="aboutSkill"><p>PHP</p><hr style={{width:"35%"}}/></div>
                    <div className="aboutSkill"><p>Android Studio</p><hr style={{width:"65%"}}/></div>
                    <div className="aboutSkill"><p>Google FireBase</p><hr style={{width:"50%"}}/></div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default About