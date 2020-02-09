import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {NavLink} from 'react-router-dom'
import './navbar.css';
import Login from './Login';
import Signup from './Signup';


class NavBar extends React.Component {
    constructor(props){
        super(props);
        this.loginRef = React.createRef();  // to be able to call Login's method
        this.signupRef = React.createRef(); // to be able to call Signup's method
    }

    render(){
        return (
            <Navbar bg="light" expand="lg">
                <Login ref={this.loginRef}/>
                <Signup ref={this.signupRef}/>
                <Navbar.Brand><NavLink className="nav-button" exact to="/">CourtCatch</NavLink></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="d-flex flex-row-reverse">
                    <div className="nav-button-group">
                        <span className="nav-button btn btn-outline-success" onClick={()=>this.loginRef.current.openLoginModal()}>Log In</span>
                        <span className="nav-button btn btn-outline-success" onClick={()=>this.signupRef.current.openSignupModal()}>Sign Up</span>
                    </div>
                    <NavLink className="nav-button" exact to="/about">About</NavLink>
                </Navbar.Collapse>
                </Navbar>
        );
    }

}

export default NavBar;