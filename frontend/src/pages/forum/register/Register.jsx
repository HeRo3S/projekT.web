import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import "./register.css";
import { FormGroup, FormControlLabel } from "@mui/material";
import { useState } from "react";
import { register } from "../../../api/auth.service";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userInfo = {
      username: username,
      email: email,
      password: password,
    };
    try {
      const res = await register(userInfo);
      if (res) {
        console.log("Register succesful");
        window.location.replace("/forum/login");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div id="register" className="main">
      <div id="register-content" className="content">
        <h1>REGISTER</h1>
        <form className="registerForm" onSubmit={handleSubmit}>
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
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                required
                label="Email"
                type="email"
                placeholder="Enter your email: "
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                required
                label="Password"
                type="password"
                placeholder="Enter your password: "
                onChange={(e) => setPassword(e.target.value)}
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
