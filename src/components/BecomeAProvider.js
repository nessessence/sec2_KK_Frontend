import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

class BecomeAProvider extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isOpen: false,
            thaiFirstName: "",
            thaiLastName: "",
            dob: "",
            cid: "",
            cbid: "",
            occupation: "",
            residentialAddress: "",
            resgisteredAddress: "",
            photoHoldingCID: "",
            photoHoldingIC: "",
            formErrors: {
                thaiFirstName: "",
                thaiLastName: "",
                dob: "",
                cid: "",
                cbid: "",
                occupation: "",
                residentialAddress: "",
                resgisteredAddress: "",
                photoHoldingCID: "",
                photoHoldingIC: ""
            }
        }
    }

    openModal = () => {
        this.setState({
            isOpen: true
        });
    }

    closeModal = () => {
        this.setState({
            isOpen: false
        });
    }

    handleChange = e => {
        const { name,value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
    }

    render(){
        return (
            <div className="app-content-inner">
                <div className="container">
                    <h1>Become A Provider</h1>
                    <br />
                    <Form className="text-left" onSubmit={this.handleSubmit}>
                        <Form.Group as={Row}>
                            <Form.Label column sm="4">First Name in Thai</Form.Label>
                            <Col>
                                <Form.Control name="thaiFirstName" type="text" placeholder="Set First Name in Thai"></Form.Control>
                            </Col>
                            <p className="error-form-field">{this.state.formErrors.thaiFirstName}</p>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm="4">Last Name in Thai</Form.Label>
                            <Col>
                                <Form.Control name="thaiLastName" type="text" placeholder="Set Last Name in Thai"></Form.Control>
                            </Col>
                            <p className="error-form-field">{this.state.formErrors.thaiLastName}</p>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm="4">Date Of Birth</Form.Label>
                            <Col>
                                <Form.Control name="dob" type="date" placeholder="Set date of birth"></Form.Control>
                            </Col>
                            <p className="error-form-field">{this.state.formErrors.dob}</p>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm="4">Citizen ID</Form.Label>
                            <Col>
                                <Form.Control name="cid" type="text" placeholder="EG. 1100145647124"></Form.Control>
                            </Col>
                            <p className="error-form-field">{this.state.formErrors.cid}</p>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm="4">Codes behind ID card(12 digits)</Form.Label>
                            <Col>
                                <Form.Control name="cbid" type="text" placeholder="EG. AB0123456789"></Form.Control>
                            </Col>
                            <p className="error-form-field">{this.state.formErrors.cbid}</p>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm="4">Current Occupation</Form.Label>
                            <Col>
                                <Form.Control name="occupation" type="text" placeholder="Set Occupation"></Form.Control>
                            </Col>
                            <p className="error-form-field">{this.state.formErrors.occupation}</p>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm="4">Residential Address(Currently residing in)</Form.Label>
                            <Col>
                                <Form.Control name="residentialAddress" type="text" placeholder="Set Residential Address"></Form.Control>
                            </Col>
                            <p className="error-form-field">{this.state.formErrors.residentialAddress}</p>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm="4">Registered Address(On your Thai Citizen ID)</Form.Label>
                            <Col>
                                <Form.Control name="resgisteredAddress" type="text" placeholder="Set Registered Address"></Form.Control>
                            </Col>
                            <p className="error-form-field">{this.state.formErrors.resgisteredAddress}</p>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm="4">Photo of you holding your Citizen ID</Form.Label>
                            <Col>
                                <Form.Control name="photoHoldingCID" type="file"></Form.Control>
                            </Col>
                            <p className="error-form-field">{this.state.formErrors.photoHoldingCID}</p>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm="4">Photo of your IC</Form.Label>
                            <Col>
                                <Form.Control name="photoHoldingIC" type="file"></Form.Control>
                            </Col>
                            <p className="error-form-field">{this.state.formErrors.photoHoldingIC}</p>
                        </Form.Group>
                        <div className="text-right">
                            <button type="submit" className="gradient-button">
                                <span className="gradient-text">SUBMIT</span>
                            </button>
                        </div>
                    </Form>
                </div>
            </div>
        );
    }
}

export default BecomeAProvider;