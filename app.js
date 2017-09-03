const express = require('express');
var cors = require('cors')
const app = express();
const mustache = require("mustache-express");
const models = require("./models")
const morgan = require('morgan');
const bodyparser = require("body-parser");
const jwt = require('jsonwebtoken')
const jwtSecret = process.env.JWT_SECRET || "JOSHRULES5EVA";
const passport = require('passport');


app.engine('mustache', mustache());
app.set('view engine', 'mustache');
app.set('secret', jwtSecret);
app.use(express.static('public'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}))

const nodeEnv = process.env.NODE_ENV || "development";

const apiUserRoutes = require('./routes/apiUserRoutes')
const apiAuthUserRoutes = require('./routes/apiAuthUserRoutes')

app.use(morgan('dev'));

app.use(passport.initialize())

require('./config/passport')(passport)

app.use(cors())
app.use(apiUserRoutes)
app.use(passport.authenticate('jwt', { session: false }), function(req, res, next){
  console.log('in the middlweare')
  next()
})
app.use(apiAuthUserRoutes)



app.listen(4000, function(){
  console.log('I\'m going to get sick of DnD by the end of this')
})

// const user = models.User.build({
//   name: 'josh',
//   password: '123',
//   email: 'josh@gmail.com',
//   bio: 'this is a test profile'
// })
//
// user.save()

// const char = models.Characters.build({
//   charName: 'josh char',
//   race: 'dwarf',
//   class: 'paladin',
//   userID: 1
// })
//
// char.save()

// const game = models.Games.build({
//   title: 'test game',
//   admin: 1
// })
//
// game.save()

// const join = models.GamesJoin.build({
//   gamesID:1,
//   userID: 1,
//   charID: 1,
// })
//
// join.save()


//The below query will return the character information and the user information and print it out.  If I add console.log(char.User) then it will print only the user information.  So I found the character information but only printed the user associated with it.
// models.Characters.findOne({
//   include: [
//     {
//       model: models.User,
//       as: 'User'
//     }
//   ]
// }).then(function(char){
//   console.log(char.User)
// })

// models.User.findOne({
//   include:[
//     {
//       model: models.Characters,
//       as: 'Character'
//     }
//   ]
// }).then(function(user){
//   console.log(user.Character[0].dataValues); //This returns the user's characters as an array then dataValues is the actual object with the character data.
// })

// models.Games.findOne({
//   include:[
//     {
//       model: models.User
//
//     },
//     {
//       model: models.Characters,
//     }
//   ]
// }).then(function(game){
//   console.log(game);
// })

// models.User.findOne({
//   include:[
//     {model: models.Games},
//     {model: models.Characters}
//   ]
// }).then(function(user){
//   console.log(user);
// })

// models.Characters.findOne({
//   include:[
//     {model: models.Games},
//     {model: models.User}
//   ]
// }).then(function(char){
//   console.log(char);
// })






// user.save()
