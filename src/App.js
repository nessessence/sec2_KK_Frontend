import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <div>
          <NavBar />
        </div>
        <div className="app-content">
          <Switch>
            <Route exact path="/" render={()=> <Home />} />
            <Route exact path="/about" render={()=> <About />} />
          </Switch>
        </div>
      </div>
    );
  }
}
export default App;
