import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {NavLink} from 'react-router-dom'
import './navbar.css';

class NavBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">CourtCatch</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="d-flex flex-row-reverse">
                    <div className="nav-button-group">
                        <span className="nav-button btn btn-outline-success">เข้าสู่ระบบ</span>
                        <span className="nav-button btn btn-outline-success">สมัครสมาชิก</span>
                    </div>
                    <NavLink className="nav-button" exact to="/about">เกี่ยวกับเรา</NavLink>
                </Navbar.Collapse>
                </Navbar>
        );
    }

}

export default NavBar;