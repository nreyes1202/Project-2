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


//         console.log("userSprite = " + userSprite);


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


//         console.log("userSprite = " + userSprite + " a warrior");

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

    // $.get("/api/characters")
    // .then(function(data){
    //     console.log(data)
    // });
    

// READ function with findAll
