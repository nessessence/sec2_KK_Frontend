import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {NavLink, Redirect} from 'react-router-dom'
import './navbar.css';

import Login from './Login';
import Signup from './Signup';
import Account from './Account';

import {connect} from 'react-redux';
import {auth} from '../actions';

class NavBar extends React.Component {
    constructor(props){
        super(props);
        this.loginRef = React.createRef();  // to be able to call Login's method
        this.signupRef = React.createRef(); // to be able to call Signup's method
        this.state = {
            redirect: false
        }
    }

    handleLogout = () => {
        this.props.logout();
        this.setState({
            redirect: true
        });
    }

    render(){

        let authButtons = [];
        if ( !this.props.isAuthenticated ){
            authButtons.push(<span key="login-modal" className="nav-button btn btn-outline-success" onClick={()=>this.loginRef.current.openLoginModal()}>Log In</span>);
            authButtons.push(<span key="signup-modal" className="nav-button btn btn-outline-success" onClick={()=>this.signupRef.current.openSignupModal()}>Sign Up</span>);
        }
        else {
            authButtons.push(<span key="logout-button" className="nav-button btn btn-outline-success" onClick={()=>this.handleLogout()}>Log Out</span>);
        }

        return (
            <Navbar bg="light" expand="lg">
                <Login ref={this.loginRef}/>
                <Signup ref={this.signupRef}/>
                <Navbar.Brand><NavLink className="nav-button" exact to="/">CourtCatch</NavLink></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="d-flex flex-row-reverse">
                    <div className="nav-button-group">
                        {authButtons}
                    </div>
                    {this.props.isAuthenticated ? <Account /> : null}
                    <NavLink className="nav-button" exact to="/about">About</NavLink>
                </Navbar.Collapse>
                { this.state.redirect ? <Redirect to="/" /> : null}
                </Navbar>
        );
    }

}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => {
          return dispatch(auth.logout());
        }
      };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);