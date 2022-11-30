const express = require("express");
const router = express.Router();
const article_process = require("./article_process");
const { verifyToken } = require("./auth");

const per_page = 7

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
      var page = 1
      if(req.query.page != null)
      {
        page = req.query.page
      }
      var data = await article_process.getArticleList("thread", 1000, "DESC");
      var total_length = data.length
      data = Paginate(data, page, per_page)
      res.send({data: data, per_page: per_page, total: total_length})
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
      var page = 1
      if(req.query.page != null)
      {
        page = req.query.page
      }
      console.log(req.query.page)
      var data = await article_process.getArticleList("news", 1000, "DESC");
      var total_length = data.length
      data = Paginate(data, page, per_page)
      res.send({data: data, per_page: per_page, total: total_length})
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

  Paginate = (target, page, per_page) =>
  {
    var start_point = per_page * (page - 1)
    var end_point = start_point + per_page
    if(end_point > target.length)
    {
      end_point = target.length
    }
    return target.slice(start_point, end_point)

  }
module.exports = router;
