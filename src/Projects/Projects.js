import React from 'react';
import './projects.css'
import Vador from '../Header/vador.jpg'
import NavBar from '../NavBar/NavBar'

export default function Projects() {


  const handleCard = () => {
      console.log("coucou");
        const blackPage = document.querySelector('.white-page')
        blackPage.classList.add('black-page')
  }
  const newPage = () => {
      const beforePage = document.querySelector('.before-page')
      beforePage.classList.add('new-page')
  }

    return (
       
        <div className="projects-container ">
           <div className="card-plate "></div>
           <div className="square"></div>
           <div onClick={handleCard} className="card"><img className="vador-project" src={Vador} alt="" />P</div>
          
           <div className="card-on"><img className="vador-project" src={Vador} alt="" /></div>
           <div className="card-on2"><img className="vador-project" src={Vador} alt=""  /></div>
           <div className="white-page" onAnimationEnd={newPage}> </div>
           <div className="before-page" >
                <NavBar />
           </div>
         </div>
         

    )

}
