const express = require('express');
const mongoose = require('mongoose');
const pathToSwaggerUi = require('swagger-ui-dist').absolutePath()
const User = require('./database/user.model');

mongoose.connect('mongodb://user:password@db:27017/april-2021')

const app = express()

app.use(express.static(pathToSwaggerUi))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/users', async (req, res) => {
    const users = await User.find();
    res.json(users)
})

app.post('/users', async (req, res) => {
    const user = await User.create(req.body);
    res.json(user)
})

app.listen(5000, '0.0.0.0', () => {
    console.log('server started');
})
