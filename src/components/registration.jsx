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
import fundooLogo from '../images/logo.svg'

const NAME_PATTERN = RegExp(
    /^[A-Z]{1}[a-z]{2,}$/
)

const USERNAME_PATTERN = RegExp(
    /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
)

const PASSWORD_PATTERN = RegExp(
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=[^$@!#%*?&]*[$#@!%*?&][^$@!#%*?&]*$).{8,}/
)

const formValid = ({ isError, ...rest }) => {
    let isValid = false;

    Object.values(isError).forEach(val => {
        if (val.length > 0) {
            isValid = false
        } else {
            isValid = true
        }
    });

    Object.values(rest).forEach(val => {
        if (val === null) {
            isValid = false
        } else {
            isValid = true
        }
    });

    return isValid;
};

export default class extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstname: "",
            lastname: "",
            username: "",
            password: "",
            confirmPassword: "",
            showPassword: false,
            isError: {
                firstname: '',
                lastname: '',
                username: '',
                password: '',
                confirmPassword: ''
            }
        }
        this.initialState = this.state;
    }

    formValChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let isError = { ...this.state.isError };
        switch (name) {
            case "firstname":
                isError.firstname = NAME_PATTERN.test(value)
                    ? ""
                    : "First Name is invalid";
                break;
            case "lastname":
                isError.lastname = NAME_PATTERN.test(value)
                    ? ""
                    : "lastname Name is invalid";
                break;
            case "username":
                isError.username = USERNAME_PATTERN.test(value)
                    ? ""
                    : "username Name is invalid";
                break;
            case "password":
                isError.password = PASSWORD_PATTERN.test(value)
                    ? ""
                    : "password is invalid";
                break;
            default:
                break;
        }
        this.setState({
            isError,
            [name]: value
        })

    }

    onSubmit = e => {

        e.preventDefault();

        if (formValid(this.state)) {
            console.log('onsubmit')
            console.log(this.state)
            alert("form valid")

        } else {
            console.log("Form is invalid!");
            alert("form invalid")
        }
    };

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
                                {this.state.isError.firstname.length > 0 && (
                                    <span className="invalid-feedback">{this.state.isError.firstname}</span>
                                )}
                            </div>

                            <div><TextField className="email"
                                id="outlined-basic"
                                name="lastname"
                                size="small"
                                margin="dense"
                                label="Last name"
                                variant="outlined"
                                onChange={this.formValChange} />
                                {this.state.isError.lastname.length > 0 && (
                                    <span className="invalid-feedback">{this.state.isError.lastname}</span>
                                )}
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

                            <div>
                                {this.state.isError.username.length > 0 && (
                                    <span className="invalid-feedback">{this.state.isError.username}</span>
                                )}
                            </div>

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
                                {this.state.isError.password.length > 0 && (
                                    <span className="invalid-feedback">{this.state.isError.password}</span>
                                )}
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
                                
                                {this.state.isError.confirmPassword.length > 0 && (
                                    <span className="invalid-feedback">{this.state.isError.confirmPassword}</span>
                                )}
                                {this.state.password !== this.state.confirmPassword && (<span style={{ color: "red;" }}>Password do not match</span>
                                )}
                            </div>
                        </div>
                        <div className="password-warning">Use 8 or more characters with a mix of letters, numbers & symbols</div>
                        <div className="buttom-button">
                            <div>
                                <Button size="small" color="primary"
                                    href="/"> Sign in instead</Button>
                            </div>
                            <div>
                                <Button variant="contained"
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