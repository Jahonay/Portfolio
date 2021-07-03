
import './App.css';
import React from 'react';
import {Button} from '@material-ui/core';
import {Link} from 'react-router-dom';
import  './documents/resume.pdf'

function Hero() {
  return ( 
  <>
    <div className="hero-box">
        <div className="hero-overlay">
            <div className="hero">
                <div className="hero-content">
                    <h1>Web Design by John Mackey</h1>
                        <Link to="/ContactPage">
                            <Button variant="contained" color ="primary" className="btncon">
                                Contact
                            </Button>
                        </Link>    
                        <a href='resume.pdf' target="_blank" >
                            <Button variant="outlined" color ="accent" className="resume">
                                Resume
                            </Button>
                        </a>   
                </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default Hero;