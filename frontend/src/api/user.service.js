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

export const getPosts = async () => {
  try {
    const res = await instance.get("/posts");
    return res;
  } catch (err) {}
};
