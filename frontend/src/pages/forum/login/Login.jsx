import TextField from "@mui/material/TextField";
import "./login.css";

function Login() {
  return (
    <div id="login" className="main">
      <div id="login-content" className="content">
        <h1>LOGIN</h1>
        <form className="loginForm">
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
                placeholder="Enter your username: "
              />
              <TextField
                className="input"
                required
                label="Password"
                type="password"
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
