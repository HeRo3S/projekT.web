import { instance } from "./index.js";

const login = async (userCredentials) => {
  const { data } = await instance.post("/login", {
    email: userCredentials.email,
    password: userCredentials.password,
  });
  if (data.accessToken) {
    localStorage.setItem("user", JSON.stringify(data));
  }
  return data;
};

const logout = () => {
  localStorage.removeItem("user");
};

const register = async (userCredentials) => {
  const { data } = await instance.post("/register", {
    username: userCredentials.username,
    password: userCredentials.password,
    email: userCredentials.email,
  });
  return data;
};

const refresh = async ({ refreshToken }) => {
  const data = await instance.post("/refresh", {
    // TODO: information for refresh here
    token: refreshToken,
  });
  return data;
};

const AuthService = {
  login,
  logout,
  register,
  refresh,
};
export default AuthService;
