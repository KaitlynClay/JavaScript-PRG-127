$(document).ready(function() {
  // Function to move image up
  $('#move-up').click(function() {
    $('#moving-image').stop().animate({top: '-=50'}, 'slow');
  });

  // Function to move image down
  $('#move-down').click(function() {
    $('#moving-image').stop().animate({top: '+=50'}, 'slow');
  });

  // Function to move image left
  $('#move-left').click(function() {
    $('#moving-image').stop().animate({left: '-=50'}, 'slow');
  });

  // Function to move image right
  $('#move-right').click(function() {
    $('#moving-image').stop().animate({left: '+=50'}, 'slow');
  });

  // Chaining: Move diagonally up and to the right
  $('#move-diagonal').click(function() {
    $('#moving-image').stop().animate({top: '-=50', left: '+=50'}, 'slow');
  });

  // Callback: Move image down and fade it out
  $('#move-fade').click(function() {
    $('#moving-image').stop().animate({top: '+=100'}, 'slow', function() {
      $(this).fadeOut('slow');
    });
  });
});
