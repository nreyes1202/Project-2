
// Dependencies
// Requiring our models
var db = require("../models");

// Routes
module.exports = function (app) {
  console.log(db.Character)
  // GET route for getting username
  app.get("/api/characters/", function (req, res) {
    db.Character.findAll({})
      .then(function (dbCharacter) {
        res.json(dbCharacter);
      });
  });

  // POST route for saving a new username
  app.post("/api/characters/", function (req, res) {
    console.log(req.body);
    db.Character.create({
      id: "",
      username: req.body.username,
      highScore: req.body.score,
      createdAt: "",
      updatedAt: ""
    })
      .then(function (dbCharacter) {
        res.json(dbCharacter);
      });
  });



  //   // PUT route for updating posts
  //   app.put("/api/posts", function(req, res) {
  //     db.Post.update(req.body,
  //       {
  //         where: {
  //           id: req.body.id
  //         }
  //       })
  //       .then(function(dbPost) {
  //         res.json(dbPost);
  //       });
  //   });
};
