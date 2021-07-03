import './App.css';
import React from 'react';
function About() {
  return ( 
  <>
    <div className='row-box' id="about">
        <div className="overlay-about">
            <div className="row" id="about-row">
                <div className="row-item">
                    <div className="row-item-content">
                        <h1>Quality work</h1>
                        <p>John seeks to provide customers with an exceptional service at an affordable price. 
                        </p>
                    </div>
                </div>
                <div className="row-item">
                    <div className="row-item-content">
                        <h1>Artistic</h1>
                        <p>With a history in Art, John brings a knowledge of web design that can bring your vision to life</p>
                    </div>
                </div>
                <div className="row-item">
                    <div className="row-item-content">
                        <h1>Responsive</h1>
                        <p>Mobile is king, while desktop sites should look beautiful, many users will be using mobile devices
                            make sure that you're not losing those clients.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default About;