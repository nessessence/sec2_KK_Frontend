import React from 'react';
import { connect } from 'react-redux';
import {auth} from '../actions';
import { Form, Row, Col, Button } from 'react-bootstrap';

class ChangePassword extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            newPassword: "",
            confirmNewPassword: "",
            formErrors: {
                newPassword: "",
                confirmNewPassword: ""
            }
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        this.validateForm();

        if ( this.isFormValid() ){
            try{
              await this.props.changePassword(this.props.username, this.state.newPassword);
                alert('password changed');
            }
            catch(err){
                alert(err);
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
        
        let newPassword = this.state.newPassword;
        if ( newPassword.length === 0 ){
            formErrors.newPassword =  "this field is required";
        }
        else {
            formErrors.newPassword = "";
        }

        let confirmNewPassword = this.state.confirmNewPassword;
        if ( confirmNewPassword.length === 0 ){
            formErrors.confirmNewPassword =  "this field is required";
        }
        else if ( newPassword.length > 0 && newPassword !== confirmNewPassword ){
            formErrors.confirmNewPassword = "new password does not match";
        }
        else {
            formErrors.confirmNewPassword = "";
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
            <div className="app-content-inner">
                <div className="container">
                    <h1>Change Password</h1>
                    <br />
                    <br />
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group as={Row} className="text-right">
                            <Form.Label column sm='3'>new password</Form.Label>
                            <Col sm='9'>
                                <Form.Control name="newPassword" type="password" onChange={this.handleChange}></Form.Control>
                                <p className="error-form-field text-left">{this.state.formErrors.newPassword}</p>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="text-right">
                            <Form.Label column sm='3'>confirm new password</Form.Label>
                            <Col sm='9'>
                                <Form.Control name="confirmNewPassword" type="password" onChange={this.handleChange}></Form.Control>
                                <p className="error-form-field text-left">{this.state.formErrors.confirmNewPassword}</p>
                            </Col>
                        </Form.Group>
                        <Button className="btn btn-primary" type="submit">confirm</Button>
                    </Form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
       username: state.auth.user.username
    };
}
  
const mapDispatchToProps = dispatch => {
    return {
        changePassword: (username, password) => {
          return dispatch(auth.changePassword(username, password));
        }
      };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword);

