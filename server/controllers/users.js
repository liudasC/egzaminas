const mongoose = require("mongoose");
const UserModel = require("../models/UsersModel");

// GET
const getUsers = async (req, res) => {
    try {
const users = await UserModel.find();
res.status(200).json(users.map(({ _id, name, age, email, password}) =>
({ id: _id, name, age, email, password})
))
    } catch (error) {
        res.status(500).json(error)
    }
}

// CREATE
const createUser = async (req, res) => {
    const { name, age, email, password } = req.body;
    try {
        const createdUser = await UserModel.create({ name, age, email, password });
        res.status(200).json({
            id: createdUser._id,
            name: createdUser.name,
            age: createdUser.age,
            email: createdUser.email,
            password: createdUser.password,
        })
    } catch (error) {
        res.status(404).json(error)
    }
}

const updateUser = async (req, res) => {

}

const deleteUser = async (req, res) => {

}

module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser
}