import './css';

import EarthlingData from './earthlingdatacruncher.js';

$(document).ready(function() {
  $('#galactic-age-calculator').submit(function(event) {
    event.preventDefault();
    const earthAge = $('#earth-age').val();
    const residence = $('#residence').val();
    const gender = $('#gender').val();
    const earthling = new EarthlingData(earthAge, residence, gender);
    const response = earthling.crunchNumbers();
    $('#response').append("<p>" + response + "</p>");
  });
});