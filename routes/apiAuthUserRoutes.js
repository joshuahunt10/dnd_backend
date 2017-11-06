const express = require('express')
const router = express.Router()
const models = require('../models')
var jwtDecode = require('jwt-decode');


router.get('/api/user', function(req, res){
  let decoded = jwtDecode(req.headers.token)
  let userID = decoded.data.id
  models.Users.findOne({
    where:{
      id: userID
    },
    include:[
      {model: models.Characters}
    ]
  }).then((user) => {
      res.json(user)
    })
  })

  router.post('/api/userdetails', function(req, res){
    models.Users.findOne({
      where:{id: req.body.userId}
    })
    .then((user) => {
        res.json(user)
      })
    })

router.post('/api/user/char/create', function(req, res){
  let decoded = jwtDecode(req.headers.token)
  let userID = decoded.data.id
  const char = models.Characters.build({
    charName: req.body.charName,
    raceId: req.body.raceId,
    classId: req.body.classId,
    raceName: req.body.raceName,
    className: req.body.className,
    str: req.body.str,
    dex: req.body.dex,
    con: req.body.con,
    int: req.body.int,
    wis: req.body.wis,
    cha: req.body.cha,
    currentHP: req.body.currentHP,
    subClass: req.body.subClass,
    subRace: req.body.subRace,
    alignment: req.body.alignment,
    background: req.body.background,
    level: req.body.level,
    skillProf: req.body.skillProf,
    bio: req.body.bio,
    hitDie: req.body.hitDie,
    GameId: req.body.GameId,
    one: req.body.one,
    two: req.body.two,
    three: req.body.three,
    four: req.body.four,
    five: req.body.five,
    six: req.body.six,
    seven: req.body.seven,
    eight: req.body.eight,
    nine: req.body.nine,
    spellList: req.body.spellList,
    UserId: userID
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

router.post('/api/user/onechar', (req, res) => {
  // let decoded = jwtDecode(req.headers.token)
  // let userID = decoded.data.id
  models.Characters.findOne({
    where:{
      id: req.body.charId
    }
  })
  .then((char) => {
    res.json(char)
  })
})

router.get('/api/games', function(req, res){
  let decoded = jwtDecode(req.headers.token)
  let userID = decoded.data.id
  models.Games.findAll({
    include:[
    //   {
    //     model: models.Users
    //
    //   },
      {
        model: models.Characters,
      }
    ]
  }).then(function(game){
    res.json(game);
  })
})

router.post('/api/games/details', function(req, res){
  let decoded = jwtDecode(req.headers.token)
  let userID = decoded.data.id
  models.Games.findOne({
    where: {id: req.body.id},
    include:[
    //   {
    //     model: models.Users
    //
    //   },
      {
        model: models.Characters,
      }
    ]
  }).then(function(game){
    res.json(game);
  })
})

router.post('/api/games/create', function(req, res){
  let decoded = jwtDecode(req.headers.token)
  let userID = decoded.data.id

  const game = models.Games.build({
    title: req.body.title,
    adminUserId: userID,
    description: req.body.description
  })
  game.save().then(function(game){
    res.json({
      'gameCreated': true,
      'gameName': game.title
    });
  })
})

//test this to make sure it all updates.
router.patch('/api/char/update', (req, res) => {
  console.log(req.body);
  models.Characters.update(
    {
      currentHP: parseInt(req.body.currentHP, 10),
      str: req.body.str,
      dex: req.body.dex,
      con: req.body.con,
      int: req.body.int,
      wis: req.body.wis,
      cha: req.body.cha,
      level: req.body.level,
      spellList: req.body.spellList,
      one: req.body.one,
      two: req.body.two,
      three: req.body.three,
      four: req.body.four,
      five: req.body.five,
      six: req.body.six,
      seven: req.body.seven,
      eight: req.body.eight,
      nine: req.body.nine,
    },
    {where: {id: req.body.charId}})
  .then(function(json){
    res.json({
      success: true
    })
  })
  .catch(function(err){
    console.log(err);
  })
})

router.get('/api/char/rollStatus', (req, res) => {
  console.log('rollStatus good');
  res.json({success: true})
})

router.post('/api/char/rollStatus', (req, res) => {
  models.Characters.findOne({
    where:{
      id: req.body.charId
    }
  })
  .then((char) => {
    res.json({
      requestedRoll: char.requestedRoll,
      rollMessage: char.rollMessage
    })
  })
})

router.patch('/api/char/rollStatus', (req, res) => {
  console.log('************************************', req.body.rollMessage)
  models.Characters.update(
    {
      requestedRoll: req.body.rollStatus,
      rollMessage: req.body.rollMessage
    },
    {where: {id: req.body.charId}})
    .then(char => {
      res.json({
        requestedRoll: req.body.rollStatus
      })
    })

    .catch(err => console.log(err))
})

router.post('/api/char/submitRollStatus', (req, res) => {
  models.Characters.findOne({
    where:{
      id: req.body.charId
    }
  })
  .then((char) => {
    res.json({
      submittedRoll: char.submittedRoll,
      rollMessage: char.rollMessage
    })
  })
})

router.patch('/api/char/submitRollStatus', (req, res) => {
  models.Characters.update(
    {
      submittedRoll: req.body.rollStatus,
      requestedRoll: req.body.reqRoll
    },
    {where: {id: req.body.charId}})
    .then(char => {
      console.log("*************************",char);
      res.json({
        requestedRoll: 'Changed'
      })
    })
    .catch(err => console.log(err))
})

module.exports = router;
