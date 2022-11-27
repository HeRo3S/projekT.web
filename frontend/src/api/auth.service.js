import { instance } from "./index.js";

const login = async (userCredentials) => {
  try {
    const { data } = await instance.post("/login", {
      email: userCredentials.email,
      password: userCredentials.password,
    });
    if (data.accessToken) {
      localStorage.setItem("user", JSON.stringify(data));
    }
    return data;
  } catch (err) {
    throw err;
  }
};

const logout = () => {
  localStorage.removeItem("user");
};

const register = async (userCredentials) => {
  try {
    const { data } = await instance.post("/register", {
      username: userCredentials.username,
      password: userCredentials.password,
      email: userCredentials.email,
    });
    return data;
  } catch (err) {
    throw err;
  }
};

const refresh = async ({ refreshToken }) => {
  try {
    const data = await instance.post("/refresh", {
      // TODO: information for refresh here
      token: refreshToken,
    });
    return data;
  } catch (err) {
    throw err;
  }
};

const AuthService = {
  login,
  logout,
  register,
  refresh,
};
export default AuthService;
