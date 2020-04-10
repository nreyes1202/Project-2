var config = {
    type: Phaser.AUTO,
    width: 960,
    height: 540,
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

var score = 0;
var gameOver = false;

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
    this.load.image('aDoor', 'assets/images/tiles/aDoor.png');

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
    // bkgrnd();

    // background image 'setScale' is cutting the image in half because of .5
    this.add.image(480, 270, 'asianMountain').setScale(.5);
    // this.add.image(480, 270, 'postApocalyptic').setScale(.5);
    // this.add.image(480, 270, 'magicForest').setScale(.5);

    player = this.physics.add.sprite(400, 270, 'samurai').setScale(.25);
    // player = this.physics.add.sprite(480, 270, 'alien').setScale(.3);
    // player = this.physics.add.sprite(560, 270, 'warrior').setScale(.125);

    player.setCollideWorldBounds(true);

    this.anims.create({
        key:'left',
        frames: [ { key: 'samurai', frame: 0 } ],
        // frames: this.anims.generateFrameNumbers('owlDance', { start: 0, end: 22 }),
        frameRate: 20,
        repeat: -1
    })

    this.anims.create({
        key:'turn',
        frames: [ { key: 'samurai', frame: 0 } ],
        frameRate: 20,
        repeat: -1
    })

    this.anims.create({
        key:'right',
        frames: [ { key: 'samurai', frame: 0 } ],
        frameRate: 20,
        repeat: -1
    })

    platforms = this.physics.add.staticGroup();

    this.physics.add.collider(player, platforms);

    // c tiles
    platforms.create(32, 508, 'cTileSq2').setScale(.5);
    platforms.create(160, 508, 'cTileBlock').setScale(.5);
    platforms.create(96, 508, 'cTileBroke').setScale(.5);
    platforms.create(224, 508, 'cTileSq2').setScale(.5);
    platforms.create(288, 508, 'cTileBroke').setScale(.5);
    
    // c bridge post
    this.add.image(352, 508, 'cBridgePost').setScale(.5);
    this.add.image(352, 444, 'cBridgePost').setScale(.5);
    this.add.image(352, 380, 'cBridgePost').setScale(.5);
    this.add.image(352, 316, 'cBridgePost').setScale(.5);
    
    // a tiles
    platforms.create(32, 252, 'aTileSq').setScale(.5);
    platforms.create(96, 252, 'aTileSq2').setScale(.5);
    platforms.create(160, 252, 'aTileRtop').setScale(.5);
    platforms.create(224, 252, 'aTileLtop').setScale(.5);
    platforms.create(288, 252, 'aTileSq2').setScale(.5);
    platforms.create(352, 252, 'aTileSq').setScale(.5);
    platforms.create(416, 252, 'aTileRtop').setScale(.5);

    // c post
    this.add.image(96, 188, 'cBridgePost').setScale(.5);
    this.add.image(96, 124, 'cBridgePost').setScale(.5);
    this.add.image(96, 60, 'cBridgePost').setScale(.5);

    // e tiles
    platforms.create(32, 1, 'eTileSq').setScale(.5);
    platforms.create(96, 1, 'eTileBroken').setScale(.5);
    platforms.create(160, 1, 'eTileSq').setScale(.5);
    platforms.create(224, 1, 'eTileBroken').setScale(.5);
    platforms.create(288, 1, 'eTileSq').setScale(.5);
    platforms.create(352, -16, 'eTileBroken').setScale(.5);

    // c tiles
    platforms.create(672, 540, 'cTileSq').setScale(.5);
    platforms.create(608, 540, 'cTileBlock').setScale(.5);
    platforms.create(544, 540, 'cTileBroke').setScale(.5);
    platforms.create(480, 540, 'cTileSq2').setScale(.5);
    platforms.create(416, 540, 'cTileBroke').setScale(.5);
    platforms.create(352, 540, 'cTileBlock').setScale(.5);
    platforms.create(736, 540, 'cTileSq').setScale(.5);
    platforms.create(800, 540, 'cTileBlock').setScale(.5);
    platforms.create(864, 540, 'cTileBroke').setScale(.5);
    platforms.create(928, 540, 'cTileBlock').setScale(.5);

    // a tiles
    platforms.create(672, 476, 'aTileLbot').setScale(.5);
    platforms.create(736, 476, 'aTileSq2').setScale(.5);
    platforms.create(800, 476, 'aTileRtop').setScale(.5);
    platforms.create(864, 476, 'aTileLtop').setScale(.5);
    platforms.create(928, 476, 'aTileSq2').setScale(.5);

    // c post
    platforms.create(928, 412, 'cBridgePost').setScale(.5);
    platforms.create(928, 348, 'cBridgePost').setScale(.5);
    platforms.create(928, 284, 'cBridgePost').setScale(.5);

    // e tiles
    platforms.create(736, 220, 'eTileSq').setScale(.5);
    platforms.create(800, 220, 'eTileBroken').setScale(.5);
    platforms.create(864, 220, 'eTileSq').setScale(.5);
    platforms.create(928, 220, 'eTileBroken').setScale(.5);

    // adds keyboard inputs
    cursors = this.input.keyboard.createCursorKeys();

     //  Some stars to collect, 12 in total, evenly spaced 70 pixels apart along the x axis
     stars1 = this.physics.add.group({
        key: 'star',
        repeat: 13,
        setXY: { x: 12, y: 0, stepX: 70 },
        
    });

    stars2 = this.physics.add.group({
        key: 'star',
        repeat: 12,
        setXY: { x: 46, y: 300, stepX: 70 }
      
    });


    

    stars1.children.iterate(function (child) {

        //  Give each star a slightly different bounce
        child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

    });

    stars2.children.iterate(function (child) {

        //  Give each star a slightly different bounce
        child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

    });

    bombs = this.physics.add.group();

    //  The score
    scoreText = this.add.text(716, 16, 'score: 0', { fontSize: '32px', fill: '#000' });

    this.physics.add.collider(stars1, platforms);
    this.physics.add.collider(stars2, platforms);
    this.physics.add.collider(bombs, platforms);

    this.physics.add.overlap(player, stars1, collectStar, null, this);
    this.physics.add.overlap(player, stars2, collectStar, null, this);

    this.physics.add.collider(player, bombs, hitBomb, null, this);

}


function update ()
{
    if (gameOver)
    {
        return;
    }

    if (cursors.left.isDown)
    {
        player.setVelocityX(-160);

        player.anims.play('left', true);

    }
    else if (cursors.right.isDown)
    {
        player.setVelocityX(160);

        player.anims.play('right', true);        
    }
    else
    {
        player.setVelocityX(0);

        player.anims.play('turn');
    }

    if (cursors.up.isDown && player.body.touching.down)
    {   
        player.setVelocityY(-330);
        
    }
}


function collectStar (player, star)
{
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

        var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);

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

        var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);

        var bomb = bombs.create(x, 16, 'bomb');
        bomb.setBounce(1);
        bomb.setCollideWorldBounds(true);
        bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
        bomb.allowGravity = false;

    }
}

function hitBomb (player, bomb)
{
    this.physics.pause();

    player.setTint(0xff0000);

    player.anims.play('turn');

    gameOver = true;
}