$(document).ready(function () {

    // Link test
    console.log('views.js is linked!');

    
    $.get("/api/characters")
    .then(function(data){
        console.log(data)
    })
    
    
});


// early attempts at multiple character with on click


//button click selector function for images/sprites
// var userSprite = '';
// var playersSetup = '';

//     $("#jean").click(function () {
//         // console.log('Button click "Jean" happened');

//         var userSprite = $(this).attr('id');

// <<<<<<< HEAD
// <<<<<<< HEAD
//         console.log("userSprite = " + userSprite);

// =======
//         var playersSetup = {
//             playersSprites : (this.physics.add.sprite(400, 270, 'warrior').setScale(.125)),
//             playerCollider : (playerSprites.player.setCollideWorldBounds(true).setBounce(0.2)
//             ),
//             playermove: {
//                     animsLeft: (this.anims.create({
//                         key:'left',
//                         frames: [ { key: 'warrior', frame: 0 } ],
//                         frameRate: 20,
//                         repeat: -1
//                     })),
//                     animsTurn: (this.anims.create({
//                         key:'turn',
//                         frames: [ { key: 'warrior', frame: 0 } ],
//                         frameRate: 20,
//                         repeat: -1
//                     })),
//                     animsRight: (this.anims.create({
//                         key:'right',
//                         frames: [ { key: 'warrior', frame: 0 } ],
//                         frameRate: 20,
//                         repeat: -1
//                     }))
//                 }
//             };
        
// =======
//         // var playersSetup = {
//         //     playersSprites : (this.physics.add.sprite(400, 270, 'warrior').setScale(.125)),
//         //     playerCollider : (playerSprites.player.setCollideWorldBounds(true).setBounce(0.2)
//         //     ),
//         //     playerMove: {
//         //             animsLeft: (this.anims.create({
//         //                 key:'left',
//         //                 frames: [ { key: 'warrior', frame: 0 } ],
//         //                 frameRate: 20,
//         //                 repeat: -1
//         //             })),
//         //             animsTurn: (this.anims.create({
//         //                 key:'turn',
//         //                 frames: [ { key: 'warrior', frame: 0 } ],
//         //                 frameRate: 20,
//         //                 repeat: -1
//         //             })),
//         //             animsRight: (this.anims.create({
//         //                 key:'right',
//         //                 frames: [ { key: 'warrior', frame: 0 } ],
//         //                 frameRate: 20,
//         //                 repeat: -1
//         //             }))
//         //         }
//         //     };

// >>>>>>> c5af6014da2efdcdba34022f10ebdffbab54140c
//         console.log("userSprite = " + userSprite + " a warrior");
// <<<<<<< HEAD
    
// >>>>>>> f118665fe52691530ab0b18a47005ab656a407a4
// =======

// >>>>>>> ca7535b686f6a6d649a8103a0b532e4ae284ec5a
//     });

// $("#nilsen").click(function () {
//     // console.log('Button click "Nilsen" happened');

//     var userSprite = $(this).attr('id');

    // var playersSetup = {
    //     playersSprites : (this.physics.add.sprite(400, 270, 'alien').setScale(.30)),
    //     playerCollider : (playerSprites.player.setCollideWorldBounds(true).setBounce(0.2)
    //     ),
    //     playerMove: {
    //             animsLeft: (this.anims.create({
    //                 key:'left',
    //                 frames: [ { key: 'alien', frame: 0 } ],
    //                 frameRate: 20,
    //                 repeat: -1
    //             })),
    //             animsTurn: (this.anims.create({
    //                 key:'turn',
    //                 frames: [ { key: 'alien', frame: 0 } ],
    //                 frameRate: 20,
    //                 repeat: -1
    //             })),
    //             animsRight: (this.anims.create({
    //                 key:'right',
    //                 frames: [ { key: 'alien', frame: 0 } ],
    //                 frameRate: 20,
    //                 repeat: -1
    //             }))
    //         }
    //     };

    // console.log("userSprite = " + userSprite + " an alien");

// });

// $("#derrick").click(function () {
//     // console.log('Button click "Derrick" happened');

//     var userSprite = $(this).attr('id');

    // var playersSetup = {
    //     playersSprites : (this.physics.add.sprite(400, 270, 'samurai').setScale(.25)),
    //     playerCollider : (playerSprites.player.setCollideWorldBounds(true).setBounce(0.2)
    //     ),
    //     playerMove: {
    //             animsLeft: (this.anims.create({
    //                 key:'left',
    //                 frames: [ { key: 'samurai', frame: 0 } ],
    //                 frameRate: 20,
    //                 repeat: -1
    //             })),
    //             animsTurn: (this.anims.create({
    //                 key:'turn',
    //                 frames: [ { key: 'samurai', frame: 0 } ],
    //                 frameRate: 20,
    //                 repeat: -1
    //             })),
    //             animsRight: (this.anims.create({
    //                 key:'right',
    //                 frames: [ { key: 'samurai', frame: 0 } ],
    //                 frameRate: 20,
    //                 repeat: -1
    //             }))
    //         }
    //     };

//     console.log("userSprite = " + userSprite + " a samurai");

// });

// // Button click selector Functions-images
// var userImg = '';
// // var backgrounds = '';

<<<<<<< HEAD
// $("#imgMountain").click(function () {
//     // console.log('Button click "Mountain" happened');

//     var userImg = $(this).attr('id');

//     // var backgrounds = (this.add.image(480, 270, 'asianMountain').setScale(.5));

//     console.log("userImg = " + userImg);
//     console.log(backgrounds);

// });

// $("#imgForest").click(function () {
//     // console.log('Button click "Forest" happened');

//     var userImg = $(this).attr('id');

//     // var backgrounds = (this.add.image(480, 270, 'magicForest').setScale(.5));

//     console.log("userImg = " + userImg);
//     console.log(backgrounds);
// });

// $("#imgPostApocalyptic").click(function () {
//     // console.log('Button click "Post Apocalyptic" happened');

//     var userImg = $(this).attr('id');

//     // var backgrounds = (this.add.image(480, 270, 'postApocalyptic').setScale(.5));

//     console.log("userImg = " + userImg);
//     console.log(backgrounds);
// });

// module.exports = [userSprite, backgrounds];

// CREATE function in game.js 



=======
    $.get("/api/characters")
    .then(function(data){
        console.log(data)
    })
    
});
>>>>>>> 9c007bfe4ec3c4655ff2a3e7553d48f6549f7573

// READ function with findAll
