import { instance } from "./index";
export const getUsersList = async (pageParam) => {
  try {
    const res = await instance.get(`/admin/users?page=${pageParam}`);
    return res;
  } catch (err) {
    throw err;
  }
};

export const deleteUser = async (userID) => {
  try {
    const res = await instance.delete(`/admin/users/${userID}`);
    return res;
  } catch (err) {
    throw err;
  }
};

export const deleteArticle = async (threadID) => {
  try {
    const res = await instance.delete(`admin/thread/${threadID}`);
    return res;
  } catch (err) {
    throw err;
  }
};

export const updateUserToAdmin = async (userID) => {
  try {
    const res = await instance.post(`/admin/promoteUser/${userID}`);
    return res;
  } catch (err) {
    throw err;
  }
};

export const updateAdminToUser = async (userID) => {
  try {
    const res = await instance.post(`admin/demoteUser/${userID}`);
    return res;
  } catch (err) {
    throw err;
  }
};
