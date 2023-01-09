import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://openapi-be-news-1.onrender.com/api",
});

export const getArticles = (topics) => {
  return newsApi.get("/articles", { params: { topic: topics } }).then((res) => {
    return res.data.articles;
  });
};

export const getTopics = () => {
  return newsApi.get("/GetTopics").then((res) => {
    return res.data;
  });
};

export const getArticleDetail = (article_id) => {
  return newsApi.get(`/articles/${article_id}`).then((res) => {
    return res.data;
  });
};

export const patchVotes = (article_id, voteVal) => {
  console.log(article_id, voteVal);
  return newsApi
    .patch(`/articles/${article_id}`, {
      inc_votes: voteVal,
      article_id: article_id,
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err, "here");
    });
};
