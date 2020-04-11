// Dependencies
// =============================================================

module.exports = function(sequelize, Sequelize) {

//Creates a "Character" model that matches up with DB
var Character = sequelize.define("Character", {
  // the username (a string)
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
},
  username: {type: Sequelize.STRING
  },
  highScore: {type: Sequelize.INTEGER
  }
});

//Syncs with DB
Character.sync();

// Makes the Character Model available for other files (will also create a table)
 return Character;

}

