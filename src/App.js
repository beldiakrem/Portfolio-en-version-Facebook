import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/header'
import Home from './Components/Body/home'
import Apropos from './Components/Body/apropos'
import Competences from './Components/Body/Competence/competences'
import Experiences from './Components/Body/experiences'
import Projets from './Components/Body/projets'


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Switch>
      <Route exact path="/" component= {Home} />
      <Route exact path="/apropos" component= {Apropos} />
      <Route path="/competences" component= {Competences} />
      <Route path="/experiences" component= {Experiences} />
      <Route path="/projets" component= {Projets} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
