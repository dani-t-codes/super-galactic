import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import EarthlingData from './earthlingdatacruncher.js';
// import MercuryData from './mercurydata.js'

$('#galactic-age-calculator').submit(function(event) {
  event.preventDefault();
  const earthAge = $('#earth-age').val();
  const residence = $('#residence').val();
  const gender = $('#gender').val();
  const earthling = new EarthlingData(earthAge, residence, gender);
  const mercuryAge = earthling.crunchNumbers();
  $('#response').append("<p>" + response + "</p>");
});
