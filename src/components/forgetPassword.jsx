import React from 'react';
import { Component } from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import '../styles/login.css'
import '../styles/forgetPassword.css'
import IconButton from "@material-ui/core/IconButton";

import { Snackbar } from "@material-ui/core";

import FundooService from "../services/service";
let service = new FundooService();

export default class ForgetPassword extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            snackbarOpen: false,
            snackbarMsg: "",
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    snackbarClose = () => {
        this.setState({ snackbarOpen: false });
    };

    submit = () => {
        if (this.state.email === "") {
            this.setState({
                snackbarOpen: true,
                snackbarMsg: "Email is Required",
            });
        } else if (
            !/^[a-zA-Z0-9]{1,}([.]?[-]?[+]?[a-zA-Z0-9]{1,})?[@]{1}[a-zA-Z0-9]{1,}[.]{1}[a-z]{2,3}([.]?[a-z]{2})?$/.test(this.state.email)
        ) {
            this.setState({
                snackbarOpen: true,
                snackbarMsg: "Invalid email..!",
            });
        } else {
            const user = {
                email: this.state.email,
            };
            service
                .ForgotPassword(user)
                .then((json) => {
                    console.log("responce data==>", json);
                    if (json.status === 200) {
                        this.setState({
                            snackbarOpen: true,
                            snackbarMsg: "Check Your Email..!",
                        });
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    render() {

        return (
            <Card className="forget-password-container" variant="outlined">
                <div className="fundoo-font" align="center">
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

                <span className="email-recovery">Find your email</span>
                <span className="email-recovery">Enter your recovery email</span>
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
                        value={this.state.email}
                        onChange={this.handleChange}
                        inputProps={{ style: { fontSize: "20px", height: "40%" } }}
                    />
                </div>
                <div className="submit-button">
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={this.submit}
                        style={{ width: "90px", padding: "7px 0px", fontSize: "12px" }}
                    >Submit</Button>
                    <Button
                        className="cancel-button"
                        variant="contained"
                        style={{ width: "90px", padding: "7px 0px", fontSize: "12px" }}
                        color="primary"
                        onClick={() => this.props.history.push("/")}
                    >Cancel</Button>
                </div>
            </Card>
        )
    }
}