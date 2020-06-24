import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Snackbar } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import '../styles/login.css' 
import '../styles/forgetPassword.css'

import FundooService from "../services/service";
let service = new FundooService();

export default class ResetPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showPassword: false,
      newPassword: "",
      confirmpassword: "",
    };
  }

  handleChangeText = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  snackbarClose = () => {
    this.setState({ snackbarOpen: false });
  };

  reset = () => {
    if (this.state.newPassword === "") {
      this.setState({
        snackbarOpen: true,
        snackbarMsg: "Password is Required",
      });
    } else {
      let token = this.props.match.params.token;
      const user = {
        newPassword: this.state.newPassword,
      };
      service
        .Resetpassword(token, user)
        .then((json) => {
          console.log("responce data==>", json);
          if (json.status === 204) {
            this.setState({
              snackbarOpen: true,
              snackbarMsg: "Password reset Sucessfull"
            });
            // alert("Password reset Sucessfull");
          }
          this.props.history.push("/");
        })
        .catch((err) => {
          alert("Token is not valid");
        });
    }
  };

    render() {
        return(
            <Card className="forget-password-container" variant="outlined">
        <div className="fundoo-font" align="center">
          <span class="f">F</span>
          <span class="u">u</span>
          <span class="n">n</span>
          <span class="f">d</span>
          <span class="o">o</span>
          <span class="u">o</span>
        </div>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={this.state.snackbarOpen}
          autoHideDuration={6000}
          onClose={this.snackbarClose}
          message={<span class="Snackbar">{this.state.snackbarMsg}</span>}
          action={
            <IconButton
              key="close"
              arial-label="close"
              color="inherit"
              onClick={this.snackbarClose}
            ></IconButton>
          }
        />
        <span class="email-recovery">Enter new Password</span>
        <br />
        <div className="email-textfield">
          <TextField
            style={{ width: "80%" }}
            size="medium"
            margin="dense"
            id="outlined-adornment-password"
            variant="outlined"
            name="newPassword"
            label="New Password"
            inputProps={{ style: { fontSize: "16px" } }}
            type={this.state.showPassword ? "text" : "password"}
            onChange={this.handleChangeText}
            value={this.state.newPassword}

            InputProps={{
              endAdornment: (
                <InputAdornment position="end" sytle={{ width: "1px" }}>
                  <IconButton
                    onClick={() =>
                      this.setState({ showPassword: !this.state.showPassword })
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
        </div>
        <br />
        <div className="email-textfield">
          <TextField
            style={{ width: "80%" }}
            size="medium"
            margin="dense"
            id="outlined-adornment-password"
            variant="outlined"
            name="password"
            // type="password"
            type={this.state.showPassword ? "text" : "password"}
            label="Confirm Password"
            value={this.state.confirmPassword}
            onChange={this.handleChangeText}

            InputProps={{
              endAdornment: (
                <InputAdornment position="end" sytle={{ width: "1px" }}>
                  <IconButton
                    onClick={() =>
                      this.setState({ showPassword: !this.state.showPassword })
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
        </div>
        <div className="submit-button">
          <Button
            variant="contained"
            color="primary"
            style={{ fontSize: "12px", width: "90px", padding: "7px 0px" }}
            onClick={()=>this.reset}

          >Submit</Button>
          <Button
            className="cancel-button"
            variant="contained"
            style={{ width: "90px", padding: "7px 0px", fontSize: "12px" }}
            color="primary"onClick={() => this.props.history.push("/")}

          >Cancel</Button>
        </div>
      </Card>
        )
    }
}