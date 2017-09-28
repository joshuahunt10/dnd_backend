const express = require('express')
const router = express.Router()
const models = require('../models')
const jwt = require('jsonwebtoken')
const secret = require('../config/main')
var passwordHash = require('password-hash')


router.post('/api/register', function(req, res){
  var hashedPassword = passwordHash.generate(req.body.password)
  const user = models.Users.build({
    name: req.body.name,
    password: hashedPassword,
    email: req.body.email,
    bio: req.body.bio
  })
  user.save().then(function(){
    res.json({
      status: 'success',
      name: req.body.name
    })
  })
})

router.post('/api/authenticate', function(req, res){
  let email = req.body.email
  let password = req.body.password
  models.Users.findOne({
    where:{
      email: email
    }
  }).then(function(u){
    if(passwordHash.verify(password, u.password)){
      console.log('secret from auth route', secret.secret);
      var token = jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        data: u
      }, secret.secret);
      res.json({
        success:true,
        message: 'logged in',
        token: token
      })

    }
    if(!u){
      res.json({
        success: false,
        message: 'Username or password incorrect'
      })
    }
  })
})

module.exports = router;
