//Passing document object into jQuery function
//calling ready method on document
//Pass into ready method an anonymous function (callback)
$(document).ready(function() {
//logging 'ready' to the console to ensure jQuery and js are properly
//linked in the html doc
  console.log('ready');
//closing ready method on jQuery function of document object
});
//declaring a new variable of newColor
//value of new variable will be a random color
//random color is accomplished by adding a '#' to a random number
//random number is accomplished by passing the math random method (which will generate a random float number between 0 and 1), multiplied
//by 16777215, into the math floor method (which will round number to next lowest whole integer). We are then calling the toString method on the random number, restricting it to 16 characters (should it be 6 characters for hex colors?)
var newColor = '#' + Math.floor(Math.random()*16777215).toString(16);
//passing the random html class into a jquery function.
//calling the on method
$('.random').on('click', function()  {
  $('.oddRow').css('background-color', newColor)
});

$('submit')
