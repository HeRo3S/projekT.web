const express = require("express");
const router = express.Router();
const article_process = require('./article_process')
const UserAccount = require("./models/user");
const UserInfo = require("./models/user_info");

router.route('/thread')
.post(async (req, res) => {
    article_process.sendArticle('thread', req.body.author, req.body.name, req.body.content).catch((err) => {
        res.send(err)
    }).then(() => {
        console.log("finished")
        res.status(200).send({message: "completed"})
    })
})
.get(async (req, res) => {
    res.send( await article_process.getArticleList("thread", 3, 'DESC'))
})

module.exports = router;