$(document).ready(function () {

    // Link test
    console.log('views.js is linked!');

    //button click selector function for images/sprites
    var userSprite = '';

    var asianMountain = 
    

    $("#jean").click(function () {
        console.log('Button click "Jean" happened');

        var userSprite = $(this).attr('id');

        console.log("userSprite = " + userSprite);
        
    });

    $("#nilsen").click(function () {
        console.log('Button click "Nilsen" happened');

        var userSprite = $(this).attr('id');

        console.log("userSprite = " + userSprite);
        
    });

    $("#derrick").click(function () {
        console.log('Button click "Derrick" happened');

        var userSprite = $(this).attr('id');

        console.log("userSprite = " + userSprite);
        
    });

    // Button click selector Functions-images
    var userImg = '';

    $("#imgMountain").click(function () {
        console.log('Button click "Mountain" happened');

        var userImg = $(this).attr('id');

        console.log("userImg = " + userImg);
        
    });

    $("#imgForest").click(function () {
        console.log('Button click "Forest" happened');

        var userImg = $(this).attr('id');

        console.log("userImg = " + userImg);        
    });

    $("#imgPostApocalyptic").click(function () {
        console.log('Button click "Post Apocalyptic" happened');

        var userImg = $(this).attr('id');

        console.log("userImg = " + userImg);
    });

    module.exports = [userSprite, userImg];

});