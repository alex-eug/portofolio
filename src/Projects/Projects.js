import React from 'react';
import './projects.css'
import Vador from '../Header/vador.jpg'
import Destruction from './Etoile_Noire-SWE.png'
import Cards from './Cards/Cards';


export default function Projects() {


  
  const newPage = () => {
    
    const projectCard = document.querySelectorAll('.project-card-none')
    projectCard.forEach((elm) => elm.classList.add('project-card'))
  }

  return (

    <div className="projects-container ">


      <div className="square"></div>
      <div className="card"><img className="vador-project" src={Destruction} alt="" />COME HERE</div>
      <div onAnimationEnd={newPage} className="card-on"><img className="vador-project" src={Vador} alt="" /></div>
      <div   className="card-on2"><img className="vador-project" src={Vador} alt="" /></div>
      <div className="white-page"> </div>
      <div className="before-page" >
        <Cards />
      </div>
    </div>


  )

}
