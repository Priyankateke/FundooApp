import React, { Component } from 'react'
import '../App.css'
import '../styles/registration.css'
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import fundooLogo from '../assets/logo.svg'
import { Snackbar } from "@material-ui/core";

import FundooService from "../services/service";
let service = new FundooService();

const NAME_PATTERN = RegExp(
    /^[A-Z]{1}[a-z]{2,}$/
)

const EMAIL_PATTERN = RegExp(
    /^[0-9a-zA-Z]+([.+_-]?[0-9a-zA-Z]+)*([@][0-9a-zA-Z]+){1}([.][a-zA-Z]{2,3}){1,2}$/
)

const PASSWORD_PATTERN = RegExp(
    /^[A-Za-z0-9!@#$%^&*()_]{6,20}$/
)

const initialState = {
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirmPassword: "",
    service: "",
    snackbarOpen: false,
    snackbarMsg: "",

    firstnameError: '',
    lastnameError: '',
    usernameError: '',
    passwordError: '',
    confirmPasswordError: ''
}

export default class Registration extends Component {
    state = initialState;

    handleChange = event => {
        const isCheckbox = event.target.type === "checkbox";
        this.setState({
            [event.target.name]: isCheckbox
                ? event.target.checked
                : event.target.value
        });
        console.log(" handle change", this.state)
    }

    snackbarClose = () => {
        this.setState({ snackbarOpen: false });
    };

    validateTextField = () => {
        let firstnameError = '';
        let lastnameError = '';
        let usernameError = '';
        let passwordError = '';
        let confirmPasswordError = '';

        if (!NAME_PATTERN.test(this.state.firstname)) {
            firstnameError = "firstname is invalid"
        }
        if (!NAME_PATTERN.test(this.state.lastname)) {
            lastnameError = "lastname is invalid "
        }
        if (!EMAIL_PATTERN.test(this.state.username)) {
            usernameError = "invalid email";
        }
        if (!PASSWORD_PATTERN.test(this.state.password)) {
            passwordError = "Invalid Password"
        }
        if (this.state.password !== this.state.confirmPassword) {
            confirmPasswordError = "Password do not match"
        }

        if (firstnameError || lastnameError || usernameError || passwordError || confirmPasswordError) {
            this.setState({ firstnameError, lastnameError, usernameError, passwordError, confirmPasswordError });
            return false;
        }
        return true;
    };

    signUp = event => {
        event.preventDefault();
        const isValid = this.validateTextField();
        if (isValid) {
            console.log(this.state);
            this.registerData();
            this.setState(initialState);
        }
    };

    registerData() {
        const userData = {
            firstName: this.state.firstname,
            lastName: this.state.lastname,
            email: this.state.username,
            password: this.state.password,
            service: this.state.service
        };
        console.log("USER", userData);

        service
            .Registration(userData)
            .then((Response) => {
                console.log("response data==>", Response);
                if (Response.status === 200) {
                    alert("Registration Sucessfull")
                    this.setState({
                        snackbarOpen: true,
                        snackbarMsg: "Registration Sucessfull",
                    });
                    this.props.history.push("/");
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        return (

            <Card className="registration-container" variant="outlined">
                <div className="registration-form" variant="outlined">
                    <div className="fundoo-font-registration">
                        <span className="f">F</span>
                        <span className="u">u</span>
                        <span className="n">n</span>
                        <span className="f">d</span>
                        <span className="o">o</span>
                        <span className="u">o</span>
                    </div>

                    <Snackbar
                        anchorOrigin={{ vertical: "top", horizontal: "center" }}
                        open={this.state.snackbarOpen}
                        autoHideDuration={6000}
                        onClose={this.snackbarClose}
                        message={<span className="Snackbar">{this.state.snackbarMsg}</span>}
                        action={
                            <IconButton
                                key="close"
                                arial-label="close"
                                color="inherit"
                                onClick={this.snackbarClose}
                            ></IconButton>
                        }
                    />

                    <div className="create-account" variant="h5" component="h2" >
                        Create your Fundoo Account</div>
                    <div className="first-last-name">
                        <div className="firstname">
                            <TextField className="firstname-text"
                                id="outlined-basic"
                                size="small"
                                margin="dense"
                                name="firstname"
                                label="First name"
                                variant="outlined"
                                onChange={this.handleChange} />
                            <span className="invalid-feedback">{this.state.firstnameError}</span>
                        </div>
                        <div className="firstname"><TextField className="email"
                            id="outlined-basic"
                            name="lastname"
                            size="small"
                            margin="dense"
                            label="Last name"
                            variant="outlined"
                            onChange={this.handleChange} />
                            <span className="invalid-feedback">{this.state.lastnameError}</span>
                        </div>
                    </div>
                    <div className="username" >
                        <TextField
                            className="username-textfield"
                            id="outlined-basic"
                            size="small"
                            margin="dense"
                            name="username"
                            label="Username"
                            variant="outlined"
                            onChange={this.handleChange} />
                        <span className="invalid-feedback">{this.state.usernameError}</span>
                    </div>

                    <div className="username-warning">You can use numbers, letters & periods</div>

                    <div className="password-confirm">
                        <div className="firstname">
                            <TextField className="firstname-text"
                                id="outlined-basic"
                                size="small"
                                margin="dense"
                                name="password"
                                label="Password"
                                type={this.state.showPassword ? "text" : "password"}
                                variant="outlined"
                                onChange={this.handleChange} />
                            <span className="invalid-feedback">{this.state.passwordError}</span>
                        </div>
                        <div>
                            <TextField className="email"
                                id="outlined-basic"
                                size="small"
                                margin="dense"
                                name="confirmPassword"
                                label="Confirm"
                                type={this.state.showPassword ? "text" : "password"}
                                variant="outlined"
                                onChange={this.handleChange}
                                defaultValue={this.state.confirmPassword}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end" sytle={{ width: "1px" }}>
                                            <IconButton
                                                onClick={() =>
                                                    this.setState({
                                                        showPassword: !this.state.showPassword,
                                                    })
                                                }
                                            >
                                                {this.state.showPassword ? (
                                                    <Visibility />
                                                ) : (
                                                        <VisibilityOff />
                                                    )}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <span className="invalid-feedback">{this.state.confirmPasswordError}</span>
                        </div>
                    </div>
                    <div className="password-warning">Use 8 or more characters with a mix of letters, numbers & symbols</div>
                    <div>
                        <div className="service">
                            <RadioGroup
                                aria-label="service"
                                name="service"
                                value={this.state.value}
                                onChange={this.handleChange}
                            >
                                <h6>Service:</h6>
                                <div className="radio">
                                    <FormControlLabel
                                        value="Basic"
                                        defaultValue={this.state.service}
                                        onChange={this.handleChange}
                                        control={<Radio color="primary" fontSize="17px" />}
                                        label="Basic"
                                        labelPlacement="end"
                                    />
                                    <FormControlLabel
                                        value="Advance"
                                        defaultValue={this.state.service}
                                        onChange={this.handleChange}
                                        control={<Radio color="primary" fontSize="17px" />}
                                        label="Advance"
                                    />
                                </div>
                            </RadioGroup>
                        </div>
                    </div>
                    <div className="buttom-button">
                        <div>
                            <Button size="small" color="primary"
                                href="/"> Sign in instead</Button>
                        </div>
                        <div>
                            <Button
                                variant="contained"
                                size="small"
                                color="primary"
                                onClick={this.signUp} >Sign up</Button>
                        </div>
                    </div>
                </div>
                <div className="fundoo-image-container">
                    <img src={fundooLogo} alt='fundoo logo'
                        width="244" height="244" ></img>
                    <figcaption className='logo-caption'>One account. All of Fundoo </figcaption>
                    <figcaption className='logo-caption'>working for you.</figcaption>
                </div>
            </Card>

        )
    }
}