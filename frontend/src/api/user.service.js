import { instance } from "./index";

// TODO: create user api call here
const postNews = async ({ title, content }) => {
  try {
    const res = await instance.post("/news", { title, content });
    return res;
  } catch (err) {}
};

const getNews = async () => {
  try {
    const res = await instance.get("/news");
    return res;
  } catch (err) {
    console.log(err);
  }
};

const getDetailNew = async (newId) => {
  try {
    const res = await instance.get(`/news/${newId}`);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const getThreads = async () => {
  try {
    const res = await instance.get("/thread");
    return res;
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

// *param res = {message: "Comment success"}
export const postComment = async (threadID, comment) => {
  try {
    const res = await instance.post(`/thread/${threadID}/comment`, { comment });
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
