// attaching views inorder to get imports
// const viewsImport = require('.../views');

var config = {
    type: Phaser.AUTO,
    // sets game size
    width: 960,
    height: 540,
    // defines the physics and gravity of the game
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: true
        }
    },
    // defines the order the the scene functions are loaded
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

// starts the score function
var score = 0;

// sets up the game over function to be called at the end
var gameOver = false;

// starts the game
var game = new Phaser.Game(config);

// preloads all the images
function preload ()
{
    // base set
    // this.load.image('sky', 'assets/images/sky.png');
    // this.load.image('ground', 'assets/images/platform.png');
    this.load.image('star', 'assets/images/star.png');
    this.load.image('bomb', 'assets/images/bomb.png');
    // this.load.spritesheet('dude', 'assets/images/dude.png', { frameWidth: 32, frameHeight: 48 });

    // backgrounds set
    this.load.image('asianMountain', 'assets/images/backgrounds/horizontalBackgrounds/background.png');
    this.load.image('magicForest', 'assets/images/backgrounds/magicForestBackground/background.png');
    this.load.image('postApocalyptic', 'assets/images/backgrounds/parallaxBackground/background.png');

    // sprite set
    this.load.image('samurai', 'assets/images/sprites/samuraiSprite/_PNG/spriteSheet.png', { frameWidth: 1100, frameHeight: 650 });
    this.load.image('alien', 'assets/images/sprites/aliensSprite/alien/PNG/spriteSheet.png', { frameWidth: 230, frameHeight: 398 });
    this.load.image('warrior', 'assets/images/sprites/warriorSpriteFemale/_PNG/spriteSheet.png', { frameWidth: 2000, frameHeight: 1200 });

    // tiles set a
    this.load.image('aTileSq', 'assets/images/tiles/a03a.png');
    this.load.image('aTileSq2', 'assets/images/tiles/a03b.png');
    this.load.image('aTileLtop', 'assets/images/tiles/a04a.png');
    this.load.image('aTileRtop', 'assets/images/tiles/a04b.png');
    this.load.image('aTileRbot', 'assets/images/tiles/a04bb.png');
    this.load.image('aTileLbot', 'assets/images/tiles/a04bc.png');
    // this.load.image('aDoor', 'assets/images/tiles/aDoor.png');

    // tile set c 
    this.load.image('cTileSq', 'assets/images/tiles/c02.png');
    this.load.image('cTileBlock', 'assets/images/tiles/c02b.png');
    this.load.image('cTileBroke', 'assets/images/tiles/c02-broken.png');
    this.load.image('cTileSq2', 'assets/images/tiles/c02c.png');
    this.load.image('cBridgePost', 'assets/images/tiles/cBridge-4.png');
    this.load.image('cDoor', 'assets/images/tiles/cDoor.png');
    
    // tile set e
    this.load.image('eTileSqTopped', 'assets/images/tiles/e01alt.png');
    this.load.image('eTileSq', 'assets/images/tiles/e02.png');
    this.load.image('eTileBroken', 'assets/images/tiles/e02Broken.png');
    this.load.image('eTilePlatform', 'assets/images/tiles/ePlatform.png');

}

// creates most of the game elements
function create ()
{
    this.add.image(480, 270, 'postApocalyptic').setScale(.5)

    // bringing in background image from views
    // console.log('backgroundImport: ${viewsImport.backgrounds()}');

    // bringing in playerSetup from views
    // console.log('spriteImport: ${viewsImport.playerSetup()}');

    // module.imports = playersSetup

    // makes keyboard inputs work
    cursors = this.input.keyboard.createCursorKeys();
    
    // c bridge post
    this.add.image(352, 508, 'cBridgePost').setScale(1);
    this.add.image(352, 444, 'cBridgePost').setScale(1);
    this.add.image(352, 380, 'cBridgePost').setScale(1);
    this.add.image(352, 316, 'cBridgePost').setScale(1);

    // add sprite
    player = this.physics.add.sprite(400, 270, 'alien').setScale(.3)

    // player colides with world edges
    player.setCollideWorldBounds(true).setBounce(0.2)

    // adds animations for player movements
    this.anims.create({
        key:'left',
        frames: [ { key: 'alien', frame: 0 } ],
        frameRate: 20,
        repeat: -1
        });
    this.anims.create({
        key:'turn',
        frames: [ { key: 'alien', frame: 0 } ],
        frameRate: 20,
        repeat: -1
        })
    this.anims.create({
        key:'right',
        frames: [ { key: 'alien', frame: 0 } ],
        frameRate: 20,
        repeat: -1
        })

    // turns some images into platforms
    platforms = this.physics.add.staticGroup();

    // has player stop at a platform
    this.physics.add.collider(player, platforms);

    // c post
    this.add.image(96, 188, 'cBridgePost').setScale(1);
    this.add.image(96, 124, 'cBridgePost').setScale(1);
    this.add.image(96, 60, 'cBridgePost').setScale(1);

    // c post
    this.add.image(928, 412, 'cBridgePost').setScale(1);
    this.add.image(928, 348, 'cBridgePost').setScale(1);
    this.add.image(928, 284, 'cBridgePost').setScale(1);

    // c tiles
    platforms.create(32, 508, 'cTileSq2').setScale(1);
    platforms.create(160, 508, 'cTileBlock').setScale(1);
    platforms.create(96, 508, 'cTileBroke').setScale(1);
    platforms.create(224, 508, 'cTileSq2').setScale(1);
    platforms.create(288, 508, 'cTileBroke').setScale(1);
      
    // a tiles
    platforms.create(32, 252, 'aTileSq').setScale(1);
    platforms.create(96, 252, 'aTileSq2').setScale(1);
    platforms.create(160, 252, 'aTileRtop').setScale(1);
    platforms.create(224, 252, 'aTileLtop').setScale(1);
    platforms.create(288, 252, 'aTileSq2').setScale(1);
    platforms.create(352, 252, 'aTileSq').setScale(1);
    platforms.create(416, 252, 'aTileRtop').setScale(1);

    // e tiles
    platforms.create(32, 1, 'eTileSq').setScale(1);
    platforms.create(96, 1, 'eTileBroken').setScale(1);
    platforms.create(160, 1, 'eTileSq').setScale(1);
    platforms.create(224, 1, 'eTileBroken').setScale(1);
    platforms.create(288, 1, 'eTileSq').setScale(1);
    platforms.create(352, -16, 'eTileBroken').setScale(1);

    // c tiles
    platforms.create(672, 540, 'cTileSq').setScale(1);
    platforms.create(608, 540, 'cTileBlock').setScale(1);
    platforms.create(544, 540, 'cTileBroke').setScale(1);
    platforms.create(480, 540, 'cTileSq2').setScale(1);
    platforms.create(416, 540, 'cTileBroke').setScale(1);
    platforms.create(352, 540, 'cTileBlock').setScale(1);
    platforms.create(736, 540, 'cTileSq').setScale(1);
    platforms.create(800, 540, 'cTileBlock').setScale(1);
    platforms.create(864, 540, 'cTileBroke').setScale(1);
    platforms.create(928, 540, 'cTileBlock').setScale(1);

    // a tiles
    platforms.create(672, 476, 'aTileLbot').setScale(1);
    platforms.create(736, 476, 'aTileSq2').setScale(1);
    platforms.create(800, 476, 'aTileRtop').setScale(1);
    platforms.create(864, 476, 'aTileLtop').setScale(1);
    platforms.create(928, 476, 'aTileSq2').setScale(1);

    // e tiles
    platforms.create(736, 220, 'eTileSq').setScale(1);
    platforms.create(800, 220, 'eTileBroken').setScale(1);
    platforms.create(864, 220, 'eTileSq').setScale(1);
    platforms.create(928, 220, 'eTileBroken').setScale(1);

     //  Some stars to collect, 13 in total, evenly spaced 70 pixels apart along the x axis
    //  adds top left stars
     stars1 = this.physics.add.group({
        key: 'star',
        repeat: 6,
        setXY: { x: 46, y: 0, stepX: 70 },
        
    });

    // adds top right stars
    stars2 = this.physics.add.group({
        key: 'star',
        repeat: 6,
        setXY: { x: 466, y: 0, stepX: 70 }
      
    });

    // adds bottom row of stars
    stars3 = this.physics.add.group({
        key: 'star',
        repeat: 12,
        setXY: { x: 0, y: 320, stepX: 70 }
      
    });

    stars1.children.iterate(function (child) {

        //  Give each star a slightly different bounce
        child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

    });

    stars2.children.iterate(function (child) {

        //  Give each star a slightly different bounce
        child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

    });

    stars3.children.iterate(function (child) {

        //  Give each star a slightly different bounce
        child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

    });

    // adds bombs
    bombs = this.physics.add.group();

    //  The score
    scoreText = this.add.text(716, 16, 'score: 0', { fontSize: '32px', fill: '#000' });

    // makes objects collide when touching
    this.physics.add.collider(stars1, platforms);
    this.physics.add.collider(stars2, platforms);
    this.physics.add.collider(stars3, platforms);
    this.physics.add.collider(bombs, platforms);

    // adds overlap function to collect stars
    this.physics.add.overlap(player, stars1, collectStar, null, this);
    this.physics.add.overlap(player, stars2, collectStar, null, this);
    this.physics.add.overlap(player, stars3, collectStar, null, this);

    // adds colide function to be killed by bombs
    this.physics.add.collider(player, bombs, hitBomb, null, this);

}

// updats the game when the player moves or when the game is over
function update ()
{
    if (gameOver)
    {
        // refreshes game
        return;
    }

    if (cursors.left.isDown)
    {
        // moves player left
        player.setVelocityX(-160);
        // changes player animation
        player.anims.play('left', true);

    }
    else if (cursors.right.isDown)
    {
        // moves player right
        player.setVelocityX(160);
        // changes player animation
        player.anims.play('right', true);        
    }
    else
    {
        // defines when the player is not moving
        player.setVelocityX(0);
        // defines image for when the player is not moving
        player.anims.play('turn');
    }

    if (cursors.up.isDown)
    {   
        // moves the player up
        player.setVelocityY(-330);
        // defines image for when the player is up
        player.anims.play('turn');
        
    }
    if (cursors.down.isDown)
    {   
        // moves the player down
        player.setVelocityY(330);
        // defines image for when the player is up
        player.anims.play('turn');
    }
}

// defines how the stars function
function collectStar (player, star)
{
    // makes the stars dissappear
    star.disableBody(true, true);

    //  Add and update the score
    score += 10;
    scoreText.setText('Score: ' + score);

    if (stars1.countActive(true) === 0)
    {
        //  A new batch of stars to collect
        stars1.children.iterate(function (child) {

            child.enableBody(true, child.x, 0, true, true);

        });

        // Jean is not sure what this does
        var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);

        // defines the function of the bombs
        var bomb = bombs.create(x, 16, 'bomb');
        bomb.setBounce(1);
        bomb.setCollideWorldBounds(true);
        bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
        bomb.allowGravity = false;

    }

    if (stars2.countActive(true) === 0)
    {
        //  A new batch of stars to collect
        stars2.children.iterate(function (child) {

            child.enableBody(true, child.x, 0, true, true);

        });

        // Jean is not sure what this does
        var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);

        // defines the function of the bombs
        var bomb = bombs.create(x, 16, 'bomb');
        bomb.setBounce(1);
        bomb.setCollideWorldBounds(true);
        bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
        bomb.allowGravity = false;

    }

    if (stars3.countActive(true) === 0)
    {
        //  A new batch of stars to collect
        stars3.children.iterate(function (child) {

            child.enableBody(true, child.x, 0, true, true);

        });

        // Jean is not sure what this does
        var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);

        // defines the function of the bombs
        var bomb = bombs.create(x, 16, 'bomb');
        bomb.setBounce(1);
        bomb.setCollideWorldBounds(true);
        bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
        bomb.allowGravity = false;

    }

}

// defines how the bombs function
function hitBomb (player, bomb)
{
    // stops all movement
    this.physics.pause();

    // changes player to red
    player.setTint(0xff0000);

    // changes player image
    player.anims.play('turn');

    // sets up game over
    gameOver = true;
}