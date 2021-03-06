import React, { Component } from "react";
import NavBar from '../NavBar/NavBar';
import Intro from './Intro';
import Sales from './Sales';
import Marketing from './Marketing';
import Widget from './Widget';
import ProductionMarketing from './ProductionDesign'
import './Index.css';
import { SSL_OP_TLS_ROLLBACK_BUG } from "constants";
import PopUpTradeShow from "./PopUpTradeShow";
import Shipping from './Shipping';
import Portfolio from './Portfolio'
import Footer from './Footer'
{/* <Marketing />
    <Sales />
    <ProductionMarketing />
    <PopUpTradeShow />
    <Shipping /> */}
class Index extends Component {
    state = {
        loggedIn: false
    };
    render() {
        return (
            <div>
                <NavBar/>
                <Intro/>
                <Portfolio/>
                <Footer/>
            </div>
        );
    }
}

export default Index;