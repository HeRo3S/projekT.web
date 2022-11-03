import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import "./register.css";
import { FormGroup, FormControlLabel } from "@mui/material";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";

function Register() {
  return (
    <div className="mainContainer">
      <h1>REGISTER</h1>
      <form className="registerForm">
        <div className="box">
          <div className="labelContainer"></div>
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
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="I agree with the terms and privacy policy"
              />
            </FormGroup>
          </div>
        </div>
        <button className="registerButton" type="submit">
          <AppRegistrationIcon />
          <span>Register</span>
        </button>
      </form>
    </div>
  );
}

export default Register;
