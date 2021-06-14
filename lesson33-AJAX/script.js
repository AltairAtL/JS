$("#omdb_submit").click(function () {
  var title = $("#title").val();
  var year = $("#year").val();
  var queryString =
    "https://www.omdbapi.com/?apikey=98c779bf&t=" +
    title +
    "&y=" +
    year +
    "&plot=short&r=json";
  $.ajax({
    url: queryString,
    method: "GET",
  }).done(function (response) {
    if (response.length < 1) {
      $("#output").html("Sorry, no movies were found :(");
    } else {
      $("#output").html(JSON.stringify(response));
      var movieContainer = $('<div class="movie_Container">');
      $(".pretty_movie_output").append(movieContainer);
      for (var prop in response) {
        var element;
        if (prop == "Poster" && response[prop] != "N/A") {
          element = $("<img class='pretty'>").attr("src", response[prop]);
        } else {
          element = $("<h3 class='pretty'>").text(prop + ": " + response[prop]);
        }

        movieContainer.append(element);
      }
    }
  });
});
