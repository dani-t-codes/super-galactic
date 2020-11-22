import EarthlingData from './../src/js/EarthlingDataCruncher.js';

describe('EarthlingData', () => {
  
  test('should correctly return EarthlingData age', () => {
    const earthling = new EarthlingData(12, false);
    expect(earthling.earthAge).toEqual(12, false); 
  });

  
  test('should correctly multiply earth age by 0.24 to get MercuryAge', () => {
    const earthling1 = new EarthlingData(26);
    expect(earthling1.mercuryAge()).toEqual(6.24);
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
    const earthling = new EarthlingData(40, false);
    expect(earthling.lifeExpectancy()).toEqual("38.7 years left to live.");
  });

  test('should calculate U.S. life expectancy based on EarthAge', () => {
    const earthling2 = new EarthlingData(90, false);
    expect(earthling2.lifeExpectancy()).toEqual("11.299999999999997 years past average US life expectancy.");
  });
  test('should calculate U.S. life expectancy based on EarthAge', () => {
    const earthling2 = new EarthlingData(40, true);
    expect(earthling2.lifeExpectancy()).toEqual("30.700000000000003 years left to live.");
  });

  test('should calculate U.S. life expectancy based on EarthAge', () => {
    const earthling2 = new EarthlingData(90, true);
    expect(earthling2.lifeExpectancy()).toEqual("3.299999999999997 years past average US life expectancy.");
  });

  test('should calculate Mercury life expectancy based on MercuryAge', () => {
    const earthling = new EarthlingData(40);
    expect(earthling.mercuryLifeExpectancy()).toEqual("You're dead!" + "You are 9.6 Mercury years past your life expectancy");
  });

  test('should calculate Venus life expectancy based on VenusAge', () => {
    const earthling = new EarthlingData(40);
    expect(earthling.venusLifeExpectancy()).toEqual("You're ALSO dead!");
  });

  test('should calculate Mars life expectancy based on MarsAge', () => {
    const earthling = new EarthlingData(40);
    expect(earthling.marsLifeExpectancy()).toEqual("You might last a couple minutes, but inevitably, you'll die here too.");
  });

  test('should calculate Jupiter life expectancy based on JupiterAge', () => {
    const earthling = new EarthlingData(40);
    expect(earthling.jupiterLifeExpectancy()).toEqual("Quadruple dead. You'll be consumed by gas as soon as you enter the planet's atmosphere.");
  });

  test('should calculate Venus yrs past Venus life expectancy', () => {
    const earthling = new EarthlingData(40);
    expect(earthling.venusYrsPast()).toEqual("You are 24.8 Venus years past your life expectancy");
  });

  test('should calculate Mars yrs past Mars life expectancy', () => {
    const earthling = new EarthlingData(40);
    expect(earthling.marsYrsPast()).toEqual("You are 75.19999999999999 Venus years past your life expectancy");
  });

  test('should calculate Jupiter yrs past Jupiter life expectancy', () => {
    const earthling = new EarthlingData(40);
    expect(earthling.jupiterYrsPast()).toEqual("You are 474.4 Jupiter years past your life expectancy");
  });
});

//bad test
// test('should correctly determine whether EarthlingData age is a number', () => {
//   const notEarthling = new EarthlingData("nerd");
//   expect(notEarthling.earthAge).toEqual(false);
// });