import React, { useState } from 'react';
import './buttonContact.css'
import Contact from '../Contact';

export default function ButtonContact(props) {

   
   

    return (
        
         <div className="contact-btn-menu">
            <div className="button-contact-appear">
                <div onClick={()=> props.getGreenLight()} className="button-contact-appear-outside">
                    <div className="button-contact-appear-inside">
                    </div>
                </div>
            </div>
        </div>
        


    )
}
