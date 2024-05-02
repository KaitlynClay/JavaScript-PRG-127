$(document).ready(function() {
  
  const tvShows = [
    { name: "Friends", mainCharacter: "Rachel Green", network: "NBC", startDate: "September 22, 1994" },
    { name: "Breaking Bad", mainCharacter: "Walter White", network: "AMC", startDate: "January 20, 2008" },
    { name: "Game of Thrones", mainCharacter: "Jon Snow", network: "HBO", startDate: "April 17, 2011" },
    { name: "Stranger Things", mainCharacter: "Eleven", network: "Netflix", startDate: "July 15, 2016" },
    { name: "The Office", mainCharacter: "Michael Scott", network: "NBC", startDate: "March 24, 2005" }
  ];

  
  const tvShowsContainer = $('#tv-shows-container');
  tvShows.forEach(show => {
    tvShowsContainer.append(`<div class="tv-show">
                                <h3>${show.name}</h3>
                                <p>Main Character: ${show.mainCharacter}</p>
                                <p>Network: ${show.network}</p>
                                <p>Start Date: ${show.startDate}</p>
                              </div>`);
  });

  
  $('#animate-button').click(function() {
    $('#animation-container').animate({ left: '40%' }, 'slow');
  });

  
  $('#load-content-button').click(function() {
    $.ajax({
        url: 'story.txt',
      success: function(data) {
        $('#ajax-content').html(data);
      }
    });
  });
});
