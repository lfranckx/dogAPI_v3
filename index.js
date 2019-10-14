'use strict';

function getDogImage(type) {
  // clear any existing images.
  $('.results-container').replaceWith(`<div class="results-container"></div>`);
  // fetch get response
  fetch(`https://dog.ceo/api/breed/${type}/images/random`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson);
  //append the number of images requested
    $('.results-container').append(`<img src="${responseJson.message}" class="results-img">`);
  //display the results section
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let breed = $('input[name="breed"]').val();
    getDogImage(breed);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});