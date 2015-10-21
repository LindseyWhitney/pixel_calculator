var printWidth300;
var printHeight300;
var printWidth240;
var printHeight240;
var printWidth150;
var printHeight150;

var printWidth;
var printHeight;
var pixelsAt300;
var pixelsAt240;
var pixelsAt150;

function hideCalc () {
  $(".output").hide();
}

function revealCalc () {
  $(".output").show();
}

$(document).ready(hideCalc);
$(".animsition").animsition();

$( ".button" ).click( function(){

  var $pixelWidth = $("#widthinpixels").val();
  var $pixelHeight = $("#heightinpixels").val();

  printWidth300 = ($pixelWidth / 300).toFixed(2);


  printHeight300 = ($pixelHeight / 300).toFixed(2);
  printWidth240 = ($pixelWidth / 240).toFixed(2);
  printHeight240 = ($pixelHeight / 240).toFixed(2);
  printWidth150 = ($pixelWidth / 240).toFixed(2);
  printHeight150 = ($pixelHeight / 150).toFixed(2);

  $( "#best" ).prev().html(printWidth300);
  $( "#best" ).next().html(printHeight300);

  $( "#average" ).prev().html(printWidth240);
  $( "#average" ).next().html(printHeight240);

  $( "#min" ).prev().html(printWidth150);
  $( "#min" ).next().html(printHeight150);

  revealCalc();
});

$( "form" ).submit(function( event ) {
  event.preventDefault();
});

//$( "input" ).click(function(){
//  hideCalc();
//});
