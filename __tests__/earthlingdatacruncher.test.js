import EarthlingData from './../src/js/EarthlingDataCruncher.js';

describe('EarthlingData', () => {
  
  test('should correctly return EarthlingData age', () => {
    const earthling = new EarthlingData(12);
    expect(earthling.earthAge).toEqual(12); 
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
    const earthling = new EarthlingData(40);
    expect(earthling.lifeExpectancy()).toEqual(38.7);
  });

  test('should calculate Mercury life expectancy based on MercuryAge', () => {
    const earthling = new EarthlingData(40);
    expect(earthling.mercuryLifeExpectancy()).toEqual(30);
  });
});

//bad test
// test('should correctly determine whether EarthlingData age is a number', () => {
//   const notEarthling = new EarthlingData("nerd");
//   expect(notEarthling.earthAge).toEqual(false);
// });