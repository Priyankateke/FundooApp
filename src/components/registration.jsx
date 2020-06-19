import React, { Component } from 'react'
import '../App.css'
import '../styles/registration.css'
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import fundooLogo from '../images/logo.svg'

const NAME_PATTERN = RegExp(
    /^[A-Z]{1}[a-z]{2,}$/
)
export default class extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstname: "",
            lastname: "",
            username: "@gmail.com",
            password: "",
            confirmPassword: "",
            isError: {
                firstname: '',
                lastname: '',
                username: '',
                password: '',
                confirmPassword: ''
            }
        }
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
            default:
                break;
        }
        this.setState({
            isError,
            [name]: value
        })

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
                                    name="firstname"
                                    label="First name"
                                    variant="outlined"
                                    style={{ width: "48%;" }}
                                    onChange={this.formValChange} />
                                {this.state.isError.firstname.length > 0 && (
                                    <span className="invalid-feedback">{this.state.isError.firstname}</span>
                                )}
                            </div>
                            <div><TextField className="email"
                                id="outlined-basic"
                                name="lastname"
                                label="Last name"
                                variant="outlined"
                                onChange={this.formValChange} />
                                {this.state.isError.lastname.length > 0 && (
                                    <span className="invalid-feedback">{this.state.isError.lastname}</span>
                                )}
                            </div>
                        </div>
                        <div className="username" >
                            <TextField className="username-textfield" 
                            id="outlined-basic" 
                            name="username" 
                            label="Username" 
                            variant="outlined"
                            value="@gmail.com" />
                        </div>
                        <div className="username-warning">You can use numbers, letters & periods</div>
                        <div className="password-confirm">
                            <div className="firstname">
                                <TextField className="firstname-text"
                                    id="outlined-basic"
                                    name="password"
                                    label="Password"
                                    type="password"
                                    variant="outlined"
                                    style={{ width: "48%;" }} />
                            </div>
                            <div>
                                <TextField className="email"
                                    id="outlined-basic"
                                    name="confirmPassword"
                                    label="Confirm"
                                    type="password"
                                    variant="outlined" />
                            </div>
                        </div>
                        <div className="password-warning">Use 8 or more characters with a mix of letters, numbers & symbols</div>
                        <div className="buttom-button">
                            <div>
                                <Button size="small" color="primary"
                                    href="/"> Sign in instead</Button>
                            </div>
                            <div>
                                <Button variant="contained" size="small" color="primary">Sign up</Button>
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