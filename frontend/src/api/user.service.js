import { instance } from "./index";

// TODO: create user api call here
const postNews = async ({ title, content }) => {
  try {
    const res = await instance.post("/news", { title, content });
    return res.data;
  } catch (err) {}
};

const getNews = async () => {
  try {
    const res = await instance.get("/news");
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

const getDetailNew = async (newId) => {
  try {
    const res = await instance.get(`/news/${newId}`);
    return res.data;
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
    return res.data;
  } catch (err) {}
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
