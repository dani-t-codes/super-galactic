import EarthlingData from '../src/js/earthlingDataCruncher.js';

describe('EarthlingData', () => {

  test('should correctly return EarthlingData age', () => {
    const earthling = new EarthlingData(12);
    expect(earthling.earthAge).toEqual(12); 
  });

  test('should correctly multiply earth age by 0.24 to get MercuryAge', () => {
    const earthling = new EarthlingData(26);
    expect(earthling.mercuryAge()).toEqual(6.24);
  });
  
  test('should correctly multiply earth age by 0.62 to get VenusAge', () => {
    const earthling2 = new EarthlingData(40);
    expect(earthling2.venusAge()).toEqual(24.8);
  });
  
  test('should correctly multiply earth age by 1.88 to get MarsAge', () => {
    const earthling3 = new EarthlingData(40);
    expect(earthling3.marsAge()).toEqual(75.19999999999999);
  });

  test('should correctly multiply earth age by 11.86 to get JupiterAge', () => {
    const earthling4 = new EarthlingData(40);
    expect(earthling4.jupiterAge()).toEqual(474.4);
  });
  
  test('should calculate U.S. life expectancy based on EarthAge', () => {
    const earthling4 = new EarthlingData(78, false);
    expect(earthling4.lifeExpectancy()).toEqual("You have reached the average U.S. life expectancy.");
  });
  test('should calculate U.S. life expectancy based on EarthAge', () => {
    const earthling4 = new EarthlingData(79, false);
    expect(earthling4.lifeExpectancy()).toEqual("You have reached the average U.S. life expectancy.");
  });
  test('should calculate U.S. life expectancy based on EarthAge', () => {
    const earthling4 = new EarthlingData(90, false);
    expect(earthling4.lifeExpectancy()).toEqual("11.299999999999997 years past average U.S. life expectancy.");
  });
  test('should calculate U.S. life expectancy based on EarthAge', () => {
    const earthling = new EarthlingData(40, false);
    expect(earthling.lifeExpectancy()).toEqual("38.7 years left to live.");
  });
  test('should calculate U.S. life expectancy based on EarthAge', () => {
    const earthling4 = new EarthlingData(NaN, "test");
    expect(earthling4.lifeExpectancy()).toEqual("Uh-oh, something went wrong.");
  });

  test('should correctly reduce earthLifeExpectancy based on smokerStatus', () => {
    const earthling = new EarthlingData(40, 'true');
    earthling.smokerLE();
    expect(earthling.lifeExpectancy()).toEqual("30.700000000000003 years left to live.");
  });
  test('should correctly reduce earthLifeExpectancy based on smokerStatus', () => {
    const earthling = new EarthlingData(40, 'false');
    earthling.smokerLE();
    expect(earthling.lifeExpectancy()).toEqual("38.7 years left to live.");
  });

  test('should calculate Mercury life expectancy based on MercuryAge', () => {
    const earthling = new EarthlingData(40);
    expect(earthling.mercuryLifeExpectancy()).toEqual("<p>... not looking so great. In two minutes or less upon arrival to Mercury, the extreme heat or extreme cold - depending on which side of the planet you land on in relation to the sun - would be far too much for the human body to handle.</p> <p>You are 9.6 Mercury years past your Mercury life expectancy.</p>");
  });

  test('should calculate Venus life expectancy based on VenusAge', () => {
    const earthling = new EarthlingData(40);
    expect(earthling.venusLifeExpectancy()).toEqual("<p>... yikes, you're having a rough day of interplanetary travel. Venus's extreme temperatures of at least 470 degrees Celsius would consume a human body in less than a second.</p> <p>You are 24.8 Venus years past your Venus life expectancy.</p>");
  });

  test('should calculate Mars life expectancy based on MarsAge', () => {
    const earthling = new EarthlingData(40);
    expect(earthling.marsLifeExpectancy()).toEqual("<p>... I hate to be the one to break it to you, but I have more bad news. While Mars has long been considered for potential human residence, without a spacesuit, a human would still die within two minutes because there is no air on Mars that we can breathe, and the silicone dust on the planet would quickly suffocate us. Double yikes! You might last a couple minutes, but inevitably, you'll die here too.</p> <p>You are 75.19999999999999 Mars years past your Mars life expectancy.</p>");
  });

  test('should calculate Jupiter life expectancy based on JupiterAge', () => {
    const earthling = new EarthlingData(40);
    expect(earthling.jupiterLifeExpectancy()).toEqual("<p>...Zoinks! You are all out of luck today, my friend. Jupiter doesn't even have a surface for you to land on - just a bunch of swirling hydrogen & helium gases. If you go to Jupiter, you will be consumed by gas as soon as you enter the planet's atmosphere.</p> <p>You are 474.4 Jupiter years past your Jupiter life expectancy.</p>");
  });
});