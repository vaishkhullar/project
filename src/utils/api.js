import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://openapi-be-news-1.onrender.com/api",
});

export const getArticles = (topics, sort_by, order) => {
  return newsApi
    .get("/articles", {
      params: { topic: topics, sort_by: sort_by, order: order },
    })
    .then((res) => {
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

export const getComments = (article_id) => {
  return newsApi.get(`/articles/${article_id}/comments`).then((res) => {
    return res.data;
  });
};

export const postComment = (article_id, comment, username) => {
  console.log(comment);
  return newsApi
    .post(`/articles/${article_id}/comments`, {
      username: username,
      body: comment,
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
