import React,{useEffect,useRef} from 'react';
import gsap from 'gsap';
import './presentation.css'


export default function Presentation() {
 const intro = useRef()
 const title = useRef()
 const content = useRef()
  
 useEffect(() => {
  let tl = new gsap.timeline();

  tl
    .to(intro.current, { opacity: 1, delay: .7, duration: 3 })
    .to(intro.current, { opacity: 0, duration: 1.5 })
    .set(title.current, { opacity: 1, scale: 2.75 })
    .to(title.current, { scale: 0.05, ease: "power2", duration: 6 })
    .to(title.current, { opacity: 0, duration: 1.5 }, "-=1.5")
    .to(content.current, { top: "-170%", duration: 100 });
}, []);


  return (
    <div className="container">
   
    <section className="intro" ref={intro}>
        <p>
          A long time ago, in a galaxy far,
          <br /> far away....
        </p>
      </section>
      <section className="title" ref={title}>
        <p>ALEXANDRE EUGENE DEVELOPPEUR FULL-STACK JS.</p>
    </section>
    <section className="crawl">
    <div className="content" ref={content}>
    
      <p>La reconversion professionnelle résulte de la volonté d'un individu, au cours de son activité, de changer de métier pour une toute nouvelle vie. C'est pour cela qu'après plusieurs années d'expérience dans l'aéronautique, j'ai souhaité me reconvertir dans le domaine du développement web.
      Une formation certifiante m'a permis d'acquérir les connaissances techniques requises et de les appliquer dans ce cadre, à travers un projet de fin de formation. <br/>
      Je recherche à présent à mettre mes nouvelles compétences au service d'une équipe tout en poursuivant une formation en alternance.Bachelor 3 Concepteur-Développeur d'Applications
      Titre niveau 6 (code RNCP 31678 – code diplôme 26T32602)</p>
      <p>Professional retraining results from the will of an individual, during his activity, to change profession for a whole new life. This is why after several years of experience in aeronautics, I wanted to retrain myself in the field of web development.
      A certifying training allowed me to acquire the technical knowledge required and to apply them in this context, through a project at the end of the training.
      I am now looking to put my new skills at the service of a team while continuing a work-study program.Bachelor 3 Application Designer-Developer
      Title level 6 (RNCP code 31678 – diploma code 26T32602)</p>
      
    </div>
  </section>
    </div>
  );
}

  

