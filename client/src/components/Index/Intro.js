import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './Index.css'


class Intro extends Component {
    signUp = () => {
        window.location.pathname = "/sign-up";
    }
    render() {
        return (
            <div className="container" style={{ display: 'block', backgroundColor: '#000', }}>
                <div className="row" style={{ backgroundColor: '#000', position: 'absolute', right: 0, left: 0, height: 900, marginTop: 20, }}>
                    <div className="col-md-1" />
                    <div className="col-md-6" id='introText'>
                        <h2 className="sharp">CTLA</h2><br/>
                        <div className='container'>
                            <div className='row'>
                                <button className='col-md-2' id='portBtns'>SWIM</button>
                                <button className='col-md-2' id='portBtns'>SURF</button>
                                <button className='col-md-2' id='portBtns'>DENIM</button>
                                <button className='col-md-3' id='portBtns'>PRESS & BLOGGERS</button>
                            </div>
                            <div className='row'>
                                <button className='col-md-3' id='portBtns'>CREATIVE DIRECTION</button>
                                <button className='col-md-4' id='portBtns'>SPORTS & ACCESSORIES</button>
                            </div>
                            <div className='row'>
                                <button className='col-md-2' id='portBtns'>TECHNICAL</button>
                                <button className='col-md-2' id='portBtns'>CURRENT</button>
                                <button className='col-md-2' id='portBtns'>CONTACT</button>
                            </div>
                        </div>
                        {/*<p style={{ fontSize: 28 }} className='sharp'> </p>
                        <p style={{ fontSize: 22 }} className='sharp'> From $20/mo. or $200 with referral.* </p> */}<br/><br/>
                        <button className='introSignUpBtn' onClick={this.signUp}> Sign Up </button>
                        <button className='learnMore'>Learn more</button>
                    </div>
                    <div className="col-md-4" >
                        <img id='Logo' src="images/TCLogoBlk.jpg" alt='shop' />
                    </div>
                </div>
            </div >
        )
    }

}

export default Intro;