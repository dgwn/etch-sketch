$(document).ready(function() {
  createGrid(16);
  mouseBlack();

});


function createGrid(gridSize) {
  for (i = 0; i < gridSize; i++) {
    for (j = 0; j < gridSize; j++) {
      $('#container').append('<div class="pixel"></div>');
    };
  };
};

function mouseBlack() {
  $('.pixel').on('mouseenter', function() {
    $(this).addClass('pixelBlack');
  });
};

function mouseRGB() {};


function mouseGrayscale() {
  $('.pixel').on('mouseenter', function() {
    var currentOpacity = $(this).css("opacity");
    if(currentOpacity >= 1)
      return currentOpacity
    else
      return currentOpacity + 0.10
    $(this).css("opacity", "currentOpacity");


  });
};

function clearCreate() {
  $('.pixel').remove();
  var gridSize = prompt("Please enter a number", "16");
  createGrid(gridSize);
  $('.pixel').width((560 / gridSize)-1);
  $('.pixel').height((560  / gridSize)-1);
};
