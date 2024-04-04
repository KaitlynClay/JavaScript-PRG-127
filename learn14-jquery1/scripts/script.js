$(document).ready(function() {
  $('#hidePara').click(function() {
    $('p').hide(); 
  });

  $('#hideDiv').click(function() {
    $('#myDiv').hide(); 
  });

  $('h2').click(function() {
    $(this).hide(); 
  });
});
