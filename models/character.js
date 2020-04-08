// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/config.js");

// Creates a "Character" model that matches up with DB
var Character = sequelize.define("character", {
  // the username (a string)
  username: Sequelize.STRING,
  highScore: Sequelize.INTEGER,
});

// Syncs with DB
Character.sync();

// Makes the Character Model available for other files (will also create a table)
module.exports = Character;
