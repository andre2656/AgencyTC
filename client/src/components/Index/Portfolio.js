import React from "react";
import { Link } from 'react-router-dom';
import './Index.css'


const Portfolio = () => {
    return (
        <div className="container" style={{ backgroundColor: '#0a0a0a', position: 'absolute', right: 50, left: 50, top: 1020, height: 550 }}>
            <div className='row'>
                <div className='col-md-6' id='portCol'>
                    <div class="card bg-dark text-white">
                        <img src="..." class="card-img" alt="..." />
                        <div class="card-img-overlay">
                            <h5 class="card-title">Swim</h5>
                          
                        </div>
                    </div>
                </div>
                <div className='col-md-6' id='portCol'>
                    <div class="card bg-dark text-white">
                        <img src="..." class="card-img" alt="..." />
                        <div class="card-img-overlay">
                            <h5 class="card-title">Surf</h5>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>

            </div>
            <div className='row'>

            </div>
            <div className='row'>

            </div>
        </div>
    )
}

export default Portfolio;