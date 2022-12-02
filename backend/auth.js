/**
 * Required External Modules
 */
const express = require("express");
const router = express.Router();
const UserAccount = require("./models/user");
const UserInfo = require("./models/user_info");
const jwt = require("jsonwebtoken");
var regMsg = [];

require("dotenv").config();

/**
 * Routes Definitions
 */

router.route("/register").post(async (req, res) => {
  console.log(req.body);
  UserAccount.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  })
    .then(() => {
      res.send({ username: req.body.username, email: req.body.email });
    })
    .catch((error) => {
      JSON.stringify(error);
      console.log(error);
      regMsg = [];
      error.errors.forEach((err) => {
        regMsg.push(err.message);
      });
      res.status(401).send({ regMsg });
    });
});

router.route("/login").post((req, res) => {
  var email = req.body.email;
  var password = req.body.password;
  UserAccount.findOne({ where: { email: email }, include: UserInfo })
    .then(async function (user) {
      if (!user) {
        return res.status(401);
      } else if (!user.validPassword(user, password)) {
        return res.status(401);
      } else {
        user = user.toJSON();
        const { password, ...account_info } = user;
        token = jwt.sign(account_info, process.env.JWT_SECRET, {
          expiresIn: process.env.JWT_EXPIRE,
        });
        return res.send({ accessToken: token, user: account_info });
      }
    })
    .catch((error) => {
      console.log(error);
      return res.status(500).send(error);
    });
});

verifyToken = async (req, res, next) => {
  token = req.headers["x-access-token"];
  if (token) {
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET,);
      req.user = decoded;
      return next();
    } catch (err) {
      console.log(err);
      return res.status(403).send({ message: "Unauthorized" });
    }
  }
  return res.status(403).send({ message: "Unauthorized" });
};

router.get("/logout", (req, res) => {
  if (req.session.user && req.cookies.user_sid) {
    res.clearCookie("user_sid");
    res.redirect("/");
  } else {
    res.redirect("/");
  }
});
/**
 * Module Exports
 */
const auth = {
  authRouter: router,
  verifyToken: verifyToken,
};

module.exports = auth;
