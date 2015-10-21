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
  $(".output").show("slow");
}

$(document).ready(hideCalc);

$(".animsition").animsition();

$( ".button" ).click( function(){
  var $pixelWidth = $("#widthinpixels").val();
  var $pixelHeight = $("#heightinpixels").val();

  printWidth300 = $pixelWidth / 300;
  printHeight300 = $pixelHeight / 300;
  console.log($pixelWidth);
  console.log($pixelHeight);
  console.log(printWidth300);
  console.log(printHeight300);

  

});

$( "form" ).submit(function( event ) {
  event.preventDefault();
});
