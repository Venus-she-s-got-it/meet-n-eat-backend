const express = require('express');
const User = require('../models/user')

const router = express.Router();

router.get('/', (req, res) => {
    User.find({}).then((users) => {
        res.json(users)
    })
})