import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';

import thunk from 'redux-thunk';
import {auth} from './actions';
import myApp from './reducers';

import Home from './components/Home';
import NavBar from './components/NavBar';
import About from './components/About';
import ChangePassword from './components/ChagePassword';
import Profile from './components/Profile';
import Log from './components/Log';
import CreateCourt from './components/CreateCourt';
import Courts from './components/Courts';
import Court from './components/Court';
import SecondaryNavBar from './components/SecondaryNavBar';
import MyCourt from './components/MyCourt';
import BecomeAProvider from './components/BecomeAProvider';

let store = createStore(myApp, applyMiddleware(thunk));

class RootContainerComponent extends React.Component {
  async componentDidMount(){
    await this.props.loadUser();
  }

  PrivateRoute = ({component: ChildComponent, ...rest}) => {
    return <Route {...rest} render={props => {
      if (!this.props.auth.isAuthenticated) {
        console.log('app.js not authenticate');
        return <Redirect to="/home" />;
      } else {
        return <ChildComponent {...props} />
      }
    }} />
  }

  render() {
    let {PrivateRoute} = this;
    return (
        <BrowserRouter>
          <div className="App">
          <div>
            <NavBar />
            {this.props.auth.isAuthenticated ? <SecondaryNavBar /> : null}
          </div>
          <div className="app-content">
            <Switch>
              <PrivateRoute exact path="/profile/change_password" component={ChangePassword}/>
              <PrivateRoute exact path="/profile" component={Profile} />
              <PrivateRoute exact path="/history" component={Log} />
              <PrivateRoute exact path="/add_court" component={CreateCourt} />
              <PrivateRoute exact path="/my_courts" component={MyCourt} />
              <PrivateRoute exact path="/become_a_provider" component={BecomeAProvider} />
              <Route exact path="/booking" component={Courts} />
              <Route exact path="/booking/:courtName" component={Court} />
              <Route exact path='/' render={()=> <Home />} />
              <Route exact path="/about" render={()=> <About />} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadUser: () => {
      return dispatch(auth.loadUser());
    }
  }
}

let RootContainer = connect(mapStateToProps, mapDispatchToProps)(RootContainerComponent); 

class App extends React.Component {
  render(){
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
      
    );
  }
}
export default App;
