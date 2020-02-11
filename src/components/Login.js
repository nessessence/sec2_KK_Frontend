import React from 'react';
import {Form,Button,Modal} from 'react-bootstrap';
import {connect} from 'react-redux';
import {auth} from '../actions';

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
            },
            is400Err: false,
            isOtherErr: false
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

    handleSubmit = async (e) => {
        e.preventDefault();
        this.validateForm();
        
        console.log('handle submit');
        if ( this.isFormValid() ){
            console.log('form valid');
            try {
                await this.props.login(this.state.username, this.state.password);
                this.closeLoginModal();
                console.log('close log in modal');
                this.props.loadUser(this.state.username);
            }
            catch (status){
                if ( status === 400 ){
                    this.setState({
                        is400Err: true,
                        isOtherErr: false
                    })
                }
                else {
                    this.setState({
                        is400Err: false,
                        isOtherErr: true
                    })
                }
            }  
        }
    }

    isFormValid = () => {
        let valid = true;
        for(let field in this.state.formErrors ){
            if ( this.state.formErrors[field] !== "" ){
                valid = false;
            }
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

        let errText = this.state.is400Err ? "username or password is not correct" : 
                        this.state.isOtherErr ? "something went wrong" : "";

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
                        <p className="error-form-field">{errText}</p>
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
        isAuthenticated: state.auth.isAuthenticated,
        errors: state.auth.errors
    };
}
  
const mapDispatchToProps = dispatch => {
    return {
        login: (username, password) => {
          return dispatch(auth.login(username, password));
        },
        loadUser: (username) => {
            return dispatch(auth.loadUser(username));
        }
      };
}

export default connect(mapStateToProps, mapDispatchToProps, null, {forwardRef: true})(Login);