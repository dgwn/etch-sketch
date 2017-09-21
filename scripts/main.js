$(document).ready(function() {
  createGrid(16);
  mouseColor();
});


function createGrid(gridSize) {
  for (i = 0; i < gridSize; i++) {
    for (j = 0; j < gridSize; j++) {
      $('#container').append('<div class="pixel"></div>');
    };
  };
};

function mouseColor() {
  $('.pixel').on('mouseenter', function() {
    $(this).addClass('pixelBlack');
  });
};

function clearCreate() {
  $('.pixel').remove();
  var gridSize = prompt("Please enter a number", "16")
  createGrid(gridSize);
  mouseColor();
  $('.pixel').width((800 / gridSize)-1);
  $('.pixel').height((800  / gridSize)-1);

};
