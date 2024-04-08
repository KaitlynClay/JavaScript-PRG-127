$(document).ready(function() {
  // Submit form
   $('#submit').click(function() {
    var name = $('#name').val();
    var email = $('#email').val();
    var age = $('#age').val();
    var city = $('#city').val();
    var country = $('#country').val();
    
    var output = "<p>Name: " + name + "</p>";
    output += "<p>Email: " + email + "</p>";
    output += "<p>Age: " + age + "</p>";
    output += "<p>City: " + city + "</p>";
    output += "<p>Country: " + country + "</p>";
    
    $('#output').append(output);
    
    // Clear form fields
    $('input[type="text"], input[type="email"], input[type="number"]').val('');
  });
  
  // Clear form when submit button is clicked
  $('#clear').click(function() {
    $('#output').empty();
  });
  
  // Light style
  $('#light').click(function() {
    $('body').css({'background-color': '#f0f0f0', 'color': '#333'});
  });
  
  // Dark style
  $('#dark').click(function() {
    $('body').css({'background-color': '#333', 'color': '#333'});
  });
  
  // Increase font size
  $('#increase').click(function() {
    var currentSize = parseInt($('body').css('font-size'));
    $('body').css('font-size', currentSize + 1 + 'px');
  });
  
  // Decrease font size
  $('#decrease').click(function() {
    var currentSize = parseInt($('body').css('font-size'));
    $('body').css('font-size', currentSize - 1 + 'px');
  });
});
