import React from 'react';
import './competences.css'

export default function Competences() {
  return (
    
    <div className='competence-container'>
    <div className="skill">
    <div className="skill-name">
    <span>HTML</span>
    <span>CSS</span>
    <span>REACT</span>
    <span>JavaScript</span>
    <span>Node.js</span>
    <span>SQL</span>
    <span>SCRUM</span>
    </div>
    
    <div className="bar-container">
    <div className="bar"><div className="progress"></div></div>
    <div className="bar"><div className="progress"></div></div>
    <div className="bar"><div className="progress"></div></div>
    <div className="bar"><div className="progress"></div></div>
    <div className="bar"><div className="progress"></div></div>
    <div className="bar"><div className="progress"></div></div>
    <div className="bar"><div className="progress"></div></div>
    
    </div>
    </div>
    <div className="parallax"></div>
    </div>
    
  )

}
