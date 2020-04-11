
// Dependencies
// Requiring our model
 var db = require("../models");

// Routes
module.exports = function(app) {
console.log(db.Character)
  // GET route for getting username
  app.get("/api/characters/", function(req, res) {
    db.Character.findAll({})
      .then(function(dbCharacter) {
        res.json(dbCharacter);
      });
  });

//   // POST route for saving a new username
  // app.post("/api/posts", function(req, res) {
  //   console.log(req.body);
  //   db.Post.create({
  //     title: req.body.title,
  //     body: req.body.body,
  //     category: req.body.category
  //   })
  //     .then(function(dbPost) {
  //       res.json(dbPost);
  //     });
  // });



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
