import React, { Component } from 'react'
import '../App.css'
import '../styles/login.css'
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { BrowserRouter as Link } from 'react-router-dom';


export default class Login extends Component {

    render() {
        return (
            <Card className="login-card" variant="outlined">
                <CardContent>
                    <Typography className="fundoo-font">
                        <span className="f">F</span>
                        <span className="u">u</span>
                        <span className="n">n</span>
                        <span className="f">d</span>
                        <span className="o">o</span>
                        <span className="u">o</span>
                    </Typography>
                    <Typography className="sign-in">
                        <span>Sign in</span>
                    </Typography>
                    <div className="fundoo-account">Use your Fundoo Account</div>
                    <div className="form">
                        <div className="login-form">
                            <TextField className="email" id="outlined-basic" label="Email or Phone" variant="outlined" />
                        </div>
                        <div><TextField className="password" id="outlined-basic" label="password" type="password" variant="outlined" /></div>
                        {/* <div className="forget-password" >Forget password?</div> */}

                        <div className="forget-password">
                            <Button size="small" 
                                href="/forgetPassword"  >
                                <div className="forget-password">Forget password?
                                  </div>
                            </Button>
                        </div>

                    </div>
                    <div className="bottom">
                        <Link to={"/registration"} >
                            <Button size="small" className="forget-password"
                                href="/registration"  >
                                <div className="forget-password">Create account?
                                  </div>
                            </Button>
                        </Link>
                        <div>
                            <Button variant="contained" size="medium" color="primary">Sign In</Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        );
    }
}