const models = require("../models")

describe("Relationships", () => {

  it("can map characters to users", (done) => {

    // create a user
    // create a character with that user's id
    // fetch the user and see if it includes the character

    const user = models.Users.build({
      name: "req.body.name",
      password: "req.body.password",
      email: "req.body.email",
      bio: "req.body.bio"
    })
    user.save().then((user) => {
      expect(user).toBeTruthy()

      const game= models.Games.build({
        title: "test game",
        adminUserId: user.id
      })
      game.save().then((game) =>{
        expect(game).toBeTruthy()
        console.log(game.id);
        const char = models.Characters.build({
          charName: "req.body.charName",
          race: 1,
          class: 3,
          str: 5,
          dex: 10,
          con: 12,
          int: 13,
          wis: 7,
          UserId: user.id,
          GameId: game.id
        })
        char.save().then(function(){
          expect(char).toBeTruthy()

          models.Users.findOne({
            where:{
              id: user.id
            },
            include:[
              // {model: models.Games},
              {model: models.Characters}
            ]
          }).then( (foundUser) => {
            expect(foundUser.Characters).toBeTruthy()
            done()
          })
        })
      })
    })
  })
})
