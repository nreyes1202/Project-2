// hides game.html elements untill the game ends
document.getElementById('nameForm').style.display = 'none';
document.getElementById('saveBTN').style.display = 'none';



// makes an object out of user Data
$('#saveBTN').on('click', function (event) {
    event.preventDefault();

    var userName = $('#nameForm').val().trim();

    var userData = {
        usersName: userName,
        usersScore: score,
    };

    console.log(userData);
});

// configs the basics of the game
var config = {
    type: Phaser.AUTO,
    // sets game size
    width: 960,
    height: 540,
    // creates a dom element div
    // defines the physics and gravity of the game
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    // defines the order the the scene functions are loaded
    scene: {
        // gameSetup: gameSetup,
        preload: preload,
        create: create,
        update: update
    }
};

// function gameSetup () {
//     if (userSprite === 'nilsen') {
//         spriteNilsen();
//     }
//     if (userSprite === 'jean') {
//         spriteJean();
//     }
//     if (userSprite === 'derrick') {
//         spriteDerrick();
//     }
//     if (userImg === 'imgMountain') {
//         backgroundMountain()
//     }
//     if (userImg === 'imgForest') {
//         backgroundForest();
//     }
//     if (userImg === 'imgPostApocalyptic') {
//         backgroundPost();
//     }
// }

// setting up variables outside of functions
var player;
var stars;
var bombs;
var platforms;
var cursors;

// starts the score function and rounds function
var score = 0;
var rounds = 1;

// sets up variables for text
var teacher = '';
var goCondition = '';

// changes the title
var titleTA = document.getElementById('titleTA');
var titleTAtxt = '?';
titleTA.textContent = titleTAtxt;

// start variables for score object
var scoreObject;
var name;

// sets up the game over function to be called at the end
var gameOver = false;

// starts the game
var game = new Phaser.Game(config);

// preloads all the images
function preload ()
{
   
    // function backgroundForest() {
    //     this.load.image('background', 'assets/images/backgrounds/magicForestBackground/background.png');
    //     console.log('userImg is a forest')
    // };

    // function spriteJean() {
    //     this.load.image('sprite', 'assets/images/sprites/warriorSpriteFemale/_PNG/spriteSheet.png', { frameWidth: 230, frameHeight: 398 });
    //     console.log('userSprite is a warrior')
    // };

    // function backgroundPost() {
    //     this.load.image('background', 'assets/images/backgrounds/parallaxBackground/background.png');
    //     console.log('userImg is post apocalyptic')
    // };

    // function spriteNilsen() {
    //    this.load.image('sprite', 'assets/images/sprites/aliensSprite/alien/PNG/spriteSheet.png', { frameWidth: 230, frameHeight: 398 });
    //     console.log('userSprite is an alien')
    // };

    // function backgroundMountain() {
    //     this.load.image('background', 'assets/images/backgrounds/horizontalBackgrounds/background.png');
    //     console.log('userImg is a mountain')
    // }; 

    // function spriteDerrick() {
    //     this.load.image('sprite', 'assets/images/sprites/samuraiSprite/_PNG/spriteSheet.png', { frameWidth: 230, frameHeight: 398 });
    //     console.log('userSprite is a samurai')
    // };

    // round 1 resources
    this.load.image('background', 'assets/images/backgrounds/parallaxBackground/background.png');
    this.load.image('star', 'assets/images/star.png');
    this.load.image('alien', 'assets/images/sprites/aliensSprite/alien/PNG/spriteSheet.png', { frameWidth: 230, frameHeight: 398 });
    
    // round 2 resources
    this.load.image('mike', 'assets/images/monsterBombs/mike.png');
    this.load.image('slime', 'assets/images/objects/slime.png');

    // round 3 resources
    this.load.image('kurt', 'assets/images/monsterBombs/kurt.png');
    this.load.image('coin', 'assets/images/objects/coin.png');

    // round 4 resources
    this.load.image('chris', 'assets/images/monsterBombs/chris.png');
    this.load.image('banana', 'assets/images/objects/banana.png');

    // game over resources
    this.load.image('pop', 'assets/images/gui/s_table.png');
    
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
    // adds in background image
    this.add.image(480, 270, 'background').setScale(.5)

    // makes keyboard inputs work
    cursors = this.input.keyboard.createCursorKeys();

    // makes text for score and rounds
    scoreText = this.add.text(716, 16, 'Score: 0', { fontSize: '32px', fill: '#000' });
    roundsText = this.add.text(716, 48, 'Round: 1', { fontSize: '32px', fill: '#000' });

    // makes title text
    attackText = this.add.text(350, 32, '', { fontSize: '32px', fill: '#000' });
    var teacher = '?';
    attackText.setText('Attack of ' + teacher)
    
    // c bridge post bottom left
    this.add.image(412, 508, 'cBridgePost').setScale(1);
    this.add.image(412, 444, 'cBridgePost').setScale(1);
    this.add.image(412, 380, 'cBridgePost').setScale(1);
    this.add.image(412, 316, 'cBridgePost').setScale(1);

    // c post top left
    this.add.image(96, 188, 'cBridgePost').setScale(1);
    this.add.image(96, 124, 'cBridgePost').setScale(1);
    this.add.image(96, 60, 'cBridgePost').setScale(1);
 
    // c post bottom right
    this.add.image(750, 412, 'cBridgePost').setScale(1);
    this.add.image(750, 348, 'cBridgePost').setScale(1);
    this.add.image(750, 284, 'cBridgePost').setScale(1);

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

    // c tiles bottom left platform
    platforms.create(32, 508, 'cTileSq2').setScale(1);
    platforms.create(160, 508, 'cTileBlock').setScale(1);
    platforms.create(96, 508, 'cTileBroke').setScale(1);
    platforms.create(224, 508, 'cTileSq2').setScale(1);
    platforms.create(288, 508, 'cTileBroke').setScale(1);
      
    // a tiles middle left platform
    platforms.create(32, 252, 'aTileSq').setScale(1);
    platforms.create(96, 252, 'aTileSq2').setScale(1);
    platforms.create(160, 252, 'aTileRtop').setScale(1);
    platforms.create(348, 252, 'aTileLtop').setScale(1);
    // platforms.create(288, 252, 'aTileSq2').setScale(1);
    platforms.create(412, 252, 'aTileSq').setScale(1);
    platforms.create(476, 252, 'aTileRtop').setScale(1);

    // e tiles top left platform
    platforms.create(32, 1, 'eTileSq').setScale(1);
    platforms.create(96, 1, 'eTileBroken').setScale(1);
    platforms.create(160, 1, 'eTileSq').setScale(1);
    platforms.create(224, 1, 'eTileBroken').setScale(1);
    platforms.create(288, 1, 'eTileSq').setScale(1);
    platforms.create(352, -16, 'eTileBroken').setScale(1);

    // c tiles bottom right gray platform
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

    // a tiles bottom right purple platform
    platforms.create(672, 476, 'aTileLbot').setScale(1);
    platforms.create(736, 476, 'aTileSq2').setScale(1);
    platforms.create(800, 476, 'aTileRtop').setScale(1);
    platforms.create(864, 476, 'aTileLtop').setScale(1);
    platforms.create(928, 476, 'aTileSq2').setScale(1);

    // e tiles middle right platform
    platforms.create(686, 220, 'eTileSq').setScale(1);
    platforms.create(750, 220, 'eTileBroken').setScale(1);
    platforms.create(814, 220, 'eTileSq').setScale(1);
    // platforms.create(928, 220, 'eTileBroken').setScale(1);

    //  Some stars to collect, 13 in total, evenly spaced 70 pixels apart along the x axis
    //  adds top stars
    stars1 = this.physics.add.group({
        key: 'star',
        repeat: 12,
        setXY: { x: 46, y: 0, stepX: 70 },
        
    })

    // adds bottom row of stars
    stars2 = this.physics.add.group({
        key: 'star',
        repeat: 13,
        setXY: { x: 16, y: 320, stepX: 70 }
      
    })

    // makes stars bouncy
    stars1.children.iterate(function (child) {

        //  Give each star a slightly different bounce
        child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

    })

    stars2.children.iterate(function (child) {

        //  Give each star a slightly different bounce
        child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

    })

    // adds bombs
    bombs = this.physics.add.group();

    // makes objects collide when touching
    this.physics.add.collider(stars1, platforms);
    this.physics.add.collider(stars2, platforms);
    this.physics.add.collider(bombs, platforms);

    // adds overlap function to collect stars
    this.physics.add.overlap(player, stars1, collectStar1, null, this);
    this.physics.add.overlap(player, stars2, collectStar2, null, this);

    // adds overlap function to be killed by bombs
    this.physics.add.overlap(player, bombs, hitBomb, null, this);

}

// checks the game constantly for update functions
function update ()
{

    if (gameOver)
    {
        // sets up pop up variables outside of functions
        var popUp;
        popUp = this.add.image(480, 270, 'pop').setScale(1);
 
        // creates pop up text
        var popupText1;
        var popupText2;
        popupText1 = this.add.text(358, 200, '', { fontSize: '32px', fill: '#fff' });
        popupText2 = this.add.text(358, 232, '', { fontSize: '32px', fill: '#fff' });

        // goCondition either says WON!! or LOST!! depending
        popupText1.setText('Game Over you');
        popupText2.setText(goCondition);

        // makes the score and name(which is undefined) into an object
        var scoreObject;
        scoreObject = this.add.text(284, 168, '', { fontSize: '24px', fill: '#fff' });
        var name;

        // goCondition either says WON!! or LOST!! depending
        scoreObject.setText('score: ' + score + ', name: ' + name)

        // more pop up text
        var formText1;
        formText1 = this.add.text(284, 264, '', { fontSize: '24px', fill: '#fff' });
        formText1.setText('fill out the form on the -->');
        
        var formText2;
        formText2 = this.add.text(284, 296, '', { fontSize: '24px', fill: '#fff' });
        formText2.setText('right to save your score -->');

        // populates the hidden html
        document.getElementById('nameForm').style.display = 'block';
        document.getElementById('saveBTN').style.display = 'block';

        // populates the hidden form text
        var titleWord = document.getElementById('title');
        var titleWordTxt = 'Save Stats';
        titleWord.textContent = titleWordTxt;

        var scoreWord = document.getElementById("scoreWord");
        var scoreWordTxt = 'Score: ';
        scoreWord.textContent = scoreWordTxt;

        var gameScore = document.getElementById("gameScore");
        var  yourScore = score;
        gameScore.textContent = yourScore

        var nameWords = document.getElementById("nameWords");
        var nameWordsTxt = 'Enter your name here';
        nameWords.textContent = nameWordsTxt;

        // runs game over function
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
    if (score === 240) {
        // starts round 2 when score reaches x
        // imeediatly changes the score so round 2 stops getting called
        score += 10;
        scoreText.setText('Score: ' + score);

        // changes the rounds counter
        rounds = 2;
        roundsText.setText('Round: ' + rounds); 
        console.log('Round 2');

        // changes the title text for the round
        var teacher = 'Mike!';
        attackText.setText('Attack of ' + teacher)

        var titleTAtxt = ' Mike!';
        titleTA.textContent = titleTAtxt;

        // loads in new stars with a slime skin
        stars1 = this.physics.add.group({
            key: 'slime',
            repeat: 12,
            setXY: { x: 46, y: 0, stepX: 70 }, 
        })
    
        // adds bottom row of stars with a slime skin
        stars2 = this.physics.add.group({
            key: 'slime',
            repeat: 13,
            setXY: { x: 16, y: 320, stepX: 70 }
          
        })
    
        // sets up stars bounce
        stars1.children.iterate(function (child) {
    
            //  Give each star a slightly different bounce
            child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
    
        })
    
        stars2.children.iterate(function (child) {
    
            //  Give each star a slightly different bounce
            child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
    
        })
    
        // I do not know what this does but is needed here
        var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);
    
        // makes new monster bomb with a mike skin
        var bomb = bombs.create(x, 16, 'mike').setScale(.125);
        bomb.setBounce(1);
        bomb.setCollideWorldBounds(true);
        bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
        bomb.allowGravity = false;

        // makes objects collide when touching
        this.physics.add.collider(stars1, platforms);
        this.physics.add.collider(stars2, platforms);
        this.physics.add.collider(bombs, platforms);

        // adds overlap function to collect stars
        this.physics.add.overlap(player, stars1, collectStar1, null, this);
        this.physics.add.overlap(player, stars2, collectStar2, null, this);
   
        // adds colide function to be killed by bombs
        this.physics.add.overlap(player, bombs, hitBomb, null, this);

    }
    if (score === 530) {
        // starts new round when score reaches x
        // imeediatly changes the score so new round stops getting called
        score += 10;
        scoreText.setText('Score: ' + score);
        rounds = 3;
        roundsText.setText('Round: ' + rounds); 

        // changes title text
        var teacher = 'Kurt!';
        attackText.setText('Attack of ' + teacher)

        var titleTAtxt = ' Kurt!';
        titleTA.textContent = titleTAtxt;

        // new star coins
        stars1 = this.physics.add.group({
            key: 'coin',
            repeat: 12,
            setXY: { x: 46, y: 0, stepX: 70 },   
        })
    
        // adds bottom row of star coins
        stars2 = this.physics.add.group({
            key: 'coin',
            repeat: 13,
            setXY: { x: 16, y: 320, stepX: 70 } 
        })
    
        // adds star coin bounce
        stars1.children.iterate(function (child) {
    
            //  Give each star a slightly different bounce
            child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
    
        })
    
        stars2.children.iterate(function (child) {
    
            //  Give each star a slightly different bounce
            child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
    
        })
    
        // needed but not sure what it does
        var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);
    
        // sets up monster bomb kurt
        var bomb = bombs.create(x, 16, 'kurt').setScale(.125);
        bomb.setBounce(1);
        bomb.setCollideWorldBounds(true);
        bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
        bomb.allowGravity = false;

        // makes objects collide when touching
        this.physics.add.collider(stars1, platforms);
        this.physics.add.collider(stars2, platforms);
        this.physics.add.collider(bombs, platforms);

        // adds overlap function to collect stars
        this.physics.add.overlap(player, stars1, collectStar1, null, this);
        this.physics.add.overlap(player, stars2, collectStar2, null, this);

        // adds colide function to be killed by bombs
        this.physics.add.overlap(player, bombs, hitBomb, null, this);
    }
    if (score === 810) {
        // starts new round when score reaches x
        // imeediatly changes the score so new round stops getting called
        score += 10;
        scoreText.setText('Score: ' + score);
        rounds = 4;
        roundsText.setText('Round: ' + rounds); 

        // changes title text
        var teacher = 'Chris!';
        attackText.setText('Attack of ' + teacher)

        var titleTAtxt = ' Chris!';
        titleTA.textContent = titleTAtxt;

        // adds in banana's as stars
        stars1 = this.physics.add.group({
            key: 'banana',
            repeat: 12,
            setXY: { x: 46, y: 0, stepX: 70 },
            
        })
    
        // adds bottom row of star banana's
        stars2 = this.physics.add.group({
            key: 'banana',
            repeat: 13,
            setXY: { x: 16, y: 320, stepX: 70 }
          
        })
    
        // sets up banana star bounce
        stars1.children.iterate(function (child) {
    
            //  Give each star a slightly different bounce
            child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
    
        })
    
        stars2.children.iterate(function (child) {
    
            //  Give each star a slightly different bounce
            child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
    
        })
    
        // needed but not sure what it does
        var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);
    
        // sets up monster bomb chris
        var bomb = bombs.create(x, 16, 'chris').setScale(.125);
        bomb.setBounce(1);
        bomb.setCollideWorldBounds(true);
        bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
        bomb.allowGravity = false;

        // makes objects collide when touching
        this.physics.add.collider(stars1, platforms);
        this.physics.add.collider(stars2, platforms);
        this.physics.add.collider(bombs, platforms);

        // adds overlap function to collect stars
        this.physics.add.overlap(player, stars1, collectStar1, null, this);
        this.physics.add.overlap(player, stars2, collectStar2, null, this);
   
        // adds colide function to be killed by bombs
        this.physics.add.overlap(player, bombs, hitBomb, null, this);
    }
    if (score === 1000) {
        // starts game over function when score reaches x
        this.physics.pause();

        player.setTint(0x00FF00);

        roundsText.setText('You WIN!!')

        gameOver = true;

        goCondition = 'WON!!'
        
    }
}


// defines how the stars function when collected
function collectStar1 (player, star1)
{
    // makes the stars dissappear
    star1.disableBody(true, true);
    
    //  Add and update the score
    score += 10;
    scoreText.setText('Score: ' + score);

}

function collectStar2 (player, star2)
{
    // makes the stars dissappear
    star2.disableBody(true, true);
    
    //  Add and update the score
    score += 10;
    scoreText.setText('Score: ' + score); 

}

// defines how the bombs function when hit
function hitBomb (player, bomb)
{
    // stops all movement
    this.physics.pause();

    // changes player to red
    player.setTint(0xff0000);

    // changes player image
    player.anims.play('turn');

    // var scoreObject;
    // scoreObject = this.add.text(300, 200, '', { fontSize: '24px', fill: '#fff' });
   
    // var name;
    // // goCondition either says WON!! or LOST!! depending
    // scoreObject.setText('score: ' + score + ', name: ' + name)

    // sets up game over
    gameOver = true;

    goCondition = 'LOST!!'
}



