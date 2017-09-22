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

function mouseRGB() {
  $('.pixel').on('mouseenter', function() {
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    var randomRGB = 'rgb(' + r + ',' + g + ',' + b + ')';
    $(this).css('background-color', randomRGB)
  });
};


function mouseGrayscale() {
  $('.pixel').css('background-color', 'black');
  $('.pixel').css('border-radius', 1);
  $('.pixel').on('mouseenter', function() {
    var currentOpacity = $(this).css("opacity");
    console.log(currentOpacity);
    if(currentOpacity === 0)
      return currentOpacity
    else
      currentOpacity -= 0.15
    $(this).css("opacity", currentOpacity);


  });
};

function clearCreate() {
  $('.pixel').remove();
  var gridSize = prompt("Please enter a number", "16");
  createGrid(gridSize);
  $('.pixel').width((560 / gridSize)-1);
  $('.pixel').height((560  / gridSize)-1);
};
