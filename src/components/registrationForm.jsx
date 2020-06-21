import React, { Component } from 'react'
import '../App.css'
import '../styles/registration.css'
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import fundooLogo from '../assets/logo.svg'

import FundooService from "../services/service";
let service = new FundooService();

const NAME_PATTERN = RegExp(
    /^[A-Z]{1}[a-z]{2,}$/
)

const EMAIL_PATTERN = RegExp(
    /^[0-9a-zA-Z]+([.+_-]?[0-9a-zA-Z]+)*([@][0-9a-zA-Z]+){1}([.][a-zA-Z]{2,3}){1,2}$/
)

const PASSWORD_PATTERN = RegExp(
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=[^$@!#%*?&]*[$#@!%*?&][^$@!#%*?&]*$).{8,}/
)

const initialState = {
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirmPassword: "",

    firstnameError: '',
    lastnameError: '',
    usernameError: '',
    passwordError: '',
    confirmPasswordError: ''
}

export default class RegistrationForm extends Component {
    state = initialState;

    formValChange = event => {
        const isCheckbox = event.target.type === "checkbox";
        this.setState({
            [event.target.name]: isCheckbox
                ? event.target.checked
                : event.target.value
        });
    }

    validate = () => {
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

    onSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state);
            this.storeData();
            this.setState(initialState);
        }
    };


    storeData() {
        const userData = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            username: this.state.username,
            password: this.state.password
        };

        console.log("USER", userData);

        service
            .Registration(userData)
            .then((json) => {
                console.log("response data==>", json);
                if (json.status === 200) {
                    alert("Registration Sucessfull !!")
                }
            })

            .catch((err) => {
                console.log(err);
            });
        this.props.history.push("/");
    }

    render() {
        return (
            <div >
                <Card className="registration-container" variant="outlined">
                    <div className="registration-form" variant="outlined">
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
                                <TextField className="firstname-text"
                                    id="outlined-basic"
                                    size="small"
                                    margin="dense"
                                    name="firstname"
                                    label="First name"
                                    variant="outlined"
                                    onChange={this.formValChange} />
                                <span className="invalid-feedback">{this.state.firstnameError}</span>
                            </div>
                            <div><TextField className="email"
                                id="outlined-basic"
                                name="lastname"
                                size="small"
                                margin="dense"
                                label="Last name"
                                variant="outlined"
                                onChange={this.formValChange} />
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
                                onChange={this.formValChange} />
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
                                    onChange={this.formValChange} />
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
                                    onChange={this.formValChange}
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
                                    <div class="radio">
                                        <FormControlLabel
                                            value="Basic"
                                            defaultValue={this.state.service}
                                            onChange={this.formValChange}
                                            control={<Radio color="primary" fontSize="17px" />}
                                            label="password"
                                            labelPlacement="end"
                                        />
                                        <FormControlLabel
                                            value="Advance"
                                            defaultValue={this.state.service}
                                            onChange={this.formValChange}
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
                                    onClick={this.onSubmit} >Sign up</Button>
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
            </div >
        )
    }
}