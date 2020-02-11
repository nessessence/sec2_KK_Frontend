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

let store = createStore(myApp, applyMiddleware(thunk));

class RootContainerComponent extends React.Component {
  componentDidMount(){
    this.props.loadUser();
  }

  PrivateRoute = ({component: ChildComponent, ...rest}) => {
    return <Route {...rest} render={props => {
      if (!this.props.auth.isAuthenticated) {
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
          </div>
          <div className="app-content">
            <Switch>
              <PrivateRoute exact path="/profile/change_password" component={ChangePassword}/>
              <PrivateRoute exact path="/profile" component={Profile} />
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
