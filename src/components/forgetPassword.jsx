import React from 'react'
import { Component } from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import '../styles/login.css'
import '../styles/forgetPassword.css'

export default class ForgetPassword extends Component {
    render() {
        return (
            <Card className="forget-password-container" variant="outlined">
                <div className="fundoo-font" align="center">
                    <span class="f">F</span>
                    <span class="u">u</span>
                    <span class="n">n</span>
                    <span class="f">d</span>
                    <span class="o">o</span>
                    <span class="u">o</span>
                </div>

                <span class="email-recovery">Find your email</span>
                <span class="email-recovery">Enter your recovery email</span>
                <br />
                <div className="email-textfield">
                    <TextField id="outlined-basic"
                        margin="dense"
                        size="small"
                        type="search"
                        variant="outlined"
                        name="email"
                        style={{ width: "80%" }}
                        label="Email"
                        inputProps={{ style: { fontSize: "20px", height: "40%" } }} 
                         />
                </div>
                <div className="submit-button">
                    <Button
                        variant="contained"
                        color="primary"
                        style={{ width: "90px", padding: "7px 0px", fontSize: "12px" }}
                    >Submit</Button>
                    <Button
                        className="cancel-button"
                        variant="contained"
                        style={{ width: "90px", padding: "7px 0px", fontSize: "12px" }}
                        color="primary"
                    >Cancel</Button>
                </div>
            </Card>
        )
    }
}