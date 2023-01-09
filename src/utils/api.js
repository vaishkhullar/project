import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://openapi-be-news-1.onrender.com/api",
});

export const getArticles = (topics) => {
  return newsApi.get("/articles").then((res) => {
    return res.data.articles;
  });
};

export const getTopics = () => {
  return newsApi.get("/GetTopics").then((res) => {
    return res.data;
  });
};
