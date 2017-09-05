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
  }).then(function(user){
    console.log(user);

    const gameIds = user.Characters.map( c => c.GameId )

    models.Games.find({
      where: {id: gameIds}
      }).then( games => {
        if (games) {
          user.Games = games
        } else {
          user.Games = []
        }

        // console.log({user})
        /// TODO figure out how to get user to
        ///   serialize Games in addition to Characters

        res.json(user)
    })

  })
})

router.post('/api/user/char/create', function(req, res){
  let decoded = jwtDecode(req.headers.token)
  let userID = decoded.data.id
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

router.post('/api/games/create', function(req, res){
  let decoded = jwtDecode(req.headers.token)
  let userID = decoded.data.id

  const game = models.Games.build({
    title: req.body.title,
    adminUserId: userID
  })
  game.save().then(function(game){
    res.json({
      'Game Created': true,
      'Game Name': game.title
    });
  })
})

module.exports = router;
