import React from 'react'
import Background from '../../Assests/background.jpg'
import Imgaprops from '../../Assests/imgapropos.png'


export default function apropos() {
    return (
        // <div  className="apropos" style={{backgroundImage: "url("+Background+")"}}>
        <div className="apropos" >
             <div className="apropo">
                <div className="papropo">
                   <h1> À Propos </h1>
                   <p> Je m'appelle Akrem, j'ai 28 ans et j'ai une licence appliquée en systémes informatiques et logiciels. Je suis un développeur Full-Stack je maîtrise les technologies du web et les différents langages et frameworks, ce qui me permet de créer un programme, une application ou créer un site internet.     </p>  
                   <a href="https://www.facebook.com/akrem.beldi/" target="_blank"> <i class="fab fa-facebook"></i> </a>
                   <a href="https://www.linkedin.com/in/beldi-akrem-602622141/" target="_blank"> <i class="fab fa-linkedin"></i> </a>
                   <a href="https://github.com/beldiakrem" target="_blank"> <i class="fab fa-github" target="_blank"></i> </a>
                   <a  href="/src/Assests/CV.pdf" download target="_blank"> <i class="fas fa-file-pdf"></i> </a>
                </div>
                <img src={Imgaprops} />
            </div>
            <div className="formationdiplome">
                <div className="formation">
                   
                </div>
                <div className="diplome">

                </div>
            </div>
        </div>
    )
}
