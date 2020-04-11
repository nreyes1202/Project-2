// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/config.js");

// Creates a "Character" model that matches up with DB
// var Character = sequelize.define("character", {
//   // the username (a string)
//   id: {
//     autoIncrement: true,
//     primaryKey: true,
//     type: Sequelize.INTEGER
// },
//   username: {type: Sequelize.STRING
//   },
//   highScore: {type: Sequelize.INTEGER
//   }
// });

// Syncs with DB
// Character.sync();

// Makes the Character Model available for other files (will also create a table)
// module.exports = Character;

module.exports = function(sequelize, DataTypes) {
  var Character = sequelize.define("Post", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    category: {
      type: DataTypes.STRING,
      defaultValue: "Personal"
    }
  });
  return Post;
};