const express           = require('express');
const router            = express.Router();
const mongoose = require('mongoose');

const User = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: false
        }
    });

module.exports = mongoose.model('Users', User);
