const express           = require('express');
const router            = express.Router();
const reply             = require('../helpers/response')
const UserModel         = require('../model/userRoute')
const User = require("../model/UserModel.js")

const saveUser = async (req, res) => {
    const user = new UserModel(req.body);
    try {
        const inserteduser = await user.save();
        return reply.send(res, inserteduser)
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

const getUsers = async (req, res) => {
    try {
        const users = await UserModel.find();
        return reply.send(res, users)
    } catch (err) {
        console.log(err);
    }
}

const updateUser = async (req, res) => {
    try {
        const userUpdate = await UserModel.updateOne({_id: req.params.id}, {
            name: req.body.name,
            email: req.body.email,
            username: req.body.username,
        });
        const response = {
            message: 'Data updated successfully',
            matchedCount: userUpdate.deletedCount
        }
        return reply.send(res, response)
    } catch (err) {
        console.log(err);
    }
}

const deleteUser = async (req, res) => {
    try {
        const userDelete = await UserModel.deleteOne({_id: req.params.id});
        const response = {
            message: 'Data deleted successfully',
            deletedCount: userDelete.deletedCount
        }
        return reply.send(res, response)
    } catch (err) {
        console.log(err);
    }
}

router.post('/save', saveUser)
router.get('/users', getUsers)
router.post('/update/:id', updateUser)
router.post('/delete/:id', deleteUser)

module.exports = router;