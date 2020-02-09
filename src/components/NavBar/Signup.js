import React from 'react';
import {Form,Button,Modal} from 'react-bootstrap';
import {connect} from 'react-redux';
import {auth} from '../../actions';

class Signup extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isOpen: false,
            firstname: "",
            lastname: "",
            username: "",
            password: "",
            confirmPassword: "",
            email: "",
            phone: "",
            formErrors: {
                firstname: "",
                lastname: "",
                username: "",
                password: "",
                confirmPassword: "",
                email: "",
                phone: "",
            }
        }
    }

    openSignupModal = () => {
        this.setState({
            isOpen: true
        })
    }

    closeSignupModal = () => {
        this.setState({
            isOpen: false
        })
    }

    resetState = () => {
        this.setState({
            isOpen: false,
            firstname: "",
            lastname: "",
            username: "",
            password: "",
            confirmPassword: "",
            email: "",
            phone: "",
            formErrors: {
                firstname: "",
                lastname: "",
                username: "",
                password: "",
                confirmPassword: "",
                email: "",
                phone: "",
            }
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        this.validateForm();
        console.log('sign up');
        // if ( this.isFormValid() ){
        //     const arg = {
        //         first_name: this.state.firstname,
        //         last_name: this.state.lastname,
        //         username: this.state.username,
        //         password: this.state.password,
        //         email: this.state.email,
        //         phone_number: this.state.phone
        //     }
        //     try {
        //         let res = await axios.post("http://localhost:8000/api/user/", arg,
        //                 { 
        //                     headers: { 
        //                         'Content-Type': 'application/json',
        //                     } 
        //                 });
        //         console.log(res);
        //         this.resetState();
        //     }
        //     catch(err){
        //         console.log(err);
        //         alert(err);
        //     }
        // }
    }

    isFormValid = () => {
        let valid = true;
        for(let field in this.state.formErrors ){
            valid = this.state.formErrors[field] === "" ? true : false;
        }

        return valid;
    }

    validateEmail = (email) => {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email.toLowerCase());
      }

    validateForm = () => {
        let formErrors = this.state.formErrors;

        let firstname = this.state.firstname;
        formErrors.firstname = firstname.length === 0 ? "this field is required" : "";

        let lastname = this.state.lastname;
        formErrors.lastname = lastname.length === 0 ? "this field is required" : "";

        let username = this.state.username;
        formErrors.username = username.length === 0 ? "this field is required" : "";

        let password = this.state.password;
        if ( password.length === 0 ){
            formErrors.password =   "this field is required";
        }
        else {
            formErrors.password = "";
        }

        let confirmPassword = this.state.confirmPassword;
        if ( confirmPassword.length === 0 ){
            formErrors.confirmPassword =   "this field is required";
        }
        else if ( password.length > 0 && password !== confirmPassword ){
            formErrors.confirmPassword = "password not match";
        }
        else {
            formErrors.confirmPassword = "";
        }

        let email = this.state.email;
        if ( email.length === 0 ){
            formErrors.email = "this field is required";
        }
        else if( !this.validateEmail(email) ){
            formErrors.email = "email is not correct";
        }
        else{
            formErrors.email = "";
        }

        let phone = this.state.phone;
        if ( phone.length === 0 ){
            formErrors.phone =  "this field is required";
        }
        else if ( phone.length !== 10 || isNaN(phone) ){
            formErrors.phone = "phone number should be 10 digits number";
        }
        else {
            formErrors.phone = "";
        }   

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
            <Modal show={this.state.isOpen} onHide={this.closeSignupModal}>
                <Form onSubmit={this.handleSubmit}>
                    <Modal.Body>
                        <Form.Group>
                            <Form.Control type="text" placeholder="firstname" name="firstname"  onChange={this.handleChange}/>
                            <p className="error-form-field">{this.state.formErrors.firstname}</p>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="text" placeholder="lastname" name="lastname"  onChange={this.handleChange}/>
                            <p className="error-form-field">{this.state.formErrors.lastname}</p>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="text" placeholder="username" name="username"  onChange={this.handleChange}/>
                            <p className="error-form-field">{this.state.formErrors.username}</p>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="password" placeholder="password" name="password"  onChange={this.handleChange}/>
                            <p className="error-form-field">{this.state.formErrors.password}</p>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="password" placeholder="confirm password" name="confirmPassword"  onChange={this.handleChange}/>
                            <p className="error-form-field">{this.state.formErrors.confirmPassword}</p>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="text" placeholder="email" name="email"  onChange={this.handleChange}/>
                            <p className="error-form-field">{this.state.formErrors.email}</p>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="text" placeholder="phone number" name="phone" onChange={this.handleChange}/>
                            <p className="error-form-field">{this.state.formErrors.phone}</p>
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="primary" type="submit" className="w-100">
                        Sign Up
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
      register: (username, password) => dispatch(auth.register(username, password)),
    };
  }
  
  export default connect(mapStateToProps, mapDispatchToProps, null, {forwardRef: true})(Signup);