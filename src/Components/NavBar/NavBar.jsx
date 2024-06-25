import React, { useRef, useState } from 'react'
import "./NavBar.css"
import logo from '../../assets/logo_web.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menuOpen from '../../assets/menu_open.svg'
import menuClose from '../../assets/menu_close.svg'
const NavBar = () => {

  const [menu,setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = ()=>{
    menuRef.current.style.right="0";
  }
  const closeMenu = ()=>{
    menuRef.current.style.right="-350px";
  }

  return (
    <div className='NavBar'>
        <img src={logo} alt="" className='imgLogo'></img>
        <img src={menuOpen} onClick={openMenu} alt="" className='navMobOpen'/>
        <ul ref={menuRef} className="navMenu">
            <img src={menuClose} onClick={closeMenu} alt="" className="navMobClose" />
            <li><AnchorLink className='anchorLink' href='#home'><p onClick={()=> setMenu("home")}>Home</p></AnchorLink>{menu==="home"}</li>
            <li><AnchorLink className='anchorLink' offset={50} href='#about'><p onClick={()=> setMenu("about")}>About</p></AnchorLink>{menu==="about"}</li>
            <li><AnchorLink className='anchorLink' offset={50} href='#quali'><p onClick={()=> setMenu("quali")}>Experiences</p></AnchorLink>{menu==="quali"}</li>
            <li><AnchorLink className='anchorLink' offset={50} href='#services'><p onClick={()=> setMenu("services")}>Services</p></AnchorLink>{menu==="services"}</li>
            <li><AnchorLink className='anchorLink' offset={50} href='#work'><p onClick={()=> setMenu("work")}>Work</p></AnchorLink>{menu==="work"}</li>
            <li><AnchorLink className='anchorLink' offset={50} href='#contact'><p onClick={()=> setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"}</li>
        </ul>
        <div className="navConnect" onClick={()=> setMenu("contact")}><AnchorLink className='anchorLink' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
    </div>
  )
}

export default NavBar