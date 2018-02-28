$(document).ready(function(){

var topics =['Salsa', 'Ballet', 'Bellydance', 'Waltz', 'Cumbia', 'Tango', 'Hip Hop', 'Kizomba'];

//function to display new Dance Topic buttons

function renderButtons(){
  $(".Buttons").empty();  
  for (var i = 0; i < topics.length; i++) {

  $('.Buttons').append('<button class='+topics[i]+' data='+topics[i]+'>' + topics[i] + '</button>');

 }
} 
 renderButtons();  

    // Adding click event to all buttons
    $("button").on("click", function(e) {
        console.log('test');
        var txt = $(this).attr('class');
      console.log(txt);

      // Constructing a queryURL using the dance topic name
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        txt + "&api_key=zNUgiyXLe5ZSXSi9GTYp959A7f2vBHmc&limit=10";

      // AJAX request with the queryURL
      $.ajax({
          url: queryURL,
          method: "GET"
        })
        // After data comes back from the request
        .then(function(response) {
          console.log(queryURL);

          console.log(response);
          // storing the data from the AJAX request in the results variable
          var results = response.data;

          // Looping through each result item
          for (var i = 0; i < results.length; i++) {

            var danceDiv = $("<div>");

            var p = $("<p>").text("Rating: " + results[i].rating);

            var danceImage = $("<img>");
       
            danceImage.attr("src", results[i].images.fixed_height.url);

            
            danceDiv.append(p);
            danceDiv.append(danceImage);

            // Prependng to the HTML page 
            $("#danceImages").prepend(danceDiv);
          }
        });
    });

   

    });