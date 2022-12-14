import { instance } from "./index";

// TODO: create user api call here
export const postNews = async ({ title, content }) => {
  try {
    const res = await instance.post("/news", { title, content });
    return res;
  } catch (err) {}
};

export const getNews = async (pageParam = 1) => {
  try {
    const res = await instance.get(`/news?page=${pageParam}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const getDetailNew = async (newId) => {
  try {
    const res = await instance.get(`/news/${newId}`);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const getThreads = async (pageParam = 1) => {
  try {
    const res = await instance.get(`/thread?page=${pageParam}`);
    // *param res = {page, total_pages, total_threads, per_page, threads[]}
    return res.data;
  } catch (err) {}
};

export const getDetailsThreads = async (threadID) => {
  try {
    const res = await instance.get(`/thread/${threadID}`);
    return res;
  } catch (err) {
    throw err;
  }
};

export const getComments = async (threadID, pageParam) => {
  try {
    const res = await instance.get(
      `thread/${threadID}/comment?page=${pageParam}`
    );
    return res;
  } catch (err) {
    throw err;
  }
};

// *param res = {message: "Comment success"}
export const postComment = async (threadID, comment) => {
  try {
    const res = await instance.post(`/thread/${threadID}/comment`, {
      content: comment,
    });
    return res;
  } catch (err) {
    throw err;
  }
};

export const postThread = async ({ author, name, content, category }) => {
  try {
    // ? response data {thread_id}
    const res = await instance.post("/thread", {
      category,
      author,
      name,
      content,
    });
    return res;
  } catch (err) {}
};

export const getUserInfo = async (userID) => {
  try {
    const res = await instance.get(`user/${userID}`);
    return res;
  } catch (err) {
    throw err;
  }
};
