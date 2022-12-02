const Article = require("./models/articles");
const UserAccount = require("./models/user");
const UserInfo = require("./models/user_info");
const moment = require("moment");
const Comment = require("./models/comment");
const Sequelize = require("sequelize");
const { model } = require("./models/db_sequelize");
exports.sendArticle = async function (category, author, name, content) {
  //function to send article to database
  const article = await Article.create({
    category: category,
    authorId: author,
    a_name: name,
    content: content,
  }).catch((error) => {
    throw error;
  });
  return article;
};

exports.sendComment = async function (article, author, content) {
  const comment = await Comment.create({
    authorId: author,
    articleId: article,
    content: content,
  }).catch((error) => {
    throw error;
  });
  return comment;
};

exports.editArticle = async function (id, category, name, content) {
  await Article.update(
    { category: category, a_name: name, content: content },
    {
      where: {
        id: id,
      },
    }
  ).catch((error) => {
    throw error;
  });
};

exports.getArticlesID = async function (category, amount, sort) {
  /*Get a number of article from database
    category: category of articles to get
    amount: the number of articles to get
    sort: asc/desc get the articles by ascending/descending id
*/
  var raw_data = await Article.findAll({
    attributes: ["id", "a_name", "createdAt"],
    where: {
      category: category,
    },
    order: [["createdAt", sort]],
    limit: amount,
  }).catch((error) => {
    throw error;
  });
  var data = [];
  for (sub of raw_data) {
    sub = sub.toJSON();
    sub.createdAt.toUTCString();
    sub.createdAt = moment(sub.createdAt).local().format("DD/MM/YYYY HH:mm");
    sub.updatedAt.toUTCString();
    sub.updatedAt = moment(sub.updatedAt).local().format("DD/MM/YYYY HH:mm");
    data.push(sub);
  }
  return data;
};

exports.getArticle = async function (id) {
  var data = await Article.findByPk(id, {
    include: [
      {
        model: UserAccount,
        attributes: ["username"],
        include: [
          {
            model: UserInfo,
            attributes: ["displayName"],
          },
        ],
      },
    ],
  }).catch((error) => {
    throw error;
  });
  data = data.toJSON();
  data.createdAt.toUTCString();
  data.createdAt = moment(data.createdAt).local().format("DD/MM/YYYY HH:mm");
  data.updatedAt.toUTCString();
  data.updatedAt = moment(data.updatedAt).local().format("DD/MM/YYYY HH:mm");
  return data;
  //Get an article from the database by id
  // command = `select * from articles where id = \'${id}\'`
  // return new Promise(function (resolve, reject) {
  //   con.query(command, function (err,rows) {
  //     if(err) {
  //       return reject(err);
  //     }

  //       //Process data to change date to local time
  //       for(data of rows){
  //         data.a_date.toUTCString();
  //         data.a_date = moment(data.a_date).local().format("DD/MM/YYYY HH:mm");
  //       }

  //     resolve(rows);
  //   })
  // })
};

//Delete an article from database

exports.deleteArticle = async function (id) {
  Article.destroy({
    where: {
      id: id,
    },
  }).catch((error) => {
    throw error;
  });
};

exports.getComment = async function (id, amount, sort) {
  var raw_data = await Comment.findAll({
    where: {
      articleId: id,
    },
    include: [
      {
        model: UserAccount,
        attributes: ["username", "id"],
        include: [
          {
            model: UserInfo,
            attributes: ["displayName"],
          },
        ],
      },
    ],
    limit: amount,
    order: [["updatedAt", sort]],
  }).catch((error) => {
    throw error;
  });
  var data = [];
  for (sub of raw_data) {
    sub = sub.toJSON();
    sub.createdAt.toUTCString();
    sub.createdAt = moment(sub.createdAt).local().format("DD/MM/YYYY HH:mm");
    sub.updatedAt.toUTCString();
    sub.updatedAt = moment(sub.updateddAt).local().format("DD/MM/YYYY HH:mm");
    data.push(sub);
  }
  return data;
};

exports.getArticleList = async function (category, amount, sort) {
  /*Get a number of article from database
      category: category of articles to get
      amount: the number of articles to get
      sort: asc/desc get the articles by ascending/descending id
  */
  var raw_data = await Article.findAll({
    subQuery: false,
    attributes: [
      "id",
      "a_name",
      "createdAt",
      "updatedAt",
      [Sequelize.fn("COUNT", Sequelize.col("comments.id")), "commentCount"],
    ],
    where: {
      category: category,
    },
    order: [["updatedAt", sort]],
    include: [
      {
        model: UserAccount,
        attributes: ["username"],
        include: [
          {
            model: UserInfo,
            attributes: ["displayName"],
          },
        ],
      },
      {
        model: Comment,

        attributes: [],
      },
    ],
    group: ["Article.id"],
    limit: amount,
  }).catch((error) => {
    throw error;
  });
  var data = [];
  test = true;
  for (sub of raw_data) {
    sub = sub.toJSON();
    sub.createdAt.toUTCString();
    sub.createdAt = moment(sub.createdAt).local().format("DD/MM/YYYY HH:mm");
    sub.updatedAt.toUTCString();
    sub.updatedAt = moment(sub.updatedAt).local().format("DD/MM/YYYY HH:mm");
    newSub = { article: sub };
    newSub.latestComment = await this.getComment(sub.id, 1, "DESC");
    data.push(newSub);
  }
  return data;
};

exports.Paginate = (target, page, per_page) => {
  var start_point = per_page * (page - 1);
  var end_point = start_point + per_page;
  if (end_point > target.length) {
    end_point = target.length;
  }
  return target.slice(start_point, end_point);
};
