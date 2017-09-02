const express = require('express')
const router = express.Router()
const models = require('../models')

router.get('/api/user/info', function(req, res){
  console.log('req token', req.headers.token);
  res.json({
    user: 'info will be given here'
  })
})

router.post('/api/user/char/create', function(req, res){
  console.log('route working')
  res.json({
    success: true
  })
})

module.exports = router;
