var config = {
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    // base set
    this.load.image('sky', 'assets/images/sky.png');
    this.load.image('ground', 'assets/images/platform.png');
    this.load.image('star', 'assets/images/star.png');
    this.load.image('bomb', 'assets/images/bomb.png');
    this.load.spritesheet('dude', 'assets/images/dude.png', { frameWidth: 32, frameHeight: 48 });

    // backgrounds set

    
    this.load.image('asianMountain', 'assets/images/backgrounds/horizontalBackgrounds/background.png');
    this.load.image('magicForest', 'assets/images/backgrounds/magicForestBackground/background.png');
    this.load.image('postapoochplus', 'assets/images/backgrounds/parallaxBackground/background.png');

    // sprite set
    this.load.image('samurai', 'assets/images/sprites/samuraiSprite/_PNG/spriteSheet.png');
    this.load.image('alien', 'assets/images/sprites/aliensSprite/alien/PNG/spriteSheet.png');
    this.load.image('warrior', 'assets/images/sprite/warriorSpriteFemale/_PNG/spriteSheet.png');

}

// var jean = (
//     this.add.image(960, 540, 'warrior');
// )

// var nilsen = (
//     this.add.image(960, 540, 'alien');
// )

// var derrick = (
//     this.add.image(960, 540, 'samurai');
// )

// var imgMountain = (
//     this.add.image(960, 540, 'asianMountain');
// )

// var imgForest = (
//     this.add.image(960, 540, 'amagicForest');
// )

// var imgPostApocalyptic = (
//     this.add.image(960, 540, 'postapoochplus');
// )

// function bkgrnd= make sense of view data

function create ()
{
    // background image
    this.add.image(960, 540, 'postapoochplus');
    
    // bkgrnd();

    platforms = this.physics.add.staticGroup();

    platforms.create(400, 568, 'ground').setScale(2).refreshBody();

    platforms.create(600, 400, 'ground');
    platforms.create(50, 250, 'ground');
    platforms.create(750, 220, 'ground');
}



function update ()
{
}