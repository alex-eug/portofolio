import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import "./navBar.css";
import laser from "./laser.png"

export default function NavBar() {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [larger, setLarger] = useState(window.innerWidth)

    const navResponsive = () => {
        setToggleMenu(!toggleMenu)
    }

    const laserMenu = useRef()
    const navList = useRef()

useEffect(()=>{
   
    const changeWidth =  (() =>{
        setLarger(window.innerWidth)
    })
    window.addEventListener('rezise',changeWidth)
    return()=>{
    window.removeEventListener('rezise',changeWidth)

}

},[])

    useEffect(() => {
        gsap.fromTo(navList.current, { 'fontSize': 0 }, {
            fontSize: '1rem', delay: 2
        })
    },[]);

    return (

        <nav className="header-nav">
      {(toggleMenu || larger > 500) && (
          <ul ref={navList} className="nav-list ">
              <li onClick={()=>setToggleMenu(false)} className="list-item"><Link className='link-item' to="/presentation">PRESENTATION</Link></li>
              <li onClick={()=>setToggleMenu(false)} className="list-item"><Link className='link-item' to="/competences">COMPETENCES</Link></li>
              <li onClick={()=>setToggleMenu(false)} className="list-item"><Link className='link-item' to="/projects">PROJETS</Link></li>
              <li onClick={()=>setToggleMenu(false)} className="list-item"><Link className='link-item' to="/contact">CONTACT</Link></li>
          </ul>
          ) }
            <div onClick={navResponsive} className="btn-toggle" ><img className="img-laser" src={laser} alt="sabre laser menu navigation" /></div>
        </nav>


    )
}
