import React from "react";
// import "./stars.scss";
import Typed from "react-typed";
import Bachground from '../../Assests/ba.jpg'
import Me from '../../Assests/me.jpg'

class Intro extends React.Component {
  render() {
    return (
      <div id="home" className="intro route bg-image " style={{backgroundImage: "url("+Bachground+")"}}>
      <div id="home" className="intro route bg-image background">
        {/* <div id="stars" />
        <div id="stars2" />
        <div id="stars3" /> */}
        <img src={Me} alt="Avatar"/>
        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <h1 className="intro-title mb-4">Salut, je m'appelle <br/> BELDI Akrem</h1>
              <p className="intro-subtitle">
                <span className="text-slider-items"></span>
                <strong className="text-slider">
                  <Typed
                    strings={[
                      "Développeur Full StackJS",
                      "Développeur Front-End",
                      "Intégrateur Web"
                    ]}
                    typeSpeed={80}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />
                </strong>
              </p>
              {/* <p className="pt-3">
                <a
                  className="btn btn-primary btn js-scroll px-4"
                  href="#work"
                  role="button"
                >
                  View My Work
                </a>
              </p> */}
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Intro;