import EarthlingData from './../src/js/EarthlingDataCruncher.js';

describe('EarthlingData', () => {
  
  test('should correctly return EarthlingData age', () => {
    const earthling = new EarthlingData(12);
    expect(earthling.earthAge).toEqual(12); 
  });

  
  test('should correctly multiply earth age by 0.24 to get MercuryAge', () => {
    const earthling = new EarthlingData(26);
    expect(earthling.earthAge).toEqual(26);
    expect(earthling.mercuryAge()).toEqual(8);
  });
});
  
  // EarthlingData.prototype.mercuryAge = function () {
    //   this.earthAge *= 0.24;
    //   console.log(this.mercuryAge);
    // };


    //bad test
    // test('should correctly determine whether EarthlingData age is a number', () => {
    //   const notEarthling = new EarthlingData("nerd");
    //   expect(notEarthling.earthAge).toEqual(false);
    // });