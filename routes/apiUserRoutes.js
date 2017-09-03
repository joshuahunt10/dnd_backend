const express = require('express')
const router = express.Router()
const models = require('../models')
const jwt = require('jsonwebtoken')
const secret = require('../config/main')


router.post('/api/register', function(req, res){
  const user = models.User.build({
    name: req.body.name,
    password: req.body.password,
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
  models.User.findOne({
    where:{
      email: email
    }
  }).then(function(u){
    if(email === u.email){
      if(password === u.password){
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
