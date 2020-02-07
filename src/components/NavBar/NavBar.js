import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {NavLink} from 'react-router-dom'
import './navbar.css';
import {Form,Button,Modal} from 'react-bootstrap';


class NavBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLoginModalOpen: false,
            isSignupModalOpen: false
        };
    }

    closeLoginModal = () => {
        this.setState({
            isLoginModalOpen: false
        })
    }

    openLoginModal = () => {
        this.setState({
            isLoginModalOpen: true
        })
    }
    
    Login = () => {
        return (
            <Modal show={this.state.isLoginModalOpen} onHide={this.closeLoginModal}>
                <Form>
                    <Modal.Body>
                        <Form.Group>
                            <Form.Control type="text" placeholder="Username" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                    <a href="#">ลืมรหัสผ่าน?</a>
                    <Button className="ml-auto" variant="primary" onClick={this.closeLoginModal}>
                        เข้าสู่ระบบ
                    </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        );
    }

    render(){
        return (
            <Navbar bg="light" expand="lg">
                <this.Login/>
                <Navbar.Brand href="/">CourtCatch</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="d-flex flex-row-reverse">
                    <div className="nav-button-group">
                        <span className="nav-button btn btn-outline-success" onClick={()=>this.openLoginModal()}>เข้าสู่ระบบ</span>
                        <span className="nav-button btn btn-outline-success">สมัครสมาชิก</span>
                    </div>
                    <NavLink className="nav-button" exact to="/about">เกี่ยวกับเรา</NavLink>
                </Navbar.Collapse>
                </Navbar>
        );
    }

}

export default NavBar;