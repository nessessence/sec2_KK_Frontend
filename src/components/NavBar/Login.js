import React from 'react';
import {Form,Button,Modal} from 'react-bootstrap';
import {connect} from 'react-redux';
import {auth} from '../../actions';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isOpen: false,
            username: "",
            password: "",
            formErrors: {
                username: "",
                password: ""
            }
        }
    }

    closeLoginModal = () => {
        this.setState({
            isOpen: false
        })
    }

    openLoginModal = () => {
        this.setState({
            isOpen: true
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.validateForm();
        
        console.log('handle submit');
        if ( this.isFormValid() ){
            console.log('form valid');
            this.props.login(this.state.username, this.state.password);
        }
    }

    isFormValid = () => {
        let valid = true;
        for(let field in this.state.formErrors ){
            valid = this.state.formErrors[field] === "" ? true : false;
        }

        return valid;
    }

    validateForm = () => {
        let formErrors = this.state.formErrors;

        let username = this.state.username;
        formErrors.username = username.length === 0 ? "this field is required" : "";

        let password = this.state.password;
        formErrors.password = password.length === 0 ? "this field is required" : "";

        this.setState({
            formErrors: formErrors
        })
    }

    handleChange = e => {
        const { name,value } = e.target
        this.setState({
            [name]: value
        })
    }

    render(){
        return (
            <Modal show={this.state.isOpen} onHide={this.closeLoginModal}>
                <Form onSubmit={this.handleSubmit}>
                    <Modal.Body>
                        <Form.Group>
                            <Form.Control type="text" placeholder="Username" name="username" onChange={this.handleChange}/>
                            <p className="error-form-field">{this.state.formErrors.username}</p>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="password" placeholder="Password" name="password" onChange={this.handleChange}/>
                            <p className="error-form-field">{this.state.formErrors.password}</p>
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <div>
                            <a href="#">forget password?</a>
                        </div>
                        <Button className="ml-auto" variant="primary" type="submit" className="w-100">
                            Log In
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    };
}
  
const mapDispatchToProps = dispatch => {
    return {
        login: (username, password) => {
          return dispatch(auth.login(username, password));
        }
      };
}

export default connect(mapStateToProps, mapDispatchToProps, null, {forwardRef: true})(Login);