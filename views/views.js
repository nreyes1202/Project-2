$(document).ready(function () {

    // Link test
    console.log('views.js is linked!');

    //button click selector function for images/sprites

    var userSprite = '';

    $("#hugh").click(function () {
        console.log('Button click "Hugh" happened');

        var userSprite = $(this).attr('id');

        console.log("userSprite = " + userSprite);
        
    });

    $("#elliot").click(function () {
        console.log('Button click "Elliot" happened');

        var userSprite = $(this).attr('id');

        console.log("userSprite = " + userSprite);
        
    });

    module.exports = userSprite;

});