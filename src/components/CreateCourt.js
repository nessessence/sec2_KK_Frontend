import React from 'react';
import { connect } from 'react-redux';
import {court} from '../actions';
import { Form } from 'react-bootstrap';

class CreateCourt extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            price: "",
            desc: "",
            formErrors: {
                name: "",
                price: "",
            }
        }
    }

    handleSubmit = async e => {
        e.preventDefault();
        this.validateForm();

        if ( this.isFormValid() ){
            try {
                let data = await this.props.createCourt(this.state.name, this.state.price, this.state.desc);
                alert("court created");
                this.setState({
                    name: "",
                    price: "",
                    desc: ""
                })
            }
            catch(err){
                alert(err);
            }
        }
    }

    isFormValid = () => {
        let valid = true;
        for(let field in this.state.formErrors){
            if ( this.state.formErrors[field] !== "" ){
                valid = false;
            }
        }

        return valid;
    }

    validateForm = () => {
        let formErrors = this.state.formErrors;

        let name = this.state.name;
        if ( name === "" ){
            formErrors.name = "this field is required";
        }
        else {
            formErrors.name = "";
        }

        let price = this.state.price;
        if ( price === "" ){
            formErrors.price = "this field is required";
        }
        else {
            formErrors.price = "";
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
            <div className="container">
                <h1>Create Court</h1>
                <Form onSubmit={this.handleSubmit} className="text-left">
                    <Form.Group>
                        <Form.Label>Court Name</Form.Label>
                        <Form.Control name="name" type="text" onChange={this.handleChange}></Form.Control>
                        <p className="error-form-field">{this.state.formErrors.name}</p>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Court Price</Form.Label>
                        <Form.Control name="price" type="number" onChange={this.handleChange}></Form.Control>
                        <p className="error-form-field">{this.state.formErrors.price}</p>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Court Description</Form.Label>
                        <textarea name="desc" className="form-control" row="2" onChange={this.handleChange} placeholder="type something descripes your court"></textarea>
                        <p className="error-form-field">{this.state.formErrors.desc}</p>
                    </Form.Group>
                    <div className="text-right">
                        <button className="btn btn-primary" type="submit">create</button>
                    </div>
                </Form>
            </div>
        );
    }
}
  
const mapDispatchToProps = dispatch => {
    return {
        createCourt: (name,price,desc) => {
          return dispatch(court.createCourt(name,price,desc));
        },
      };
}

export default connect(null, mapDispatchToProps)(CreateCourt);