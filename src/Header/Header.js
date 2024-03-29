import React, { useContext, useRef, useEffect } from 'react';
import './header.css'
import lightSky from './Spaceship.mp4'
import darkSky from './deathStar.mp4'
import Alex from './alexpp.jpg'
import Chuba from './chuba.jpeg'
 import Vador from './vador.jpg'
import { ThemeContext } from '../Context/ThemeContext';
import { gsap } from "gsap";
import ButtonBack from '../ButtonBack/ButtonBack';


export default function Header() {
    
const titleRef = useRef()
    const alexFoto = useRef()
    const chubiFoto = useRef()
    const headerPara = useRef()

    useEffect(() => {
       
       
        
         gsap.fromTo(titleRef.current, { color:'transparent','top': '0px', fontSize: '1rem',opacity:0 ,'textShadow': '-5px -200px 9px rgb(156, 204, 247)'}, {color:'black','top': '200px', fontSize: '6.5rem',opacity:1, 'textShadow': '-5px -2px 7px #f1ff11', duration: 2 });
       

        gsap.fromTo(alexFoto.current, {top:'0px', 'right': '1000px',opacity:0 }, {  borderRadius: '50%', 'right': '0px',opacity:.9 ,duration: 2, delay: 1 });
       

        gsap.fromTo(chubiFoto.current, { top:'0px','left': '1000px',opacity:0  }, { borderRadius: '50%',  'left': '0px', opacity:.9,duration: 2, delay: 1 });
       

        gsap.fromTo(headerPara.current, {opacity:0,color:'transparent','textShadow': '-1px -200px 3px #f1ff11',fontSize: 0 }, {opacity:1,color:'black','textShadow': '1px 2px 3px #f1ff11', fontSize: '1.5rem' , duration: 2, delay: 1 });

    }, []);



    const { theme, toggleTheme } = useContext(ThemeContext)
    
    
    return (
        <header className='header-container'>
        <video
            className={theme ? 'hidden' : 'video'}
            autoPlay
            muted
            loop
        >
            <source
                src={darkSky}
                type="video/mp4"
            />
        </video>
        <video
            className={theme ? 'video' : 'hidden'}
            autoPlay
            muted
            loop
        >
            <source
                src={lightSky}
                type="video/mp4"
            />
        </video>
        <ButtonBack />
        <button
        onClick={toggleTheme}
        className={theme ? 'dark-mode' : 'hidden'}
        title="Rejoindre l'empire">
        </button>
        <button
        onClick={toggleTheme}
        className={theme ? 'hidden' : 'light-mode'}
        title="Rejoindre la république">
        </button>
        <div className='title-foto-para'>
        <h1 style={{'padding':'20px'}} className="header-title" ref={titleRef}>STAR WORK</h1>
        
        
        
        
        
        
        <div className={theme ? 'img-profil-container' : 'hidden'}>
        <img
            ref={chubiFoto}
            className="foto"
            src={Chuba}
            alt="foto profil"
            />
            <img
                ref={alexFoto}
                className="foto"
                src={Alex}
                alt="foto profil"
            />
            </div>
            <div className={theme ? 'hidden' : 'img-profil-container'}>
                <img
                    
                    className="foto vador"
                    src={Vador}
                    alt="foto profil"
                />
            </div >

            <p  className={theme ? "hidden" : "header-para father"}>Je suis ton père</p>
            <p ref={headerPara} className={theme ? "header-para" : "hidden"}>Je suis à droite à gauche c'est chubi</p>

            </div>

        </header>

    )

}
