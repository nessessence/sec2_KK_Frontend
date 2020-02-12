import React from 'react';
import { connect } from 'react-redux';
import {auth} from '../actions';
import './profile.css';
import Prayuth from './prayuth.jpg';
import { Form, Button } from 'react-bootstrap';

class Profile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            amountToAdd: 0
        }
    }

    handleAddCredit = async (e) => {
        e.preventDefault();
        try {
            await this.props.addCredit(this.state.amountToAdd);
            alert('credit added');
            this.setState({
                amountToAdd: 0
            })
        }
        catch(err){
            alert(err);
        }
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
                <div className="profile-image-container">
                    <img className="profile-large" src={Prayuth} />
                    <h3>{this.props.user.username}</h3>
                </div>
                <p>first name: {this.props.user.first_name}</p>
                <p>last name: {this.props.user.last_name}</p>
                <p>email: {this.props.user.email}</p>
                <p>phone number: {this.props.user.phone_number}</p>
                <br />
                <p><span>credit </span><span>{this.props.user.credit}</span></p>
                <div>
                    <Form onSubmit={this.handleAddCredit}>
                        <Form.Group>
                            <Form.Control onChange={this.handleChange} name="amountToAdd" className="mr-2" type="number" style={{width: "10em", display: "inline-block"}} value={this.state.amountToAdd}></Form.Control>
                            <Button type="submit" className="btn btn-primary">Add Credit</Button>
                        </Form.Group>
                    </Form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.auth.user
    };
}
  
const mapDispatchToProps = dispatch => {
    return {
        addCredit: (amount) => {
          return dispatch(auth.addCredit(amount));
        },
      };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);