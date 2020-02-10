import React from "react";
import { Link } from 'react-router-dom';
import './Index.css'


const Footer = () => {
    return (
        <div className="container" style={{ display: 'block', backgroundColor: '#000', }}>
            <div className="row" style={{ backgroundColor: '#000', position: 'absolute', right: 0, left: 0,  height: 200, top: 3900}}>
                <div className="col-md-1" />
                <div className="col-md-10" />

                <div className="col-md-1" />
            </div>
        </div>
    )
}

export default Footer;