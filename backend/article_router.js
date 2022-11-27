const express = require("express");
const router = express.Router();
const article_process = require("./article_process");
const { verifyToken } = require("./auth");

router
  .route("/thread/:id?")
  .post(verifyToken, async (req, res) => {
    try {
      const thread = await article_process.sendArticle(
        "thread",
        req.user.id,
        req.body.name,
        req.body.content
      );
      if (thread.id) {
        res.status(200).send({ message: "Thread posted", threadID: thread.id });
        return;
      }
    } catch (err) {
      console.log(err);
      res.send({ message: "An error has occurred" });
    }
  })
  .get(async (req, res) => {
    if (!req.params.id) {
      res.send(await article_process.getArticleList("thread", 3, "DESC"));
    } else {
      article_process
        .getArticle(req.params.id)
        .then((data) => {
          res.send(data);
        })
        .catch((err) => {
          console.log(err);
          res.send({ message: "An error has occurred" });
        });
    }
  });

router
  .route("/news/:id?")
  .post(verifyToken, async (req, res) => {
    try {
      const news = await article_process.sendArticle(
        "news",
        req.user.id,
        req.body.title,
        req.body.content
      );
      if (news.id) {
        res.status(200).send({ message: "News posted", newsID: news.id });
        return;
      }
    } catch (err) {
      console.log(err);
      res.send({ message: "An error has occurred" });
    }
  })
  .get(async (req, res) => {
    if (!req.params.id) {
      res.send(await article_process.getArticleList("news", 3, "DESC"));
    } else {
      article_process
        .getArticle(req.params.id)
        .then((data) => {
          res.send(data);
        })
        .catch((err) => {
          console.log(err);
          res.send({ message: "An error has occurred" });
        });
    }
  });
module.exports = router;
