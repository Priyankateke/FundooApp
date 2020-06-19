import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import '../styles/login.css'
import '../styles/forgetPassword.css'

export default class ResetPassword extends Component {
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
            type="password"
            label="New Password"
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
            type="password"
            label="Confirm Password"
          />
        </div>
        <div className="submit-button">
          <Button
            variant="contained"
            color="primary"
            style={{ fontSize: "12px", width: "90px", padding: "7px 0px" }}
            onClick={this.reset}
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