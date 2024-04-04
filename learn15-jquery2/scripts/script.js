$(document).ready(function() {
  $('.hide-show').click(function() {
    $(this).siblings('img').toggle('slow');
  });

  $('.fade').click(function() {
    $(this).siblings('img').fadeToggle('slow');
  });

  $('.slide').click(function() {
    $(this).siblings('img').slideToggle('slow');
  });
});
