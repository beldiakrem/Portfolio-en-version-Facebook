import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/header'
import Home from './Components/Body/home'
import Apropos from './Components/Body/apropos'
function App() {
  return (
    <div className="App">
      <Header />
      {/* <Home /> */}
      <Apropos />
    </div>
  );
}

export default App;
