import { instance } from "./index";
export const getUsersList = async (pageParam) => {
  try {
    const res = await instance.get(`/admin/users?page=${pageParam}`);
    return res;
  } catch (err) {
    throw err;
  }
};

export const getAdminsList = async (pageParam) => {
  try {
    const res = await instance.get(`/admin/admin?page=${pageParam}`);
    return res;
  } catch (err) {
    throw err;
  }
};

export const deleteUser = async (userID) => {
  try {
    const res = await instance.get(`/admin/delete/users/${userID}`);
    return res;
  } catch (err) {
    throw err;
  }
};

export const deleteArticle = async (threadID) => {
  try {
    const res = await instance.get(`admin/delete/thread/${threadID}`);
    return res;
  } catch (err) {
    throw err;
  }
};

export const updateUserToAdmin = async (userID) => {
  try {
    const res = await instance.post(`/admin/promote_user/${userID}`);
    return res;
  } catch (err) {
    throw err;
  }
};

export const updateAdminToUser = async (userID) => {
  try {
    const res = await instance.post(`admin/demote_user/${userID}`);
    return res;
  } catch (err) {
    throw err;
  }
};
