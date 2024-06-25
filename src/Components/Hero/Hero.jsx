import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_picture.png'
import fb from '../../assets/fb1.svg'
import github from '../../assets/github.svg'
import pdf from '../../assets/RESUME.pdf'
import instagram from '../../assets/instagram.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className="hero">
      

      <div className="heroSection">


        <div className='heroLeft'>
            <div className="Socials">
              <img className='img1' src={fb} alt="" onClick={() => window.open("https://www.facebook.com/jude.baybay/")}/>
              <img className='img2' src={github} alt="" onClick={() => window.open("https://github.com/JudeBaybay")}/>
              <img className='img3' src={instagram} alt="" onClick={() => window.open("https://www.instagram.com/jowddd_?igsh=YW5iZGRpeWlpYjAw")}/>
            </div>
          <img className='prof' src={profile_img} alt=""/>
        </div>

        <div className="heroRight">
          <h1>I'm <span>Jude Anzelmo Baybay</span>, a Website and Android Application Developer</h1>
          <p>I'm a beginner front-end and back-end developer of Website and Android Developer, who is currently studying at <span>STI College Alabang</span> taking the strand of Information Technology in Mobile Application and Website Development</p>
            <div className="heroAction">
              <div className="heroConnect"><AnchorLink className='anchorLink' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
              <button className="heroResume" onClick={() => window.open("https://alabangsti-my.sharepoint.com/:b:/g/personal/baybay_284332_alabang_sti_edu_ph/EYEkec_lJalPlIYYefIZgOIBp_JLzWHTOI8Um74M663RzQ?e=pYdEsO")}>My Resume</button>
            </div>
        </div>
      </div>

    </div>
  )
}

export default Hero