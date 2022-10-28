import TextField from "@mui/material/TextField";
import "./login.css";

function Login() {
  return (
    <div className="mainContainer">
      <h1>LOGIN</h1>
      <form className="loginForm">
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
              label="Password"
              type="password"
              placeholder="Enter your password: "
            />
          </div>
        </div>
        <button className="loginButton" type="submit">
          <span>Login</span>
        </button>
      </form>
    </div>
  );
}

export default Login;
