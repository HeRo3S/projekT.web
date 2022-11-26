const express = require("express");
const router = express.Router();
const article_process = require("./article_process");
const UserAccount = require("./models/user");
const UserInfo = require("./models/user_info");

router
  .route("/thread")
  .post(async (req, res) => {
    try {
      const thread = await article_process.sendArticle(
        "thread",
        req.body.author,
        req.body.name,
        req.body.content
      );
      if (thread.id) {
        console.log(thread);
        res.status(200).send({ message: "Thread posted", threadID: thread.id });
      }
    } catch (err) {
      res.send(err);
    }
  })
  .get(async (req, res) => {
    res.send(await article_process.getArticleList("thread", 3, "DESC"));
  });

module.exports = router;
