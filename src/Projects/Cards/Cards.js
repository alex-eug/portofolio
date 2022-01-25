import React from 'react';
import './cards.css'
import koza from './koza.png'
import convertor from './converteur.png'
import premierPortofolio from './premierPortofolio.png'
import secondPortofolio from './secondPortofolio.png'

export default function Cards() {
const projectsImg = [koza,convertor,premierPortofolio,secondPortofolio]
const projectsTitle = ["KID'OZ'ANGES",'CONVERTISSEUR','1er PORTOFOOLIO','2eme PORTOFOLIO']    
const projectsPara = ["Kidozanges est une plateforme permettant à des parents de trouver des activités près de chez eux pour leurs enfants. Cette application participative permet également aux parents de soumettre les activités qu'ils connaissent afin d'enrichir le site. Conception de la partie front-end de l'application.","Lorsque vous voyagez, la question de la monnaie peut être importante si la devise étrangère est différente de la vôtre. Prenez l'habitude de vous renseigner sur la question du change avant de partir. Vous pourrez ainsi prévoir votre budget .","Ceci est mon premier portofolio","Ceci est mon deuxieme portofolio"]


return (
        <div className="card-container">
            <div className="img-container-project"><img className="img-project" src={projectsImg[0]} alt="" srcset="" /></div>
            <h2 className="title-projects-card">{projectsTitle[0]}</h2>
            <p className="para-projects-card">{projectsPara[0]}</p>
        </div>
    )
}
