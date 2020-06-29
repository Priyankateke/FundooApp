import React, { Component } from 'react'
import '../App.css'
import '../styles/login.css'
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { BrowserRouter as Link } from 'react-router-dom';
import IconButton from "@material-ui/core/IconButton";
import { Snackbar } from "@material-ui/core";

import FundooService from "../services/service";
let service = new FundooService();

const EMAIL_PATTERN = RegExp(
    /^[0-9a-zA-Z]+([.+_-]?[0-9a-zA-Z]+)*([@][0-9a-zA-Z]+){1}([.][a-zA-Z]{2,3}){1,2}$/
)

const PASSWORD_PATTERN = RegExp(
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=[^$@!#%*?&]*[$#@!%*?&][^$@!#%*?&]*$).{8,}/
)

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            emailError: "",
            passwordError: "",
            snackbarOpen: false,
            snackbarMessage: "",
        }
    }

    handleChangeEmail = (event) => {
        this.setState({
            email: event.target.value,
        });
    };

    handleChangePassword =(event) => {
        this.setState({
           password: event.target.value,
        });
    };

    snackbarClose = () => {
        this.setState({ snackbarOpen: false });
    };

    handleForgotPassword=()=> {
        this.props.history.push('/forgetPassword')
    }

    handleRegister=()=>{
        this.props.history.push('/registration')
    }


    signIn = () => {
      
        if (!EMAIL_PATTERN.test(this.state.email)) {
            this.setState = {
                emailError: "invalid email"
            }
        }
        if (!PASSWORD_PATTERN.test(this.state.password)) {
            this.setState = {
                passwordError: "Invalid Password"
            }
        }
        this.signInData()
       
    }

    signInData = () => {
        const user = {
            email: this.state.email,
            password: this.state.password,
        };
        service
            .Login(user)
            .then((response) => {
                console.log("responce data==>", response);
                localStorage.setItem("token",response.data.id);
                localStorage.setItem("firstName",response.data.firstName);
                localStorage.setItem("lastName",response.data.lastName);
                localStorage.setItem("email",response.data.email); 
                localStorage.setItem("image",response.data.imageUrl); 
                localStorage.setItem("userId",response.data.userId); 
                this.props.history.push("/dashboard");

                if (response.status === 200) {
                    this.setState({
                        snackbarOpen: true,
                        snackbarMessage: "login successful",
                    });
                    // this.props.history.push("/dashboard");
                    
                }
            })
            .catch((err) => {
                console.log(err);
            });
            

        // alert("sign in")
    }

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

                    <Snackbar
                    anchorOrigin={{ vertical: "top", horizontal: "center" }}
                    open={this.state.snackbarOpen}
                    autoHideDuration={6000}
                    onClose={this.snackbarClose}
                    message={<span className="Snackbar">{this.state.snackbarMessage}</span>}
                    action={
                        <IconButton
                            key="close"
                            arial-label="close"
                            color="inherit"
                            onClick={this.snackbarClose}
                        ></IconButton>
                    }
                />

                    <Typography className="sign-in">
                        <span>Sign in</span>
                    </Typography>
                    <div className="fundoo-account">Use your Fundoo Account</div>
                    <div className="form">
                        <div className="login-form">
                            <TextField className="email"
                                id="outlined-basic"
                                size="small"
                                margin="dense"
                                name="email"
                                label="Email"
                                variant="outlined"
                            
                                onChange={this.handleChangeEmail}
                            />
                            <span className="invalid-feedback">{this.state.emailError}</span>
                        </div>
                        <div><TextField
                            className="password"
                            size="small"
                            margin="dense"
                            id="outlined-basic"
                            name="password"
                            label="password"
                            type="password"
                            variant="outlined"
                            onChange={this.handleChangePassword}
                        />
                            <span className="invalid-feedback">{this.state.passwordError}</span>
                        </div>
                      
                        <div className="forget-password">
                            <Button size="small"
                                // href="/forgetPassword"
                                onClick={this.handleForgotPassword}  >
                                <div className="forget-password">Forget password?
                                  </div>
                            </Button>
                        </div>

                    </div>
                    <div className="bottom">
                        <Link to={"/registration"} >
                            <Button size="small" className="forget-password"
                                // href="/registration"  
                                onClick={this.handleRegister}
                                >
                                <div className="forget-password">Create account?
                                  </div>
                            </Button>
                        </Link>
                        <div>
                            <Button
                                variant="contained"
                                size="medium"
                                color="primary"
                                onClick={this.signIn}>Sign In</Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        );
    }
}