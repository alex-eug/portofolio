import React from 'react';
import { Link } from 'react-router-dom';
import './buttonBack.css'
import backButton from './backButton.jpg'

export default function ButtonBack() {
    return(
       <div className="button-back-div"><Link  to="/"><img src={backButton} alt="" srcset="" /></Link></div>
        
    ) 
      
}
