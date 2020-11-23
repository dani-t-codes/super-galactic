/* eslint-disable no-unused-vars */
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import EarthlingData from './js/EarthlingDataCruncher.js';

//UI Logic
$(document).ready(function() {
  $('#galactic-age-calculator').submit(function(event) {
    event.preventDefault();
    const earthAge = $('#earth-age').val();
    const smokerStatus = $('#smokerStatus').val();
    const earthling = new EarthlingData(earthAge, smokerStatus);
    $('#show-earth-age').html(`${earthAge}`);
    $('#show-earth-age').html(earthling.mercuryAge());
    $('#show-venus-age').html(earthling.venusAge());
    $('#show-mars-age').html(earthling.marsAge());
    $('#show-jupiter-age').html(earthling.jupiterAge());
    $('#display-results').show();
  });
});