const express = require("express");
const UserAccount = require("./models/user");
const UserInfo = require("./models/user_info");
const moment = require("moment");
const Sequelize = require("sequelize");
exports.getUserList = async (amount, orderBy, sort, level) =>
{
    data = []
    await UserAccount.findAll({
        attributes:["id", "email", "username", "createdAt"],
        include: {
            model: UserInfo,
            required: true,
            where:{
                permissionLevel: level
            }
        },
        order: [[orderBy, sort]],
        group:["UserAccount.id"],
        limit: amount,

    }).then(users => {
        for(sub of users)
        {
            sub = sub.toJSON();
            sub.createdAt.toUTCString();
            sub.createdAt = moment(sub.createdAt).local().format("DD/MM/YYYY HH:mm");
            data.push(sub)
        }
    }).catch(err => {
        throw err
    })
    return data
}

exports.getUserDetail = async (id) => 
{
    var user
    await UserAccount.findByPk(id, {
        attributes:["id", "email", "username", "createdAt"],
        include: UserInfo,
    }).then(data => {
        user = data.toJSON()
        user.createdAt.toUTCString();
        user.createdAt = moment(user.createdAt).local().format("DD/MM/YYYY HH:mm");
    }).catch(err => {
        throw err
    })
    return user
}

exports.deleteUser = async (id) => 
{
    await UserAccount.destroy({
        where:{
            id: id
        }
    }).catch(err =>
        {
            throw err
        })
}

exports.setPermissionLevel = async (id, level) =>
{
    await UserInfo.update({
        where:{
            id: id
        },
        attributes:
        {
            permissionLevel : level
        }
    }).catch(err =>
        {
            throw err
        })
}

