import React, { useContext, useRef, useEffect } from 'react';
import './header.css'
import lightSky from './Spaceship.mp4'
import darkSky from './deathStar.mp4'
import Alex from './alexpp.jpg'
import Chuba from './chuba.jpeg'
import Vador from './vador.jpg'
import { ThemeContext } from '../Context/ThemeContext';
import { gsap } from "gsap";


export default function Header() {
    
const titleRef = useRef()
    const alexFoto = useRef()
    const chubiFoto = useRef()
    const headerPara = useRef()

    useEffect(() => {
        gsap.fromTo(titleRef.current, { 'textShadow': '-5px -200px 9px #f1ff11' }, { 'textShadow': '-5px -2px 7px #f1ff11', duration: 2 });
        
        gsap.fromTo(titleRef.current, { 'top': '0px', fontSize: '1rem' }, { 'top': '200px', fontSize: '6.5rem', duration: 1.5 });

       

        gsap.fromTo(alexFoto.current, { 'left': '1000px',opacity:0 }, { 'left': '0px',opacity:.7 ,duration: 1.5, delay: 1 });
        gsap.to(alexFoto.current, { rotation: "+=360", duration: 1.5, delay: 1 });

        gsap.fromTo(chubiFoto.current, { 'right': '1000px',opacity:0  }, { 'right': '0px', opacity:.8,duration: 1.5, delay: 1 });
        gsap.to(chubiFoto.current, { rotation: "-=360", duration: 1.5, delay: 1 });

        gsap.fromTo(headerPara.current, { fontSize: 0 }, { fontSize: '1.5rem', duration: 1.5, delay: 1.5 });

    }, []);



    const { theme, toggleTheme } = useContext(ThemeContext)
    console.log(theme);

    return (
        <header className='header-container'>
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
        

<h1 className="header-title" ref={titleRef}>STAR WORK</h1>
            
            


            <div className={theme ? 'img-profil-container' : 'hidden'}>
                <img
                    ref={alexFoto}
                    className="foto"
                    src={Alex}
                    alt="foto profil"
                />
                <img
                    ref={chubiFoto}
                    className="foto"
                    src={Chuba}
                    alt="foto profil"
                />
            </div>
            <div className={theme ? 'hidden' : 'img-profil-container'}>
                <img
                    className="foto"
                    src={Vador}
                    alt="foto profil"
                />
            </div>

            <p className={theme ? "hidden" : "header-para"}>Je suis ton père</p>
            <p ref={headerPara} className={theme ? "header-para" : "hidden"}>Je suis à droite à gauche c'est chubi</p>

            </div>

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
        </header>

    )

}
