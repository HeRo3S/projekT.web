import axios from "axios";

const authHeader = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.accessToken) {
    return { "x-access-token": user.accessToken };
  } else {
    return {};
  }
};

const instance = axios.create({
  base_url: "http://localhost:3001",
  headers: {
    // * insert token here
    authHeader,
  },
});

export default instance;
