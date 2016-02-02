// This is what the data returning from IMDB will look like:
var sampleResult = {
  "Search": [
    {
      "Title": "Cool Runnings",
      "Type": "movie",
      "Year": "1993",
      "imdbID": "tt0106611"
    }
  ]
}

// Attach an event listener to the form submit (using jQuery)
$("#movie-search-form").submit(formSubmitted);

// Handle the form submission: go to OMDB and get results
function formSubmitted(event) {
  event.preventDefault();


  var url = "http://omdbapi.com/?s=" + $("#query").val();
  $.get(url, resultsReceived);
  var existingList = document.querySelectorAll("li");
  for (var i = 0; i < existingList.length; i++) {
    existingList[i].classList.add("hidden");

  }
  //var form = document.querySelector("#movie-search-form");
  // var $form = $("#movie-search-form");
  // form.reset();
  $('#movie-search-form').trigger("reset");
}

function resultsReceived(results) {

  // Try putting a debugger here and inspecting the results argument
  // The array of movies lives inside results["Search"]
  // See the sampleResult above for an example

  for (var i = 0; i < results.Search.length; i++) {
    results.Search[i];
    createListItem();

  }

  function createListItem() {
    // var list = document.querySelector("#movies");
    var $list = $("#movies");
    // var listItem = document.createElement("li");
    var $listItem = $("<li>");

    // listItem.classList.add("movie");
    // list.appendChild(listItem);
    $listItem.addClass("movie").appendTo($list);


    // var title = document.createElement("div");
    var $title = $("<div>");
    // title.classList.add("movie-title");
    // listItem.appendChild(title);
    $title.addClass("movie-title").appendTo($listItem);



    // var link = document.createElement("a");
    var $link = $("<a>");
    // link.setAttribute("href", "http://www.imdb.com/title/" + results["Search"][i]["imdbID"]);
    $link.attr("href", "http://www.imdb.com/title/" + results["Search"][i]["imdbID"]);
    // link.setAttribute("target", "_blank");
    $link.attr("target", "_blank");
    // link.textContent = results["Search"][i]["Title"];
    $link.text(results["Search"][i]["Title"]);
    // listItem.appendChild(link);
    $listItem.append($link);

    //var year = document.createElement("div");
    var $year = $("<div>");
    // year.classList.add("movie-release-date");
    // year.textContent = results["Search"][i]["Year"];
    $year.addClass("movie-release-date").text(results["Search"][i]["Year"]).appendTo($listItem);

    // listItem.appendChild(year);

  }



  // Access the array of movies:
  results["Search"]

  // Access the first movie title
  results["Search"][0]["Title"]
}
