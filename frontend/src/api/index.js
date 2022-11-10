import axios from "axios";

const authHeader = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.accessToken) {
    return { "x-access-token": user.accessToken };
  } else return {};
};

const instance = axios.create({
  baseURL: "http://localhost:3001/",
  headers: authHeader(),
});

export default instance;
