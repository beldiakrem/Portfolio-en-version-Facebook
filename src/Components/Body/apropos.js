import React from 'react'
import Background from '../../Assests/background.jpg'
import Imgaprops from '../../Assests/imgapropos.png'
import Gomycode from '../../Assests/gomycode.jpg'
import Card from 'react-bootstrap/Card'


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
                <div className="cardd">
                <Card style={{ width: '60rem' , height:'22rem' , margin:'80px 180px' }}>
  <Card.Body style={{ display: 'flex', justifyContent: 'space-around' }} >
    <div className="card">
    <h2> Diplôme Universitaire </h2>
    <Card.Title >Institut Supérieur en Informatique Ariana</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">ISI. | Sep 2014 - Juin 2018</Card.Subtitle>
    <Card.Text>
    License appliqué en systèmes informatiques et logiciels
    </Card.Text>
    </div>
    <img id="imgcard" src={Gomycode}  />
  </Card.Body>
</Card>

</div>
<div className="cardf">
                <Card style={{ width: '60rem' , height:'22rem' , margin:'80px 180px' }}>
  <Card.Body style={{ display: 'flex', justifyContent: 'space-around' }} >
    <div className="card">
    <h2> Diplôme Formation </h2>
    <Card.Title >Formation Développeur Web FullStack JS</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Go MyCode. | août 2019 - Nov 2019 </Card.Subtitle>
    <Card.Text>
- Utiliser Bootstrap pour la mise en page des application Web <br/>
- Manipuler les événements DOM avec jQuery et JavaScript vanilla <br/>
- Gestion de projets avec git et github <br/>
- Création d'interfaces utilisateur basées sur des composants avec React <br/>
- Gestion des données côté client avec Redux <br/>
- Gestion de l'état de l'application react avec react-redux <br/>
- Création d'applications backend avec Node <br/>
- Création d’API REST avec Express <br/>
- Sauvegarde et gestion des données avec MongoDB/Mongoose <br/>

    </Card.Text>
    </div>
    <img id="imgcard" src={Gomycode}  />
  </Card.Body>
</Card>

</div>
            </div>
        </div>
    )
}
