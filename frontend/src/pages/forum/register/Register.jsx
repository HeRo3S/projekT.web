import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import "./register.css";
import { FormGroup, FormControlLabel } from "@mui/material";

function Register() {
  return (
    <div id="register" className="main">
      <div id="register-content" className="content">
        <h1>REGISTER</h1>
        <form className="registerForm">
          <div className="box">
            <div className="labelContainer">
              <span>Username:</span>
              <span>Email:</span>
              <span>Passwork:</span>
              <span></span>
            </div>
            <div className="inputContainer">
              <TextField
                required
                label="Username"
                type="text"
                placeholder="Enter your username: "
              />
              <TextField
                required
                label="Email"
                type="text"
                placeholder="Enter your email: "
              />
              <TextField
                required
                label="Password"
                type="password"
                placeholder="Enter your password: "
              />
              <FormGroup className="formGroup">
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="I agree with the terms and privacy policy"
                />
              </FormGroup>
            </div>
          </div>
          <button className="normalBtn" type="submit">
            <span>Register</span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
