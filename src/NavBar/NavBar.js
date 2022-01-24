import React,{useRef,useEffect} from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import "./navBar.css";

export default function NavBar() {
  
    const navList = useRef()
    useEffect(()=>{
        gsap.fromTo(navList.current, { 'fontSize': 0 }, {
            fontSize: '1rem', delay: 2
    })
    },[]);
    return (
    
      <nav className="header-nav">
      <ul ref={navList} className="nav-list">
          <li className="list-item"><Link className='link-item' to="/presentation">PRESENTATION</Link></li>
          <li className="list-item"><Link className='link-item' to="/competences">COMPETENCES</Link></li>
          <li className="list-item"><Link className='link-item' to="/projects">PROJETS</Link></li>
          <li className="list-item"><Link className='link-item' to="/contact">CONTACT</Link></li>
      </ul>
  </nav>

     
    )
}
