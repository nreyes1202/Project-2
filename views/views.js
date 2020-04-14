$(document).ready(function () {

    // Link test
    console.log('views.js is linked!');

    // function to pull only username and score from database

    $.get("/api/characters")
        .then(function (data) {
            console.log(data);
            for (var i = 0; i < data.length; i++) {
                var nameList = data[i].username;
                console.log(nameList);
                var scoreList = data[i].highScore;
                console.log(scoreList);
                console.log(nameList.username);
                var newRow = $("<tr>").append(
                    $("<td>").html(nameList),
                    $("<td>").html(scoreList)
                  //  $("<td>").text(value.importance)
                );
                
                //Append the new row to the table
                $("#tableActual > #tableBody").append(newRow);
            };
        });

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




