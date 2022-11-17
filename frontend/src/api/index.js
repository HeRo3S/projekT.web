import axios from "axios";
import jwt_decode from "jwt-decode";
import { refresh } from "../redux/features/authSlice";
import { setMessage } from "../redux/features/messageSlice";

let store;

export const injectStore = (_store) => {
  store = _store;
};

const authHeader = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.accessToken) {
    return { "x-access-token": user.accessToken };
  } else return {};
};

export const instance = axios.create({
  baseURL: "http://localhost:3001/",
  headers: authHeader(),
});

instance.interceptors.request.use(
  async (config) => {
    const user = JSON.parse(localStorage.getItem("user"));
    let currentDate = new Date();
    if (user?.accessToken) {
      const decodeToken = jwt_decode(user.accessToken);
      if (decodeToken.exp * 1000 < currentDate.getTime()) {
        try {
          const res = await axios.post("/refresh", {
            token: user.refreshToken,
          });
          localStorage.setItem("user", JSON.stringify(res));
          store.dispatch(refresh(res.user));
          config.headers["x-access-token"] = res.accessToken;
        } catch (err) {
          // TODO logout
          store.dispatch(setMessage("Refresh token error"));
        }
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
