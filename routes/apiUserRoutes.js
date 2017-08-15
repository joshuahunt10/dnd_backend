const express = require('express')
const router = express.Router()
const models = require('../models')


router.get('/api/user', function(req, res){
  models.User.findOne({
    where:{
      name: 'josh'
    }
  }).then(function(user){
    res.json({user})
  })
})


module.exports = router;
