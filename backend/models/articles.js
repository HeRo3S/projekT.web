const { DataTypes } = require('sequelize');
var Comment = require("./comment");
var Tag = require("./tag");
var db_sequelize = require('./db_sequelize');
var Article = db_sequelize.define("Article", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    authorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    a_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    }
})
Tag.hasMany(Article, {
    foreignKey: 'tagId',
})
Article.hasMany(Comment, {
    foreignKey: 'articleId',
})
Comment.belongsTo(Article, {
    foreignKey: 'articleId',
})
module.exports = Article;