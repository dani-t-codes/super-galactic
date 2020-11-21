import EarthlingData from './../src/earthlingdatacruncher.js';

describe('EarthlingData', () => {
  
  test('should correctly return EarthlingData age', () => {
    const earthling = new EarthlingData(12);
    expect(earthling.earthAge).toEqual(12); 
  });

  test('should correctly determine whether EarthlingData age is a number', () => {
    const notEarthling = new EarthlingData("nerd");

  });
//   test('should correctly multiply earth age by 0.24 to get MercuryAge', () => {
//     const mercuryAge = new EarthlingData(26);
//     expect(earthAge.mercuryAge()).toEqual(8.10);
//   });
});

// EarthlingData.prototype.mercuryAge = function () {
//   this.earthAge *= 0.24;
//   console.log(this.mercuryAge);
// };