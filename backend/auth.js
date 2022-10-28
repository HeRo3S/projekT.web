
/**
 * Required External Modules
 */
const { response } = require("express");
const express = require("express");
const router = express.Router();
const UserAccount = require("./models/user");
const UserInfo = require("./models/user_info");
var loginMsg = [];
var regMsg = [];
 require("dotenv").config();

//Session 

var sessionChecker = (req, res, next) => {
  if (req.session.user && req.cookies.user_sid) {
      res.redirect('/');
  } else {
      next();
  }    
};

/**
 * Routes Definitions
 */

 router.route('/register')
 .get(sessionChecker, (req, res) => {
     res.send({response : regMsg, user: req.session.user});
     regMsg = "";
 }).post(async (req, res) => {
     UserAccount.create({
         username: req.body.username,
         email: req.body.email,
         password: req.body.password,
     })
     .then(() => {
         loginMsg = "Register successfully please login to continues";
         res.redirect('/login');
     })
     .catch(error => {
        JSON.stringify(error);
        console.log(error);
        regMsg = [];
        error.errors.forEach(err => {
          regMsg.push(err.message); 
        });
         res.redirect("/register");
     });
 });

router.route('/login').get((req, res) => {
  res.render('login', {response : loginMsg, user: req.session.user});
  loginMsg = "";
}).post((req,res) => {
  var email = req.body.email;
  var password = req.body.password;
  UserAccount.findOne({where: {email : email}, include: UserInfo})
  .then(async function (user){
      if(!user){
        loginMsg = "Incorrect email or password";
        res.redirect("/login");
      }
      else if(!user.validPassword(user, password)){
        loginMsg = "Incorrect email or password";
        res.redirect("/login");
      }
      else{
        req.session.user = user.toJSON();
        delete req.session.user.password;
        console.log(req.session.user);
        res.redirect('/');
      }
  }).catch(error => {
    loginMsg = "Some problem orcurred please try again";
    res.redirect("/login");
  })
})



router.get('/logout', (req, res) => {
  if (req.session.user && req.cookies.user_sid) {
      res.clearCookie('user_sid');
      res.redirect('/');
  } else {
      res.redirect('/');
  }
});
/**
 * Module Exports
 */

 module.exports = router;