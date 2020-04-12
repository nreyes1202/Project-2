$(document).ready(function () {

    // Link test
    console.log('views.js is linked!');

    
    $.get("/api/characters")
    .then(function(data){
        console.log(data)
    })
    
    
});


// early attempts at multiple character with on click

// button click selector function for images/sprites
// var userSprite = '';

//     $("#jean").click(function () {
//         // console.log('Button click "Jean" happened');

//         var userSprite = $(this).attr('id');


//         console.log("userSprite = " + userSprite);
//     });

// $("#nilsen").click(function () {
//     // console.log('Button click "Nilsen" happened');

//     var userSprite = $(this).attr('id');

   
//     console.log("userSprite = " + userSprite);

// });

// $("#derrick").click(function () {
//     // console.log('Button click "Derrick" happened');

//     var userSprite = $(this).attr('id');

//     console.log("userSprite = " + userSprite + " a samurai");

// }) 

// // Button click selector Functions-images
// var userImg = '';

// $("#imgMountain").click(function () {
//         // console.log('Button click "Jean" happened');

//         var userImg = $(this).attr('id');


//         console.log("userImg = " + userImg);
//     });

// $("#imgForest").click(function () {
//     // console.log('Button click "Nilsen" happened');

//     var userImg = $(this).attr('id');

   
//     console.log("userImg = " + userImg);

// });

// $("#imgPostApocalyptic").click(function () {
//     // console.log('Button click "Derrick" happened');

//     var userImg = $(this).attr('id');

//     console.log("userImg = " + userImg );

// });
      

   

