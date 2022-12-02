const express = require("express");
const { PERMISSION_LEVEL } = require("./auth")
const router = express.Router();
const article_process = require("./article_process");
const { verifyToken } = require("./auth");

const per_page_thread = 7
const per_page_news = 9
const per_page_comment = 7
//comment


router.route("/thread/:id/comment").post(verifyToken, async (req, res) =>
{
    try {
    const comment = await article_process.sendComment(req.params.id ,req.user.id, req.body.content);
    if (comment.id) {
      res.status(200).send({ message: "Comment success", commentId: comment.id });
      return;
    }
  } catch (err) {
        console.log(err);
        res.status(400).send({ message: "An error has occurred" });
  }
}).get(async (req, res) =>
{
  try{
    page = 1
    if(req.query.page != null){
      page = req.query.page
    }
    per_page = per_page_comment
    data = await article_process.getComment(req.params.id, 1000, "ASC")
    total = data.length
    data = article_process.Paginate(data, page, per_page)
    return res.status(200).send({data: data, per_page: per_page, total: total})
  }catch(err){
    console.log(err)
    return res.status(400).send({ message: "An error has occurred" });
  }
})

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
        res.status(400).send({ message: "An error has occurred" });
    }
  })
  .get(async (req, res) => {
    if (!req.params.id) {
      var page = 1
      if(req.query.page != null)
      {
        page = req.query.page
      }
      per_page = per_page_thread
      var data = await article_process.getArticleList("thread", 1000, "DESC");
      var total_length = data.length
      data = article_process.Paginate(data, page, per_page)
      res.send({data: data, per_page: per_page, total: total_length})
    } else {
      article_process
        .getArticle(req.params.id)
        .then((data) => {
          res.send(data);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).send({ message: "An error has occurred" });
        });
    }
  });

router
  .route("/news/:id?")
  .post(verifyToken, async (req, res) => {
      try {
          if (req.user.permissionLevel > PERMISSION_LEVEL.ADMIN) {
              return res.status(403).send({ message: "Unauthorized" })
          }
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
        res.status(400).send({ message: "An error has occurred" });
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
      per_page = per_page_news
      var data = await article_process.getArticleList("news", 1000, "DESC");
      var total_length = data.length
      data = article_process.Paginate(data, page, per_page)
      res.send({data: data, per_page: per_page, total: total_length})
    } else {
      article_process
        .getArticle(req.params.id)
        .then((data) => {
          res.send(data);
        })
        .catch((err) => {
            console.log(err);
            res.status.send({ message: "An error has occurred" });
        });
    }
  });

module.exports = router;
