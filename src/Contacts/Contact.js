import React, {useState} from 'react';
import './contact.css'
import { TiSocialLinkedinCircular } from 'react-icons/ti'
import { AiFillGithub } from 'react-icons/ai'
import { TiSocialTwitterCircular } from 'react-icons/ti'
import ButtonContact from './ButtonContact/ButtonContact';
import CV from './cv-Alex-2022.pdf'


export default function Contact() {
    let [lightUp, setLightUp] = useState(false)

    const getGreenLight = () => {
        const btnNotClick = document.querySelector('.button-contact-appear-outside')
        btnNotClick.classList.toggle('button-contact-appear-outside-down')
        const redLight = document.querySelector('.button-contact-appear-inside')
        redLight.classList.toggle('button-contact-appear-inside-green')
       setLightUp(!lightUp)
       console.log(lightUp);
    }
   
    return (
        <div className='container-container-contact  '>
        <ButtonContact 
        getGreenLight={getGreenLight} />

       ( {lightUp &&
        <div className="contact-container contact-container-hidden">
                <p className="contact-para">Vous pouvez me contacter par mail en suivant le lien ou par téléphone disponible sur mon cv en téléchargement</p>

                <div className='button-reseau-contact-div'>
                    <button className="button-reseau-contact "><a className='contact-linkedin ' href="https://www.linkedin.com/in/alexandre-eugene-toulouse/"><TiSocialLinkedinCircular /></a></button>
                    <button className="button-reseau-contact "><a className='contact-git-hub ' href="https://github.com/alex-eug"><AiFillGithub /></a></button>
                    <button className="button-reseau-contact "><a className='contact-twitter ' href="https://twitter.com/home"><TiSocialTwitterCircular /></a></button>

                </div>
                <div className='button-contact-div'>
                    <button className="button-contact green"><a className=" green" href={CV}>Télécharger CV</a></button>
                    <button className="button-contact green"><a className=" green" href="mailto:alexandre.eugene31@gmail.com">Envoyer un mail</a></button>
                </div>

            </div>
       })
            </div>

    )

}
