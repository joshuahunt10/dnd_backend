const express = require('express');
const app = express();
const mustache = require("mustache-express");
const models = require("./models")
const bodyparser = require("body-parser");

app.engine('mustache', mustache());
app.set('view engine', 'mustache');
app.use(express.static('public'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}))

const nodeEnv = process.env.NODE_ENV || "development";

const apiUserRoutes = require('./routes/apiUserRoutes')

app.use(apiUserRoutes)

app.listen(4000, function(){
  console.log('I\'m going to get sick of DnD by the end of this');
})

// const user = models.User.build({
//   name: 'josh',
//   password: '123',
//   email: 'josh@gmail.com',
//   bio: 'this is a test profile'
// })
//
// user.save()
