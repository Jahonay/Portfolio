
import './App.css';
import React from 'react';
import {Button} from '@material-ui/core';

function Hero() {
  return ( 
  <>
    <div className="hero-box">
        <div className="hero-overlay">
            <div className="hero">
                <div className="hero-content">
                    <h1>Web Design by John Mackey</h1>
                    <Button variant="contained" color ="primary">
                        Contact
                    </Button>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default Hero;