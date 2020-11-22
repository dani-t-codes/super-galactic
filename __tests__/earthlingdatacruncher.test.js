import EarthlingData from './../src/js/EarthlingDataCruncher.js';

describe('EarthlingData', () => {
  
  test('should correctly return EarthlingData age', () => {
    const earthling = new EarthlingData(12);
    expect(earthling.earthAge).toEqual(12); 
  });

  
  test('should correctly multiply earth age by 0.24 to get MercuryAge', () => {
    const earthling1 = new EarthlingData(26);
    expect(earthling1.earthAge).toEqual(26);
    expect(earthling1.mercuryAge()).toEqual(6.24);
  });
  
  test('should correctly multiply earth age by 0.62 to get VenusAge', () => {
    const earthling2 = new EarthlingData(40);
    expect(earthling2.earthAge).toEqual(40);
    expect(earthling2.venusAge()).toEqual(6.24);
  });
  
});
    //bad test
    // test('should correctly determine whether EarthlingData age is a number', () => {
    //   const notEarthling = new EarthlingData("nerd");
    //   expect(notEarthling.earthAge).toEqual(false);
    // });