const express = require("express");
const user_process = require("./user_process");
const router = express.Router();
const article_process = require("./article_process");
const { verifyToken } = require("./auth");
const { Paginate } = require("./article_process");
const PERMISSION_LEVEL = require("./utils/enum");

const per_page = 6;

router.route("/user/:id").get(async (req, res) => {
  try {
    data = await user_process.getUserDetail(req.params.id);
    return res.status(200).send(data);
  } catch (err) {
    console.log(err);
    return res.status(400).send({ message: "An error has occurred" });
  }
});

router.route("/admin/users").get(verifyToken, async (req, res) => {
  if (req.user.permissionLevel > PERMISSION_LEVEL.SUPER_ADMIN) {
    return res.status(403).send({ message: "Unauthorized" });
  }
  page = 1;
  if (req.query.page != null) {
    page = req.query.page;
  }
  try {
    data = await user_process.getUserList(1000, "createdAt", "ASC", 2);
    total_length = data.length;
    data = Paginate(data, page, per_page);
    return res
      .status(200)
      .send({ data: data, per_page: per_page, total: total_length });
  } catch (err) {
    console.log(err);
    return res.status(400).send({ message: "An error has occurred" });
  }
});

router.route("/admin/admin").get(verifyToken, async (req, res) => {
  if (req.user.userInfo.permissionLevel > PERMISSION_LEVEL.SUPER_ADMIN) {
    return res.status(403).send({ message: "Unauthorized" });
  }
  page = 1;
  if (req.query.page != null) {
    page = req.query.page;
  }
  try {
    data = await user_process.getUserList(1000, "createdAt", "ASC", 1);
    total_length = data.length;
    data = Paginate(data, page, per_page);
    return res
      .status(200)
      .send({ data: data, per_page: per_page, total: total_length });
  } catch (err) {
    console.log(err);
    return res.status(400).send({ message: "An error has occurred" });
  }
});

router.route("/admin/delete/thread/:id").get(verifyToken, async (req, res) => {
  if (req.user.permissionLevel > PERMISSION_LEVEL.ADMIN) {
    return res.status(403).send({ message: "Unauthorized" });
  }
  try {
    await article_process.deleteArticle(req.params.id);
    return res.status(200).send({ message: "Completed" });
  } catch (err) {
    console.log(err);
    return res.status(400).send({ message: "An error has occurred" });
  }
});

router.route("/admin/delete/user/:id").get(verifyToken, async (req, res) => {
  if (req.user.permissionLevel > PERMISSION_LEVEL.SUPER_ADMIN) {
    return res.status(403).send({ message: "Unauthorized" });
  }
  try {
    await user_process.deleteUser(req.params.id);
    return res.status(200).send({ message: "Completed" });
  } catch (err) {
    console.log(err);
    return res.status(400).send({ message: "An error has occurred" });
  }
});

router.route("/admin/promote_user/:id").post(verifyToken, async (req, res) => {
  if (req.user.permissionLevel > PERMISSION_LEVEL.SUPER_ADMIN) {
    return res.status(403).send({ message: "Unauthorized" });
  }
  try {
    await user_process.setPermissionLevel(req.params.id, 1);
    return res.status(200).send({ message: "Completed" });
  } catch (err) {
    console.log(err);
    return res.status(400).send({ message: "An error has occurred" });
  }
});

router.route("/admin/demote_user/:id").post(verifyToken, async (req, res) => {
  if (req.user.permissionLevel > PERMISSION_LEVEL.SUPER_ADMIN) {
    return res.status(403).send({ message: "Unauthorized" });
  }
  try {
    console.log(req.params.id);
    await user_process.setPermissionLevel(req.params.id, 2);
    return res.status(200).send({ message: "Completed" });
  } catch (err) {
    console.log(err);
    return res.status(400).send({ message: "An error has occurred" });
  }
});

module.exports = router;
