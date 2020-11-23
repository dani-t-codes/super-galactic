/* eslint-disable no-unused-vars */
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import EarthlingData from './js/EarthlingDataCruncher.js';

//UI Logic

function showData() {
  $('#display-results').show();
  $('input#earth-age').val("");
  $('input#smoker-status').val("");
}

$(document).ready(function() {
  showData();
  $('#galactic-age-calculator').submit(function(event) {
    event.preventDefault();
    const earthAge = $('#earth-age').val();
    const smokerStatus = $('#smoker-status').val();
    const earthling = new EarthlingData(`${earthAge}`, `${smokerStatus}`);
    //age calculations
    $('#show-earth-age').html(`${earthAge}`);
    $('#show-mercury-age').html(earthling.mercuryAge());
    $('#show-venus-age').html(earthling.venusAge());
    $('#show-mars-age').html(earthling.marsAge());
    $('#show-jupiter-age').html(earthling.jupiterAge());
    //life expectancy calculations
    $('#earth-life-expectancy').html(earthling.lifeExpectancy());
    $('#mercury-life-expectancy').html(earthling.mercuryLifeExpectancy());
    $('#venus-life-expectancy').html(earthling.venusLifeExpectancy());
    $('#mars-life-expectancy').html(earthling.marsLifeExpectancy());
    $('#jupiter-life-expectancy').html(earthling.jupiterLifeExpectancy());
  });
});