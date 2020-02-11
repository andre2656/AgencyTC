import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './Index.css'


class Intro extends Component{
    signUp = () => {
        window.location.pathname = "/sign-up";
    }
    render() {
    return(
        <div className = "container" style = {{ display: 'block', backgroundColor: '#000', }}>
    <div className="row" style={{ backgroundColor: '#000', position: 'absolute', right: 0, left: 0, height: 900, marginTop: 20, }}>
        <div className="col-md-1" />
        <div className="col-md-6" id='introText'>
            <h2 className="sharp">Agency Name</h2>
            <p style={{ fontSize: 28 }} className='sharp'>  Intro / Hook line to Sell or get User to keep scrolling</p>
            <p style={{ fontSize: 22 }} className='sharp'> From $20/mo. or $200 with referral.* </p>
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