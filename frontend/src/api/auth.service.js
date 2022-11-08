import instance from "./index.js";

export const login = async (userCredentials) => {
  const { data } = await instance.post("/login", {
    email: userCredentials.email,
    password: userCredentials.password,
  });
  if (data.accessToken) {
    localStorage.setItem("user", JSON.stringify(data));
  }
  return data;
};

export const logout = () => {
  localStorage.removeItem("user");
};

export const register = async (userCredentials) => {
  const { data } = await instance.post("/register", {
    username: userCredentials.username,
    password: userCredentials.password,
    email: userCredentials.email,
  });
  return data;
};
