import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import '../App.css'
import '../styles/registration.css'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';


export default class extends Component {
    render() {
        return (
            <div >
                <Card className="registration-container" variant="outlined">
                        <div className="registration-form" variant="outlined">
                            <CardContent className="registration-content">

                                <Typography className="fundoo-font-registration">
                                    <span className="f">F</span>
                                    <span className="u">u</span>
                                    <span className="n">n</span>
                                    <span className="f">d</span>
                                    <span className="o">o</span>
                                    <span className="u">o</span>
                                </Typography>

                                <Typography className="create-account" variant="h5" component="h2" >
                                    Create your Fundoo Account</Typography>
                                <div className="first-last-name">
                                    <div className="firstname">
                                        <TextField className="firstname-text" id="outlined-basic" label="Email or Phone" variant="outlined" style={{ width: "48%;" }} />
                                    </div>
                                    <div><TextField className="email" id="outlined-basic" label="Email or Phone" variant="outlined" /></div>
                                </div>
                                <div className="username" >
                                    <TextField className="username-textfield" id="outlined-basic" label="username" variant="outlined" />
                                </div>
                                <div className="username-warning">You can use numbers, letters & periods</div>
                                <div className="first-last-name">
                                    <div className="firstname">
                                        <TextField className="firstname-text" id="outlined-basic" label="Email or Phone" variant="outlined" style={{ width: "48%;" }} />
                                    </div>
                                    <div><TextField className="email" id="outlined-basic" label="Email or Phone" variant="outlined" /></div>
                                </div>
                                <div className="password-warning">Use 8 or more characters with a mix of letters, numbers & symbols</div>
                                <div className="buttom-button">
                                    <div> 
                                        <Button size="small" color="primary">Sign in instead</Button>
                                    </div>
                                    <div>
                                        <Button variant="contained" size="small" color="primary">Sign up</Button>
                                    </div>
                                </div>
                            </CardContent>
                        </div>
                        <div>
                            Hello
                        </div>
                </Card>
            </div >
        )
    }
}