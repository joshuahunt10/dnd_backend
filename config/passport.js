var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;
var models = require('../models')
var config = require('./main');

module.exports = function(passport){
  var opts = {};
  // opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
  opts.jwtFromRequest = ExtractJwt.fromHeader('token')

  opts.secretOrKey = config.secret;
  passport.use(new JwtStrategy(opts, function(jwt_payload, done){
    models.User.findOne({
      where:{
        email: jwt_payload.data.email
      }
    }).then(function(user){
      console.log('user in the passport.js',user);
      if(user){
        done(null, user)
      }
    })
  }))
}
