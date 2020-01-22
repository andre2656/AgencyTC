import React, { Component } from "react";
import { Redirect, withRouter } from 'react-router-dom';
import './NavBar.css';
import loginController from '../../controllers/LoginController';
import { Modal } from 'react-bootstrap';

class NavBar extends Component {
  state = {
    email: "",
    password: "",
    error: null,
    loggedIn: false,
    user: null
  }
  login = (e) => {
    e.preventDefault();

    loginController.login(this.state.email, this.state.password, (err, user) => {

      if (err) {
        this.handleShow()
      } else {
        this.props.history.push("/app");
      }
    });
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
    if (this.state.loggedIn) {
      return <Redirect to="/app" />;
    }
    return (
      <div id='NavBody'>
        <form onSubmit={this.login}>
          <div className="form-group" id="sign-up-form">
            <div className="row" id='navRow'>
              <div className="col-md-1" />
              <div className="col-md-1" >
             <img id='navLogo'src="images/TCLogo.jpg" alt='shop' />
                </div>

                <div className='col-md-7'>

                </div>
              {/* <div className="col-md-1">
                <button className="navButton" onClick={this.Sales}>
                  <p className="navTabsTop">Sales</p>
                </button>
              </div>
              <div className="col-md-1">
                <button className="navButton" onClick={this.Production}>
                  <p className="navTabsTop">Production</p>
                </button>
              </div>
              <div className="col-md-1">
                <button className="navButton" onClick={this.Design}>
                  <p className="navTabsTop">Design</p>
                </button>
              </div>
              <div className="col-md-1">
                <button className="navButton" onClick={this.TradeShow}>
                  <p className="navTabsTop">Trade Show</p>
                </button>
              </div>
              <div className="col-md-1">
                <button className="navButton" onClick={this.MarketingPR}>
                  <p className="navTabs">Marketing & PR</p>
                </button>
              </div>
             
              <div className="col-md-1">
                <button className="navButton" onClick={this.PopUp}>
                  <p className="navTabs">Pop Up Shop Development</p>
                </button>
              </div>
              
              <div className="col-md-1">
                <button className="navButton" onClick={this.ShippingLogistics}>
                  <p className="navTabs">Shipping & Logistics</p>
                </button>
              </div> */}
              <div className="col-md-1.5"><input type="email" className=" login-input" id="login-email" placeholder="Email" name="email" onChange={this.inputChanged} /></div>
              <div className="col-md-1.5"><input type="password" className=" login-input" id="login-password" placeholder="Password" name="password" onChange={this.inputChanged} /></div>
              <button type="button" id="btn-id" className="btn btn-dark" onClick={this.login} value="Login">Sign in</button>
              
            </div>
          </div>
        </form>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Body>
              <div>
                <h5 className='row'>Missing or invalid credentials. Cannot log in.</h5>
              </div>
            </Modal.Body>
          </Modal.Header>
        </Modal>
      </div>
    );
  }
};

export default withRouter(NavBar);