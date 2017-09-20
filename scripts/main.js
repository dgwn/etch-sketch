var gridSize = 16

for (i = 0; i < gridSize; i++) {
  for (j = 0; j < gridSize; j++) {
    $('#container').append('<div class="pixel"></div>');
    };
  };

function clearCreate() {
  $('.pixelBlack').removeClass('pixelBlack');
  gridSize = prompt("Please enter a number", "16")
  
};

$(document).ready(function() {
  $('.pixel').on('mouseenter', function() {
    $(this).addClass('pixelBlack');
  });
});
