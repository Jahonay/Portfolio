import React from 'react';
import './App.css';
import {TextField, Button } from "@material-ui/core";

import { makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: 200,
      },
    },
  }));

function Contact(){
    const classes = useStyles();
    return(
        <div className='contact'>
        <form className={classes.root} noValidate autoComplete="off" data-netlify="true">
            <div className="row" id="contact">
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
                <div className="form holder">
                    <div className="form-section">
                        <TextField    required/>
                    </div>
                        
                    <div className="form-section">
                        <TextField     required/>
                        
                    </div>
                    <div className="form-section">
                        <TextField   required/>
                    </div>
                    <div className="form-section">
                        <TextField  required multiline rowsMax={4}   variant="outlined" id="outlined-multiline-flexible"   />
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