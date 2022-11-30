import { instance } from "./index";
const getUsersList = async (pageParam) => {
  try {
    const res = await instance.get(`/admin/users?page=${pageParam}`);
    return res;
  } catch (err) {
    throw err;
  }
};

const deleteUser = async (userID) => {
  try {
    const res = await instance.delete(`/admin/users/${userID}`);
    return res;
  } catch (err) {
    throw err;
  }
};

const deleteArticle = async (threadID) => {
  try {
    const res = await instance.delete(`admin/thread/${threadID}`);
    return res;
  } catch (err) {
    throw err;
  }
};

const updateUserToAdmin = async (userID) => {
  try {
    const res = await instance.post(`/admin/promoteUser/${userID}`);
    return res;
  } catch (err) {
    throw err;
  }
};
