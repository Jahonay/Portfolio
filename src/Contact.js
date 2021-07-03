import React from 'react';
import './App.css';
import {TextField, Button } from "@material-ui/core";

  /*
                <div className="label-holder">
                    <div className="form-section">
                        <label>Name</label>
                    </div>
                    <div className="form-section">
                        <label>Email</label>
                    </div>
                    <div className="form-section">
                        <label>Phone Number</label>
                    </div>
                    <div className="form-section">
                        <label>Message</label>
                    </div>
                </div>
                */


function Contact(){
    return(
        <div className='contact'>
        <form name="contact" method="POST"  data-netlify="true">
            
            <div className="row" id="contact">
           
                <h1>Leave a message!</h1>
            
                <div className="form holder">
                    <div className="form-section">
                        <TextField class ="textfield" type="text" name="name"  placeholder="name" required/>
                    </div>
                        
                    <div className="form-section">
                        <TextField  class ="textfield"  type="email" name="email"  placeholder="email"required/>
                        
                    </div>
                    <div className="form-section">
                        <TextField class ="textfield" type="text" name="phone number" placeholder="phone" required/>
                    </div>
                    <div className="form-section">
                        <TextField class ="textfield" type="text" name="message" placeholder="message" required multiline rowsMax={4}   variant="outlined" id="outlined-multiline-flexible"   />
                    </div>
                </div>
                <div className="button-wrap">
                    <Button type="submit" color="primary" variant="contained">Submit</Button>
                </div>
            </div>
            
            
        </form>
        </div>
    );
}
export default Contact;