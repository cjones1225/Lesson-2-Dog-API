'use strict';
//debugger;
function getDogImage() {
    var x = document.getElementById("breed").value;
    var url = "https://dog.ceo/api/breed/" + x + "/images/random";
    fetch(url)
    .then(response => response.json())
    .then(responseJson =>       
      {
        if (responseJson.status === "success"){
          renderResults(responseJson);
        }else{
          alert ('Error, Breed not found, try another')
        }
      
      })
      .catch(error => alert('Error '+ error + ' Something went wrong. Try again later.'));
    
}

function displayResults(responseJson) {
    var results = responseJson.message;
    //console.log(results);
    let returnString = '';
    returnString = `<img src="${results}" class="results-img">`;
    return returnString;
}

function renderResults (responseJson) {
  const imagesHtmlString = displayResults(responseJson);
  $('.results').html(imagesHtmlString);
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogImage();
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});