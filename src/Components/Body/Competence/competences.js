import React from 'react'
import Html from '../../../Assests/html.png'
import Css from '../../../Assests/css.png'
import Bootstrap from '../../../Assests/bootstrap.png'
import Materialui from '../../../Assests/materialui.png'
import Js from '../../../Assests/js.png'
import ReactJS from '../../../Assests/react.png'
import ReduxJS from '../../../Assests/redux.png'
import Wordpress from '../../../Assests/wordpress.png'
import Woocommerce from '../../../Assests/woocommerce.png'
import Psd from '../../../Assests/psd.png'
import Git from '../../../Assests/git.png'
import Vs from '../../../Assests/visual.png'
import Cpanel from '../../../Assests/cpanel.png'
import Nodejs from '../../../Assests/nodejs.png'
import Mongodb from '../../../Assests/mongodb.png'
import Fleche from '../../../Assests/fleche.png'
import Pourcentage from './pourcentage'

 function competences() {
    return (
        <div className="competence">
             <div className="competencet">
               <h1>  Mes Compétences </h1>
               <div className="iconecompetence4">
                   <img src={Html} />
                   <img src={Css} />
                   <img src={Bootstrap} />
                   <img src={Materialui} />
                   <img src={Fleche} />
                   <Pourcentage pr="85"  time="90" />
               </div>
               <div className="iconecompetence3">
                   <img src={Js} />
                   <img src={ReactJS} />
                   <img src={ReduxJS} />
                   <img src={Fleche} />
                   <Pourcentage pr="80" time="120" />
               </div>
               <div className="iconecompetence3">
                   <img src={Wordpress} />
                   <img src={Woocommerce} />
                   <img src={Psd} />
                   <img src={Fleche} />
                   <Pourcentage  pr="80" time="140"  />
               </div>
               <div className="iconecompetence3">
                   <img src={Git} />
                   <img src={Vs} />
                   <img src={Cpanel} />
                   <img src={Fleche} />
                   <Pourcentage pr="70" time="200" />
               </div>
               <div className="iconecompetence2">
                   <img src={Nodejs} />
                   <img src={Mongodb} />
                   <img src={Fleche} />
                   <Pourcentage pr="60" time="300" />
               </div>
             </div>
        </div>
    )
}

export default competences