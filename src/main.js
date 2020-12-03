import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import EarthlingData from './js/EarthlingDataCruncher.js';

//UI Logic
$(document).ready(function() {
  $('#galacticAgeCalculator').submit(function(event) {
    event.preventDefault();
    const earthAge = $('#earthAge').val();
    const smokerStatus = $('#smokerStatus').val();
    const earthling = new EarthlingData(earthAge, smokerStatus);
    //clear forms, show hidden section
    $('#displayResults').show();
    $('input#earthAge').val("");
    $('input#smokerStatus').val("");
    //age calculations
    $('#showEarthAge').html(`${earthAge}`);
    $('#showMercuryAge').html(earthling.mercuryAge());
    $('#showVenusAge').html(earthling.venusAge());
    $('#showMarsAge').html(earthling.marsAge());
    $('#showJupiterAge').html(earthling.jupiterAge());
    //life expectancy calculations
    $('#earthLifeExpectancy').html(earthling.lifeExpectancy());
    $('#mercuryLifeExpectancy').html(earthling.mercuryLifeExpectancy());
    $('#venusLifeExpectancy').html(earthling.venusLifeExpectancy());
    $('#marsLifeExpectancy').html(earthling.marsLifeExpectancy());
    $('#jupiterLifeExpectancy').html(earthling.jupiterLifeExpectancy());
  });
});