const express = require('express')
const router = express.Router()
const models = require('../models')
var jwtDecode = require('jwt-decode');


router.get('/api/user', function(req, res){
  let decoded = jwtDecode(req.headers.token)
  let userID = decoded.data.id
  models.User.findOne({
    where:{
      id: userID
    },
    include:[
      {model: models.Games},
      {model: models.Characters}
    ]
  }).then(function(user){
    res.json(user);
  })
})

router.post('/api/user/char/create', function(req, res){
  let decoded = jwtDecode(req.headers.token)
  let userID = decoded.data.id
  console.log(req.body);
  const char = models.Characters.build({
    charName: req.body.charName,
    race: req.body.race,
    class: req.body.class,
    str: req.body.str,
    dex: req.body.dex,
    con: req.body.con,
    int: req.body.int,
    wis: req.body.wis,
    subClass: req.body.subClass,
    subRace: req.body.subRace,
    alignment: req.body.alignment,
    background: req.body.background,
    level: req.body.level,
    skillProf: req.body.skillProf,
    userID: userID
  })
  char.save().then(function(){
    res.json({
      charName: req.body.charName,
      race: req.body.race,
      class: req.body.class,
      success: true
    })
  })
  .catch(function(err){
    res.json({
      success: false,
      err: err
    })
  })
})

module.exports = router;
