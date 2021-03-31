const mongoose = require("mongoose");
const UserModel = require("../models/UsersModel");

// GET
const getUsers = async (req, res) => {
    try {
        const users = await UserModel.find();
        res.status(200).json(users.map(({ _id, name, age, email, password }) =>
            ({ id: _id, name, age, email, password })
        ))
    } catch (error) {
        res.status(500).json({ ERROR: error.message })
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
        res.status(404).json({ ERROR: error.message })
    }
}

// UPDATE
const updateUser = async (req, res) => {
    const { id } = req.params;
    try {
        if (!mongoose.Types.ObjectId.isValid(id))
        throw new Error(`Neteisingas id '${id}' formatas`)
const updatedUser = await UserModel.findByIdAndUpdate(id, req.body, { new: true });
res.status(200).json({updatedUser})
    } catch (error) {
        res.status(404).json({ ERROR: error.message })
    }
}

// DELETE
const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        if (!mongoose.Types.ObjectId.isValid(id))
            throw new Error(`Neteisingas id '${id}' formatas`)
        const deletedUser = await UserModel.findByIdAndDelete(id);
        if (!deletedUser) throw new Error("failed to delete");
        res.status(200).json({ message: "Deleted successfully" })
    } catch (error) {
        res.status(404).json({ ERROR: error.message })
    }
}

module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser
}