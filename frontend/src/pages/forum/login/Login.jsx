import TextField from "@mui/material/TextField";
import axios from "axios";
import { useState } from "react";
import "./login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/login", {
        username,
        password,
      });
      //jwt code in here
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div id="login" className="main">
      <div id="login-content" className="content">
        <h1>LOGIN</h1>
        <form className="loginForm" onSubmit={handleSubmit}>
          <div className="box">
            <div className="labelContainer">
              <span>Username:</span>
              <span>Password:</span>
            </div>
            <div className="inputContainer">
              <TextField
                className="input"
                required
                label="Username"
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username: "
              />
              <TextField
                className="input"
                required
                label="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password: "
              />
            </div>
          </div>
          <button className="normalBtn" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
