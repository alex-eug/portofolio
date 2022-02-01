import React from 'react';
import './cards.css'
import koza from './koza.png'
import convertor from './converteur.png'
import premierPortfolio from './premierPortofolio.png'
import secondPortfolio from './secondPortofolio.png'
import {AiFillGithub} from "react-icons/ai"
import {ImLink} from "react-icons/im"
export default function Cards() {

const projectsElement = [
    {
        title:"KID'OZ'ANGES",
        img:koza,   
        text:  "Kidozanges est une plateforme permettant à des parents de trouver des activités près de chez eux pour leurs enfants. Cette application participative permet également aux parents de soumettre les activités qu'ils connaissent afin d'enrichir le site. SQL, Node, REACT.",
        gitUrl:"https://github.com/alex-eug/kid-oz-ange",
        siteUrl:"https://kidozanges.netlify.app/",
    },

    {
        title:"CONVERTISSEUR",
        img:convertor,   
        text:  "Lorsque vous voyagez, la question de la monnaie peut être importante si la devise étrangère est différente de la vôtre. Prenez l'habitude de vous renseigner sur la question du change avant de partir. Vous pourrez ainsi prévoir votre budget .",
        gitUrl:"https://github.com/alex-eug/convertisseur-de-devises",
        siteUrl:"http://myconverter.surge.sh/",
    },
    {
        title:"2eme PORTFOLIO",
        img:secondPortfolio,   
        text:  "Portfolio réalisé en REACT, utilisation de l'api de context, GSAP",
        gitUrl:"https://github.com/alex-eug/portofolio",
        siteUrl:"https://portofolio-alex.netlify.app/",
    },
    {
        title:'1er PORTFOLIO',
        img:premierPortfolio,   
        text:  "Ceci est mon premier portfolio réalisé en REACT",
        gitUrl:"https://github.com/alex-eug/cvtheque",
        siteUrl:"https://alex-e-cvtheque.netlify.app/",
    },
];
return (
    
    projectsElement.map((elmt,index)=>(
    <div key={index} className="project-card-none">
    <h1>{elmt.title}</h1>
    <p>{elmt.text}</p>
    <div className="lien-hypertext">
    
    <a className='git-hub' href={elmt.gitUrl}><AiFillGithub/></a>
    <a className="site-url" href={elmt.siteUrl}><ImLink/></a>
    </div>
    <div className='img-projects-card-div'><img className='img-projects-card' src={elmt.img} alt="" /></div>
  </div>
    )
    )  
)


}
