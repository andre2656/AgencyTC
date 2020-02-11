import React, { Component } from "react";
import { Redirect, withRouter } from 'react-router-dom';
import '../NavBar/NavBar.css';
import loginController from '../../controllers/LoginController';
import { Modal } from 'react-bootstrap';

class Footer extends Component {
    state = {
        username: "",
        password: "",
        error: null,
        loggedIn: false,
        user: null,
        salesDrop: 'none',
        showPassword: false,
    }
    login = (e) => {
        e.preventDefault();

        loginController.login(this.state.username, this.state.password, (err, user) => {

            if (err) {
                this.handleShow()
            } else {
                this.props.history.push("/app");
            }
        });
    }
    forgotPassword = () => {
        this.setState({ showPassword: true });
    }
    closePassword = () => {
        this.setState({ showPassword: false });
    }
    inputChanged = event => {
        this.setState({ [event.target.name]: event.target.value });
    }
    handleClose = () => {
        this.setState({ show: false });
    }
    handleShow = () => {
        this.setState({ show: true });
    }
    render() {
        return (
            <div className="container" style={{ display: 'block', backgroundColor: '#000', }}>
                <div className="row" style={{ backgroundColor: '#000', position: 'absolute', right: 0, left: 0, height: 120, top: 3900 }}>
                    <div className="col-md-1" />
                    <div className="col-md-1" style={{ minWidth: 150 }} >
                        <p style={{ color: 'white', fontSize: 16, paddingTop: 5 }}>
                            <a href='#' style={{ color: '#0071e3' }}>About</a><br />
                            <a href='#' style={{ color: '#0071e3' }}>Contact</a><br />
                            <a href='#' style={{ color: '#0071e3' }}>Sign Up</a><br />
                        </p>
                    </div>
                    <div className="col-md-1" style={{ minWidth: 150 }} >
                        <p style={{ color: 'white', fontSize: 16, paddingTop: 5, minWidth: 150 }}>
                            <a href='#' style={{ color: '#0071e3' }}>Privacy Policy</a><br />
                            <a href='#' style={{ color: '#0071e3' }}>Cookie Policy</a><br />
                            <a href='#' style={{ color: '#0071e3' }}>Copyright Policy</a><br />
                            <a href='#' style={{ color: '#0071e3' }}>Brand Policy</a><br />
                        </p>
                    </div>
                    <div className="col-md-1" style={{ minWidth: 150 }} >
                        <p style={{ color: 'white', fontSize: 16, paddingTop: 5 }}>
                            <a href='https://goo.gl/maps/WpgBrZrXP4kefCYk7' target='blank' style={{ color: '#0071e3' }}>Location</a><br />
                            44 Cipresso <br />
                            Irvine, CA <br />
                            92603-0105
                    </p>
                    </div>
                    <div className="col-md-1" style={{ minWidth: 150 }} >
                        <p style={{ color: 'white', fontSize: 16, paddingTop: 5 }}>
                            <a href='#' style={{ color: '#0071e3' }}>Sales</a><br />
                            <a href='#' style={{ color: '#0071e3' }}>Production</a><br />
                            <a href='#' style={{ color: '#0071e3' }}>Design</a><br />
                            <a href='#' style={{ color: '#0071e3' }}>Marketing & PR</a>
                        </p>
                    </div>
                    <div className="col-md-1" style={{ minWidth: 150 }}>
                        <p style={{ color: 'white', fontSize: 16, paddingTop: 5, minWidth: 150 }}>
                            <a href='#' style={{ color: '#0071e3' }}>Trade Show</a><br />
                            <a href='#' style={{ color: '#0071e3' }}>Pop Up Shop</a><br />
                            <a href='#' style={{ color: '#0071e3' }}>Shipping & Logistics</a><br />
                        </p>
                    </div>
                
                    <div className="col-md-2" style={{ minWidth: 350 }} />
                    <div className="col-md-3" style={{ marginTop: '3%' }}>
                        <input type="email" className=" login-input" id="login-email" placeholder="Username" name="username" onChange={this.inputChanged} />
                        <input type="password" className=" login-input" id="login-password" placeholder="Password" name="password" onChange={this.inputChanged} /> <button type="button" id="btn-forgotPass" onClick={this.forgotPassword} value="Login">?</button>
                        <button type="button" id="btn-id" onClick={this.login} value="Login"><img id='signInBtn' src="images/signInImg.jpg" alt='shop' /></button>
                    </div>

                    <Modal show={this.state.showPassword} onHide={this.closePassword}>
                        <Modal.Header closeButton>
                            <Modal.Body>
                                <div>
                                    <h5 className='row'>Forgot Password?</h5>
                                </div>
                            </Modal.Body>
                        </Modal.Header>
                    </Modal>
                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Body>
                                <div>
                                    <h5 className='row'>Missing or invalid credentials. Cannot log in.</h5>
                                </div>
                            </Modal.Body>
                        </Modal.Header>
                    </Modal>
                    <div className="col-md-1" />
                </div>
            </div>
        )
    }

}

export default Footer;