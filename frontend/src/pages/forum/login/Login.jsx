import TextField from "@mui/material/TextField";
import { useState } from "react";
import { login } from "../../../api/auth.service";
import "./login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await login({
        email,
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
              <span>Email:</span>
              <span>Password:</span>
            </div>
            <div className="inputContainer">
              <TextField
                className="input"
                required
                label="Email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email: "
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
