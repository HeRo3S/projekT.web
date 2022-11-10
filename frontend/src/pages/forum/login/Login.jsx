import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../redux/features/authSlice";
import { clearMessage } from "../../../redux/features/messageSlice";
import "./login.css";

function Login() {
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  const message = useSelector((state) => state.auth.message);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(login({ email, password }))
      .unwrap()
      .then(() => {
        console.log(user);
      })
      .catch(() => {
        // TODO handle error function
      });
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
