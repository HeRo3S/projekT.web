const { DataTypes } = require('sequelize');
var db_sequelize = require('./db_sequelize');
var Tag = db_sequelize.define("Tag", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
})

module.exports = Tag;