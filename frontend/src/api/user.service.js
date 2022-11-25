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

<<<<<<< HEAD
export const getThreads = async () => {
  try {
    const res = await instance.get("/thread");
    return res;
  } catch (err) {}
};

export const getDetailsThreads = async (threadID) => {
  try {
    const res = await instance.get(`/thread/${threadID}`);
  } catch (err) {}
};

export const postThread = async ({ user, title, content }) => {
  try {
    // ? response data {thread_id}
    const res = await instance.post("/thread", {
      user,
      title,
      content,
    });
=======
export const getPosts = async () => {
  try {
    const res = await instance.get("/posts");
>>>>>>> eb54c66bfa8da3dc4528257b396d35025cf6a267
    return res;
  } catch (err) {}
};
