// Constructor Function

function Character(name, catchphrase, healthpoints, attack) {
    this.name = name;
    this.catchphrase = catchphrase;
    this.healthpoints = healthpoints;
    this.attack = attack;
    
    
    // Method (within constructor function)
    
    this.printStats = function (){
        console.log("-------------------" );
        console.log("Name: " + this.name );
        console.log("Catchphrase: " + this.catchphrase );
        console.log("HP: " + this.healthpoints );
        console.log("AP: " + this.attack );
        console.log("-------------------" );
    };
    
};
    // New Character call with printStats
    // name, catchphrase, healthpoints, attack, defense, heal, shield


var jean = new Character( 'Jean', 'Oh Gosh, keepgoing, IDK', 20, 9, );
jean.printStats ();